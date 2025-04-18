import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
  variant?: 'primary' | 'neutral';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  disabled = false,
  variant = 'primary',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  if (disabled) return <>{children}</>;

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0}
        className="outline-none"
        role="tooltip"
        aria-describedby="tooltip-content"
      >
        {children}
      </div>
      {isVisible && (
        <div
          id="tooltip-content"
          className={`absolute z-10 px-3 py-2 text-sm rounded-md shadow-md ${
            variant === 'primary' ? 'bg-primary-500 text-white' : 'bg-neutral-900 text-white'
          } ${position === 'top' ? 'bottom-full mb-2' : ''} ${
            position === 'bottom' ? 'top-full mt-2' : ''
          } ${position === 'left' ? 'right-full mr-2' : ''} ${
            position === 'right' ? 'left-full ml-2' : ''
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};