import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './button.component';

export default {
  title: 'Input / Button',
  component: Button,
  args: {
    children: 'Button',
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
    <Button variant="primary">Button</Button>
    <Button variant="accent">Button</Button>
    <Button variant="gradient">Button</Button>
  </Stack>
);

export const Sizes = () => (
  <Stack>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
  </Stack>
);

export const Disabled = () => (
  <Stack>
    <Button disabled variant="primary">
      Primary
    </Button>
    <Button disabled variant="accent">
      Accent
    </Button>
    <Button disabled variant="gradient">
      Accent
    </Button>
  </Stack>
);
