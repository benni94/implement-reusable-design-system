import { IHasClassName, INavItem } from "../../../@interfaces";

export interface ISideNavProps extends IHasClassName {
  /**
   * The email address of a user to show in the side nav.
   */
  email: string;
  /**
   * Top navigation items to navigate.
   */
  navItemsTop: INavItem[];
  /**
   * Bottom navigation items to navigate.
   */
  navItemsBottom: INavItem[];
  /**
   * Flag to inidicate, if the side navigation is collapsed or not.
   */
  open: boolean;
  /**
   * Callback to toggle the navigation to be collapsed or not.
   */
  setOpen: (open: boolean) => void;
  /**
   * The username to show on the bottom of the side navigation.
   */
  username: string;
}
