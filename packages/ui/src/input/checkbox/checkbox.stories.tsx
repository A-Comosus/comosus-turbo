import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './checkbox.component';

export default {
  title: 'Input / Checkbox',
  component: Checkbox,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam error, iure asperiores placeat obcaecati iusto nulla recusandae tenetur minima eos!',
    error: '',
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const HasError: ComponentStory<typeof Checkbox> = () => (
  <Checkbox error="You need to check this mate.">
    {
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam error, iure asperiores placeat obcaecati iusto nulla recusandae tenetur minima eos!'
    }
  </Checkbox>
);
