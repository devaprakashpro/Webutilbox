import { Moon, Sun, Users, Github, Heart } from 'lucide-react';
import { DevToolsLogo, CommunityIcon, UserIcon, MenuIcon, DashboardIcon } from '@/components/ui/custom-icons';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/theme-provider';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { toast } from 'sonner';

export function Navbar() {
  const { setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinCommunity = () => {
    // Simulate Google OAuth popup
    const popup = window.open(
      'about:blank',
      'google-oauth',
      'width=500,height=600,scrollbars=yes,resizable=yes'
    );

    if (popup) {
      // Create a realistic Google OAuth-like interface
      popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Sign in - Google Accounts</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 20px;
              background: #f8f9fa;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .container {
              background: white;
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              max-width: 400px;
              text-align: center;
            }
            .logo {
              width: 75px;
              height: 75px;
              margin: 0 auto 20px;
              background: #4285f4;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 24px;
              font-weight: bold;
            }
            h1 {
              color: #202124;
              font-size: 24px;
              margin-bottom: 10px;
            }
            p {
              color: #5f6368;
              margin-bottom: 30px;
            }
            .btn {
              background: #1a73e8;
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 4px;
              font-size: 14px;
              cursor: pointer;
              width: 100%;
              margin-bottom: 10px;
            }
            .btn:hover {
              background: #1557b0;
            }
            .success {
              background: #34a853;
              color: white;
              padding: 15px;
              border-radius: 4px;
              margin-top: 20px;
              display: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">G</div>
            <h1>Join DevTools Community</h1>
            <p>Sign in with your Google account to join our developer community</p>
            <button class="btn" onclick="authenticate()">Continue with Google</button>
            <div id="success" class="success">
              ✅ Successfully joined the DevTools community!<br>
              Welcome aboard! 🎉
            </div>
          </div>
          <script>
            function authenticate() {
              document.querySelector('.btn').style.display = 'none';
              document.querySelector('p').style.display = 'none';
              document.getElementById('success').style.display = 'block';

              setTimeout(() => {
                window.close();
              }, 2000);
            }
          </script>
        </body>
        </html>
      `);

      // Handle popup close
      const checkClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkClosed);
          toast.success("Welcome to the DevTools Community! 🎉", {
            description: "You've successfully joined our developer community!",
            action: {
              label: "Awesome!",
              onClick: () => {},
            },
          });
        }
      }, 1000);
    } else {
      toast.error("Popup blocked", {
        description: "Please allow popups for this site to join the community.",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                <MenuIcon className="h-5 w-5 text-current" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Access all developer tools
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-2">
                <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                  <DashboardIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link to="/about" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/50" onClick={() => setIsMobileMenuOpen(false)}>
                  <Heart className="h-5 w-5" />
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <DevToolsLogo className="h-6 w-6 text-primary" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              DevTools Dashboard
            </h1>
            <p className="text-xs text-muted-foreground">Developer Utilities</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Join Community Button */}
          <Button
            onClick={handleJoinCommunity}
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2 hover:bg-primary/10 transition-colors text-foreground"
          >
            <CommunityIcon className="h-4 w-4 text-current" />
            Join Community
          </Button>

          {/* GitHub Link */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent/50 transition-colors text-foreground"
            asChild
          >
            <a href="https://github.com/devaprakashpro" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-current" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/50 transition-colors text-foreground">
                 {/* <DevToolsLogo className="h-6 w-6 text-primary" /> */}
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-current" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-current" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/50 transition-colors text-foreground">
                <UserIcon className="h-5 w-5 text-current" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleJoinCommunity}>
                <Users className="mr-2 h-4 w-4" />
                Join Community
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">
                  <Heart className="mr-2 h-4 w-4" />
                  About
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}