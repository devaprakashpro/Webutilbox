# Contributing to DevTools Dashboard

Thank you for your interest in contributing to DevTools Dashboard! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/DevTools.git
   cd DevTools
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 Contribution Guidelines

### Code Style
- Use TypeScript for all new code
- Follow existing code formatting (ESLint + Prettier)
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Follow React best practices and hooks patterns

### Commit Messages
We use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(json-formatter): add syntax highlighting
fix(image-converter): resolve quality slider issue
docs(readme): update installation instructions
```

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feat/your-feature-name
   ```

6. **Create a Pull Request**
   - Use a clear, descriptive title
   - Provide detailed description of changes
   - Reference any related issues
   - Add screenshots for UI changes

## 🛠️ Development Guidelines

### Adding New Tools

1. **Create the tool component**
   ```typescript
   // src/pages/your-tool.tsx
   export function YourTool() {
     return (
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="space-y-6"
       >
         <Card>
           <CardHeader>
             <CardTitle>Your Tool</CardTitle>
             <CardDescription>Tool description</CardDescription>
           </CardHeader>
           <CardContent>
             {/* Tool implementation */}
           </CardContent>
         </Card>
       </motion.div>
     );
   }
   ```

2. **Add route to App.tsx**
   ```typescript
   <Route path="/your-tool" element={<YourTool />} />
   ```

3. **Add to dashboard tools array**
   ```typescript
   {
     title: 'Your Tool',
     description: 'Tool description',
     icon: YourIcon,
     path: '/your-tool',
     gradient: 'from-color-500/20 to-color-500/20',
   }
   ```

4. **Add to sidebar navigation**
   ```typescript
   { name: 'Your Tool', icon: YourIcon, path: '/your-tool' }
   ```

### UI Component Guidelines

- Use existing UI components from `src/components/ui/`
- Follow the established design system
- Ensure responsive design (mobile-first)
- Add proper accessibility attributes
- Use Framer Motion for animations
- Implement proper loading states

### Testing

- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify mobile responsiveness
- Test dark/light theme compatibility
- Validate accessibility with screen readers
- Test with various input sizes and edge cases

## 🎨 Design Guidelines

### Color Scheme
- Use CSS variables for colors
- Support both light and dark themes
- Follow the established color palette
- Ensure proper contrast ratios

### Typography
- Use the established font hierarchy
- Maintain consistent spacing
- Use semantic HTML elements

### Animations
- Keep animations subtle and purposeful
- Use Framer Motion for complex animations
- Ensure animations respect user preferences
- Test performance on lower-end devices

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the bug
3. **Expected behavior** vs actual behavior
4. **Screenshots** or videos if applicable
5. **Environment details**:
   - Browser and version
   - Operating system
   - Device type (desktop/mobile)

## 💡 Feature Requests

For new feature requests:

1. **Check existing issues** to avoid duplicates
2. **Provide clear use case** and rationale
3. **Include mockups** or detailed descriptions
4. **Consider implementation complexity**
5. **Discuss with maintainers** before starting work

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Radix UI Docs](https://www.radix-ui.com/)

## 🤝 Community

- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices
- Provide constructive feedback
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)

## 📄 License

By contributing to DevTools Dashboard, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to DevTools Dashboard! 🚀
