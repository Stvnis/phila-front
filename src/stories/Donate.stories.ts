import type { Meta, StoryObj } from '@storybook/react';
import { donate } from '@phila-front/mocks';
import { Donate } from '@phila-front/sections';

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
    button: {
      title: { control: 'text' },
      link: { control: 'text' },
    },
    image: {
      url: { control: 'text' },
      alt: { control: 'text' },
    },
  },
} satisfies Meta<typeof Donate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: donate,
};
