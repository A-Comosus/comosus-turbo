import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput } from './text-input.component';
import { FiImage } from 'react-icons/fi';

export default {
  title: 'Input / TextInput',
  component: TextInput,
  args: {
    label: 'Label',
    error: '',
  },
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStory<typeof TextInput> = (args) => (
  <TextInput label="Label" placeholder="Placeholder" {...args} />
);

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <TextInput label={<FiImage />} placeholder="Placeholder" variant="inline" />
    <TextInput label="Label" placeholder="Placeholder" variant="labeled" />
    <TextInput label="Label" placeholder="Placeholder" variant="outline" />
  </div>
);

export const HasError = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <TextInput
      label={<FiImage />}
      placeholder="Placeholder"
      variant="inline"
      defaultValue="BUUUUUUURRRRRRR"
      error="Invalid input value"
    />
    <TextInput
      label="Label"
      placeholder="Placeholder"
      variant="labeled"
      defaultValue="BUUUUUUURRRRRRR"
      error="Invalid input value"
    />
    <TextInput
      label="Label"
      placeholder="Placeholder"
      variant="outline"
      defaultValue="BUUUUUUURRRRRRR"
      error="Invalid input value"
    />
  </div>
);
