import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Progress, Props } from '../src/tokens/Progress';

const meta: Meta = {
  title: 'design tokens/Progress',
  component: Progress,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (args) => <Progress {...args} />;

export const Default = Template.bind({});

Default.args = {
  progress: 60,
};
