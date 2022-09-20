import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Navbar, Props } from '../src/components/Navbar';

const meta: Meta = {
  title: 'Navbar',
  component: Navbar,
};

export default meta;

const Template: Story<Props> = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'border border-black/10 rounded-lg',
  activeHref: 'personal',
};
