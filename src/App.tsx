import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import { Sidebar } from '@/components/layout/sidebar';
import { FloatingChat } from '@/components/layout/floating-chat';
import { AnimatedBackground } from '@/components/layout/animated-background';
import { NotificationArea } from '@/components/ui/notification-area';
import { Dashboard } from '@/pages/dashboard';
import { JsonFormatter } from '@/pages/json-formatter';
import { Base64Tool } from '@/pages/base64';
import { JwtDecoder } from '@/pages/jwt-decoder';
import { RegexTester } from '@/pages/regex-tester';
import { CronTester } from '@/pages/cron-tester';
import { ColorConverter } from '@/pages/color-converter';
import { TimestampConverter } from '@/pages/timestamp-converter';
import { UuidGenerator } from '@/pages/uuid-generator';
import { About } from '@/pages/about';
import { UrlEncoder } from '@/pages/url-encoder';
import { HashGenerator } from '@/pages/hash-generator';
import { SqlFormatter } from '@/pages/sql-formatter';
import { ImageConverter } from '@/pages/image-converter';
import { CodeMinifier } from '@/pages/code-minifier';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'WebUtilBox - Modern Web Utility Toolbox';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <NotificationArea />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 mt-16 p-4 md:p-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/json-formatter" element={<JsonFormatter />} />
              <Route path="/base64" element={<Base64Tool />} />
              <Route path="/jwt-decoder" element={<JwtDecoder />} />
              <Route path="/regex-tester" element={<RegexTester />} />
              <Route path="/cron-tester" element={<CronTester />} />
              <Route path="/color-converter" element={<ColorConverter />} />
              <Route path="/timestamp-converter" element={<TimestampConverter />} />
              <Route path="/uuid-generator" element={<UuidGenerator />} />
              <Route path="/about" element={<About />} />
              <Route path="/url-encoder" element={<UrlEncoder />} />
              <Route path="/hash-generator" element={<HashGenerator />} />
              <Route path="/sql-formatter" element={<SqlFormatter />} />
              <Route path="/image-converter" element={<ImageConverter />} />
              <Route path="/code-minifier" element={<CodeMinifier />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
      <FloatingChat />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="devtools-theme">
      <Router>
        <AppContent />
        <Analytics />
      </Router>
    </ThemeProvider>
  );
}

export default App;