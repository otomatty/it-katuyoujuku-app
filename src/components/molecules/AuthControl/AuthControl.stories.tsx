import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AuthControl from "./AuthControl";

export default {
  title: "Molecules/AuthControl",
  component: AuthControl,
} as Meta<typeof AuthControl>;

const Template: StoryFn<typeof AuthControl> = (args) => (
  <AuthControl {...args} />
);

export const Default = Template.bind({});
Default.args = {};
