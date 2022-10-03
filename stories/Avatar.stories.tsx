import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, Props } from '../src/tokens/Avatar';

const meta: Meta = {
  title: 'design tokens/Avatar',
  component: Avatar,
  argTypes: {
    className: {
      defaultValue: '',
    },

    renderInvalidUrls: {
      defaultValue: false,
    },
    isOnline: {
      defaultValue: false,
    },
    value: {
      defaultValue: 'MR',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
