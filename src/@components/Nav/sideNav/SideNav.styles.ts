import classNames from "classnames";

const header = classNames("flex", "items-center", "w-full", "mb-8", "ml-9");

const headerLabel = classNames("mb-8", "mx-9");

const headerSmallLabel = (open?: boolean) =>
  classNames("ml-2.5 whitespace-nowrap select-none", {
    "opacity-0 hidden": !open,
  });

const sideNavWrapper = (className?: string, open?: boolean) =>
  classNames(
    "py-6",
    "flex",
    "flex-col",
    "flex-grow",
    "bg-white",
    "dark:bg-gray-900",
    "transform",
    "ease-out",
    "duration-100",
    "overflow-y-auto",
    "xs:overflow-y-visible",
    {
      "w-80": open,
      "w-24": !open,
      "border-r border-gray-300 dark:border-opacity-20": true,
    },
    className
  );

const sideNavItemWrapper = (open?: boolean) =>
  classNames("flex", "flex-col", "justify-between", "h-full", "ml-5", {
    "w-72": open,
    "w-10": !open,
  });

const sideNavBottomItems = classNames("flex", "flex-col", "mb-6", "space-y-1");

const sideNavTopItems = classNames("flex", "flex-col", "space-y-1");

const horizontalDivider = (open?: boolean) =>
  classNames("ml-5", "border-t", "border-gray-300", "dark:border-opacity-20", {
    "w-72": open,
    "w-14": !open,
  });

const userView = classNames("flex", "mt-6", "w-72", "ml-7");

const userAvatar = classNames(
  "w-10",
  "h-10",
  "rounded-full",
  "cursor-pointer",
  "select-none"
);

export const styles = {
  header,
  headerLabel,
  headerSmallLabel,
  horizontalDivider,
  sideNavWrapper,
  sideNavItemWrapper,
  sideNavBottomItems,
  sideNavTopItems,
  userAvatar,
  userView,
};
