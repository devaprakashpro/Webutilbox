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
  Heart,
  Github,
  Globe,
} from 'lucide-react';
import { JsonIcon, Base64Icon, RegexIcon, HashIcon, WebUtilBoxLogo } from '@/components/ui/custom-icons';
import { ToolCard } from '@/components/ui/tool-card';
import { Footer } from '@/components/layout/footer';
import { PageSEO, seoData } from '@/components/seo/page-seo';
import { SchemaMarkup } from '@/components/seo/schema-markup';
import { motion } from 'framer-motion';

const tools = [
  {
    title: 'JSON Formatter & Validator',
    description: 'Format, validate, and beautify JSON data online with syntax highlighting, error detection, and pretty print. Perfect for API development and debugging.',
    icon: JsonIcon,
    path: '/json-formatter',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings online with support for text and binary data. Essential for data transmission and API authentication.',
    icon: Base64Icon,
    path: '/base64',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'JWT Token Decoder',
    description: 'Decode and inspect JSON Web Tokens online with detailed header, payload, and signature analysis. Debug authentication tokens easily.',
    icon: Shield,
    path: '/jwt-decoder',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Regex Pattern Tester',
    description: 'Test regular expressions online with real-time pattern matching, group capture, and match highlighting. Includes common regex patterns library.',
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
    title: 'Image Format Converter',
    description: 'Convert images between PNG, JPG, WebP formats online with quality control, batch processing, and ZIP download. Drag & drop multiple images.',
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
      {/* SEO Meta Tags */}
      <PageSEO {...seoData.dashboard} />

      {/* Schema Markup */}
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="webApplication" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-4"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          WebUtilBox: All-in-One Web Utility Toolbox
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Essential web utilities for modern developers and professionals. Format JSON, encode Base64, decode JWT, test regex, convert images, and more—all in one powerful platform.
        </motion.p>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            13 Essential Web Development Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade utilities for JSON formatting, Base64 encoding, JWT decoding, regex testing, image conversion, and more.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
      
      {/* Enhanced Footer */}
      <Footer />
    </motion.div>
  );
}