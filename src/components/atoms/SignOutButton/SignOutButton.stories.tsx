import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SignOutButton from "./SignOutButton";

export default {
  title: "Atoms/SignOutButton",
  component: SignOutButton,
} as Meta<typeof SignOutButton>;

const Template: StoryFn<typeof SignOutButton> = (args) => (
  <SignOutButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
