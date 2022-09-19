import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/tokens/Button';
import { StarIcon } from '../src/assets/Icons';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});
export const Icon = Template.bind({});

Filled.args = {
  variant: 'filled',
  size: 'md',
  children: 'Button',
};

Outline.args = {
  variant: 'outline',
  size: 'md',
  children: 'Button',
};

Icon.args = {
  variant: 'outline',
  size: 'md',
  children: 'Button',
  icon: <StarIcon />,
};
