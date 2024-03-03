import type { Meta, StoryObj } from '@storybook/react';
import { Donate } from '../sections';

const meta = {
  title: 'Sections/Donate',
  component: Donate,
  parameters: {
    //   layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    image: { control: 'text' },
    button: {
      title: { control: 'text' },
      link: { control: 'text' },
    },
  },
} satisfies Meta<typeof Donate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'title',
    text: 'text',
    button: {
      title: 'string',
      link: '/',
    },
    image: '',
  },
};