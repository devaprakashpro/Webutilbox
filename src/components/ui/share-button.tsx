import { Share2, Copy, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  toolName: string;
}

export function ShareButton({ toolName }: ShareButtonProps) {
  const { toast } = useToast();

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: 'Link copied!',
      description: 'The tool link has been copied to your clipboard.',
    });
  };

  const shareToTwitter = () => {
    const text = `Check out this ${toolName} tool on DevTools Dashboard!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={copyLink}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareToTwitter}>
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share on X
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.open('https://github.com', '_blank')}>
          <Github className="mr-2 h-4 w-4" />
          Share on GitHub
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}