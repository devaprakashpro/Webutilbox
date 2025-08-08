import { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'organization' | 'webApplication' | 'softwareApplication';
  data?: any;
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    let schema = {};

    switch (type) {
      case 'organization':
        schema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "WebUtilBox",
          "description": "Modern web utility toolbox with 13 essential developer tools",
          "url": "https://webutilbox.vercel.app",
          "logo": "https://webutilbox.vercel.app/logo.png",
          "founder": {
            "@type": "Person",
            "name": "Devaprakash",
            "url": "https://devaprakash.com"
          },
          "sameAs": [
            "https://github.com/devaprakashpro",
            "https://linkedin.com/in/devaprakash"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Developer",
            "email": "contact@devaprakash.com"
          }
        };
        break;

      case 'webApplication':
        schema = {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "WebUtilBox",
          "description": "All-in-one web utility toolbox with 13 essential developer tools including JSON formatter, Base64 encoder, JWT decoder, regex tester, and more",
          "url": "https://webutilbox.vercel.app",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Person",
            "name": "Devaprakash",
            "url": "https://devaprakash.com"
          },
          "datePublished": "2025-01-08",
          "dateModified": "2025-01-08",
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "license": "https://opensource.org/licenses/MIT",
          "featureList": [
            "JSON Formatter & Validator",
            "Base64 Encoder/Decoder",
            "JWT Token Decoder",
            "Regex Pattern Tester",
            "Image Format Converter",
            "Color Format Converter",
            "Hash Generator (MD5, SHA256)",
            "UUID Generator",
            "URL Encoder/Decoder",
            "Timestamp Converter",
            "SQL Formatter",
            "Code Minifier",
            "Cron Expression Tester"
          ],
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "softwareVersion": "1.0.0",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "1"
          }
        };
        break;

      case 'softwareApplication':
        schema = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": data?.name || "WebUtilBox Tool",
          "description": data?.description || "Professional web utility tool",
          "url": `https://webutilbox.vercel.app${data?.path || ''}`,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Person",
            "name": "Devaprakash",
            "url": "https://devaprakash.com"
          },
          "isPartOf": {
            "@type": "WebApplication",
            "name": "WebUtilBox",
            "url": "https://webutilbox.vercel.app"
          },
          "featureList": data?.features || [],
          "screenshot": `https://webutilbox.vercel.app/screenshots/${data?.path?.replace('/', '')}.png`,
          "softwareVersion": "1.0.0",
          "datePublished": "2025-01-08",
          "inLanguage": "en-US",
          "isAccessibleForFree": true
        };
        break;
    }

    // Create or update schema script tag
    let schemaScript = document.querySelector(`script[data-schema="${type}"]`);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', type);
      document.head.appendChild(schemaScript);
    }
    
    schemaScript.textContent = JSON.stringify(schema, null, 2);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(`script[data-schema="${type}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [type, data]);

  return null;
}

// Schema data for tools
export const toolSchemaData = {
  'json-formatter': {
    name: 'JSON Formatter & Validator',
    description: 'Format, validate, and beautify JSON data with syntax highlighting and error detection',
    path: '/json-formatter',
    features: ['JSON Formatting', 'Syntax Validation', 'Error Detection', 'Pretty Print', 'Copy to Clipboard']
  },
  'base64': {
    name: 'Base64 Encoder & Decoder',
    description: 'Encode and decode Base64 strings with support for text and binary data',
    path: '/base64',
    features: ['Text Encoding', 'Binary Support', 'Real-time Conversion', 'Copy to Clipboard']
  },
  'jwt-decoder': {
    name: 'JWT Token Decoder',
    description: 'Decode and inspect JSON Web Tokens with header, payload, and signature analysis',
    path: '/jwt-decoder',
    features: ['Token Decoding', 'Header Analysis', 'Payload Inspection', 'Signature Verification', 'Expiration Checking']
  },
  'regex-tester': {
    name: 'Regex Pattern Tester',
    description: 'Test regular expressions with real-time matching and group capture highlighting',
    path: '/regex-tester',
    features: ['Pattern Matching', 'Group Capture', 'Real-time Testing', 'Match Highlighting', 'Pattern Library']
  },
  'image-converter': {
    name: 'Image Format Converter',
    description: 'Convert images between PNG, JPG, WebP formats with quality control and batch processing',
    path: '/image-converter',
    features: ['Format Conversion', 'Quality Control', 'Batch Processing', 'Drag & Drop', 'ZIP Download']
  },
  'color-converter': {
    name: 'Color Format Converter',
    description: 'Convert colors between HEX, RGB, HSL formats with live preview and color picker',
    path: '/color-converter',
    features: ['Color Conversion', 'Live Preview', 'Color Picker', 'Accessibility Checking']
  },
  'hash-generator': {
    name: 'Hash Generator Tool',
    description: 'Generate MD5, SHA-1, SHA-256, SHA-512 hashes for text and files',
    path: '/hash-generator',
    features: ['Multiple Hash Algorithms', 'Text Hashing', 'File Hashing', 'Hash Comparison']
  }
};
