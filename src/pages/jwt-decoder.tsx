import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButton } from '@/components/ui/share-button';
import { Copy, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function JwtDecoder() {
  const [input, setInput] = useState('');
  const [header, setHeader] = useState('');
  const [payload, setPayload] = useState('');
  const [signature, setSignature] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  const decodeJwt = () => {
    try {
      const parts = input.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format');
      }

      const headerDecoded = JSON.stringify(JSON.parse(atob(parts[0])), null, 2);
      const payloadDecoded = JSON.stringify(JSON.parse(atob(parts[1])), null, 2);
      
      setHeader(headerDecoded);
      setPayload(payloadDecoded);
      setSignature(parts[2]);
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setHeader('');
      setPayload('');
      setSignature('');
    }
  };

  const copySection = (content: string, section: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: 'Copied!',
      description: `${section} copied to clipboard.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <Shield className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">JWT Decoder</h1>
            <p className="text-muted-foreground">Decode and inspect JSON Web Tokens</p>
          </div>
        </div>
        <ShareButton toolName="JWT Decoder" />
      </div>

      <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
        <CardHeader>
          <CardTitle className="text-lg">JWT Token</CardTitle>
          <CardDescription>Paste your JWT token here to decode</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px] font-mono"
          />
          <Button onClick={decodeJwt} className="w-full">
            Decode JWT
          </Button>
        </CardContent>
      </Card>

      {error ? (
        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardContent className="pt-6">
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-destructive font-medium">JWT Error:</p>
              <p className="text-sm text-destructive/80 mt-1">{error}</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                Header
                {header && (
                  <Button variant="outline" size="sm" onClick={() => copySection(header, 'Header')}>
                    <Copy className="h-4 w-4" />
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={header}
                readOnly
                className="min-h-[200px] font-mono text-sm"
                placeholder="Header will appear here..."
              />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                Payload
                {payload && (
                  <Button variant="outline" size="sm" onClick={() => copySection(payload, 'Payload')}>
                    <Copy className="h-4 w-4" />
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={payload}
                readOnly
                className="min-h-[200px] font-mono text-sm"
                placeholder="Payload will appear here..."
              />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                Signature
                {signature && (
                  <Button variant="outline" size="sm" onClick={() => copySection(signature, 'Signature')}>
                    <Copy className="h-4 w-4" />
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={signature}
                readOnly
                className="min-h-[200px] font-mono text-sm break-all"
                placeholder="Signature will appear here..."
              />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}