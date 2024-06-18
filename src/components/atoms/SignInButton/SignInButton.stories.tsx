import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SignInButton from "./SignInButton";

export default {
  title: "Atoms/SignInButton",
  component: SignInButton,
} as Meta<typeof SignInButton>;

const Template: StoryFn<typeof SignInButton> = (args) => (
  <SignInButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
