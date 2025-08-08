import React from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  title,
  className = '',
  width,
  height,
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      // Add structured data for images
      itemProp="image"
    />
  );
};

// SEO-optimized alt text generator
export const generateAltText = (toolName: string, action: string = 'interface') => {
  const baseAlt = `WebUtilBox ${toolName} ${action}`;
  
  const altTexts: Record<string, string> = {
    'json-formatter': 'WebUtilBox JSON Formatter interface showing syntax highlighting and validation features',
    'base64': 'WebUtilBox Base64 Encoder Decoder tool with text and binary conversion options',
    'jwt-decoder': 'WebUtilBox JWT Token Decoder displaying header payload and signature analysis',
    'regex-tester': 'WebUtilBox Regex Pattern Tester with real-time matching and group capture',
    'image-converter': 'WebUtilBox Image Format Converter with drag drop batch processing and quality control',
    'color-converter': 'WebUtilBox Color Converter showing HEX RGB HSL format conversion with live preview',
    'hash-generator': 'WebUtilBox Hash Generator tool with MD5 SHA256 SHA512 algorithm options',
    'uuid-generator': 'WebUtilBox UUID Generator with batch generation and copy to clipboard features',
    'url-encoder': 'WebUtilBox URL Encoder Decoder with query parameter and special character support',
    'timestamp-converter': 'WebUtilBox Timestamp Converter showing UNIX timestamp to date conversion',
    'sql-formatter': 'WebUtilBox SQL Formatter with syntax highlighting and query beautification',
    'code-minifier': 'WebUtilBox Code Minifier for JavaScript CSS HTML compression and optimization',
    'cron-tester': 'WebUtilBox Cron Expression Tester with next execution time calculation'
  };

  return altTexts[toolName] || baseAlt;
};

// Image optimization utilities
export const imageOptimization = {
  // Generate responsive image srcSet
  generateSrcSet: (baseSrc: string, sizes: number[] = [320, 640, 1024, 1280]) => {
    return sizes.map(size => `${baseSrc}?w=${size} ${size}w`).join(', ');
  },

  // Generate sizes attribute for responsive images
  generateSizes: (breakpoints: string[] = ['(max-width: 640px) 100vw', '(max-width: 1024px) 50vw', '25vw']) => {
    return breakpoints.join(', ');
  },

  // SEO-friendly image naming convention
  generateImageName: (toolName: string, type: string = 'screenshot') => {
    const cleanName = toolName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `webutilbox-${cleanName}-${type}`;
  }
};

// Tool-specific image data for SEO
export const toolImages = {
  'json-formatter': {
    src: '/screenshots/json-formatter-demo.webp',
    alt: generateAltText('json-formatter'),
    title: 'JSON Formatter & Validator - WebUtilBox Online Tool'
  },
  'base64': {
    src: '/screenshots/base64-encoder-demo.webp',
    alt: generateAltText('base64'),
    title: 'Base64 Encoder & Decoder - WebUtilBox Online Tool'
  },
  'jwt-decoder': {
    src: '/screenshots/jwt-decoder-demo.webp',
    alt: generateAltText('jwt-decoder'),
    title: 'JWT Token Decoder - WebUtilBox Online Tool'
  },
  'regex-tester': {
    src: '/screenshots/regex-tester-demo.webp',
    alt: generateAltText('regex-tester'),
    title: 'Regex Pattern Tester - WebUtilBox Online Tool'
  },
  'image-converter': {
    src: '/screenshots/image-converter-demo.webp',
    alt: generateAltText('image-converter'),
    title: 'Image Format Converter - WebUtilBox Online Tool'
  },
  'color-converter': {
    src: '/screenshots/color-converter-demo.webp',
    alt: generateAltText('color-converter'),
    title: 'Color Format Converter - WebUtilBox Online Tool'
  },
  'hash-generator': {
    src: '/screenshots/hash-generator-demo.webp',
    alt: generateAltText('hash-generator'),
    title: 'Hash Generator Tool - WebUtilBox Online Tool'
  }
};

// Lazy loading intersection observer hook
export const useLazyLoading = () => {
  React.useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));

      return () => {
        images.forEach((img) => imageObserver.unobserve(img));
      };
    }
  }, []);
};
