'use client';

import * as React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

type ThemeSelection = 'light' | 'dark' | 'system';
type Resolved = 'light' | 'dark';

const getIcon = (
  effective: ThemeSelection,
  resolved: Resolved,
  modes: ThemeSelection[],
) => {
  const theme = modes.includes('system') ? effective : resolved;
  return theme === 'system' ? (
    <Monitor className="h-4 w-4" />
  ) : theme === 'dark' ? (
    <Moon className="h-4 w-4" />
  ) : (
    <Sun className="h-4 w-4" />
  );
};

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[],
): ThemeSelection => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<'button'> & {
  modes?: ThemeSelection[];
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
};

function ThemeTogglerButton({
  modes = ['light', 'dark'],
  isDarkMode,
  setIsDarkMode,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const currentTheme = isDarkMode ? 'dark' : 'light';
  const resolvedTheme = isDarkMode ? 'dark' : 'light';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    const nextTheme = getNextTheme(currentTheme, modes);
    setIsDarkMode(nextTheme === 'dark');
  };

  return (
    <button
      data-slot="theme-toggler-button"
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "h-10 w-10 relative overflow-hidden",
        isDarkMode 
          ? "bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-800" 
          : "bg-black border border-gray-600 hover:bg-gray-800 text-white",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div 
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out",
            isDarkMode ? "-translate-x-full" : "translate-x-0"
          )}
        >
          <Sun className={cn("h-4 w-4", isDarkMode ? "text-gray-800" : "text-white")} />
        </div>
        <div 
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out",
            isDarkMode ? "translate-x-0" : "translate-x-full"
          )}
        >
          <Moon className={cn("h-4 w-4", isDarkMode ? "text-gray-800" : "text-white")} />
        </div>
      </div>
    </button>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };
