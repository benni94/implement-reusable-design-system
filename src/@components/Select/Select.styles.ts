import classNames from "classnames";
import { IOption } from "../../@interfaces";

const selectShell = (width?: string) =>
  classNames("relative inline-block", width);

const listBoxOptions = classNames(
  "absolute",
  "z-10",
  "inline-flex",
  "flex-col",
  "w-full",
  "bg-white",
  "border",
  "border-gray-300",
  "rounded-lg",
  "shadow-lg",
  "top-13",
  "dark:border-gray-500",
  "dark:bg-gray-800",
);

const listBoxOptionsList = (
  active: boolean,
  index: number,
  options: IOption[],
) =>
  classNames(
    "flex items-center",
    "pl-3.5 pr-3",
    "justify-between",
    "h-11",
    "text-gray-900",
    "dark:text-white",
    "text-md cursor-pointer",
    "hover:bg-primary-25",
    "dark:hover:bg-gray-100",
    "dark:hover:bg-opacity-10",
    "whitespace-nowrap",
    {
      "bg-primary-25 dark:bg-gray-100 dark:bg-opacity-10": active,
      "rounded-t-lg": index === 0,
      "rounded-b-lg": index === options.length - 1,
    },
  );

const icon = (open: boolean, width?: string) =>
  classNames(
    "text-gray-500",
    "dark:text-gray-300",
    "transform",
    "duration-100",
    "ease-out",
    {
      "-rotate-180": open,
      "ml-auto": width,
      "ml-3.5": !width,
    },
  );

const optionsLabel = classNames("flex items-center", "flex items-center");

const optionsIcon = classNames("ml-5", "text-primary-600", "dark:text-white");

const listBoxButton = (selectedOption?: IOption, width?: string) =>
  classNames(
    "shadow-sm",
    "flex",
    "items-center",
    "text-md",
    "border",
    "border-gray-300",
    "dark:border-gray-500",
    "h-11 px-3.5",
    "rounded-lg",
    "bg-white",
    "dark:bg-gray-800",
    "focus:ring-4",
    "focus:border-primary-300",
    "dark:focus:border-gray-100",
    "focus:ring-primary-100",
    "dark:focus:ring-gray-100",
    "dark:focus:ring-opacity-20",
    "whitespace-nowrap",
    {
      "text-gray-900 dark:text-white": selectedOption,
      "text-gray-500 dark:text-gray-300": !selectedOption,
    },
    width,
  );

const leadingIconWrapper = classNames("w-5 h-5 mr-2 overflow-hidden");

export const styles = {
  listBoxOptions,
  listBoxOptionsList,
  icon,
  listBoxButton,
  leadingIconWrapper,
  optionsLabel,
  optionsIcon,
  selectShell,
};
