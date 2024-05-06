import classNames from "classnames";
import { ReactElement } from "react";

const iconWrapper = classNames(
  "h-11 shadow-sm",
  "rounded-lg",
  "w-full",
  "absolute flex",
  "items-center",
  "justify-between",
  "px-3.5",
  "pointer-events-none"
);

const leadingIcon = classNames("text-gray-500");

const trailingIcon = (error?: string) =>
  classNames({
    "text-gray-400": !error,
    "text-error-500": error,
  });

const loadingIcon = (disabled?: boolean) =>
  classNames(
    "flex items-center h-11 text-lg text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg border-gray-300 dark:border-gray-500",
    {
      "bg-gray-50 dark:bg-gray-700": disabled,
      "dark:bg-gray-800": !disabled,
    }
  );

const input = (props: {
  LeadingIcon?: ReactElement;
  TrailingIcon?: ReactElement;
  leadingText?: string;
  error?: string;
  disabled?: boolean;
}) => {
  const { disabled, LeadingIcon, TrailingIcon, leadingText, error } = props;
  return classNames(
    "w-full select-none",
    "text-gray-900",
    "dark:text-white",
    "text-md border",
    "h-11",
    "p-4",
    {
      "pl-9": LeadingIcon,
      "pr-9": TrailingIcon,
      "rounded-l-0 rounded-r-lg": leadingText,
      "rounded-lg": !leadingText,
      "border-gray-300 dark:border-gray-500 focus:ring-4 focus:border-primary-300 dark:focus:border-gray-100 focus:ring-primary-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20":
        !error,
      "border-error-300 focus:ring-4 focus:border-error-300 focus:ring-error-100":
        error,
      "bg-white dark:bg-gray-800": !disabled,
      "bg-gray-50 dark:bg-gray-700": disabled,
    }
  );
};

const error = classNames("mt-1.5", "text-error-500", "text-sm");

const helperText = classNames("mt-1.5", "text-gray-500", "text-sm");

export const styles = {
  error,
  helperText,
  iconWrapper,
  leadingIcon,
  trailingIcon,
  input,
  loadingIcon,
};
