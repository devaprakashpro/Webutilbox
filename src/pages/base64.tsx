import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShareButton } from '@/components/ui/share-button';
import { Copy, Binary } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Base64Tool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const { toast } = useToast();

  const encode = () => {
    try {
      const encoded = btoa(input);
      setOutput(encoded);
    } catch (err) {
      toast({
        title: 'Encoding Error',
        description: 'Failed to encode the input text.',
        variant: 'destructive',
      });
    }
  };

  const decode = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
    } catch (err) {
      toast({
        title: 'Decoding Error',
        description: 'Invalid Base64 string provided.',
        variant: 'destructive',
      });
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: 'Copied!',
      description: 'Output copied to clipboard.',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
            <Binary className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Base64 Encoder/Decoder</h1>
            <p className="text-muted-foreground">Encode and decode Base64 strings</p>
          </div>
        </div>
        <ShareButton toolName="Base64 Encoder/Decoder" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">Input</CardTitle>
            <CardDescription>Enter text to encode or Base64 to decode</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your text or Base64 string here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[300px]"
            />
            <div className="flex gap-2">
              <Button onClick={encode} className="flex-1">
                Encode to Base64
              </Button>
              <Button onClick={decode} variant="outline" className="flex-1">
                Decode from Base64
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              Output
              {output && (
                <Button variant="outline" size="sm" onClick={copyOutput}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              )}
            </CardTitle>
            <CardDescription>Encoded or decoded result</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={output}
              readOnly
              className="min-h-[300px]"
              placeholder="Output will appear here..."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}