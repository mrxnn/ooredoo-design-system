import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VoiceBundle, Props } from '../src/components/VoiceBundle';

const meta: Meta = {
  title: 'components/VoiceBundle',
  component: VoiceBundle,
  argTypes: {
    icon: {
      control: false,
    },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <VoiceBundle {...args} className="w-[320px]" />
);

export const Default = Template.bind({});

Default.args = {
  icon: <div>🤑</div>,
  title: '2 hbeb',
  amount: '30DA',
  color: 'red',
  features: [
    {
      name: '020 Call',
      value: 'Free',
    },
    {
      name: 'Validity',
      value: '24 h',
    },
  ],
};
