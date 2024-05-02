import { Meta, StoryObj } from '@storybook/react';
import { StoryLayoutDecorator } from '../../.storybook/decorators/StoryLayout.decorator';
import { ExtendedStoryProps } from '../../.storybook/types';
import { ITypographyProps, Typography } from '../@components';
import { Figma } from '../data';
type ExtendedTypographyProps = ExtendedStoryProps<typeof Typography, { storyVariant: "heading" | "text" }>;


type Story = StoryObj<ExtendedTypographyProps>;

const headingCount: Extract<ITypographyProps["variant"], "h1" | "h2" | "h3" | "h4" | "h5" | "h6">[] = [
    "h1", "h2", "h3", "h4", "h5", "h6"
];

const mockTypographyHeadings = (args: ITypographyProps) => headingCount.map((heading, i) => <Typography key={i} {...args} variant={heading} >Display {heading}</Typography>);

const mockTypographyText = (args: ITypographyProps) => <Typography {...args}>{args.children}</Typography>;

const mockStorieVariants = ({ storyVariant, ...args }: ExtendedTypographyProps) => {
    if (storyVariant === "heading") {
        return mockTypographyHeadings(args);
    }
    return mockTypographyText(args);
};

const meta: Meta<ExtendedTypographyProps> = {
    args: {
        customWeight: "regular",
    },
    argTypes: {
        children: {
            control: "text"
        },
        storyVariant: {
            table: { disable: true }
        }
    },
    decorators: [
        (_, { args }) =>
            StoryLayoutDecorator(
                mockStorieVariants(args),
                {
                    className: "space-y-2"
                })],
    parameters: {
        design: {
            type: "figma",
            url: Figma.Typography
        }
    },
    title: 'Typography',
};

export default meta;

export const Headings: Story = {
    args: {
        storyVariant: "heading"
    },
    argTypes: {
        children: {
            table: { disable: true }
        },
        customWeight: {
            table: { disable: true }
        },
        variant: {
            table: { disable: true }
        }
    },
};

type TextVariantValueType = Extract<ITypographyProps["variant"], "xs" | "sm" | "md" | "lg" | "xl">
const TextVariantValues: Record<TextVariantValueType, TextVariantValueType> = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl"
};

type TextCustomWeightValueType = Extract<ITypographyProps["customWeight"], ITypographyProps["customWeight"]>
const CustomWeightValues: Record<keyof TextCustomWeightValueType, TextCustomWeightValueType> = {
    bold: "bold",
    medium: "medium",
    regular: "regular",
    semibold: "semibold"
};

export const Text: Story = {
    args: {
        children: "Text",
        customColour: "text-error-500 dark:text-warning-300",
        customWeight: "regular",
        storyVariant: "text",
    },
    argTypes: {
        customWeight: {
            control: "radio",
            mapping: CustomWeightValues,
            options: Object.keys(CustomWeightValues)
        },
        variant: {
            control: "radio",
            mapping: TextVariantValues,
            options: Object.keys(TextVariantValues)
        }
    }
};