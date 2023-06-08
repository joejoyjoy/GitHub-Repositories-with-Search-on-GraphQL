import type { Meta, StoryObj } from '@storybook/react';

import { HyperLink } from './HyperLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Component/HyperLink',
  component: HyperLink,
  tags: ['autodocs'],
} satisfies Meta<typeof HyperLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Click me',
  },
};
