import * as RadioGroup from '@radix-ui/react-radio-group';
import type { RadioGroupProps } from '@radix-ui/react-radio-group';
import classnames from 'classnames';

type ButtonGroupProps = {
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  label?: string;
} & RadioGroupProps;
export function ButtonGroup({
  options,
  onChange,
  label,
  ...props
}: ButtonGroupProps) {
  return (
    <div className="ui-flex ui-flex-col ui-gap-4">
      <span className="ui-text-body ui-font-semibold ui-capitalize ui-text-neutral-50">
        {label}
      </span>
      <RadioGroup.Root
        className="ui-flex ui-flex-wrap ui-gap-4"
        onValueChange={onChange}
        {...props}
      >
        {options.map(({ label, value }) => (
          <RadioGroup.Item
            className={classnames(
              'ui-box-border ui-rounded-full ui-bg-primary-500 ui-px-7 ui-py-2 ui-text-neutral-50',
              'hover:ui-shadow-inset-2 hover:ui-shadow-secondary-500',
              'data-[state=checked]:ui-bg-secondary-500',
            )}
            value={value}
            id={value}
          >
            <label
              className="ui-pointer-events-none ui-text-body ui-font-bold ui-capitalize"
              htmlFor={value}
            >
              {label}
            </label>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
