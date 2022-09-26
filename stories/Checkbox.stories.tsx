import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, Props } from '../src/tokens/Checkbox';
import { StarIcon } from '../src/assets/Icons';

const meta: Meta = {
  title: 'design tokens/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: { action: 'clicked' },
    // test comment
    opticalTestMultiplier: {
      defaultValue: 0,
    },
    className: {
      defaultValue: '',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {};
