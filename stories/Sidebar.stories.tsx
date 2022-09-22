import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sidebar, Props, Item } from '../src/components/Sidebar';

const Icon = () => <>🤑</>;

const items: Item[] = [
  { name: 'Dashboard', href: '/dashboard', icon: <Icon />, isActive: false },
  {
    name: 'Bundles',
    href: '/bundles',
    icon: <Icon />,
    isActive: false,
    children: [
      {
        name: 'Exclusive Bundles',
        href: '/bundles/exclusive',
        isActive: true,
      },
      { name: 'Voice', href: '/bundles/voice', isActive: false },
      { name: 'Data', href: '/bundles/data', isActive: false },
      { name: 'Smart', href: '/bundles/smart', isActive: false },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Icon />,
    isActive: false,
  },
  {
    name: 'Noudjoum',
    href: '/noudjoum',
    icon: <Icon />,
    isActive: false,
  },
  {
    name: 'Support',
    href: '/support',
    icon: <Icon />,
    isActive: false,
    children: [
      { name: 'FAQ', href: '/support/faq', isActive: false },
      { name: 'Contact Us', href: '/support/contact', isActive: false },
    ],
  },
];

const meta: Meta = {
  title: 'components/Sidebar',
  component: Sidebar,
};

export default meta;

const Template: Story<Props> = args => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items,
};
