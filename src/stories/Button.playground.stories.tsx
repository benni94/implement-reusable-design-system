import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { StoryLayoutDecorator } from "../../.storybook/decorators/StoryLayout.decorator";
import { Button, IButtonProps } from "../@components";
import { Figma } from "../data";

type Story = StoryObj<typeof Button>;

const mockButton = (args: IButtonProps) => {
  return (
    <>
      <Button {...args} className="space-y-2">
        Button CTA
      </Button>

      <Button {...args} LeadingIcon={<FiStar />}>
        Button CTA
      </Button>

      <Button {...args} TrailingIcon={<FiArrowRight />}>
        Button CTA{" "}
      </Button>

      <Button {...args} IconOnly={<FiArrowRight />} />
    </>
  );
};

const sizeValues: IButtonProps["size"][] = [
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  undefined,
];

const variantValues: IButtonProps["variant"][] = [
  "primary",
  "secondary",
  "secondaryGray",
  "tertiary",
  "tertiaryGray",
];

// const iconOnlyValues: IButtonProps["IconOnly"][] = [{ type: <FiArrowRight /> }];

const meta: Meta<typeof Button> = {
  args: {
    variant: "primary",
    onClick: action("onButtonClicked"),
  },
  argTypes: {
    children: {
      type: "string",
    },
    IconOnly: {
      table: { disable: true },
    },
    LeadingIcon: {
      table: { disable: true },
    },
    size: {
      control: "radio",
      mapping: sizeValues.map((size) => {
        size;
      }),
      options: sizeValues,
    },
    TrailingIcon: {
      table: { disable: true },
    },
    variant: {
      control: "radio",
      mapping: variantValues.map((variant) => {
        variant;
      }),
      options: variantValues,
    },
  },
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: Figma.Button,
    },
  },
  title: "Button",
};

export default meta;

export const PlaygroundButton: Story = {
  args: {
    children: "Button only",
  },
};

export const FourTypes: Story = {
  decorators: [
    (_, { args }) =>
      StoryLayoutDecorator(mockButton(args), {
        className: "space-y-2",
      }),
  ],
};
