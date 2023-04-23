import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonGroup } from './button-group.component';

const defaultArgs = {
  label: 'select your industries',
  options: [
    {
      label: 'Technology',
      value: 'technology',
    },
    {
      label: 'Healthcare',
      value: 'healthcare',
    },
    {
      label: 'Education',
      value: 'education',
    },
    {
      label: 'Finance',
      value: 'finance',
    },
    {
      label: 'Retail',
      value: 'retail',
    },
    {
      label: 'Manufacturing',
      value: 'manufacturing',
    },
    {
      label: 'Hospitality',
      value: 'hospitality',
    },
    {
      label: 'Real Estate',
      value: 'real-estate',
    },
    {
      label: 'Media',
      value: 'media',
    },
    {
      label: 'Energy',
      value: 'energy',
    },
    {
      label: 'Transportation',
      value: 'transportation',
    },
    {
      label: 'Construction',
      value: 'construction',
    },
  ],
};

export default {
  title: 'Input / ButtonGroup',
  component: ButtonGroup,
  args: defaultArgs,
} as ComponentMeta<typeof ButtonGroup>;

export const Default: ComponentStory<typeof ButtonGroup> = (args) => {
  return <ButtonGroup {...args} />;
};
