import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TaskCalendar from './TaskCalendar';

export default {
  title: 'Molecules/TaskCalendar',
  component: TaskCalendar,
} as Meta<typeof TaskCalendar>;

const Template: StoryFn<typeof TaskCalendar> = (args) => (
  <TaskCalendar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
