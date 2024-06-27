import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TimeManagement from './TimeManagement';

export default {
  title: 'Organisms/TimeManagement',
  component: TimeManagement,
} as Meta<typeof TimeManagement>;

const Template: StoryFn<typeof TimeManagement> = (args) => (
  <TimeManagement {...args} />
);

export const Default = Template.bind({});
Default.args = {};
