import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  path?: string;
  gradient?: string;
  onClick?: () => void;
  className?: string;
}

export function ToolCard({
  title,
  description,
  icon: Icon,
  path,
  gradient,
  onClick,
  className
}: ToolCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={`cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br ${gradient || 'from-background to-background'} backdrop-blur-sm ${className || ''}`}
        onClick={handleClick}
      >
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <motion.div
                className="p-2 rounded-lg bg-primary/10 text-primary"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon size={24} />
              </motion.div>
            )}
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}