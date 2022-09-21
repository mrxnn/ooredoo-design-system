import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchBox, Props } from '../src/components/SearchBox';

const meta: Meta = {
  title: 'components/SearchBox',
  component: SearchBox,
};

export default meta;

const Template: Story<Props> = args => (
  <SearchBox {...args} className="h-[42px] w-[307px]" />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Find...',
  buttonText: 'Search',
};
