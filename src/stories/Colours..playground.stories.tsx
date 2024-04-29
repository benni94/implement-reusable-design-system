import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoryLayoutDecorator } from '../../.storybook/decorators/StoryLayout.decorator';
import { ColourBox } from '../@components/ColourBox';
import { Figma, colours } from '../data';

type ExtendedColourProps = React.ComponentProps<typeof ColourBox> & { darkMode: boolean }

type Story = StoryObj<ExtendedColourProps>;

const mockColourBoxes = colours.map((colour) => (
    <ColourBox key={colour.bgClass} colour={colour} />
))

const meta: Meta<ExtendedColourProps> = {
    args: {
        darkMode: false,
    },
    argTypes: {},
    component: ColourBox,
    decorators: [
        (_, { args }) =>
            StoryLayoutDecorator(
                () => mockColourBoxes,
                {
                    ...args,
                    className: 'grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11'
                })],
    parameters: {
        controls: {
            expanded: true,
            sort: 'alpha'
        },
        design: {
            type: "figma",
            url: Figma.Colours
        }
    },
    title: 'Colours/Playground',
};

export default meta;

export const Playground: Story = {};
