import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, Props } from '../src/tokens/Modal';

const meta: Meta = {
  title: 'design tokens/Modal',
  component: Modal,
  argTypes: {
    onClick: { action: 'clicked' },
    className: {
      defaultValue: 'px-8 py-2 rounded-full',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'filled',
  children: 'Modal',
};
