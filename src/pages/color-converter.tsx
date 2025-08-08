import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShareButton } from '@/components/ui/share-button';
import { Copy, Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ColorValues {
  hex: string;
  rgb: string;
  hsl: string;
  hslObject: { h: number; s: number; l: number };
}

export function ColorConverter() {
  const [inputColor, setInputColor] = useState('#3b82f6');
  const [colors, setColors] = useState<ColorValues | null>(null);
  const { toast } = useToast();

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number, s: number;
    const l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const convertColor = () => {
    try {
      let hex = inputColor;
      if (!hex.startsWith('#')) {
        hex = '#' + hex;
      }

      const rgb = hexToRgb(hex);
      if (!rgb) {
        throw new Error('Invalid hex color');
      }

      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

      setColors({
        hex: hex.toUpperCase(),
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        hslObject: hsl,
      });
    } catch (err) {
      toast({
        title: 'Conversion Error',
        description: 'Please enter a valid hex color (e.g., #FF5733 or FF5733)',
        variant: 'destructive',
      });
    }
  };

  const copyValue = (value: string, format: string) => {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Copied!',
      description: `${format} value copied to clipboard.`,
    });
  };

  const presetColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
            <Palette className="h-6 w-6 text-pink-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Color Converter</h1>
            <p className="text-muted-foreground">Convert between HEX, RGB, and HSL formats</p>
          </div>
        </div>
        <ShareButton toolName="Color Converter" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Input Color</CardTitle>
              <CardDescription>Enter a hex color value</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="#3b82f6 or 3b82f6"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    className="font-mono"
                  />
                </div>
                <div 
                  className="w-16 h-10 rounded-lg border-2 border-border" 
                  style={{ backgroundColor: inputColor.startsWith('#') ? inputColor : '#' + inputColor }}
                />
              </div>
              <Button onClick={convertColor} className="w-full">
                Convert Color
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="text-lg">Color Presets</CardTitle>
              <CardDescription>Click to use these preset colors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-3">
                {presetColors.map((color, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-lg border-2 border-border hover:scale-110 transition-transform cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => setInputColor(color)}
                    title={color}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="text-lg">Converted Values</CardTitle>
            <CardDescription>All color format representations</CardDescription>
          </CardHeader>
          <CardContent>
            {colors ? (
              <div className="space-y-4">
                <div className="w-full h-24 rounded-lg border-2 border-border" style={{ backgroundColor: colors.hex }} />
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div>
                      <p className="font-medium">HEX</p>
                      <code className="text-sm text-muted-foreground">{colors.hex}</code>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => copyValue(colors.hex, 'HEX')}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div>
                      <p className="font-medium">RGB</p>
                      <code className="text-sm text-muted-foreground">{colors.rgb}</code>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => copyValue(colors.rgb, 'RGB')}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div>
                      <p className="font-medium">HSL</p>
                      <code className="text-sm text-muted-foreground">{colors.hsl}</code>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => copyValue(colors.hsl, 'HSL')}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="text-sm font-medium mb-2">HSL Values:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Hue: {colors.hslObject.h}°</div>
                      <div>Saturation: {colors.hslObject.s}%</div>
                      <div>Lightness: {colors.hslObject.l}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Enter a hex color and click convert to see all format representations
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}