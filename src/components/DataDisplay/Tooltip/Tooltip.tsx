// src/components/DataDisplay/Tooltip/Tooltip.tsx
import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'primary' | 'secondary' | 'error';
  disabled?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  variant = 'primary',
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: 'bottom-full mb-2 -translate-x-1/2 left-1/2',
    bottom: 'top-full mt-2 -translate-x-1/2 left-1/2',
    left: 'right-full mr-2 -translate-y-1/2 top-1/2',
    right: 'left-full ml-2 -translate-y-1/2 top-1/2',
  };

  const variantStyles = {
    primary: 'bg-[var(--primary-500)] text-[var(--neutral-50)]',
    secondary: 'bg-[var(--secondary-500)] text-[var(--neutral-50)]',
    error: 'bg-[var(--error)] text-[var(--neutral-50)]',
  };

  if (disabled) {
    return <div className="opacity-50 cursor-not-allowed">{children}</div>;
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0}
      role="tooltip"
      aria-describedby={isVisible ? 'tooltip-content' : undefined}
    >
      {children}
      {isVisible && (
        <div
          id="tooltip-content"
          className={`absolute z-10 px-3 py-2 text-sm rounded-md shadow-lg ${positionStyles[position]} ${variantStyles[variant]} transition-opacity duration-200 animate-fade-in max-w-xs`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};