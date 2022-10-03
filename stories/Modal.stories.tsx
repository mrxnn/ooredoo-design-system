import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, Props } from '../src/tokens/Modal';
import { Button } from '../src/tokens/Button';

const img = require('../static/icons/modal.png');

const meta: Meta = {
  title: 'design tokens/Modal',
  component: Modal,
  argTypes: {
    onClick: { action: 'clicked' },
    className: {
      defaultValue:
        'px-8 py-2 rounded-lg border bg-primary-red text-white border-primary-red',
    },
    childrenBody: {
      defaultValue: (
        <div>
          <span className="mt-16 flex justify-center text-primary-red">
            <img src={img} alt="Image" />
          </span>
          <h1 className="mt-3.5 whitespace-pre-line text-center text-xl font-semibold leading-6">
            Your account has a default password
          </h1>
          <p className="mt-1 mb-7 whitespace-pre-line text-center font-notosans text-base font-normal leading-6 text-ash-300">
            Please set a new password to continue.
          </p>
          <div className="flex justify-center">
            <Button
              variant="filled"
              className="mt-2 h-[36px] w-[255px] rounded-3xl"
            >
              SET PASSWORD
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="mt-2 h-[36px] w-[255px] rounded-3xl"
            >
              CANCEL
            </Button>
          </div>
        </div>
      ),
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});

Filled.args = {
  variant: 'filled',
  children: 'Modal',
  image: img,
  content: 'Your account has a default\npassword',
  subContent: 'Please set a new password to continue.',
};

Outline.args = {
  variant: 'outline',
  children: 'Modal',
  image: img,
  content: `${`Your account has a default\npassword`}`,
  subContent: 'Please set a new password to continue.',
};
