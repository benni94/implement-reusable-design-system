import classNames from 'classnames';
import React, { ReactElement, memo } from 'react';

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";


export interface IBadgeProps {
    /**
     * The children of the component.
     */
    children: string | ReactElement;
    /**
     * The additional class name.
     */
    className?: string;
    /**
     * The preview icon at the start in the badge.
     */
    LeadingIcon?: ReactElement;
    /**
     * The icon at the end in the badge.
     */
    TrailingIcon?: ReactElement;
    /**
     * The size of the badge.
     * @default md
    */
    size?: BadgeSize;
    /**
     * The color variant of the badge.
     */
    variant: BadgeVariant;
}

const BADGE_PREFIX = "badge-";

/**
 * This styles depends on the global defined "tailwind.css" file. 
 * When hovering over the applied styles in the css file, you can see the real css definitions for the css class names. 
 */
const BadgeVariantClasses: Record<BadgeVariant, string> = {
    gray: `${BADGE_PREFIX}gray`,
    primary: `${BADGE_PREFIX}primary`,
    error: `${BADGE_PREFIX}error`,
    success: `${BADGE_PREFIX}success`,
    warning: `${BADGE_PREFIX}warning`
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
    sm: `${BADGE_PREFIX}sm`,
    md: `${BADGE_PREFIX}md`,
    lg: `${BADGE_PREFIX}lg`
};

/**
 * Dynamic component to render a icon if the component exists. 
 * Used the type of the component to create a JSX element with the component props.
 * 
 * @param className The class names to style the component.
 * @param Component The component to render.
 * @returns The component if exists.
 */
const DynamicBadgeIconComponent = (className: string, Component?: ReactElement) => Component ? <Component.type {...Component.props} className={className} /> : null;

export const Badge: React.FC<IBadgeProps> = memo(({ children, TrailingIcon, variant, className, LeadingIcon, size = "md" }) => {
    const BadgeVariantClassName = BadgeVariantClasses[variant];
    const BadgeSizeClassName = BadgeSizeClasses[size];

    console.log(BadgeVariantClassName,
        BadgeSizeClassName,);

    return (
        <div
            className={
                classNames(
                    "badge-base",
                    BadgeVariantClassName,
                    BadgeSizeClassName,
                    className
                )}
        >
            {DynamicBadgeIconComponent(classNames("mr-1.5", LeadingIcon?.props.className), LeadingIcon)}
            {children}
            {DynamicBadgeIconComponent(classNames("ml-1.5", TrailingIcon?.props.className), TrailingIcon)}
        </div>
    );
}); 