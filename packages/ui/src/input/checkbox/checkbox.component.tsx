import { ErrorMessage } from '@src/display';
import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

type CheckboxProps = {
  children: React.ReactNode;
  error?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof checkboxClass>;

const checkboxClass = cva('ui-flex ui-gap-1 ui-text-body', {
  variants: {
    status: {
      normal: ['ui-text-neutral-50'],
      error: ['ui-text-error'],
    },
  },
});

export function Checkbox({ children, error, name }: CheckboxProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className={checkboxClass({ status: error ? 'error' : 'normal' })}
      >
        <span className="ui-h-6 ui-w-6">
          <input type="checkbox" name={name} />
        </span>
        {children}
      </label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
