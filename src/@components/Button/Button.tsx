import classNames from "classnames";
import React, { FC, memo } from "react";
import { DynamicComponent } from "../../@utils";
import {
  ButtonIconSizeClasses,
  ButtonSizeClasses,
  ButtonVariantClasses,
} from "./Button.classes";
import { IButtonProps } from "./Button.types";

const BUTTON_SIZE = 20;
const BUTTON_SIZE_2XL = 24;

export const Button: FC<IButtonProps> = memo(
  ({
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
        className={classNames("btn-base", className, {
          [ButtonSizeClasses[buttonSize]]: !IconOnly,
          [classNames(ButtonIconSizeClassName, "justify-center")]: IconOnly,
          [classNames(
            ButtonVariantClassName.default,
            ButtonVariantClassName.hover,
            ButtonVariantClassName.focus
          )]: !disabled,
          [classNames(ButtonVariantClassName.disabled, "cursor-not-allowed")]:
            disabled,
        })}
      >
        <DynamicComponent
          Component={LeadingIcon}
          styles={{
            className: classNames({
              "mr-2": buttonSize !== "2xl",
              "mr-3": buttonSize === "2xl",
            }),
          }}
        />
        {children}
        <DynamicComponent
          Component={IconOnly}
          styles={{
            size: buttonSize === "2xl" ? BUTTON_SIZE_2XL : BUTTON_SIZE,
          }}
        />
        <DynamicComponent
          Component={TrailingIcon}
          styles={{
            className: classNames({
              "ml-2": buttonSize !== "2xl",
              "ml-3": buttonSize === "2xl",
            }),
          }}
        />
      </button>
    );
  }
);
