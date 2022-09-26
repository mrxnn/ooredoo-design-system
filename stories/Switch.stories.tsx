import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, Props } from '../src/tokens/Switch';

const meta: Meta = {
  title: 'design tokens/Switch',
  component: Switch,
  argTypes: {
    className: {
      defaultValue: '',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {};
