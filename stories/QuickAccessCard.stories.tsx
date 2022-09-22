import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QuickAccessCard, Props } from '../src/components/QuickAccessCard';
const img = require('../static/icons/quick_access_icon.png');

const meta: Meta = {
  title: 'components/QuickAccessCard',
  component: QuickAccessCard,
};

export default meta;

const Template: Story<Props> = (args) => <QuickAccessCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: img,
  title: 'NOUDJOUM',
  description: 'Earn points and redeem rewards',
  extras: '1000 DA',
};
