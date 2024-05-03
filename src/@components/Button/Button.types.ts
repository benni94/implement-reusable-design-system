import { ReactElement } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryGray"
  | "tertiary"
  | "tertiaryGray";

export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export type ButtonState = "default" | "hover" | "focus" | "disabled";

export interface IButtonProps {
  /**
   * The children of the button.
   */
  children?: string | ReactElement;
  /**
   * The optional additional className.
   */
  className?: string;
  /**
   * Flag to determine if the button should be disabled with the disabled state.
   */
  disabled?: boolean;
  /**
   * If the button is only a icon button.
   */
  IconOnly?: ReactElement;
  /**
   * The icon on the left side in the button.
   */
  LeadingIcon?: ReactElement;
  /**
   * The button size.
   * @default md
   */
  size?: ButtonSize;
  /**
   * The ending icon on the right side in the button.
   */
  TrailingIcon?: ReactElement;
  /**
   * The button variant.
   */
  variant: ButtonVariant;
  /**
   * Handles the on button clicked event.
   */
  onClick: () => void;
}
