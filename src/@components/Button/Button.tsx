import classNames from 'classnames';
import { ReactElement, memo } from 'react';
import { ButtonIconSizeClasses, ButtonSizeClasses, ButtonVariantClasses } from './Button.classes';
import { IButtonProps } from './Button.types';

const BUTTON_SIZE = 20;
const BUTTON_SIZE_2XL = 24;

/**
 * Dynamic component to render a icon if the component exists. 
 * Used the type of the component to create a JSX element with the component props.
 * 
 * @param className The class names to style the component.
 * @param Component The component to render.
 * @returns The component if exists.
 */
const DynamicIconButtonComponent = (Component?: ReactElement, styles?: { className?: string, size?: number }) => Component ? <Component.type {...Component.props} className={styles?.className} size={styles?.size} /> : null;

export const Button: React.FC<IButtonProps> = memo(({
    className,
    children,
    disabled,
    IconOnly,
    LeadingIcon,
    size: buttonSize = "md",
    TrailingIcon,
    variant,
    ...buttonProps
}) => {

    const ButtonVariantClassName = ButtonVariantClasses[variant];
    const ButtonIconSizeClassName = ButtonIconSizeClasses[buttonSize];

    return (
        <button
            {...buttonProps}
            className={
                classNames("btn-base", className, {
                    [ButtonSizeClasses[buttonSize]]: !IconOnly,
                    [classNames(ButtonIconSizeClassName, "justify-center")]: IconOnly,
                    [classNames(
                        ButtonVariantClassName.default,
                        ButtonVariantClassName.hover,
                        ButtonVariantClassName.focus
                    )]: !disabled,
                    [classNames(ButtonVariantClassName.disabled, "cursor-not-allowed")]: disabled
                }
                )}
        >
            {DynamicIconButtonComponent(
                LeadingIcon,
                {
                    className: classNames({
                        "mr-2": buttonSize !== "2xl",
                        "mr-3": buttonSize === "2xl"
                    })
                },
            )}
            {children}
            {DynamicIconButtonComponent(IconOnly, { size: buttonSize === "2xl" ? BUTTON_SIZE_2XL : BUTTON_SIZE })}
            {DynamicIconButtonComponent(
                TrailingIcon,
                {
                    className: classNames({
                        "ml-2": buttonSize !== "2xl",
                        "ml-3": buttonSize === "2xl"
                    })
                },
            )}
        </button>
    );
});