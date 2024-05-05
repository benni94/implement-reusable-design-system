import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "../@components";
import { Figma } from "../data";

type Story = StoryObj<typeof Pagination>;

const meta: Meta<typeof Pagination> = {
  args: {
    isMobile: true,
  },
  argTypes: {
    isMobile: {
      control: "boolean",
    },
    totalPages: {
      control: { type: "range", min: 1, max: 20 },
    },
  },
  component: Pagination,
  parameters: {
    design: {
      type: "figma",
      url: Figma.Paginate,
    },
  },
  title: "Pagination/Playground",
};

export default meta;

export const Playground: Story = {
  render: (args) => {
    const [page, setPage] = useState(0);
    return (
      <Pagination
        {...args}
        page={page}
        isMobile={args.isMobile}
        setPage={setPage}
      />
    );
  },
};
