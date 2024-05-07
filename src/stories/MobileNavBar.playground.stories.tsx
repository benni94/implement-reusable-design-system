import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { MobileNavbar, SideNav } from "../@components/Nav";
import { navItemsBottom, navItemsTop } from "../data";
import { StoryLayoutDecorator } from "./decorators/StoryLayout.decorator";

type Story = StoryObj<typeof MobileNavbar>;

const mockMobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <MobileNavbar open={open} toggleOpen={handleToggle} />
      {open && (
        <div
          className="fixed top-0 left-0 z-40 w-screen h-screen bg-gray-500 cursor-pointer bg-opacity-80"
          onClick={() => setOpen(false)}
        >
          <FiX size={40} className="fixed text-white top-5 right-9" />
        </div>
      )}

      {open && (
        <SideNav
          className="relative z-50 h-screen -mt-20"
          navItemsTop={navItemsTop}
          navItemsBottom={navItemsBottom}
          open={true}
          setOpen={handleToggle}
          username="Veronica Woods"
          email="veronica@example.com"
        />
      )}
    </>
  );
};

const meta: Meta<typeof MobileNavbar> = {
  component: MobileNavbar,
  decorators: [() => StoryLayoutDecorator(mockMobileNavbar())],
  parameters: { controls: { expanded: true, sort: "alpha" } },
  title: "Navigation/MobileNavbar/Playground",
};

export default meta;

export const Playground: Story = {};
