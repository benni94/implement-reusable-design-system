import classNames from "classnames";
import { FC } from "react";
import { Typography } from "../../Typography";
import { RenderLogo } from "../components";

export interface MobileNavbarProps {
  open: boolean;
  toggleOpen: () => void;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({ open, toggleOpen }) => (
  <div className="z-40 flex items-center justify-between h-20 py-6 bg-white shadow-md dark:bg-gray-900 px-9">
    <RenderLogo />
    <Typography variant="h6" customWeight="medium" className="select-none">
      My Travel App
    </Typography>
    <svg
      data-testid="toggleOpen"
      viewBox="0 0 20 20"
      width="2em"
      height="2em"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        "text-gray-500 transition-all duration-100 ease-out cursor-pointer stroke-current back hover:text-gray-900 dark:text-white dark:hover:text-gray-200 ",
        {
          "opacity-0": open,
        }
      )}
      onClick={toggleOpen}
    >
      <path
        fill="currentColor"
        d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
      />
    </svg>
  </div>
);
