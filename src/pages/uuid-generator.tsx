import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButton } from '@/components/ui/share-button';
import { Copy, Hash, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

export function UuidGenerator() {
  const [currentUuid, setCurrentUuid] = useState('');
  const [uuidHistory, setUuidHistory] = useState<string[]>([]);
  const [batchCount, setBatchCount] = useState('5');
  const [batchUuids, setBatchUuids] = useState<string[]>([]);
  const { toast } = useToast();

  const generateSingleUuid = () => {
    const newUuid = uuidv4();
    setCurrentUuid(newUuid);
    setUuidHistory(prev => [newUuid, ...prev.slice(0, 9)]); // Keep last 10
  };

  const generateBatchUuids = () => {
    const count = Math.min(parseInt(batchCount) || 5, 100); // Max 100
    const newUuids = Array.from({ length: count }, () => uuidv4());
    setBatchUuids(newUuids);
  };

  const copyUuid = (uuid: string) => {
    navigator.clipboard.writeText(uuid);
    toast({
      title: 'Copied!',
      description: 'UUID copied to clipboard.',
    });
  };

  const copyAllBatch = () => {
    const allUuids = batchUuids.join('\n');
    navigator.clipboard.writeText(allUuids);
    toast({
      title: 'Copied!',
      description: `${batchUuids.length} UUIDs copied to clipboard.`,
    });
  };

  const downloadBatch = () => {
    const content = batchUuids.join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uuids.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: 'Downloaded!',
      description: 'UUIDs saved to file.',
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
            <Hash className="h-6 w-6 text-violet-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">UUID Generator</h1>
            <p className="text-muted-foreground">Generate UUID v4 identifiers</p>
          </div>
        </div>
        <ShareButton toolName="UUID Generator" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">Single UUID Generator</CardTitle>
            <CardDescription>Generate one UUID at a time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button onClick={generateSingleUuid} className="w-full" size="lg">
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate UUID
              </Button>
            </motion.div>
            
            {currentUuid && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-4 rounded-lg bg-accent/10 border border-accent/20"
              >
                <code className="text-sm font-mono break-all">{currentUuid}</code>
                <Button variant="outline" size="sm" onClick={() => copyUuid(currentUuid)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {uuidHistory.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Recent UUIDs:</h4>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {uuidHistory.map((uuid, index) => (
                    <motion.div
                      key={uuid}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-2 rounded bg-muted/50 text-xs"
                    >
                      <code className="font-mono break-all">{uuid}</code>
                      <Button variant="ghost" size="sm" onClick={() => copyUuid(uuid)}>
                        <Copy className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">Batch UUID Generator</CardTitle>
            <CardDescription>Generate multiple UUIDs at once</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="5"
                value={batchCount}
                onChange={(e) => setBatchCount(e.target.value)}
                min="1"
                max="100"
                className="w-24"
              />
              <Button onClick={generateBatchUuids} className="flex-1">
                Generate Batch
              </Button>
            </div>

            {batchUuids.length > 0 && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyAllBatch} className="flex-1">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy All
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadBatch} className="flex-1">
                    Download
                  </Button>
                </div>
                
                <div className="max-h-64 overflow-y-auto space-y-1 p-3 rounded-lg bg-muted/50">
                  {batchUuids.map((uuid, index) => (
                    <motion.div
                      key={uuid}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-2 rounded bg-background/50 text-xs hover:bg-background/80 transition-colors"
                    >
                      <code className="font-mono">{uuid}</code>
                      <Button variant="ghost" size="sm" onClick={() => copyUuid(uuid)}>
                        <Copy className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
        <CardHeader>
          <CardTitle className="text-lg">About UUIDs</CardTitle>
          <CardDescription>Understanding Universally Unique Identifiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">UUID v4 Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 128-bit random identifier</li>
                <li>• Extremely low collision probability</li>
                <li>• No central authority required</li>
                <li>• Cryptographically secure randomness</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Common Use Cases:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Database primary keys</li>
                <li>• API request identifiers</li>
                <li>• Session tokens</li>
                <li>• File naming</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}