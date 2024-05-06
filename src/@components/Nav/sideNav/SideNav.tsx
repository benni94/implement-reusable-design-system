import { FC, memo, useState } from "react";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { INavItem } from "../../../@interfaces";
import { images } from "../../../data";
import { TextInput } from "../../TextInput";
import { Typography } from "../../Typography";
import { NavItem, RenderLogo } from "../components";
import { styles } from "./SideNav.styles";
import { ISideNavProps } from "./SideNav.types";

/**
 * Component for a side navigation with a user preview.
 */
export const SideNav: FC<ISideNavProps> = memo(
  ({
    email,
    navItemsBottom,
    navItemsTop,
    open,
    setOpen,
    username,
    className,
  }) => {
    const [searchString, setSearchString] = useState<string>("");
    const [activeNavItem, setActiveNavItem] = useState<string>("");
    const [activeSubNavItem, setActiveSubNavItem] = useState<string>("");
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

    const handleSearch = (value: string) => setSearchString(value);

    const onClickNavItem = (item: INavItem, subNavPath?: string) => {
      if (subNavPath) {
        setActiveSubNavItem(subNavPath);
      }
      if (!item.toggleSidebar) {
        setActiveNavItem(item.label);
      } else if (item.toggleSidebar) {
        setOpen(!open);
      }

      if (item.subItems && openDropdowns.includes(item.label) && !subNavPath) {
        setOpenDropdowns(
          openDropdowns.filter((dropdownItem) => dropdownItem !== item.label)
        );
      } else if (item.subItems && !openDropdowns.includes(item.label)) {
        setOpenDropdowns([...openDropdowns, item.label]);
      }
    };

    return (
      <div className={styles.sideNavWrapper(className, open)}>
        <div className={styles.header}>
          <RenderLogo />

          <Typography
            variant="xl"
            className={styles.headerSmallLabel(open)}
            customWeight="medium"
          >
            My Travel App
          </Typography>
        </div>

        <div className={styles.headerLabel}>
          {open ? (
            <TextInput
              type="text"
              value={searchString}
              handleChange={handleSearch}
              placeholder="Search"
              LeadingIcon={<FiSearch />}
            />
          ) : (
            <div className="h-11" />
          )}
        </div>

        <div className={styles.sideNavItemWrapper(open)}>
          <ul className={styles.sideNavTopItems}>
            {navItemsTop.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={activeNavItem === item.label}
                activeSubNavItem={activeSubNavItem}
                open={open}
                openDropdown={openDropdowns.includes(item.label)}
                onClick={onClickNavItem}
              />
            ))}
          </ul>
          <ul className={styles.sideNavBottomItems}>
            {navItemsBottom.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={activeNavItem === item.label}
                activeSubNavItem={activeSubNavItem}
                open={open}
                openDropdown={openDropdowns.includes(item.label)}
                onClick={onClickNavItem}
              />
            ))}
          </ul>
        </div>

        <hr className={styles.horizontalDivider(open)} />

        <div className={styles.userView}>
          <img
            src={images.demoAvatar}
            alt="avatar"
            className={styles.userAvatar}
          />
          {open && (
            <div className="flex justify-between ml-3">
              <div className="select-none">
                <Typography
                  variant="sm"
                  customWeight="medium"
                  customColour="text-gray-700 dark:text-white"
                >
                  {username}
                </Typography>

                <Typography variant="sm" customColour="text-gray-500">
                  {email}
                </Typography>
              </div>

              <FiLogOut
                size={24}
                className="ml-6 text-gray-400 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);
