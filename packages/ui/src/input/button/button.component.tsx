import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

type ButtonProps = {
  children: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

const button = cva('ui-rounded-lg ui-px-3 ui-text-white', {
  variants: {
    variant: {
      primary: [
        'ui-bg-primary-500 ui-font-semibold ui-transition-all',
        'hover:ui-bg-primary-400',
        'active:ui-bg-primary-500',
        ' disabled:ui-bg-primary-300 disabled:ui-text-neutral-50/80',
      ],
      accent: [
        'ui-shadow-button ui-bg-secondary-500 ui-font-bold ui-transition-all ui-duration-150',
        'hover:ui-bg-secondary-400 hover:ui-shadow-md hover:ui-shadow-secondary-400',
        'active:ui-shadow-button active:ui-bg-secondary-600 active:ui-shadow-secondary-600',
        'disabled:ui-bg-secondary-300 disabled:ui-text-neutral-50/80 disabled:ui-shadow-none',
      ],
      gradient: [
        'ui-bg-gradient-vertical-500 ui-font-bold ui-shadow-glow-md ui-shadow-primary-600',
        'hover:ui-bg-gradient-vertical-400 hover:ui-shadow-glow-lg hover:ui-shadow-primary-500 ',
        'active:ui-bg-gradient-vertical-500 active:ui-shadow-glow-md active:ui-shadow-primary-600',
        'disabled:ui-bg-gradient-vertical-300 disabled:ui-text-neutral-50/80 disabled:ui-shadow-none',
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
