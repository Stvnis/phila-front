import type { Meta, StoryObj } from '@storybook/react';
// import { Donate } from '@phila-front/sections';
import { Donate } from '../sections';

const meta = {
    title: 'Sections/Donate',
    component: Donate,
    parameters: {
    //   layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } satisfies Meta<typeof Donate>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    // args: {
    //   primary: true,
    //   label: 'Button',
    // },
  };