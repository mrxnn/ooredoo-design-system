import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, Props } from '../src/tokens/Modal';

const img = require('../static/icons/modal.png');

const meta: Meta = {
  title: 'design tokens/Modal',
  component: Modal,
  argTypes: {
    onClick: { action: 'clicked' },
    className: {
      defaultValue: 'px-8 py-2 rounded-lg',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});

Filled.args = {
  variant: 'filled',
  children: 'Modal',
  image: img,
  content: `${`Your account has a default\npassword`}`,
  subContent: 'Please set a new password to continue.',
};

Outline.args = {
  variant: 'outline',
  children: 'Modal',
  image: img,
  content: `${`Your account has a default\npassword`}`,
  subContent: 'Please set a new password to continue.',
};
