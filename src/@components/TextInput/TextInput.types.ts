export interface ITextInputProps {
  /**
   * Flag to disable the text for the text-input.
   */
  disabled?: boolean;
  /**
   * The error message if the text-input is in error state.
   */
  error?: string;
  /**
   * Callback for the input text.
   */
  handleChange: (textInput: string) => void;
  /**
   * Helper text to show a hint for the user.
   */
  helperText?: string;
  /**
   * Additional label for the text-input.
   */
  label?: string;
  /**
   * Left text next to the input. Do not use this in combination with the `LeadingIcon`.
   */
  leadingText?: string;
  /**
   * The placeholder showing, when no text is in the input.
   */
  placeholder: string;
  /**
   * The left icon next to the text input. Do not use this in combination with the `leadingText`.
   */
  LeadingIcon?: React.ReactElement;
  /**
   * The right icon next to the text-input.
   */
  TrailingIcon?: React.ReactElement;
  /**
   * The different types for the input element.
   */
  type: "text" | "email";
  /**
   * The text value for the text-input.
   */
  value: string;
}
