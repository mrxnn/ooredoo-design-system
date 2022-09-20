import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UsageCard, Props } from '../src/components/UsageCard';

const meta: Meta = {
  title: 'components/UsageCard',
  component: UsageCard,
};

export default meta;

const Template: Story<Props> = args => (
  <UsageCard {...args} className="w-[340px]" />
);

export const Default = Template.bind({});

Default.args = {
  icon: <div>🤑</div>,
  type: 'Purchases',
  title: 'Maxi Internet 1000',
  description: 'Free 020 + 15min Offnet',
  extras: 'Valid till 10-10-2023',
  titleColor: '#2ED5C5',
};
