import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});

Filled.args = {
  variant: 'filled',
  children: 'Button',
};

Outline.args = {
  variant: 'outline',
  children: 'Button',
};
