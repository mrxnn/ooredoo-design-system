import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Filled = () => <Button variant="filled">CLICK ME</Button>;
export const Outline = () => <Button variant="outline">CLICK ME</Button>;
