import * as RadixSwitch from '@radix-ui/react-switch';
import type { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

type SwitchProps = {
  onChange: (value: boolean) => void;
} & RadixSwitchProps;
export function Switch({ onChange, ...props }: SwitchProps) {
  return (
    <RadixSwitch.Root
      className="ui-h-6 ui-w-10 ui-rounded-full ui-bg-neutral-100 data-[state=checked]:ui-bg-tertiary-500"
      {...props}
      onCheckedChange={onChange}
    >
      <RadixSwitch.Thumb className="ui-block ui-h-4 ui-w-4 ui-translate-x-1 ui-rounded-full ui-bg-neutral-50 ui-p-1 ui-transition-transform ui-duration-100 data-[state=checked]:ui-translate-x-5" />
    </RadixSwitch.Root>
  );
}
