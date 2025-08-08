import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Copy, Link as LinkIcon, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

export function UrlEncoder() {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const handleEncode = () => {
    try {
      const result = encodeURIComponent(input);
      setEncoded(result);
      toast.success('URL encoded successfully!');
    } catch (error) {
      toast.error('Failed to encode URL');
    }
  };

  const handleDecode = () => {
    try {
      const result = decodeURIComponent(input);
      setDecoded(result);
      toast.success('URL decoded successfully!');
    } catch (error) {
      toast.error('Failed to decode URL - invalid format');
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  const clearAll = () => {
    setInput('');
    setEncoded('');
    setDecoded('');
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
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20">
            <LinkIcon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            URL Encoder/Decoder
          </h1>
          <p className="text-muted-foreground mt-2">
            Encode and decode URLs with support for query parameters and special characters
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
                <LinkIcon className="h-5 w-5" />
                Input URL
              </CardTitle>
              <CardDescription>
                Enter the URL you want to encode or decode
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input">URL Text</Label>
                <Textarea
                  id="input"
                  placeholder="Enter your URL here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[100px] font-mono"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button onClick={handleEncode} disabled={!input.trim()}>
                  Encode URL
                </Button>
                <Button onClick={handleDecode} disabled={!input.trim()} variant="outline">
                  Decode URL
                </Button>
                <Button onClick={clearAll} variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Encoded Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Encoded URL</CardTitle>
                <CardDescription>
                  URL-safe encoded string
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={encoded}
                  readOnly
                  placeholder="Encoded URL will appear here..."
                  className="min-h-[120px] font-mono text-sm"
                />
                <Button
                  onClick={() => copyToClipboard(encoded, 'Encoded URL')}
                  disabled={!encoded}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Encoded
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Decoded Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Decoded URL</CardTitle>
                <CardDescription>
                  Human-readable decoded string
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={decoded}
                  readOnly
                  placeholder="Decoded URL will appear here..."
                  className="min-h-[120px] font-mono text-sm"
                />
                <Button
                  onClick={() => copyToClipboard(decoded, 'Decoded URL')}
                  disabled={!decoded}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Decoded
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
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="text-lg text-amber-800 dark:text-amber-200">
                About URL Encoding
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-700 dark:text-amber-300 space-y-2">
              <p>
                <strong>URL Encoding</strong> (also called percent encoding) converts characters into a format 
                that can be transmitted over the Internet.
              </p>
              <p>
                <strong>Common use cases:</strong> Query parameters, form data, API requests, and any URL 
                containing special characters or spaces.
              </p>
              <p>
                <strong>Example:</strong> "Hello World!" becomes "Hello%20World%21"
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
