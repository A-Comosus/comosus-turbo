import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './button.component';

export default {
  title: 'Input / Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'md',
  },
} as ComponentMeta<typeof Button>;

function Stack({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '20rem',
      }}
    >
      {children}
    </div>
  );
}

export const Default: ComponentStory<typeof Button> = (args) => (
  <Stack>
    <Button {...args} />
  </Stack>
);

export const Variants = () => (
  <Stack>
    <Button variant="primary">Primary</Button>
    <Button variant="accent">Accent</Button>
  </Stack>
);

export const Sizes = () => (
  <Stack>
    <Button size="lg">Button</Button>
    <Button size="md">Button</Button>
    <Button size="sm">Button</Button>
  </Stack>
);

export const Disabled = () => (
  <Stack>
    <Button isDisabled variant="primary">
      Primary
    </Button>
    <Button isDisabled variant="accent">
      Accent
    </Button>
  </Stack>
);
