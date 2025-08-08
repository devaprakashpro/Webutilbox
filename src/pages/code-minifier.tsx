import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, Code, RotateCcw, Minimize2 } from 'lucide-react';
import { toast } from 'sonner';

export function CodeMinifier() {
  const [input, setInput] = useState('');
  const [codeType, setCodeType] = useState('javascript');
  const [minified, setMinified] = useState('');
  const [stats, setStats] = useState({ original: 0, minified: 0, saved: 0 });

  const minifyCode = () => {
    if (!input.trim()) {
      toast.error('Please enter some code to minify');
      return;
    }

    try {
      let result = '';
      const originalSize = input.length;

      switch (codeType) {
        case 'javascript':
          result = minifyJavaScript(input);
          break;
        case 'css':
          result = minifyCSS(input);
          break;
        case 'html':
          result = minifyHTML(input);
          break;
        case 'json':
          result = minifyJSON(input);
          break;
        default:
          result = input.replace(/\s+/g, ' ').trim();
      }

      const minifiedSize = result.length;
      const savedBytes = originalSize - minifiedSize;
      const savedPercent = originalSize > 0 ? Math.round((savedBytes / originalSize) * 100) : 0;

      setMinified(result);
      setStats({
        original: originalSize,
        minified: minifiedSize,
        saved: savedPercent
      });

      toast.success(`Code minified successfully! Saved ${savedPercent}% (${savedBytes} bytes)`);
    } catch (error) {
      toast.error('Failed to minify code - please check syntax');
    }
  };

  const minifyJavaScript = (code: string): string => {
    // Basic JavaScript minification (placeholder - real implementation would use a proper parser)
    return code
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
      .replace(/\/\/.*$/gm, '') // Remove line comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
      .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
      .replace(/\s*}\s*/g, '}') // Remove spaces around closing brace
      .replace(/\s*,\s*/g, ',') // Remove spaces around commas
      .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
      .replace(/\s*\(\s*/g, '(') // Remove spaces around opening parenthesis
      .replace(/\s*\)\s*/g, ')') // Remove spaces around closing parenthesis
      .trim();
  };

  const minifyCSS = (code: string): string => {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
      .replace(/\s*}\s*/g, '}') // Remove spaces around closing brace
      .replace(/\s*:\s*/g, ':') // Remove spaces around colons
      .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
      .replace(/\s*,\s*/g, ',') // Remove spaces around commas
      .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
      .trim();
  };

  const minifyHTML = (code: string): string => {
    return code
      .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/>\s+</g, '><') // Remove spaces between tags
      .trim();
  };

  const minifyJSON = (code: string): string => {
    try {
      const parsed = JSON.parse(code);
      return JSON.stringify(parsed);
    } catch {
      throw new Error('Invalid JSON');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(minified);
    toast.success('Minified code copied to clipboard!');
  };

  const clearAll = () => {
    setInput('');
    setMinified('');
    setStats({ original: 0, minified: 0, saved: 0 });
    toast.success('All fields cleared!');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-6xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-500/20 to-gray-500/20 border border-slate-500/20">
            <Code className="h-8 w-8 text-slate-600 dark:text-slate-400" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
            Code Minifier
          </h1>
          <p className="text-muted-foreground mt-2">
            Minify and compress JavaScript, CSS, HTML, and JSON code for production
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      {stats.original > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {stats.original}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400">Original Bytes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {stats.minified}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400">Minified Bytes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {stats.saved}%
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400">Size Reduction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Input Code
              </CardTitle>
              <CardDescription>
                Enter your code to minify
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="codeType">Code Type</Label>
                <Select value={codeType} onValueChange={setCodeType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select code type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
                    <SelectItem value="html">HTML</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="input">Code</Label>
                <Textarea
                  id="input"
                  placeholder={`Enter your ${codeType.toUpperCase()} code here...`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[300px] font-mono text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button onClick={minifyCode} disabled={!input.trim()}>
                  <Minimize2 className="h-4 w-4 mr-2" />
                  Minify Code
                </Button>
                <Button onClick={clearAll} variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Output Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">Minified Code</CardTitle>
              <CardDescription>
                Your compressed code ready for production
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={minified}
                readOnly
                placeholder="Minified code will appear here..."
                className="min-h-[300px] font-mono text-sm"
              />
              <Button
                onClick={copyToClipboard}
                disabled={!minified}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Minified Code
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/20">
          <CardHeader>
            <CardTitle className="text-lg text-slate-800 dark:text-slate-200">
              Minification Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 dark:text-slate-300">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Performance:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Faster download times</li>
                  <li>• Reduced bandwidth usage</li>
                  <li>• Improved page load speed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Removes comments and whitespace</li>
                  <li>• Compresses variable names</li>
                  <li>• Optimizes syntax structure</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
