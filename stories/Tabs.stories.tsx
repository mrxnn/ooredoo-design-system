import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, Props } from '../src/tokens/Tabs';


const meta: Meta = {
  title: 'design tokens/Tabs',
  component: Tabs,
  argTypes: {
    onClick: { action: 'clicked' },
    // test comment
    opticalTestMultiplier: {
      defaultValue: 0,
    },
    className: {
      defaultValue: 'px-8 py-[10px] rounded-full',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
