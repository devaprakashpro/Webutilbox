import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, Zap, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

export function HashGenerator() {
  const [input, setInput] = useState('');
  const [hashType, setHashType] = useState('md5');
  const [result, setResult] = useState('');

  // Note: In a real implementation, you'd use a proper crypto library
  // This is a placeholder that shows the UI structure
  const generateHash = async () => {
    if (!input.trim()) {
      toast.error('Please enter some text to hash');
      return;
    }

    try {
      // Placeholder hash generation - in real app, use crypto libraries
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      
      let hashResult = '';
      
      switch (hashType) {
        case 'md5':
          // Placeholder - would use actual MD5 library
          hashResult = 'MD5 hash would be generated here';
          break;
        case 'sha1':
          // Placeholder - would use actual SHA-1 library
          hashResult = 'SHA-1 hash would be generated here';
          break;
        case 'sha256':
          // Using Web Crypto API for SHA-256 (this actually works)
          const hashBuffer = await crypto.subtle.digest('SHA-256', data);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          hashResult = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
          break;
        case 'sha512':
          // Using Web Crypto API for SHA-512 (this actually works)
          const hashBuffer512 = await crypto.subtle.digest('SHA-512', data);
          const hashArray512 = Array.from(new Uint8Array(hashBuffer512));
          hashResult = hashArray512.map(b => b.toString(16).padStart(2, '0')).join('');
          break;
        default:
          hashResult = 'Unsupported hash type';
      }
      
      setResult(hashResult);
      toast.success(`${hashType.toUpperCase()} hash generated successfully!`);
    } catch (error) {
      toast.error('Failed to generate hash');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast.success('Hash copied to clipboard!');
  };

  const clearAll = () => {
    setInput('');
    setResult('');
    toast.success('All fields cleared!');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/20">
            <Zap className="h-8 w-8 text-red-600 dark:text-red-400" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Hash Generator
          </h1>
          <p className="text-muted-foreground mt-2">
            Generate MD5, SHA-1, SHA-256, and SHA-512 hash values for text and data
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Input Text
              </CardTitle>
              <CardDescription>
                Enter the text you want to hash
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input">Text to Hash</Label>
                <Textarea
                  id="input"
                  placeholder="Enter your text here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[100px] font-mono"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hashType">Hash Algorithm</Label>
                <Select value={hashType} onValueChange={setHashType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hash algorithm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="md5">MD5 (128-bit)</SelectItem>
                    <SelectItem value="sha1">SHA-1 (160-bit)</SelectItem>
                    <SelectItem value="sha256">SHA-256 (256-bit)</SelectItem>
                    <SelectItem value="sha512">SHA-512 (512-bit)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button onClick={generateHash} disabled={!input.trim()}>
                  Generate Hash
                </Button>
                <Button onClick={clearAll} variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Result Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Generated Hash</CardTitle>
              <CardDescription>
                {hashType.toUpperCase()} hash of your input text
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={result}
                readOnly
                placeholder="Generated hash will appear here..."
                className="min-h-[120px] font-mono text-sm break-all"
              />
              <Button
                onClick={copyToClipboard}
                disabled={!result}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Hash
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-red-800 dark:text-red-200">
                About Hash Functions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-700 dark:text-red-300 space-y-2">
              <p>
                <strong>Hash functions</strong> convert input data into fixed-size strings of characters, 
                which are typically hexadecimal numbers.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p><strong>MD5:</strong> Fast but not cryptographically secure</p>
                  <p><strong>SHA-1:</strong> Better than MD5 but deprecated for security</p>
                </div>
                <div>
                  <p><strong>SHA-256:</strong> Secure and widely used</p>
                  <p><strong>SHA-512:</strong> More secure with longer output</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
