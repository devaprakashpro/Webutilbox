import { motion } from 'framer-motion';
import { FloatingShapes, CodePattern } from '@/components/ui/svg-background';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* SVG Background Patterns */}
      <FloatingShapes />
      <CodePattern />
      {/* 3D Animated geometric shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotateZ: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full opacity-40"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-12 h-12 border-2 border-accent/30 opacity-50"
        animate={{ 
          y: [0, -15, 0],
          rotateZ: [0, 90, 180, 270, 360],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-40 w-24 h-24 border border-muted/20 rounded-lg opacity-30"
        animate={{ 
          y: [0, -25, 0],
          rotateY: [0, 180, 360],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated code-themed elements */}
      <motion.div 
        className="absolute top-60 left-1/3 text-6xl font-mono text-primary/10 select-none"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'{}'}
      </motion.div>
      <motion.div 
        className="absolute bottom-60 right-1/3 text-4xl font-mono text-accent/10 select-none"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1],
          rotateZ: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'</>'}
      </motion.div>
      
      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Gradient waves */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}