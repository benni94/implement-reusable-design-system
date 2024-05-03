import { ButtonSize, ButtonState, ButtonVariant } from "./Button.types";

const BUTTON_PREFIX = "btn-";
const BUTTON_PRIMARY_PREFIX = `${BUTTON_PREFIX}primary`;
const BUTTON_SECONDARY_PREFIX = `${BUTTON_PREFIX}secondary`;
const BUTTON_SECONDARY_GRAY_PREFIX = `${BUTTON_PREFIX}secondaryGray`;
const BUTTON_TERTIARY_PREFIX = `${BUTTON_PREFIX}tertiary`;
const BUTTON_TERTIARY_GRAY_PREFIX = `${BUTTON_PREFIX}tertiaryGray`;

const BUTTON_HOVER_PEFIX = "-hover";
const BUTTON_FOCUS_PREFIX = "-focus";
const BUTTON_SHADOW_DARK_GRAY_PREFIX = "shadow-grayDark";
const BUTTON_DISABLED_PREFIX = "-disabled";

const BUTTON_ICON_PREFIX = "btn-icon-";

/**
 * Create a mapping for the utility classes.
 */
export const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: `${BUTTON_PRIMARY_PREFIX}`,
    hover: `${BUTTON_PRIMARY_PREFIX}${BUTTON_HOVER_PEFIX}`,
    focus: `${BUTTON_PRIMARY_PREFIX}${BUTTON_FOCUS_PREFIX} ${BUTTON_SHADOW_DARK_GRAY_PREFIX}`,
    disabled: `${BUTTON_PRIMARY_PREFIX}${BUTTON_DISABLED_PREFIX}`,
  },
  secondary: {
    default: `${BUTTON_SECONDARY_PREFIX}`,
    hover: `${BUTTON_SECONDARY_PREFIX}${BUTTON_HOVER_PEFIX}`,
    focus: `${BUTTON_SECONDARY_PREFIX}${BUTTON_FOCUS_PREFIX} ${BUTTON_SHADOW_DARK_GRAY_PREFIX}`,
    disabled: `${BUTTON_SECONDARY_PREFIX}${BUTTON_DISABLED_PREFIX}`,
  },
  secondaryGray: {
    default: `${BUTTON_SECONDARY_GRAY_PREFIX}`,
    hover: `${BUTTON_SECONDARY_GRAY_PREFIX}${BUTTON_FOCUS_PREFIX}`,
    focus: `${BUTTON_SECONDARY_GRAY_PREFIX}${BUTTON_FOCUS_PREFIX}`,
    disabled: `${BUTTON_SECONDARY_GRAY_PREFIX}${BUTTON_DISABLED_PREFIX}`,
  },
  tertiary: {
    default: `${BUTTON_TERTIARY_PREFIX}`,
    hover: `${BUTTON_TERTIARY_PREFIX}${BUTTON_FOCUS_PREFIX}`,
    focus: "",
    disabled: `${BUTTON_TERTIARY_PREFIX}${BUTTON_DISABLED_PREFIX}`,
  },
  tertiaryGray: {
    default: `${BUTTON_TERTIARY_GRAY_PREFIX}`,
    hover: `${BUTTON_TERTIARY_GRAY_PREFIX}${BUTTON_HOVER_PEFIX}`,
    focus: "",
    disabled: `${BUTTON_TERTIARY_GRAY_PREFIX}${BUTTON_DISABLED_PREFIX}`,
  },
};

/**
 * A dictionary for the different sizes a button can have.
 */
export const ButtonSizeClasses: Record<ButtonSize, string> = {
  sm: `${BUTTON_PREFIX}sm`,
  md: `${BUTTON_PREFIX}md`,
  lg: `${BUTTON_PREFIX}lg`,
  xl: `${BUTTON_PREFIX}xl`,
  "2xl": `${BUTTON_PREFIX}2xl`,
};

/**
 * A dictionary for the different sizes a button icon can have.
 */
export const ButtonIconSizeClasses: Record<ButtonSize, string> = {
  sm: `${BUTTON_ICON_PREFIX}sm`,
  md: `${BUTTON_ICON_PREFIX}md`,
  lg: `${BUTTON_ICON_PREFIX}lg`,
  xl: `${BUTTON_ICON_PREFIX}xl`,
  "2xl": `${BUTTON_ICON_PREFIX}2xl`,
};
