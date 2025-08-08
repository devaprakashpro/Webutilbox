import { Link, useLocation } from 'react-router-dom';
import {
  FileJson,
  Binary,
  Shield,
  Search,
  Clock,
  Palette,
  Home,
  Calendar,
  Hash,
  Heart,
  Zap,
  Code,
  Database,
  Image,
  Link as LinkIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'JSON Formatter', icon: FileJson, path: '/json-formatter' },
  { name: 'Base64 Encoder', icon: Binary, path: '/base64' },
  { name: 'JWT Decoder', icon: Shield, path: '/jwt-decoder' },
  { name: 'Regex Tester', icon: Search, path: '/regex-tester' },
  { name: 'Cron Tester', icon: Clock, path: '/cron-tester' },
  { name: 'Color Converter', icon: Palette, path: '/color-converter' },
  { name: 'Timestamp Converter', icon: Calendar, path: '/timestamp-converter' },
  { name: 'UUID Generator', icon: Hash, path: '/uuid-generator' },
  { name: 'URL Encoder/Decoder', icon: LinkIcon, path: '/url-encoder' },
  { name: 'Hash Generator', icon: Zap, path: '/hash-generator' },
  { name: 'SQL Formatter', icon: Database, path: '/sql-formatter' },
  { name: 'Image Converter', icon: Image, path: '/image-converter' },
  { name: 'Code Minifier', icon: Code, path: '/code-minifier' },
];

const otherPages = [
  { name: 'About', icon: Heart, path: '/about' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:fixed md:left-0 md:top-16 md:bottom-0 md:w-64 md:border-r md:bg-background/95 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60 md:z-40 md:block"
    >
      <div className="flex flex-col h-full p-4">
        <nav className="flex-1 space-y-2">
          <div className="space-y-1">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
              Developer Tools
            </h3>
            {tools.map((tool) => {
              const isActive = location.pathname === tool.path;
              return (
                <motion.div
                  key={tool.path}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to={tool.path}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    )}
                  >
                    <tool.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">{tool.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-4 space-y-1">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2">
              More
            </h3>
            {otherPages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <motion.div
                  key={page.path}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    to={page.path}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    )}
                  >
                    <page.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">{page.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </nav>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground px-4 py-2">
            Made with ❤️ by Devaprakash
          </p>
        </div>
      </div>
    </motion.aside>
  );
}