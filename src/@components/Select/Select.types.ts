import { ReactElement } from "react";
import { IOption } from "../../@interfaces";

export interface ISelectProps {
  /**
   * The left icon in the dropdown next to the option.
   */
  LeadingIcon?: ReactElement;
  /**
   * The options to select.
   */
  options: IOption[];
  /**
   * Placeholder text for the input element.
   */
  placeholder?: string;
  /**
   * The selected option from the dropdown.
   */
  selectedOption?: IOption;
  /**
   * Callback to set the the option to select.
   */
  setSelectedOption: (option: string) => void;
  /**
   * The width of the component.
   */
  width?: string;
}
