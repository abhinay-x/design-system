import React, { useState, useRef, useEffect } from 'react';

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

  // If disabled, just render children without tooltip functionality
  if (disabled) return <>{children}</>;

  const tooltipId = useRef(`tooltip-${Math.random().toString(36).substr(2, 9)}`).current;
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Calculate position dynamically based on available space
  const getPositionStyles = () => {
    if (!triggerRef.current || !tooltipRef.current) return {};

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Default position is the requested one
    let finalPosition = position;

    // Check if tooltip would go off screen and adjust if needed
    if (position === 'top' && triggerRect.top < tooltipRect.height) {
      finalPosition = 'bottom';
    } else if (position === 'bottom' && triggerRect.bottom + tooltipRect.height > viewportHeight) {
      finalPosition = 'top';
    } else if (position === 'left' && triggerRect.left < tooltipRect.width) {
      finalPosition = 'right';
    } else if (position === 'right' && triggerRect.right + tooltipRect.width > viewportWidth) {
      finalPosition = 'left';
    }

    return {
      top: finalPosition === 'bottom' ? `${triggerRect.height}px` : '',
      bottom: finalPosition === 'top' ? `${triggerRect.height}px` : '',
      left: finalPosition === 'right' ? `${triggerRect.width}px` : '',
      right: finalPosition === 'left' ? `${triggerRect.width}px` : '',
    };
  };

  const [positionStyles, setPositionStyles] = useState({});

  useEffect(() => {
    if (isVisible) {
      setPositionStyles(getPositionStyles());
    }
  }, [isVisible]);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0}
        className="outline-none"
        aria-describedby={isVisible ? tooltipId : undefined}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          style={positionStyles as React.CSSProperties}
          className={`absolute z-10 px-3 py-2 text-sm rounded-md shadow-md
            opacity-0 scale-95 animate-tooltip-fade-in
            ${
              variant === 'primary' ? 'bg-[var(--primary-500)] text-white' : 'bg-[var(--neutral-900)] text-white'
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