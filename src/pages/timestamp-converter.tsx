import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButton } from '@/components/ui/share-button';
import { Copy, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

export function TimestampConverter() {
  const [timestamp, setTimestamp] = useState('');
  const [humanDate, setHumanDate] = useState('');
  const [convertedTimestamp, setConvertedTimestamp] = useState('');
  const [convertedHuman, setConvertedHuman] = useState('');
  const { toast } = useToast();

  const convertToHuman = () => {
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) {
        throw new Error('Invalid timestamp');
      }
      
      // Handle both seconds and milliseconds
      const date = new Date(ts.toString().length === 10 ? ts * 1000 : ts);
      setConvertedHuman(date.toLocaleString());
    } catch (err) {
      toast({
        title: 'Conversion Error',
        description: 'Please enter a valid UNIX timestamp.',
        variant: 'destructive',
      });
    }
  };

  const convertToTimestamp = () => {
    try {
      const date = new Date(humanDate);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      setConvertedTimestamp(Math.floor(date.getTime() / 1000).toString());
    } catch (err) {
      toast({
        title: 'Conversion Error',
        description: 'Please enter a valid date format.',
        variant: 'destructive',
      });
    }
  };

  const getCurrentTimestamp = () => {
    const now = Math.floor(Date.now() / 1000);
    setTimestamp(now.toString());
    setConvertedHuman(new Date().toLocaleString());
  };

  const copyValue = (value: string, type: string) => {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Copied!',
      description: `${type} copied to clipboard.`,
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
          <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
            <Calendar className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Timestamp Converter</h1>
            <p className="text-muted-foreground">Convert between UNIX timestamps and human-readable dates</p>
          </div>
        </div>
        <ShareButton toolName="Timestamp Converter" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">UNIX Timestamp to Date</CardTitle>
            <CardDescription>Enter a UNIX timestamp (seconds or milliseconds)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="1640995200"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                className="font-mono"
              />
              <Button onClick={getCurrentTimestamp} variant="outline">
                Now
              </Button>
            </div>
            <Button onClick={convertToHuman} className="w-full">
              Convert to Date
            </Button>
            {convertedHuman && (
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10 border border-accent/20">
                <code className="text-sm">{convertedHuman}</code>
                <Button variant="outline" size="sm" onClick={() => copyValue(convertedHuman, 'Date')}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">Date to UNIX Timestamp</CardTitle>
            <CardDescription>Enter a date in any standard format</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="2022-01-01 00:00:00"
              value={humanDate}
              onChange={(e) => setHumanDate(e.target.value)}
            />
            <Button onClick={convertToTimestamp} className="w-full">
              Convert to Timestamp
            </Button>
            {convertedTimestamp && (
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10 border border-accent/20">
                <code className="text-sm font-mono">{convertedTimestamp}</code>
                <Button variant="outline" size="sm" onClick={() => copyValue(convertedTimestamp, 'Timestamp')}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
        <CardHeader>
          <CardTitle className="text-lg">Common Timestamps</CardTitle>
          <CardDescription>Quick reference for common timestamp values</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Current Time', timestamp: Math.floor(Date.now() / 1000) },
              { label: 'Start of Today', timestamp: Math.floor(new Date().setHours(0, 0, 0, 0) / 1000) },
              { label: 'Start of Year', timestamp: Math.floor(new Date(new Date().getFullYear(), 0, 1).getTime() / 1000) },
              { label: 'Unix Epoch', timestamp: 0 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{item.label}</p>
                  <code className="text-sm text-muted-foreground">{item.timestamp}</code>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setTimestamp(item.timestamp.toString());
                    setConvertedHuman(new Date(item.timestamp * 1000).toLocaleString());
                  }}
                >
                  Use
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}