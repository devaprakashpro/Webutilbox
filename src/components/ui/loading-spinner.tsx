import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-spin ${className}`}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="60"
      strokeDashoffset="60"
      opacity="0.3"
    />
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="15"
      strokeDashoffset="15"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 12 12;360 12 12"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const PulseLoader: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="4" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>
    <circle cx="12" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1.5s"
        repeatCount="indefinite"
        begin="0.5s"
      />
    </circle>
    <circle cx="20" cy="12" r="2" fill="currentColor">
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1.5s"
        repeatCount="indefinite"
        begin="1s"
      />
    </circle>
  </svg>
);

export const CodeLoader: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="code-loader-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        <animateTransform
          attributeName="gradientTransform"
          type="translate"
          values="-100 0;100 0;-100 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </linearGradient>
    </defs>
    
    {/* Opening bracket */}
    <path
      d="M8 6L4 12L8 18"
      stroke="url(#code-loader-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Closing bracket */}
    <path
      d="M16 6L20 12L16 18"
      stroke="url(#code-loader-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Center dots */}
    <circle cx="10" cy="12" r="1" fill="currentColor">
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>
    <circle cx="12" cy="12" r="1" fill="currentColor">
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1s"
        repeatCount="indefinite"
        begin="0.3s"
      />
    </circle>
    <circle cx="14" cy="12" r="1" fill="currentColor">
      <animate
        attributeName="opacity"
        values="0.3;1;0.3"
        dur="1s"
        repeatCount="indefinite"
        begin="0.6s"
      />
    </circle>
  </svg>
);

export const GearLoader: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 12 12;360 12 12"
        dur="2s"
        repeatCount="indefinite"
      />
      <path
        d="M12 1L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </g>
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="360 12 12;0 12 12"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const WaveLoader: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  className = "" 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="10" width="2" height="4" fill="currentColor">
      <animate
        attributeName="height"
        values="4;12;4"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="y"
        values="10;6;10"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0s"
      />
    </rect>
    <rect x="6" y="10" width="2" height="4" fill="currentColor">
      <animate
        attributeName="height"
        values="4;12;4"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.2s"
      />
      <animate
        attributeName="y"
        values="10;6;10"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.2s"
      />
    </rect>
    <rect x="10" y="10" width="2" height="4" fill="currentColor">
      <animate
        attributeName="height"
        values="4;12;4"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.4s"
      />
      <animate
        attributeName="y"
        values="10;6;10"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.4s"
      />
    </rect>
    <rect x="14" y="10" width="2" height="4" fill="currentColor">
      <animate
        attributeName="height"
        values="4;12;4"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.6s"
      />
      <animate
        attributeName="y"
        values="10;6;10"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.6s"
      />
    </rect>
    <rect x="18" y="10" width="2" height="4" fill="currentColor">
      <animate
        attributeName="height"
        values="4;12;4"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.8s"
      />
      <animate
        attributeName="y"
        values="10;6;10"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.8s"
      />
    </rect>
  </svg>
);
