import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Upload, Image as ImageIcon, Download, RotateCcw, X, Archive } from 'lucide-react';
import { toast } from 'sonner';
import JSZip from 'jszip';
import { CodeLoader } from '@/components/ui/loading-spinner';
import { PageSEO, seoData } from '@/components/seo/page-seo';
import { SchemaMarkup, toolSchemaData } from '@/components/seo/schema-markup';

interface ImageFile {
  file: File;
  id: string;
  previewUrl: string;
  convertedUrl?: string;
  status: 'pending' | 'converting' | 'completed' | 'error';
}

export function ImageConverter() {
  const [selectedFiles, setSelectedFiles] = useState<ImageFile[]>([]);
  const [outputFormat, setOutputFormat] = useState('png');
  const [quality, setQuality] = useState([90]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    addFiles(files);
  };

  const addFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    if (imageFiles.length === 0) {
      toast.error('Please select valid image files');
      return;
    }

    const newImageFiles: ImageFile[] = imageFiles.map(file => ({
      file,
      id: generateId(),
      previewUrl: URL.createObjectURL(file),
      status: 'pending' as const
    }));

    setSelectedFiles(prev => [...prev, ...newImageFiles]);
    toast.success(`${imageFiles.length} image(s) loaded successfully!`);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  }, []);

  const removeFile = (id: string) => {
    setSelectedFiles(prev => {
      const updated = prev.filter(img => img.id !== id);
      // Clean up URLs
      const removed = prev.find(img => img.id === id);
      if (removed) {
        URL.revokeObjectURL(removed.previewUrl);
        if (removed.convertedUrl) {
          URL.revokeObjectURL(removed.convertedUrl);
        }
      }
      return updated;
    });
  };

  const convertSingleImage = async (imageFile: ImageFile): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        const mimeType = `image/${outputFormat}`;
        const qualityValue = outputFormat === 'jpeg' ? quality[0] / 100 : undefined;

        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            resolve(url);
          } else {
            reject(new Error('Failed to convert image'));
          }
        }, mimeType, qualityValue);
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = imageFile.previewUrl;
    });
  };

  const convertAllImages = async () => {
    if (selectedFiles.length === 0) {
      toast.error('Please select images first');
      return;
    }

    setIsConverting(true);
    setProgress(0);

    try {
      const updatedFiles = [...selectedFiles];

      for (let i = 0; i < updatedFiles.length; i++) {
        const imageFile = updatedFiles[i];

        // Update status to converting
        updatedFiles[i] = { ...imageFile, status: 'converting' };
        setSelectedFiles([...updatedFiles]);

        try {
          const convertedUrl = await convertSingleImage(imageFile);
          updatedFiles[i] = { ...imageFile, convertedUrl, status: 'completed' };
        } catch (error) {
          updatedFiles[i] = { ...imageFile, status: 'error' };
        }

        setSelectedFiles([...updatedFiles]);
        setProgress(((i + 1) / updatedFiles.length) * 100);
      }

      const successCount = updatedFiles.filter(f => f.status === 'completed').length;
      toast.success(`${successCount} image(s) converted successfully!`);
    } catch (error) {
      toast.error('Failed to convert images');
    } finally {
      setIsConverting(false);
    }
  };

  const downloadSingleImage = (imageFile: ImageFile) => {
    if (imageFile.convertedUrl) {
      const link = document.createElement('a');
      link.href = imageFile.convertedUrl;
      link.download = `${imageFile.file.name.split('.')[0]}.${outputFormat}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('Image downloaded successfully!');
    }
  };

  const downloadAsZip = async () => {
    const completedFiles = selectedFiles.filter(f => f.status === 'completed' && f.convertedUrl);

    if (completedFiles.length === 0) {
      toast.error('No converted images to download');
      return;
    }

    try {
      const zip = new JSZip();

      for (const imageFile of completedFiles) {
        if (imageFile.convertedUrl) {
          const response = await fetch(imageFile.convertedUrl);
          const blob = await response.blob();
          const fileName = `${imageFile.file.name.split('.')[0]}.${outputFormat}`;
          zip.file(fileName, blob);
        }
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `converted-images.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
      toast.success(`${completedFiles.length} images downloaded as ZIP!`);
    } catch (error) {
      toast.error('Failed to create ZIP file');
    }
  };

  const clearAll = () => {
    selectedFiles.forEach(img => {
      URL.revokeObjectURL(img.previewUrl);
      if (img.convertedUrl) {
        URL.revokeObjectURL(img.convertedUrl);
      }
    });
    setSelectedFiles([]);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success('All cleared!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      {/* SEO Meta Tags */}
      <PageSEO {...seoData.imageConverter} />

      {/* Schema Markup */}
      <SchemaMarkup type="softwareApplication" data={toolSchemaData['image-converter']} />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-sky-500/20">
            <ImageIcon className="h-8 w-8 text-sky-600 dark:text-sky-400" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Image Format Converter - Convert PNG, JPG, WebP Online
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Convert images between PNG, JPG, WebP formats online with quality control, batch processing, and ZIP download.
            Professional image conversion tool with drag & drop support.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6">
        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Images
              </CardTitle>
              <CardDescription>
                Select multiple images or drag & drop them here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Drag & Drop Zone */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver
                    ? 'border-primary bg-primary/5'
                    : 'border-muted-foreground/25 hover:border-primary/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Drop images here</p>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to select files
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  id="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Select Images
                </Button>
              </div>

              {/* Settings */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="format">Output Format</Label>
                  <Select value={outputFormat} onValueChange={setOutputFormat}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select output format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="png">PNG</SelectItem>
                      <SelectItem value="jpeg">JPEG</SelectItem>
                      <SelectItem value="webp">WebP</SelectItem>
                      <SelectItem value="bmp">BMP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {outputFormat === 'jpeg' && (
                  <div className="space-y-2">
                    <Label htmlFor="quality">Quality: {quality[0]}%</Label>
                    <Slider
                      value={quality}
                      onValueChange={setQuality}
                      max={100}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={convertAllImages}
                  disabled={selectedFiles.length === 0 || isConverting}
                  className="flex items-center gap-2"
                >
                  {isConverting && <CodeLoader size={16} />}
                  {isConverting ? 'Converting...' : 'Convert All Images'}
                </Button>
                <Button
                  onClick={downloadAsZip}
                  variant="outline"
                  disabled={selectedFiles.filter(f => f.status === 'completed').length === 0}
                >
                  <Archive className="h-4 w-4 mr-2" />
                  Download ZIP
                </Button>
                <Button onClick={clearAll} variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>

              {/* Progress Bar */}
              {isConverting && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Converting images...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Images Grid */}
        {selectedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Images ({selectedFiles.length})
                </CardTitle>
                <CardDescription>
                  Preview and manage your images
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedFiles.map((imageFile) => (
                    <div key={imageFile.id} className="relative group">
                      <Card className="overflow-hidden">
                        <div className="aspect-square relative">
                          <img
                            src={imageFile.previewUrl}
                            alt={imageFile.file.name}
                            className="w-full h-full object-cover"
                          />

                          {/* Status Overlay */}
                          {imageFile.status === 'converting' && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <div className="flex items-center gap-2 text-white text-sm">
                                <CodeLoader size={16} className="text-white" />
                                Converting...
                              </div>
                            </div>
                          )}

                          {imageFile.status === 'completed' && (
                            <div className="absolute top-2 right-2">
                              <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                ✓ Done
                              </div>
                            </div>
                          )}

                          {imageFile.status === 'error' && (
                            <div className="absolute top-2 right-2">
                              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                                ✗ Error
                              </div>
                            </div>
                          )}

                          {/* Remove Button */}
                          <Button
                            variant="destructive"
                            size="sm"
                            className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeFile(imageFile.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>

                        <CardContent className="p-3">
                          <div className="space-y-2">
                            <p className="text-sm font-medium truncate">
                              {imageFile.file.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {(imageFile.file.size / 1024 / 1024).toFixed(2)} MB
                            </p>

                            {imageFile.status === 'completed' && imageFile.convertedUrl && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full"
                                onClick={() => downloadSingleImage(imageFile)}
                              >
                                <Download className="h-3 w-3 mr-1" />
                                Download
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-sky-800 dark:text-sky-200">
                Supported Formats
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sky-700 dark:text-sky-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Input Formats:</h4>
                  <p className="text-sm">JPEG, PNG, WebP, BMP, GIF, SVG, and more</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Output Formats:</h4>
                  <p className="text-sm">PNG, JPEG, WebP, BMP</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                <strong>Note:</strong> All conversions happen locally in your browser. 
                No images are uploaded to any server.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
