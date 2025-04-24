import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'error'|'warning';
  size?: 'sm' | 'md' | 'large';
  disabled?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
}) => {
  const variantStyles = {
    primary: 'bg-[var(--primary-500)] text-[var(--neutral-50)]',
    success: 'bg-[var(--success)] text-[var(--neutral-50)]',
    error: 'bg-[var(--error)] text-[var(--neutral-50)]',
    warning: 'bg-[var(--warning)] text-[var(--neutral-50)]',
  };
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    large: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-300)]'
      }`}
      role="status"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {label}
    </span>
  );
};