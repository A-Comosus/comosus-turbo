import React, { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

type ButtonProps = {
  children: string;
  isDisabled?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

const button = cva('ui-text-white ui-rounded-lg ui-px-3', {
  variants: {
    variant: {
      primary: [
        'ui-bg-[#55698C] ui-font-semibold',
        'hover:ui-bg-[#3E4C65]',
        'active:ui-bg-[#364154]',
      ],
      accent: [
        'ui-bg-accent-button ui-shadow-button ui-font-bold',
        'hover:ui-bg-accent-button-hover hover:ui-shadow-button',
        'active:ui-bg-accent-button-active active:ui-shadow-button',
      ],
      gradient: [
        'ui-bg-gradient-button ui-font-bold',
        'hover:ui-shadow-gradient-button-hover',
        'active:ui-shadow-gradient-button-active',
      ],
    },
    size: {
      sm: 'ui-h-14',
      md: 'ui-h-10',
      lg: 'ui-h-8',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={button({ className, variant, size })}>
      {children}
    </button>
  );
}
