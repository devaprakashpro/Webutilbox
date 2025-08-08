import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButton } from '@/components/ui/share-button';
import { Copy, FileJson } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setOutput('');
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    toast({
      title: 'Copied!',
      description: 'Formatted JSON copied to clipboard.',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <FileJson className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">JSON Formatter</h1>
            <p className="text-muted-foreground">Format and validate JSON data</p>
          </div>
        </div>
        <ShareButton toolName="JSON Formatter" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">Input JSON</CardTitle>
            <CardDescription>Paste your JSON data here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder='{"name": "John", "age": 30}'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[300px] font-mono"
            />
            <Button onClick={formatJson} className="w-full">
              Format JSON
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              Formatted Output
              {output && (
                <Button variant="outline" size="sm" onClick={copyOutput}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              )}
            </CardTitle>
            <CardDescription>Formatted and validated JSON</CardDescription>
          </CardHeader>
          <CardContent>
            {error ? (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-destructive font-medium">JSON Error:</p>
                <p className="text-sm text-destructive/80 mt-1">{error}</p>
              </div>
            ) : (
              <Textarea
                value={output}
                readOnly
                className="min-h-[300px] font-mono"
                placeholder="Formatted JSON will appear here..."
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}