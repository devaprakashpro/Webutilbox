import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButton } from '@/components/ui/share-button';
import { Clock } from 'lucide-react';

export function CronTester() {
  const [expression, setExpression] = useState('');
  const [nextRuns, setNextRuns] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const cronExpressions = [
    { expr: '0 0 * * *', desc: 'Daily at midnight' },
    { expr: '0 9 * * MON-FRI', desc: 'Weekdays at 9 AM' },
    { expr: '0 0 1 * *', desc: 'First day of every month' },
    { expr: '*/15 * * * *', desc: 'Every 15 minutes' },
    { expr: '0 0 * * SUN', desc: 'Every Sunday at midnight' },
  ];

  const testCron = () => {
    try {
      // This is a simplified cron parser for demonstration
      // In a real app, you'd use a library like node-cron or cron-parser
      const parts = expression.split(' ');
      if (parts.length !== 5) {
        throw new Error('Cron expression must have 5 parts: minute hour day month weekday');
      }

      // Generate some example next run times (this is simplified)
      const now = new Date();
      const times: string[] = [];
      for (let i = 0; i < 5; i++) {
        const nextTime = new Date(now.getTime() + (i + 1) * 60 * 60 * 1000);
        times.push(nextTime.toLocaleString());
      }
      
      setNextRuns(times);
      setDescription(getDescription(expression));
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setNextRuns([]);
      setDescription('');
    }
  };

  const getDescription = (expr: string): string => {
    const found = cronExpressions.find(item => item.expr === expr);
    return found ? found.desc : 'Custom cron expression';
  };

  const useExample = (expr: string) => {
    setExpression(expr);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
            <Clock className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Cron Expression Tester</h1>
            <p className="text-muted-foreground">Test and validate cron expressions</p>
          </div>
        </div>
        <ShareButton toolName="Cron Expression Tester" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Cron Expression</CardTitle>
              <CardDescription>Enter your cron expression (minute hour day month weekday)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="0 9 * * MON-FRI"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="font-mono"
              />
              <Button onClick={testCron} className="w-full">
                Test Expression
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Common Examples</CardTitle>
              <CardDescription>Click to use these common cron expressions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {cronExpressions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors cursor-pointer"
                  onClick={() => useExample(item.expr)}
                >
                  <div>
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{item.expr}</code>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Description</CardTitle>
            </CardHeader>
            <CardContent>
              {error ? (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-destructive font-medium">Cron Error:</p>
                  <p className="text-sm text-destructive/80 mt-1">{error}</p>
                </div>
              ) : description ? (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="font-medium">{description}</p>
                </div>
              ) : (
                <p className="text-muted-foreground">Enter a cron expression to see description</p>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Next 5 Execution Times</CardTitle>
              <CardDescription>Approximate execution times</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {nextRuns.length > 0 ? (
                  nextRuns.map((time, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-accent/10 border border-accent/20 font-mono text-sm"
                    >
                      {index + 1}. {time}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Test a cron expression to see execution times
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}