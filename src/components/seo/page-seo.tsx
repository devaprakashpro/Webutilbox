import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function PageSEO({ 
  title, 
  description, 
  keywords = '', 
  canonical = '',
  ogImage = 'https://webutilbox.vercel.app/og-image.png'
}: PageSEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
    
    // Update canonical URL if provided
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical, ogImage]);

  return null; // This component doesn't render anything
}

// SEO data for each page
export const seoData = {
  dashboard: {
    title: 'WebUtilBox: All-in-One Web Utility Toolbox for Developers',
    description: 'WebUtilBox is a modern web-based toolbox with 13 essential developer utilities—JSON, Base64, JWT, Regex, Color, Timestamp, Images, Code Minifier, and more.',
    keywords: 'web utilities, developer tools, JSON formatter, Base64 encoder, JWT decoder, regex tester, image converter, code minifier, web-based tools, online utilities, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/'
  },
  jsonFormatter: {
    title: 'JSON Formatter & Validator - WebUtilBox Online Tool',
    description: 'Format, validate, and beautify JSON data online with syntax highlighting. Free web-based JSON formatter with error detection and pretty print features.',
    keywords: 'JSON formatter, JSON validator, JSON beautifier, online JSON tool, format JSON, validate JSON, JSON syntax highlighting, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/json-formatter'
  },
  base64: {
    title: 'Base64 Encoder & Decoder - Free Online Tool | WebUtilBox',
    description: 'Encode and decode Base64 strings online. Support for text and binary data with real-time conversion. Free web-based Base64 encoder/decoder tool.',
    keywords: 'Base64 encoder, Base64 decoder, encode Base64, decode Base64, online Base64 tool, binary encoding, text encoding, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/base64'
  },
  jwtDecoder: {
    title: 'JWT Decoder & Token Inspector - WebUtilBox Online Tool',
    description: 'Decode and inspect JSON Web Tokens (JWT) online. View headers, payloads, signatures, and claims. Free JWT decoder with expiration checking.',
    keywords: 'JWT decoder, JSON Web Token, JWT inspector, decode JWT, JWT validator, token decoder, JWT claims, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/jwt-decoder'
  },
  regexTester: {
    title: 'Regex Tester & Pattern Validator - WebUtilBox Online Tool',
    description: 'Test regular expressions online with real-time matching and group capture. Free regex tester with pattern library and match highlighting.',
    keywords: 'regex tester, regular expression, regex validator, pattern matching, regex tool, test regex, regex groups, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/regex-tester'
  },
  imageConverter: {
    title: 'Image Converter & Format Changer - WebUtilBox Online Tool',
    description: 'Convert images between PNG, JPG, WebP formats online. Batch processing, quality control, and ZIP download. Free web-based image converter.',
    keywords: 'image converter, convert images, PNG to JPG, JPG to WebP, image format converter, batch image conversion, online image tool, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/image-converter'
  },
  colorConverter: {
    title: 'Color Converter & Picker - HEX RGB HSL Tool | WebUtilBox',
    description: 'Convert colors between HEX, RGB, HSL formats online. Color picker with live preview and accessibility contrast checking. Free color conversion tool.',
    keywords: 'color converter, HEX to RGB, RGB to HSL, color picker, color tool, convert colors, color formats, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/color-converter'
  },
  hashGenerator: {
    title: 'Hash Generator - MD5 SHA256 Online Tool | WebUtilBox',
    description: 'Generate MD5, SHA-1, SHA-256, SHA-512 hashes online. Hash text and files with multiple algorithms. Free cryptographic hash generator.',
    keywords: 'hash generator, MD5 hash, SHA256 hash, SHA512 hash, generate hash, hash tool, cryptographic hash, WebUtilBox',
    canonical: 'https://webutilbox.vercel.app/hash-generator'
  },
  about: {
    title: 'About WebUtilBox - Modern Web Utility Platform',
    description: 'Learn about WebUtilBox, a comprehensive web utility platform with 13 essential tools for developers. Built with React, TypeScript, and modern web technologies.',
    keywords: 'about WebUtilBox, web utility platform, developer tools, React TypeScript, modern web tools, WebUtilBox features',
    canonical: 'https://webutilbox.vercel.app/about'
  }
};
