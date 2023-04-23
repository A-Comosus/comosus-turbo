import { TextareaHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { HiXCircle } from 'react-icons/hi';
import { ErrorMessage } from '@src/display';

type TextareaProps = {
  label?: React.ReactNode;
  error?: React.ReactNode;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<VariantProps<typeof textareaClass>, 'status'>;

const textareaClass = cva('ui-flex ui-font-semibold [&>span]:ui-font-normal', {
  variants: {
    variant: {
      outline: [
        'ui-p-0 ui-gap-4 ui-flex-col ui-border-b-0',
        '[&>span]:ui-rounded-2xl [&>span]:ui-border-2 [&>span]:ui-p-4',
      ],
    },
    status: {
      normal: ['ui-text-neutral-50 ui-border-neutral-50'],
      error: ['ui-text-error ui-border-error', '[&>span]:ui-border-error'],
    },
  },
});

export function Textarea({
  label,
  error,
  variant = 'outline',
  className,
  name,
  ...props
}: TextareaProps) {
  return (
    <div className="ui-flex ui-flex-col ui-gap-2">
      <label
        className={textareaClass({
          variant,
          status: error ? 'error' : 'normal',
        })}
        htmlFor={name}
      >
        {label}
        <span className="ui-flex ui-flex-1 ui-items-center ui-justify-between ui-gap-1">
          <textarea
            {...props}
            name={name}
            className="ui-flex-1 ui-bg-transparent ui-outline-none"
          />
          {error && <HiXCircle className="ui-h-6 ui-w-6" />}
        </span>
      </label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
