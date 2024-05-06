import classNames from "classnames";
import React from "react";
import { INavItem } from "../../../@interfaces";
import { Typography } from "../../Typography";

interface ISubNavItemProps {
  inDropdown?: boolean;
  isActive: boolean;
  subItem: INavItem;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

export const SubNavItem = ({
  inDropdown = false,
  isActive,
  subItem,
  onClick,
}: ISubNavItemProps) => (
  <li
    key={subItem.label}
    className={classNames("navItem group", {
      "bg-primary-50 dark:bg-gray-100 dark:bg-opacity-10": isActive,
    })}
    onClick={onClick}
  >
    <Typography
      variant="md"
      customWeight="medium"
      className={classNames("flex-grow", {
        "pl-14": !inDropdown,
        "pl-4": inDropdown,
      })}
      customColour={classNames(
        "group-hover:text-primary-600 dark:group-hover:text-white",
        {
          "text-gray-800 dark:text-white": !isActive,
          "text-primary-600 dark:text-white": isActive,
        }
      )}
    >
      {subItem.label}
    </Typography>
  </li>
);
