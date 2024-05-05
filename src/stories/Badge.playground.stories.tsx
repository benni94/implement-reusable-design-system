import { Meta, StoryObj } from "@storybook/react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { StoryLayoutDecorator } from "../../.storybook/decorators/StoryLayout.decorator";
import { Badge, IBadgeProps } from "../@components";
import { Figma, images } from "../data";

type Story = StoryObj<typeof Badge>;

const mockBadges = (args: IBadgeProps) => (
  <>
    <Badge {...args} LeadingIcon={<FiStar />}>
      {args.children}
    </Badge>

    <Badge
      {...args}
      LeadingIcon={<img src={images.NL} alt="nl" className="w-4 h-4" />}
    >
      {args.children}
    </Badge>

    <Badge {...args} TrailingIcon={<FiArrowRight />}>
      {args.children}
    </Badge>
  </>
);

const sizeValues: IBadgeProps["size"][] = ["lg", "md", "sm"];

const variantValues: IBadgeProps["variant"][] = [
  "error",
  "gray",
  "primary",
  "success",
  "warning",
];

const meta: Meta<typeof Badge> = {
  args: {
    children: "Label",
    size: "md",
    variant: "gray",
  },
  argTypes: {
    size: {
      control: "radio",
      options: sizeValues,
      mapping: sizeValues.map((size) => {
        size;
      }),
    },
    variant: {
      control: "radio",
      options: variantValues,
      mapping: variantValues.map((variant) => {
        variant;
      }),
    },
  },
  component: Badge,

  parameters: {
    design: {
      type: "figma",
      url: Figma.Badge,
    },
  },
  title: "Badge",
};

export default meta;

export const Playground: Story = {};

export const PlaygroundBadges: Story = {
  decorators: [
    (_, { args }) =>
      StoryLayoutDecorator(mockBadges(args), {
        className: "inline-flex flex-col space-y-2",
      }),
  ],
};
