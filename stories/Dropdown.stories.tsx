import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps } from '../src/tokens/Dropdown';
import { ChevronDownIcon, StarIcon } from '../src/assets/Icons';

const meta: Meta = {
  title: 'design tokens/Dropdown',
  component: Dropdown,
  argTypes: {
    onClick: { action: 'clicked' },
    onSelect: { action: 'clicked' },
    className: {
      defaultValue: 'px-4 py-2 rounded-lg',
    },
  },
};

export default meta;

const Template: Story<DropdownProps> = args => <Dropdown {...args} />;

export const Filled = Template.bind({});

export const Outline = Template.bind({});

export const Flat = Template.bind({});

Filled.args = {
  variant: 'filled',
  children: 'Dropdown',
  leftIcon: <StarIcon />,
  RightIcon: <ChevronDownIcon />,
  items: [
    { id: 1, name: 'item 001' },
    { id: 2, name: 'item 002' },
  ],
};

Outline.args = {
  variant: 'outline',
  children: 'Dropdown',
  leftIcon: <StarIcon />,
  RightIcon: <ChevronDownIcon />,
  items: [
    { id: 1, name: 'item 001' },
    { id: 2, name: 'item 002' },
  ],
};

Flat.args = {
  variant: 'flat',
  children: 'Dropdown',
  leftIcon: <StarIcon />,
  RightIcon: <ChevronDownIcon />,
  items: [
    { id: 1, name: 'item 001' },
    { id: 2, name: 'item 002' },
  ],
};
