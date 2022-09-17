import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchBox, Props } from '../src/SearchBox';

const meta: Meta = {
  title: 'SearchBox',
  component: SearchBox,
};

export default meta;

export const Default = () => (
  <SearchBox placeholder="Search" buttonText="Search" className="w-60" />
);
