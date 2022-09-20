import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchBox, Props } from '../src/components/SearchBox';

const meta: Meta = {
  title: 'SearchBox',
  component: SearchBox,
};

export default meta;

const Template: Story<Props> = args => (
  <SearchBox {...args} className="w-[307px] h-[42px]" />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: '',
  buttonText: 'Search',
};
