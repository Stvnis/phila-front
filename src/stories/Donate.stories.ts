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
    slogan: { control: 'text' },
    text: { control: 'text' },
    images: { control: 'object' },
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
    title: 'slogan1',
    slogan: 'slogan1',
    text: 'text1',
    button: {
      title: 'string',
      link: '/',
    },
    images: [],
  },
};