import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, Props } from '../src/tokens/Tabs';

const meta: Meta = {
  title: 'design tokens/Tabs',
  component: Tabs,
  argTypes: {
    onClick: { action: 'clicked' },
    // test comment
    opticalTestMultiplier: {
      defaultValue: 0,
    },
    className: {
      defaultValue: '',
    },
    tabs: {
      defaultValue: [
        {
          title: 'Offres Mobiles',
          value: 'tab1',
          children: <div>Tab1</div>,
        },
        {
          title: 'Internet',
          value: 'tab2',
          children: <div>Tab2</div>,
        },

        {
          title: 'Services',
          value: 'tab3',
          children: <div>Tab3</div>,
        },
        {
          title: 'Téléphones',
          value: 'tab4',
          children: <div>Tab4</div>,
        },
        {
          title: 'Assistance',
          value: 'tab5',
          children: <div>Tab5</div>,
        },
      ],
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
