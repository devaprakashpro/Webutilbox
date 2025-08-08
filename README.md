# 🛠️ WebUtilBox

**A Modern, All-in-One Web Utility Toolbox**

WebUtilBox is a comprehensive, web-based developer utility platform designed to streamline and accelerate everyday development tasks. Built with cutting-edge technologies including React, TypeScript, and modern UI frameworks, it provides an intuitive, responsive interface for essential web utilities and developer tools.

![WebUtilBox](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6.svg?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF.svg?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

### 🎯 **13 Essential Developer Tools**
- **JSON Formatter** - Format, validate, and beautify JSON with syntax highlighting
- **Base64 Encoder/Decoder** - Encode and decode Base64 strings with binary support
- **JWT Decoder** - Decode and inspect JSON Web Tokens (headers, payloads, signatures)
- **Regex Tester** - Test regular expressions with real-time matching and group capture
- **Cron Expression Tester** - Validate cron expressions with next execution times
- **Color Converter** - Convert between HEX, RGB, HSL, and other color formats
- **Timestamp Converter** - Convert UNIX timestamps to human-readable dates
- **UUID Generator** - Generate UUID v4 identifiers with batch generation
- **URL Encoder/Decoder** - Encode/decode URLs with query parameter support
- **Hash Generator** - Generate MD5, SHA-1, SHA-256, and other hash values
- **SQL Formatter** - Format and beautify SQL queries with syntax highlighting
- **Image Converter** - Convert images between PNG, JPG, WebP formats with quality control
- **Code Minifier** - Minify JavaScript, CSS, and HTML for production

### 🎨 **Modern UI/UX**
- **Dark/Light Theme** - Seamless theme switching with system preference detection
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Animated Interactions** - Smooth animations powered by Framer Motion
- **Custom SVG Icons** - Hand-crafted icons with gradient effects and animations
- **Floating Background** - Subtle animated patterns for visual appeal

### 🚀 **Advanced Features**
- **Batch Processing** - Handle multiple files/inputs simultaneously
- **Real-time Validation** - Instant feedback and error detection
- **One-click Copy** - Copy results to clipboard with visual feedback
- **Drag & Drop Support** - Intuitive file handling for image converter
- **Progress Tracking** - Visual progress indicators for long operations
- **ZIP Download** - Bulk download converted files as compressed archives

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devaprakashpro/Webutilbox-.git
   cd Webutilbox-
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready for deployment.

## 🏗️ Project Structure

```
WebUtilBox/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Layout components (Navbar, Sidebar, etc.)
│   │   └── ui/            # UI primitives (Button, Card, etc.)
│   ├── pages/             # Page components for each tool
│   ├── providers/         # Context providers (Theme, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── main.tsx           # Application entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## 🛠️ Technology Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe JavaScript with enhanced developer experience
- **Vite 5.4.8** - Lightning-fast build tool and development server

### **UI & Styling**
- **Tailwind CSS 3.4.13** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI primitives
- **shadcn/ui** - Beautiful, customizable component library
- **Framer Motion 12.23.12** - Production-ready motion library

### **Icons & Graphics**
- **Lucide React 0.446.0** - Beautiful, customizable SVG icons
- **Custom SVG Icons** - Hand-crafted icons with animations
- **Gradient Effects** - CSS gradients and backdrop filters

### **Routing & Navigation**
- **React Router DOM 7.7.1** - Declarative routing for React
- **Animated Page Transitions** - Smooth page transitions with Framer Motion

### **State Management**
- **React Hooks** - Built-in state management with useState, useEffect
- **Context API** - Global state for theme and notifications

### **Development Tools**
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing and optimization

## 📱 Tool Documentation

### 🔧 **JSON Formatter**
- **Purpose**: Format, validate, and beautify JSON data
- **Features**:
  - Syntax highlighting with error detection
  - Pretty print with proper indentation
  - JSON validation with detailed error messages
  - Copy formatted JSON to clipboard
- **Use Cases**: API response formatting, configuration file validation

### 🔐 **Base64 Encoder/Decoder**
- **Purpose**: Encode and decode Base64 strings
- **Features**:
  - Text to Base64 encoding
  - Base64 to text decoding
  - Binary data support
  - Real-time conversion
- **Use Cases**: Data transmission, API authentication, file encoding

### 🛡️ **JWT Decoder**
- **Purpose**: Decode and inspect JSON Web Tokens
- **Features**:
  - Header, payload, and signature extraction
  - Claims visualization
  - Expiration time checking
  - Algorithm identification
- **Use Cases**: Token debugging, authentication troubleshooting

### 🔍 **Regex Tester**
- **Purpose**: Test regular expressions against text
- **Features**:
  - Real-time pattern matching
  - Group capture highlighting
  - Match count and positions
  - Common regex patterns library
- **Use Cases**: Pattern validation, text parsing, data extraction

### ⏰ **Cron Expression Tester**
- **Purpose**: Validate and test cron expressions
- **Features**:
  - Next execution time calculation
  - Human-readable descriptions
  - Multiple timezone support
  - Common cron patterns
- **Use Cases**: Task scheduling, automation setup

### 🎨 **Color Converter**
- **Purpose**: Convert between color formats
- **Features**:
  - HEX, RGB, HSL, CMYK support
  - Color picker integration
  - Live preview
  - Accessibility contrast checking
- **Use Cases**: Design systems, CSS development, brand guidelines

### 📅 **Timestamp Converter**
- **Purpose**: Convert UNIX timestamps to readable dates
- **Features**:
  - Multiple timezone support
  - Various date formats
  - Current timestamp generation
  - Batch conversion
- **Use Cases**: Log analysis, database queries, API development

### 🆔 **UUID Generator**
- **Purpose**: Generate unique identifiers
- **Features**:
  - UUID v4 generation
  - Batch generation (up to 100)
  - One-click copy
  - Format validation
- **Use Cases**: Database keys, API identifiers, unique references

### 🔗 **URL Encoder/Decoder**
- **Purpose**: Encode and decode URLs
- **Features**:
  - Query parameter handling
  - Special character encoding
  - Component-wise encoding
  - Validation and formatting
- **Use Cases**: API requests, form submissions, link generation

### #️⃣ **Hash Generator**
- **Purpose**: Generate cryptographic hashes
- **Features**:
  - MD5, SHA-1, SHA-256, SHA-512 support
  - File and text hashing
  - Batch processing
  - Hash comparison
- **Use Cases**: Data integrity, password hashing, file verification

### 🗄️ **SQL Formatter**
- **Purpose**: Format and beautify SQL queries
- **Features**:
  - Syntax highlighting
  - Proper indentation
  - Keyword capitalization
  - Query validation
- **Use Cases**: Database development, query optimization, documentation

### 🖼️ **Image Converter**
- **Purpose**: Convert images between formats
- **Features**:
  - PNG, JPG, WebP, BMP support
  - Quality adjustment for JPEG
  - Batch processing
  - Drag & drop interface
  - ZIP download for multiple files
  - Real-time preview
- **Use Cases**: Web optimization, format compatibility, batch processing

### ⚡ **Code Minifier**
- **Purpose**: Minify code for production
- **Features**:
  - JavaScript, CSS, HTML support
  - Whitespace removal
  - Comment stripping
  - Size reduction statistics
- **Use Cases**: Performance optimization, deployment preparation

## 🎨 UI Components & Design System

### **Layout Components**
- **Navbar** - Fixed header with navigation and theme toggle
- **Sidebar** - Collapsible navigation with tool categories
- **Animated Background** - Floating shapes and code patterns
- **Floating Chat** - Interactive help and feedback system

### **UI Primitives**
- **Cards** - Content containers with hover effects
- **Buttons** - Multiple variants (primary, secondary, ghost, outline)
- **Forms** - Input fields, selectors, sliders with validation
- **Modals** - Dialogs, sheets, and popover components
- **Notifications** - Toast messages with action buttons

### **Custom Icons**
- **DevTools Logo** - Animated layered logo with gradients
- **Tool Icons** - Custom SVG icons for each utility
- **Loading Spinners** - Animated loading states
- **Status Indicators** - Visual feedback for operations

### **Animations**
- **Page Transitions** - Smooth route changes
- **Hover Effects** - Interactive element responses
- **Loading States** - Progress indicators and spinners
- **Micro-interactions** - Button clicks, form submissions

## 🔧 Development

### **Available Scripts**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### **Environment Setup**

1. **Clone and install**
   ```bash
   git clone https://github.com/devaprakashpro/Webutilbox-.git
   cd Webutilbox-
   npm install
   ```

2. **Development workflow**
   ```bash
   npm run dev    # Start dev server
   # Make changes
   npm run lint   # Check code quality
   npm run build  # Test production build
   ```

### **Code Style**
- **TypeScript** - Strict type checking enabled
- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Code formatting (configured in ESLint)
- **Tailwind CSS** - Utility-first styling approach

### **Component Structure**
```typescript
// Example component structure
interface ComponentProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Component({ title, description, children }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 rounded-lg bg-card"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
      {children}
    </motion.div>
  );
}
```

## 📦 Dependencies

### **Core Dependencies**
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.7.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.8"
}
```

