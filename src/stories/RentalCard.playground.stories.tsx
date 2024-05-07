import { Meta, StoryObj } from "@storybook/react";
import { RentalCard } from "../@components";
import { IRental } from "../@interfaces";
import { Figma, rentals } from "../data";
import { StoryLayoutDecorator } from "./decorators/StoryLayout.decorator";
import { ExtendedStoryProps } from "./types";

type ExtendedTypographyProps = ExtendedStoryProps<
  typeof RentalCard,
  { rareFind: boolean; rentalAddress: string }
>;

type Story = StoryObj<ExtendedTypographyProps>;

const mockRentailCard = (args: ExtendedTypographyProps) => {
  const rentalIndex = rentals.findIndex(
    (rental) => rental.address === args.rentalAddress
  );

  // adjust badge based on rarefind
  const rental: IRental = {
    ...rentals[rentalIndex],
    badge: args.rareFind ? "Rare Find" : "",
  };

  return <RentalCard rental={rental} />;
};

const meta: Meta<ExtendedTypographyProps> = {
  args: {
    rentalAddress: rentals[0].address,
    rareFind: true,
  },
  argTypes: {
    rentalAddress: {
      control: "radio",
      mapping: rentals.map((rental) => rental.address),
      options: rentals.map((rental) => rental.address),
    },
  },
  component: RentalCard,
  decorators: [(_, { args }) => StoryLayoutDecorator(mockRentailCard(args))],
  parameters: {
    controls: {
      exclude: ["rental"],
    },
    design: {
      type: "figma",
      url: Figma.RentalCard,
    },
  },
  title: "RentalCard/Playground",
};

export default meta;

export const Playground: Story = {};
