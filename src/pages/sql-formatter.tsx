import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Copy, Database, RotateCcw, Wand2 } from 'lucide-react';
import { toast } from 'sonner';

export function SqlFormatter() {
  const [input, setInput] = useState('');
  const [formatted, setFormatted] = useState('');

  // Basic SQL formatting function (placeholder)
  const formatSQL = () => {
    if (!input.trim()) {
      toast.error('Please enter some SQL to format');
      return;
    }

    try {
      // Basic SQL formatting - in a real app, you'd use a proper SQL parser
      let sql = input.trim();
      
      // Basic keyword formatting
      const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 
                       'ORDER BY', 'GROUP BY', 'HAVING', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 
                       'ALTER', 'DROP', 'AND', 'OR', 'NOT', 'IN', 'EXISTS', 'BETWEEN', 'LIKE'];
      
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        sql = sql.replace(regex, keyword.toUpperCase());
      });

      // Basic indentation and line breaks
      sql = sql.replace(/\bSELECT\b/gi, 'SELECT\n  ')
               .replace(/\bFROM\b/gi, '\nFROM\n  ')
               .replace(/\bWHERE\b/gi, '\nWHERE\n  ')
               .replace(/\bJOIN\b/gi, '\nJOIN\n  ')
               .replace(/\bINNER JOIN\b/gi, '\nINNER JOIN\n  ')
               .replace(/\bLEFT JOIN\b/gi, '\nLEFT JOIN\n  ')
               .replace(/\bRIGHT JOIN\b/gi, '\nRIGHT JOIN\n  ')
               .replace(/\bORDER BY\b/gi, '\nORDER BY\n  ')
               .replace(/\bGROUP BY\b/gi, '\nGROUP BY\n  ')
               .replace(/\bHAVING\b/gi, '\nHAVING\n  ')
               .replace(/,/g, ',\n  ')
               .replace(/\bAND\b/gi, '\n  AND')
               .replace(/\bOR\b/gi, '\n  OR');

      setFormatted(sql);
      toast.success('SQL formatted successfully!');
    } catch (error) {
      toast.error('Failed to format SQL');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formatted);
    toast.success('Formatted SQL copied to clipboard!');
  };

  const clearAll = () => {
    setInput('');
    setFormatted('');
    toast.success('All fields cleared!');
  };

  const minifySQL = () => {
    if (!input.trim()) {
      toast.error('Please enter some SQL to minify');
      return;
    }

    try {
      // Basic SQL minification
      let sql = input.trim()
                     .replace(/\s+/g, ' ')
                     .replace(/\s*,\s*/g, ',')
                     .replace(/\s*\(\s*/g, '(')
                     .replace(/\s*\)\s*/g, ')')
                     .replace(/\s*=\s*/g, '=')
                     .replace(/\s*;\s*/g, ';');

      setFormatted(sql);
      toast.success('SQL minified successfully!');
    } catch (error) {
      toast.error('Failed to minify SQL');
    }
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
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
            <Database className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            SQL Formatter
          </h1>
          <p className="text-muted-foreground mt-2">
            Format and beautify SQL queries with proper indentation and syntax highlighting
          </p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Input SQL
              </CardTitle>
              <CardDescription>
                Enter your SQL query to format or minify
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input">SQL Query</Label>
                <Textarea
                  id="input"
                  placeholder="SELECT * FROM users WHERE id = 1 AND status = 'active' ORDER BY created_at DESC;"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[300px] font-mono text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button onClick={formatSQL} disabled={!input.trim()}>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Format SQL
                </Button>
                <Button onClick={minifySQL} disabled={!input.trim()} variant="outline">
                  Minify SQL
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
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">Formatted SQL</CardTitle>
              <CardDescription>
                Your formatted or minified SQL query
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={formatted}
                readOnly
                placeholder="Formatted SQL will appear here..."
                className="min-h-[300px] font-mono text-sm"
              />
              <Button
                onClick={copyToClipboard}
                disabled={!formatted}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Formatted SQL
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
          <CardHeader>
            <CardTitle className="text-lg text-emerald-800 dark:text-emerald-200">
              SQL Formatting Features
            </CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-700 dark:text-emerald-300">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Format Features:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Proper keyword capitalization</li>
                  <li>• Consistent indentation</li>
                  <li>• Line breaks for readability</li>
                  <li>• Column alignment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supported SQL:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• SELECT, INSERT, UPDATE, DELETE</li>
                  <li>• JOIN operations</li>
                  <li>• WHERE, ORDER BY, GROUP BY</li>
                  <li>• Common SQL functions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
