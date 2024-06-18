import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MainLayout from "./MainLayout";

export default {
  title: "Layouts/MainLayout",
  component: MainLayout,
} as Meta<typeof MainLayout>;

const Template: StoryFn<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>AuthControl Component</p>
      <p>CalendarEvents Component</p>
    </>
  ),
};
