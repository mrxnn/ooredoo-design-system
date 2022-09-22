import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OoredooCard, Props } from '../src/components/OoredooCard';
const img = require('../static/icons/ooredoo_card_img.png');

const meta: Meta = {
  title: 'components/OoredooCard',
  component: OoredooCard,
};

export default meta;

const Template: Story<Props> = (args) => <OoredooCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '100 DA BUNDLE',
  subtitle: 'FOR My ooredoo users',
  description: '+ Unlimited Youtube',
  label: '1 GB',
  image: img,
  className: 'bg-primary-teal',
};
