import { Listbox } from "@headlessui/react";
import { FC, Fragment, memo } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { IOption } from "../../@interfaces";
import { DynamicComponentWithWrapper } from "../../@utils";
import { styles } from "./Select.styles";
import { ISelectProps } from "./Select.types";

const ICON_SIZE = 20;

/**
 * Component for the selected options to create a dropdown list for them.
 */
const SelectOptions: FC<{ options: IOption[] }> = ({ options }) => (
  <Listbox.Options className={styles.listBoxOptions}>
    {options.map((option, index) => (
      <Listbox.Option as={Fragment} key={option.value} value={option.value}>
        {({ active, selected }) => (
          <li className={styles.listBoxOptionsList(active, index, options)}>
            <div className={styles.optionsLabel}>{option.label}</div>
            {selected && <FiCheck className={styles.optionsIcon} />}
          </li>
        )}
      </Listbox.Option>
    ))}
  </Listbox.Options>
);

/**
 * Component to show a selection dropdown based on the options.
 */
export const Select: FC<ISelectProps> = memo(
  ({
    options,
    selectedOption,
    setSelectedOption,
    LeadingIcon,
    placeholder,
    width,
  }) => {
    return (
      <div data-testid="selectContainer" className={styles.selectShell(width)}>
        <Listbox
          value={selectedOption && selectedOption.value}
          onChange={setSelectedOption}
        >
          {({ open }) => (
            <>
              <Listbox.Button
                data-testid="selectButton"
                className={styles.listBoxButton(selectedOption, width)}
              >
                <DynamicComponentWithWrapper
                  Wrapper={<div className={styles.leadingIconWrapper} />}
                  DynamicComponent={LeadingIcon}
                />
                {selectedOption ? selectedOption.label : placeholder}
                <FiChevronDown
                  size={ICON_SIZE}
                  className={styles.icon(open, width)}
                />
              </Listbox.Button>
              <SelectOptions options={options} />
            </>
          )}
        </Listbox>
      </div>
    );
  },
);
