import { Meta, StoryObj } from "@storybook/react";
import { ColourBox } from "../@components/ColourBox";
import { Figma, colours } from "../data";
import { StoryLayoutDecorator } from "./decorators/StoryLayout.decorator";

type Story = StoryObj<typeof ColourBox>;

const mockColourBoxes = colours.map((colour) => (
  <ColourBox key={colour.bgClass} colour={colour} />
));

const meta: Meta<typeof ColourBox> = {
  component: ColourBox,
  decorators: [
    () =>
      StoryLayoutDecorator(mockColourBoxes, {
        className:
          "grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11",
      }),
  ],
  parameters: {
    design: {
      type: "figma",
      url: Figma.Colours,
    },
  },
  title: "Colours/Playground",
};

export default meta;

export const Playground: Story = {};
