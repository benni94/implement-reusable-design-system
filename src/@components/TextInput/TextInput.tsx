import classNames from "classnames";
import { FC } from "react";
import { DynamicComponent } from "../../@utils";
import { Typography } from "../Typography";
import { styles } from "./TextInput.styles";
import { ITextInputProps } from "./TextInput.types";

export const TextInput: FC<ITextInputProps> = ({
  disabled,
  error,
  handleChange,
  label,
  leadingText,
  helperText,
  LeadingIcon,
  placeholder,
  TrailingIcon,
  type,
  value,
}) => {
  return (
    <>
      {label && (
        <Typography
          variant="sm"
          customWeight="medium"
          customColour="text-gray-700 dark:text-white"
          className="mb-1.5"
        >
          {label}
        </Typography>
      )}
      <div
        className={classNames("relative", {
          "flex items-center": leadingText,
        })}
      >
        <div className={styles.iconWrapper}>
          <DynamicComponent
            Component={LeadingIcon}
            Fallback={<div />}
            styles={{ className: styles.leadingIcon }}
          />
          <DynamicComponent
            Component={TrailingIcon}
            Fallback={<div />}
            styles={{ className: styles.trailingIcon(error) }}
          />
        </div>

        {leadingText && (
          <div className={styles.loadingIcon(disabled)}>{leadingText}</div>
        )}

        <input
          className={styles.input({
            LeadingIcon,
            disabled,
            error,
            leadingText,
            TrailingIcon,
          })}
          disabled={disabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!disabled) {
              handleChange(event.target.value);
            }
          }}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {helperText && <div className={styles.helperText}>{helperText}</div>}
    </>
  );
};
