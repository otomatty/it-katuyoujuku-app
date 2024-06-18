import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CalendarEvents from "./CalendarEvents";

export default {
  title: "Molecules/CalendarEvents",
  component: CalendarEvents,
} as Meta<typeof CalendarEvents>;

const Template: StoryFn<typeof CalendarEvents> = (args) => (
  <CalendarEvents {...args} />
);

export const Default = Template.bind({});
Default.args = {};
