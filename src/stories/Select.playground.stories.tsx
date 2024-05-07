import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FiCalendar, FiDollarSign } from "react-icons/fi";
import { Select } from "../@components/Select";
import { IOption } from "../@interfaces";
import { Figma, countries, dates, prices } from "../data";
import { StoryLayoutDecorator } from "./decorators/StoryLayout.decorator";

type Story = StoryObj<typeof Select>;

const mockSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState<IOption>(countries[0]);
  const [selectedDate, setSelectedDate] = useState<IOption>();
  const [selectedPrice, setSelectedPrice] = useState<IOption>();

  const handleSelectCountry = (countryValue: string) => {
    const country = countries.find((p) => p.value === countryValue) as IOption;
    setSelectedCountry(country);
  };

  const handleSelectDate = (dateValue: string) => {
    const date = dates.find((p) => p.value === dateValue) as IOption;
    setSelectedDate(date);
  };

  const handleSelectPrice = (priceValue: string) => {
    const price = prices.find((p) => p.value === priceValue) as IOption;
    setSelectedPrice(price);
  };

  return (
    <>
      <Select
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={handleSelectCountry}
        placeholder="Select a country"
        width="w-52"
      />

      <Select
        options={dates}
        LeadingIcon={<FiCalendar />}
        selectedOption={selectedDate}
        setSelectedOption={handleSelectDate}
        placeholder="Select a date"
        width="w-52"
      />

      <Select
        options={prices}
        LeadingIcon={<FiDollarSign />}
        selectedOption={selectedPrice}
        setSelectedOption={handleSelectPrice}
        placeholder="Select a price"
        width="w-52"
      />
    </>
  );
};

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    design: {
      type: "figma",
      url: Figma.Select,
    },
  },
  title: "Select/Playground",
};

export default meta;

export const Playground: Story = {
  decorators: [
    () =>
      StoryLayoutDecorator(mockSelect(), {
        className: "space-x-3 space-y-3",
      }),
  ],
};
