import React from 'react';

export const FloatingShapes: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="shape-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="shape-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.03" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      
      {/* Floating Circles */}
      <circle
        cx="100"
        cy="200"
        r="50"
        fill="url(#shape-gradient-1)"
        className="text-blue-500"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 20,30; 0,0"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle
        cx="800"
        cy="150"
        r="30"
        fill="url(#shape-gradient-2)"
        className="text-purple-500"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -15,25; 0,0"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle
        cx="200"
        cy="700"
        r="40"
        fill="url(#shape-gradient-1)"
        className="text-green-500"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 25,-20; 0,0"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Floating Polygons */}
      <polygon
        points="600,300 650,250 700,300 650,350"
        fill="url(#shape-gradient-2)"
        className="text-cyan-500"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 650 300; 360 650 300"
          dur="20s"
          repeatCount="indefinite"
        />
      </polygon>
      
      <polygon
        points="150,500 200,450 250,500 200,550"
        fill="url(#shape-gradient-1)"
        className="text-pink-500"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 200 500; -360 200 500"
          dur="15s"
          repeatCount="indefinite"
        />
      </polygon>
      
      {/* Code-like patterns */}
      <g className="text-indigo-500" opacity="0.03">
        <rect x="50" y="50" width="4" height="20" fill="currentColor">
          <animate attributeName="height" values="20;40;20" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="60" y="50" width="4" height="30" fill="currentColor">
          <animate attributeName="height" values="30;50;30" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="70" y="50" width="4" height="25" fill="currentColor">
          <animate attributeName="height" values="25;45;25" dur="3.5s" repeatCount="indefinite" />
        </rect>
        <rect x="80" y="50" width="4" height="35" fill="currentColor">
          <animate attributeName="height" values="35;55;35" dur="2.8s" repeatCount="indefinite" />
        </rect>
      </g>
      
      <g className="text-orange-500" opacity="0.03">
        <rect x="850" y="600" width="4" height="20" fill="currentColor">
          <animate attributeName="height" values="20;40;20" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="860" y="600" width="4" height="30" fill="currentColor">
          <animate attributeName="height" values="30;50;30" dur="3.1s" repeatCount="indefinite" />
        </rect>
        <rect x="870" y="600" width="4" height="25" fill="currentColor">
          <animate attributeName="height" values="25;45;25" dur="2.7s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  </div>
);

export const GridPattern: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  </div>
);

export const CodePattern: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.015]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <defs>
        <pattern
          id="code-pattern"
          width="100"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          {/* Bracket patterns */}
          <path
            d="M10,10 L5,15 L10,20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-blue-500"
          />
          <path
            d="M30,10 L35,15 L30,20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-blue-500"
          />
          
          {/* Dots representing code */}
          <circle cx="50" cy="15" r="1" fill="currentColor" className="text-green-500" />
          <circle cx="55" cy="15" r="1" fill="currentColor" className="text-green-500" />
          <circle cx="60" cy="15" r="1" fill="currentColor" className="text-green-500" />
          
          {/* Hash symbols */}
          <text x="70" y="18" fontSize="8" fill="currentColor" className="text-purple-500">#</text>
          <text x="80" y="18" fontSize="8" fill="currentColor" className="text-purple-500">/</text>
          
          {/* Semicolon */}
          <text x="15" y="45" fontSize="10" fill="currentColor" className="text-orange-500">;</text>
          <text x="25" y="45" fontSize="10" fill="currentColor" className="text-orange-500">=</text>
          
          {/* Function parentheses */}
          <path
            d="M40,35 Q45,40 40,45"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-cyan-500"
          />
          <path
            d="M50,35 Q45,40 50,45"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-cyan-500"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#code-pattern)" />
    </svg>
  </div>
);

export const HexagonPattern: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <defs>
        <pattern
          id="hexagon-pattern"
          width="60"
          height="52"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="30,4 45,15 45,37 30,48 15,37 15,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
    </svg>
  </div>
);
