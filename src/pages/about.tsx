import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart,
  Code2,
  Users,
  Zap,
  Globe,
  Github,
  Linkedin,
  Mail,
  Coffee,
  Star,
  Target,
  Lightbulb
} from 'lucide-react';
import { AnimatedLogo, SparkleIcon, ToolIcon } from '@/components/ui/custom-icons';
import { Footer } from '@/components/layout/footer';
import { PageSEO, seoData } from '@/components/seo/page-seo';
import { SchemaMarkup } from '@/components/seo/schema-markup';

const features = [
  {
    icon: SparkleIcon,
    title: "Lightning Fast",
    description: "Built with modern web technologies for optimal performance"
  },
  {
    icon: Users,
    title: "User Focused",
    description: "Created for developers and web professionals with real-world needs in mind"
  },
  {
    icon: Heart,
    title: "Open Source",
    description: "Free and open source tools that respect your privacy"
  },
  {
    icon: ToolIcon,
    title: "Accessible Anywhere",
    description: "Works offline and across all modern browsers"
  }
];

const technologies = [
  "React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", 
  "Radix UI", "shadcn/ui", "Lucide Icons"
];

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 max-w-4xl mx-auto"
    >
      {/* SEO Meta Tags */}
      <PageSEO {...seoData.about} />

      {/* Schema Markup */}
      <SchemaMarkup type="organization" />
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center space-y-6"
      >
        <div className="flex justify-center">
          <motion.div
            className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatedLogo className="h-12 w-12" />
          </motion.div>
        </div>
        
        <div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-4"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            About WebUtilBox
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive suite of web utilities designed to streamline your workflow and boost productivity.
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide developers and web professionals with a centralized, fast, and reliable set of utilities that eliminate the need to
              search for multiple online tools. Whether you need to <Link to="/json-formatter" className="text-primary hover:underline">format JSON</Link>,
              <Link to="/base64" className="text-primary hover:underline"> encode Base64</Link>,
              <Link to="/jwt-decoder" className="text-primary hover:underline"> decode JWT tokens</Link>, or
              <Link to="/image-converter" className="text-primary hover:underline"> convert images</Link>,
              every utility is crafted with attention to detail, focusing on user experience and performance.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Why Choose Our Tools?</h2>
          <p className="text-muted-foreground">Built with modern standards and user experience in mind</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Built With Modern Technologies</CardTitle>
            </div>
            <CardDescription>
              Leveraging the latest and greatest in web development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Developer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-6"
      >
        <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Coffee className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Meet the Developer</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm <strong className="text-foreground">Devaprakash</strong>, a passionate full-stack developer
              who believes in creating tools that make developers' lives easier. WebUtilBox started as a personal
              need for quick, reliable web utilities and has grown into a comprehensive toolbox.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://devaprakash.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Website
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:contact@devaprakash.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Love These Tools?</h3>
                <p className="text-muted-foreground mb-4">
                  Help us improve by sharing feedback or contributing to the project
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:feedback@devaprakash.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Feedback
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Enhanced Footer */}
      <Footer />
    </motion.div>
  );
}
