import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { ReactElement, useCallback, useState } from "react";
import {
  FiAlertCircle,
  FiFileText,
  FiHelpCircle,
  FiMail,
} from "react-icons/fi";
import { ITextInputProps, TextInput } from "../@components/TextInput";
import { Figma } from "../data";
import { StoryLayoutDecorator } from "./decorators/StoryLayout.decorator";

type Story = StoryObj<typeof TextInput>;

const mockTextInput = (args: ITextInputProps) => {
  const [text, setText] = useState<string>(args.value);

  const handleChange = useCallback((value: string) => {
    setText(value);
    action("handleChange")(value);
  }, []);

  return (
    <>
      <div>
        <TextInput
          type="email"
          value={text}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          helperText="This is a hint text to help the user."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="email"
          value={text}
          handleChange={handleChange}
          label="Email"
          placeholder="veronica@example.com"
          error="This is an error message."
          LeadingIcon={<FiMail />}
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
      <div>
        <TextInput
          type="text"
          value={text}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          helperText="This is a hint text to help the user."
          TrailingIcon={<FiHelpCircle />}
          disabled={args.disabled}
        />
        <div className="mb-4" />
        <TextInput
          type="text"
          value={text}
          handleChange={handleChange}
          label="Website"
          placeholder="example.com"
          leadingText="https://"
          error="This is an error message."
          TrailingIcon={<FiAlertCircle />}
          disabled={args.disabled}
        />
      </div>
    </>
  );
};

const trailingIconValues: Record<"helper" | "error", ReactElement> = {
  helper: <FiHelpCircle />,
  error: <FiAlertCircle />,
};

const leadingIconValues: Record<
  "email" | "text" | "None",
  ReactElement | null
> = {
  email: <FiMail />,
  text: <FiFileText />,
  None: null,
};

const meta: Meta<typeof TextInput> = {
  args: {
    leadingText: "leading:",
    type: "text",
    handleChange: action("handleChange"),
    placeholder: "placeholder text",
  },
  argTypes: {
    LeadingIcon: {
      control: "radio",
      mapping: leadingIconValues,
      options: Object.keys(leadingIconValues),
    },
    TrailingIcon: {
      control: "radio",
      mapping: trailingIconValues,
      options: Object.keys(trailingIconValues),
    },
  },
  component: TextInput,
  parameters: {
    design: {
      type: "figma",
      url: Figma.TextInput,
    },
  },
  title: "TextInput/Playground",
};

export default meta;

export const Playground: Story = {
  decorators: [
    (Story, { args }) =>
      StoryLayoutDecorator(<div>{Story(args)}</div>, {
        className: "flex space-x8",
      }),
  ],
  parameters: {
    controls: {
      exclude: ["handleChange"],
    },
  },
};

export const PlaygroundTextInputs: Story = {
  decorators: [
    (_, { args }) =>
      StoryLayoutDecorator(mockTextInput(args), {
        className: "flex space-x-8",
      }),
  ],
  parameters: {
    controls: {
      exclude: [
        "value",
        "type",
        "handleChange",
        "label",
        "leadingText",
        "placeholder",
        "error",
        "helperText",
        "LeadingIcon",
        "TrailingIcon",
      ],
    },
  },
};
