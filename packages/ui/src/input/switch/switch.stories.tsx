import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from './switch.component';

export default {
  title: 'Input / Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args) => (
  <Switch {...args} />
);
