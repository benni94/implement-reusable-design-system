import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { StoryLayoutDecorator } from "../../.storybook/decorators/StoryLayout.decorator";
import { SideNav } from "../@components/Nav";
import { Figma, navItemsBottom, navItemsTop } from "../data";

type Story = StoryObj<typeof SideNav>;

const mockSideNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <SideNav
      navItemsTop={navItemsTop}
      navItemsBottom={navItemsBottom}
      open={open}
      setOpen={setOpen}
      username="Veronica Woods"
      email="veronica@example.com"
    />
  );
};

const meta: Meta<typeof SideNav> = {
  component: SideNav,
  decorators: [
    (_, { args }) =>
      StoryLayoutDecorator(mockSideNav(), {
        ...args,
        className: "flex flex-col h-screen",
        noPadding: true,
      }),
  ],
  parameters: {
    design: {
      type: "figma",
      url: Figma.Navbar,
    },
  },
  title: "Navigation/SideNav/Playground",
};

export default meta;

export const Playground: Story = {};
