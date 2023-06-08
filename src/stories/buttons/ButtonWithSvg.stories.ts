import type { Meta, StoryObj } from '@storybook/react';

import { ButtonSvg } from './ButtonWithSvg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/ButtonSvg',
  component: ButtonSvg,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Active: Story = {
  args: {
    active: true,
    label: 'Button',
  },
};

export const InActive: Story = {
  args: {
    label: 'Button',
  },
};