### **UI & Styling**
```json
{
  "tailwindcss": "^3.4.13",
  "@radix-ui/react-*": "^1.x.x",
  "framer-motion": "^12.23.12",
  "lucide-react": "^0.446.0",
  "class-variance-authority": "^0.7.0"
}
```

### **Utilities**
```json
{
  "jszip": "^3.10.1",
  "date-fns": "^4.1.0",
  "uuid": "^11.1.0",
  "zod": "^3.23.8"
}
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### **Netlify**
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable automatic deploys

### **GitHub Pages**
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### **Contribution Guidelines**
- Follow TypeScript best practices
- Add tests for new features
- Update documentation
- Follow existing code style
- Write clear commit messages

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Devaprakash**
- GitHub: [@devaprakashpro](https://github.com/devaprakashpro)
- Website: [Your Website](https://your-website.com)

## 🙏 Acknowledgments

- **Radix UI** - For accessible UI primitives
- **shadcn/ui** - For beautiful component designs
- **Tailwind CSS** - For utility-first styling
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **Vite** - For lightning-fast development

## 📊 Project Stats

- **13 Developer Tools** - Comprehensive utility collection
- **50+ UI Components** - Reusable component library
- **100% TypeScript** - Type-safe development
- **Mobile Responsive** - Works on all devices
- **Dark/Light Theme** - Accessible design
- **Zero Backend** - Pure frontend application

## 🔮 Roadmap

### **Upcoming Features**
- [ ] **API Testing Tool** - HTTP request testing
- [ ] **Markdown Editor** - Live preview markdown editor
- [ ] **QR Code Generator** - Generate QR codes for text/URLs
- [ ] **Password Generator** - Secure password generation
- [ ] **Text Diff Tool** - Compare text differences
- [ ] **CSV to JSON Converter** - Data format conversion
- [ ] **Lorem Ipsum Generator** - Placeholder text generation
- [ ] **Favicon Generator** - Generate favicons from images

### **Enhancements**
- [ ] **Offline Support** - PWA capabilities
- [ ] **Export/Import Settings** - User preferences backup
- [ ] **Keyboard Shortcuts** - Power user features
- [ ] **Plugin System** - Extensible architecture
- [ ] **Multi-language Support** - Internationalization

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

[Report Bug](https://github.com/devaprakashpro/Webutilbox-/issues) • [Request Feature](https://github.com/devaprakashpro/Webutilbox-/issues) • [Documentation](https://github.com/devaprakashpro/Webutilbox-/wiki)

</div>
