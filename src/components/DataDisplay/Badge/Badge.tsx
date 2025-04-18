
import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'error'|'warning';
  size?: 'sm' | 'md';
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
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      role="status"
      aria-disabled={disabled}
    >
      {label}
    </span>
  );
};