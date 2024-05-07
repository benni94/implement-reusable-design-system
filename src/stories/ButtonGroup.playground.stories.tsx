import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import { ButtonGroup, IButtonGroupProps } from "../@components";
import { Figma, options1, options2 } from "../data";
import { StoryLayoutDecorator } from "./decorators/StoryLayout.decorator";

type Story = StoryObj<IButtonGroupProps<string>>;

type ViewOptionType = "list" | "grid";

const mockButtonGroups = () => {
  const [activeItem1, setActiveItem1] = useState<string>(options1[1].value);
  const [activeItem2, setActiveItem2] = useState<string>(options2[1].value);
  const [viewOption, setViewOption] = useState<ViewOptionType>("list");

  return (
    <>
      <div>
        <ButtonGroup
          activeOption={activeItem1}
          setActiveOption={setActiveItem1}
          options={options1}
        ></ButtonGroup>
      </div>
      <div>
        <ButtonGroup
          activeOption={activeItem2}
          setActiveOption={setActiveItem2}
          options={options2}
        ></ButtonGroup>
      </div>
      <div>
        <ButtonGroup
          activeOption={viewOption}
          setActiveOption={setViewOption}
          options={[
            { content: <FiList size={20} />, value: "list" },
            { content: <FiGrid size={20} />, value: "grid" },
          ]}
        ></ButtonGroup>
      </div>
    </>
  );
};

const meta: Meta<IButtonGroupProps<string>> = {
  args: {},
  argTypes: {},
  decorators: [
    (_, { args }) =>
      StoryLayoutDecorator(mockButtonGroups(), {
        ...args,
        className: "space-y-4",
      }),
  ],
  parameters: {
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
  title: "ButtonGroup/Playground",
};

export default meta;

export const Playground: Story = {};
