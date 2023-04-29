import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Textarea } from './textarea.component';

export default {
  title: 'Input / Textarea',
  component: Textarea,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    error: '',
  },
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const HasError: ComponentStory<typeof Textarea> = () => (
  <Textarea
    label="Label"
    placeholder="Placeholder"
    defaultValue={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad consectetur doloribus recusandae quidem? Perferendis necessitatibus quae illo voluptate corporis labore eum assumenda odio reiciendis sapiente, nisi similique pariatur quo, minus voluptatum? Voluptates magni nulla alias! Provident voluptatum accusantium reiciendis, perferendis nisi obcaecati aliquam quae porro, quam corporis consequuntur ullam.\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur aut quam sapiente, illo atque laborum id itaque possimus odit aspernatur quibusdam nisi aliquam hic vitae aperiam maxime delectus rerum qui, reiciendis non voluptate voluptatibus alias quisquam? Nostrum eligendi excepturi officia ex soluta libero illum deserunt quasi optio, reprehenderit recusandae ducimus numquam nemo maxime officiis necessitatibus inventore dignissimos, magnam dolores blanditiis repudiandae quod. Enim ab rerum, aspernatur praesentium architecto maiores sapiente, officiis ex voluptatum reiciendis accusamus accusantium? Officia, cumque doloremque! Obcaecati atque voluptates quod molestiae veritatis maiores. At, deleniti odit. Quidem natus explicabo earum, atque vero vel quos quas doloribus laborum.`}
    error="Invalid textarea value"
  />
);
