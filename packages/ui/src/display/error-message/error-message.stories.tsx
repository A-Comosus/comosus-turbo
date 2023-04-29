import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorMessage } from './error-message.component';

export default {
  title: 'Display / Error Message',
  component: ErrorMessage,
  args: {
    children: 'This is some error!',
  },
} as ComponentMeta<typeof ErrorMessage>;

export const Default: ComponentStory<typeof ErrorMessage> = (args) => {
  return <ErrorMessage {...args} />;
};
