import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  onClick: () => alert("Button clicked"),
};
