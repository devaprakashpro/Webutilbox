// Analytics configuration for WebUtilBox
import { track } from '@vercel/analytics';

// Custom event tracking for WebUtilBox tools
export const analytics = {
  // Track tool usage
  trackToolUsage: (toolName: string, action: string = 'used') => {
    track('tool_usage', {
      tool: toolName,
      action: action,
      timestamp: new Date().toISOString()
    });
  },

  // Track file conversions
  trackConversion: (fromFormat: string, toFormat: string, toolName: string) => {
    track('file_conversion', {
      from_format: fromFormat,
      to_format: toFormat,
      tool: toolName,
      timestamp: new Date().toISOString()
    });
  },

  // Track feature usage
  trackFeature: (feature: string, toolName: string) => {
    track('feature_usage', {
      feature: feature,
      tool: toolName,
      timestamp: new Date().toISOString()
    });
  },

  // Track errors
  trackError: (error: string, toolName: string) => {
    track('error_occurred', {
      error: error,
      tool: toolName,
      timestamp: new Date().toISOString()
    });
  },

  // Track page views (custom)
  trackPageView: (pageName: string) => {
    track('page_view', {
      page: pageName,
      timestamp: new Date().toISOString()
    });
  },

  // Track downloads
  trackDownload: (fileType: string, toolName: string) => {
    track('file_download', {
      file_type: fileType,
      tool: toolName,
      timestamp: new Date().toISOString()
    });
  }
};

// Tool names for consistent tracking
export const TOOL_NAMES = {
  JSON_FORMATTER: 'json-formatter',
  BASE64_TOOL: 'base64-encoder-decoder',
  JWT_DECODER: 'jwt-decoder',
  REGEX_TESTER: 'regex-tester',
  IMAGE_CONVERTER: 'image-converter',
  COLOR_CONVERTER: 'color-converter',
  HASH_GENERATOR: 'hash-generator',
  UUID_GENERATOR: 'uuid-generator',
  URL_ENCODER: 'url-encoder',
  TIMESTAMP_CONVERTER: 'timestamp-converter',
  SQL_FORMATTER: 'sql-formatter',
  CODE_MINIFIER: 'code-minifier',
  CRON_TESTER: 'cron-tester'
} as const;

// Analytics helper functions
export const analyticsHelpers = {
  // Check if analytics is enabled (for GDPR compliance)
  isAnalyticsEnabled: () => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('analytics-consent') === 'true';
  },

  // Enable analytics
  enableAnalytics: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics-consent', 'true');
    }
  },

  // Disable analytics
  disableAnalytics: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics-consent', 'false');
    }
  },

  // Track with consent check
  trackWithConsent: (eventName: string, properties: Record<string, any>) => {
    if (analyticsHelpers.isAnalyticsEnabled()) {
      track(eventName, properties);
    }
  }
};
