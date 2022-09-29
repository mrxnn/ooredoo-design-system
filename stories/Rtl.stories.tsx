import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Rtl, Props } from '../src/tokens/Rtl';
const img = require('../static/icons/ooredoo_card_img.png');

const meta: Meta = {
  title: 'design tokens/Rtl',
  component: Rtl,
};

export default meta;

const Template: Story<Props> = (args) => <Rtl {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '100 DA BUNDLE',
  subtitle: 'FOR My ooredoo users',
  description: '+ Unlimited Youtube',
  label: '1 GB',
  image: img,
  className: 'bg-primary-teal',
  btnChild: 'Purchase',
};
