import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, Props } from '../src/tokens/Dropdown';
import { ChevronIcon } from '../src/assets/Icons';

const meta: Meta = {
  title: 'design tokens/Dropdown',
  component: Dropdown,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = args => <Dropdown {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});
export const FlatIcon = Template.bind({});

Filled.args = {
  children: 'Dropdown',
  variant: 'filled',
  size: 'md',
  icon: <ChevronIcon />,
};

Outline.args = {
  children: 'Dropdown',
  variant: 'outline',
  size: 'md',
  icon: <ChevronIcon />,
};

FlatIcon.args = {
  children: 'Dropdown',
  variant: 'outline',
  size: 'md',
  icon: <ChevronIcon />,
};
