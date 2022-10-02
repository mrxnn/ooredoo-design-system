import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, Props } from '../src/tokens/Select';
import { StarIcon } from '../src/assets/Icons';

const meta: Meta = {
  title: 'design tokens/Select',
  component: Select,
  argTypes: {
    onClick: { action: 'clicked' },
    // test comment
    opticalTestMultiplier: {
      defaultValue: 0,
    },
    className: {
      defaultValue: 'px-8 py-[10px] rounded-full',
    },
    items: {
      defaultValue: ['eng', 'afg', 'chn', 'ind', 'pak'],
    },
    defaultValue: {
      defaultValue: 'eng',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Default = Template.bind({});
