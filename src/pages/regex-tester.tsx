import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ShareButton } from '@/components/ui/share-button';
import { Search } from 'lucide-react';

export function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [flags, setFlags] = useState({
    global: false,
    ignoreCase: false,
    multiline: false,
  });
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState('');

  const testRegex = () => {
    try {
      let flagString = '';
      if (flags.global) flagString += 'g';
      if (flags.ignoreCase) flagString += 'i';
      if (flags.multiline) flagString += 'm';

      const regex = new RegExp(pattern, flagString);
      const results = testString.match(regex);
      
      if (results) {
        setMatches(flags.global ? results : [results[0]]);
      } else {
        setMatches([]);
      }
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setMatches([]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <Search className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Regex Tester</h1>
            <p className="text-muted-foreground">Test regular expressions against text</p>
          </div>
        </div>
        <ShareButton toolName="Regex Tester" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Regular Expression</CardTitle>
              <CardDescription>Enter your regex pattern</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="\\d+|[a-zA-Z]+"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                className="font-mono"
              />
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="global"
                    checked={flags.global}
                    onCheckedChange={(checked) => setFlags(prev => ({ ...prev, global: !!checked }))}
                  />
                  <label htmlFor="global" className="text-sm">Global (g)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="ignoreCase"
                    checked={flags.ignoreCase}
                    onCheckedChange={(checked) => setFlags(prev => ({ ...prev, ignoreCase: !!checked }))}
                  />
                  <label htmlFor="ignoreCase" className="text-sm">Ignore Case (i)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="multiline"
                    checked={flags.multiline}
                    onCheckedChange={(checked) => setFlags(prev => ({ ...prev, multiline: !!checked }))}
                  />
                  <label htmlFor="multiline" className="text-sm">Multiline (m)</label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Test String</CardTitle>
              <CardDescription>Enter text to test against your regex</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter your test string here..."
                value={testString}
                onChange={(e) => setTestString(e.target.value)}
                className="min-h-[200px]"
              />
              <Button onClick={testRegex} className="w-full">
                Test Regex
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">Matches</CardTitle>
            <CardDescription>
              {matches.length > 0 ? `Found ${matches.length} match${matches.length > 1 ? 'es' : ''}` : 'No matches found'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error ? (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-destructive font-medium">Regex Error:</p>
                <p className="text-sm text-destructive/80 mt-1">{error}</p>
              </div>
            ) : (
              <div className="space-y-2">
                {matches.length > 0 ? (
                  matches.map((match, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-accent/10 border border-accent/20 font-mono text-sm"
                    >
                      <span className="text-muted-foreground">Match {index + 1}:</span> {match}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Enter a regex pattern and test string to see matches
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}