import { ErrorMessage } from '@src/display';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { VariantProps, cva } from 'class-variance-authority';
import { Icon } from '@iconify/react';
import classNames from 'classnames';

type CheckboxProps = {
  children: React.ReactNode;
  error?: React.ReactNode;
  value?: boolean;
  onChange?: (checked: RadixCheckbox.CheckedState) => void;
} & Omit<RadixCheckbox.CheckboxProps, 'value' | 'onChange'> &
  VariantProps<typeof checkboxClass>;

const checkboxClass = cva('ui-flex ui-gap-1 ui-text-body', {
  variants: {
    status: {
      normal: ['ui-text-neutral-50'],
      error: ['ui-text-error'],
    },
  },
});

export function Checkbox({
  children,
  error,
  name,
  value,
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <div>
      <div className="ui-flex ui-gap-2">
        <RadixCheckbox.Root
          checked={value}
          onCheckedChange={onChange}
          className={classNames(
            'ui-mt-1 ui-flex ui-aspect-square ui-h-4 ui-items-center ui-justify-center ui-rounded-sm ui-border',
            {
              'ui-border-error ui-text-error hover:ui-bg-error/10': !!error,
              'ui-border-neutral-50 ui-text-neutral-50 hover:ui-bg-slate-50/10':
                !error,
            },
          )}
          {...props}
        >
          <RadixCheckbox.Indicator>
            <Icon icon="typcn:tick" />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label
          htmlFor={name}
          className={checkboxClass({ status: error ? 'error' : 'normal' })}
        >
          {children}
        </label>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
