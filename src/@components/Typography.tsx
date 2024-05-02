import classNames from 'classnames';
import React, { ReactNode, createElement } from 'react';

export type TypographyVariants =
    // Text
    "xs" | "sm" | "md" | "lg" | "xl" |
    //Display
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyWeightOptions = "regular" | "medium" | "semibold" | "bold";

type TypographyWeightValue = "font-normal" | "font-medium" | "font-semibold" | "font-bold";



export interface ITypographyProps {
    children: string | ReactNode;
    className?: string;
    customColour?: string;
    customWeight?: TypographyWeightOptions;
    variant?: TypographyVariants;
}

const TypographyVariantClasses: Record<TypographyVariants, string> = {
    //Text
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    //Display
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    h5: "text-h5",
    h6: "text-h6",
};

const TypographyWeightClasses: Record<TypographyWeightOptions, TypographyWeightValue> = {
    bold: "font-bold",
    medium: "font-medium",
    regular: "font-normal",
    semibold: "font-semibold"
};

/**
 * Typeguard to indicate, wheter the given element is a valid JSX element or not. 
 * 
 * @param element String value which contains a possible jsx element.
 * @returns `true` if the element is a key of the JSX IntrinsicElements. False otherwise.
 */
function isValidJSXElement(element: string): element is keyof JSX.IntrinsicElements {
    return React.isValidElement(createElement(element));
}


export const Typography: React.FC<ITypographyProps> = ({ children, className, customColour, customWeight = "regular", variant = "md" }) => {
    const TypographyVariantClassName = TypographyVariantClasses[variant];
    const TypographyWeightClassName = TypographyWeightClasses[customWeight];

    // h1-h6 should have corresponding component
    const isHeading = variant.startsWith("h");
    // the others should be p 
    const Component = (isHeading ? variant : "p");

    if (!isValidJSXElement(Component)) return null;

    return <Component className={classNames(
        TypographyVariantClassName,
        TypographyWeightClassName,
        className, {
        "tracking-tight": ["h1", "h2", "h3"].includes(variant),
        "text-gray-900 dark:text-white": !customColour,
    },
        customColour
    )}>
        {children}
    </Component>;
};