import type { Meta, StoryObj } from '@storybook/react';
import { about } from '@phila-front/mocks';
import { About } from '@phila-front/sections';

const meta = {
  title: 'Sections/About',
  component: About,
  parameters: {
    //   layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    button: {
      title: { control: 'text' },
      link: { control: 'text' },
    },
    images: [
        {
            url: { control: 'text' },
            alt: { control: 'text' },
          },
          {
            url: { control: 'text' },
            alt: { control: 'text' },
          },
          {
            url: { control: 'text' },
            alt: { control: 'text' },
          },
    ],
  },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: about,
};
