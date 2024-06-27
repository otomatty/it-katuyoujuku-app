import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TimeTracker from './TimeTracker';

export default {
  title: 'Molecules/TimeTracker',
  component: TimeTracker,
} as Meta<typeof TimeTracker>;

const Template: StoryFn<typeof TimeTracker> = (args) => (
  <TimeTracker {...args} />
);

export const Default = Template.bind({});
Default.args = {};
