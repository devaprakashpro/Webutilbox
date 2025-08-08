import {
  FileJson,
  Binary,
  Shield,
  Search,
  Clock,
  Palette,
  Calendar,
  Hash,
  Link as LinkIcon,
  Zap,
  Database,
  Image,
  Code,
} from 'lucide-react';
import { JsonIcon, Base64Icon, RegexIcon, HashIcon } from '@/components/ui/custom-icons';
import { ToolCard } from '@/components/ui/tool-card';
import { motion } from 'framer-motion';

const tools = [
  {
    title: 'JSON Formatter',
    description: 'Format, validate, and beautify JSON data with syntax highlighting and error detection.',
    icon: JsonIcon,
    path: '/json-formatter',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings with support for text and binary data.',
    icon: Base64Icon,
    path: '/base64',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'JWT Decoder',
    description: 'Decode and inspect JSON Web Tokens to view headers, payloads, and signatures.',
    icon: Shield,
    path: '/jwt-decoder',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Regex Tester',
    description: 'Test regular expressions against text with real-time matching and group capture.',
    icon: RegexIcon,
    path: '/regex-tester',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Cron Expression Tester',
    description: 'Test and validate cron expressions with next execution times and descriptions.',
    icon: Clock,
    path: '/cron-tester',
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    title: 'Color Converter',
    description: 'Convert between different color formats: HEX, RGB, HSL, and more.',
    icon: Palette,
    path: '/color-converter',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    title: 'Timestamp Converter',
    description: 'Convert between UNIX timestamps and human-readable dates with timezone support.',
    icon: Calendar,
    path: '/timestamp-converter',
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    title: 'UUID Generator',
    description: 'Generate UUID v4 identifiers with one-click copying and batch generation.',
    icon: Hash,
    path: '/uuid-generator',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs with support for query parameters and special characters.',
    icon: LinkIcon,
    path: '/url-encoder',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Hash Generator',
    description: 'Generate MD5, SHA-1, SHA-256, and other hash values for text and files.',
    icon: HashIcon,
    path: '/hash-generator',
    gradient: 'from-red-500/20 to-pink-500/20',
  },
  {
    title: 'SQL Formatter',
    description: 'Format and beautify SQL queries with syntax highlighting and validation.',
    icon: Database,
    path: '/sql-formatter',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Image Converter',
    description: 'Convert images between different formats: PNG, JPG, WebP, and more.',
    icon: Image,
    path: '/image-converter',
    gradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    title: 'Code Minifier',
    description: 'Minify and compress JavaScript, CSS, and HTML code for production.',
    icon: Code,
    path: '/code-minifier',
    gradient: 'from-slate-500/20 to-gray-500/20',
  },
];

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <motion.h1 
          className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          WebUtilBox
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Essential web utilities for modern developers and professionals. Format, convert, test, and validate with ease.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={tool.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <ToolCard
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              path={tool.path}
              gradient={tool.gradient}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div 
          className="inline-flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀
          </motion.div>
          <div className="text-left">
            <h3 className="font-semibold">More tools coming soon!</h3>
            <p className="text-sm text-muted-foreground">
              We're constantly adding new web utilities
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <motion.footer
        className="mt-16 pt-8 border-t border-border/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center md:justify-start">
            <a href="/about" className="hover:text-foreground transition-colors">About</a>
            <a href="mailto:contact@devaprakash.com" className="hover:text-foreground transition-colors">Contact</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://devaprakash.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Portfolio</a>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                Made with ❤️ by <a href="https://devaprakash.com" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">Devaprakash</a>
              </div>
              <div className="text-xs">
                Designed & Developed for the web development community
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
}