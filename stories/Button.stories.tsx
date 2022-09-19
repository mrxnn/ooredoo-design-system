import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/tokens/Button';
import { StarIcon } from '../src/assets/Icons';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});
export const Icon = Template.bind({});

Filled.args = {
  variant: 'filled',
  size: 'md',
  children: 'Button',
  className:
    'rounded-4xl border-[1px] border-cherry-200 text-white bg-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic',
};

Outline.args = {
  variant: 'outline',
  size: 'md',
  children: 'Button',
  className:
    'rounded-4xl border-[0.8px] border-cherry-200 text-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold not-italic',
};

Icon.args = {
  variant: 'outline',
  size: 'md',
  children: 'Button',
  icon: <StarIcon />,
  className:
    'rounded-4xl border-[0.8px] border-cherry-200 text-cherry-100 hover:opacity-80 font-rubik leading-[17px] font-semibold  flex justify-center place-items-center',
};
