import type { Meta, StoryObj } from '@storybook/react';
import { Subscribe } from '@phila-front/sections';
import { subscribe } from '@phila-front/mocks';

const meta = {
  title: 'Sections/Subscribe',
  component: Subscribe,
  parameters: {
    //   layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    image: {
      url: { control: 'text' },
      alt: { control: 'text' },
    },
    button: {
      title: { control: 'text' },
      link: { control: 'text' },
    },
  },
} satisfies Meta<typeof Subscribe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: subscribe,
};
