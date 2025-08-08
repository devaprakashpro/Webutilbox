import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WebUtilBoxLogo } from '@/components/ui/custom-icons';

export function Footer() {
  return (
    <motion.footer
      className="mt-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Footer Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-t-3xl" />
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
      
      {/* Footer Content */}
      <div className="relative pt-12 pb-8 px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 shadow-lg">
                <WebUtilBoxLogo className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  WebUtilBox
                </h3>
                <p className="text-xs text-muted-foreground font-medium">Web Utilities Toolbox</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modern web utility toolbox with 13 essential tools for developers and web professionals. 
              Fast, reliable, and privacy-focused.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All tools work offline</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Popular Tools
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/json-formatter" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → JSON Formatter
              </Link>
              <Link to="/base64" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Base64 Tool
              </Link>
              <Link to="/jwt-decoder" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → JWT Decoder
              </Link>
              <Link to="/regex-tester" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Regex Tester
              </Link>
              <Link to="/image-converter" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → Image Converter
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                → About
              </Link>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-200" asChild>
                <a href="https://github.com/devaprakashpro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-200" asChild>
                <a href="https://linkedin.com/in/devaprakash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-accent/10 hover:border-accent/30 transition-all duration-200" asChild>
                <a href="https://devaprakash.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Portfolio
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 rounded-lg bg-card/50 border border-border/30">
                <div className="text-lg font-bold text-primary">13</div>
                <div className="text-xs text-muted-foreground">Tools</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 border border-border/30">
                <div className="text-lg font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Free</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 WebUtilBox.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by</span>
              <a 
                href="https://devaprakash.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Devaprakash
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>React & TypeScript</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>MIT License</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
