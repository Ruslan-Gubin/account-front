import { FC, memo, useRef } from "react";
import { InputProps } from "./types";
import { CloseIcon } from "../icon-close/CloseIcon";

import styles from './Input.module.scss';

const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    searchClick,
    passwordEyeClick,
    variant,
    error,
    errorText,
    name,
    placeholder,
    label,
    type = "text",
    downEnterCallback,
    width,
    reset,
    ...props
  }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <label htmlFor={name} className={styles.label} style={error ? {color: 'red'} : {}}>
        <span className={error ? ` ${styles.label} ${styles.error}` : styles.label}>{label}</span>
        <input
          ref={inputRef}
          value={value}
          type={type}
          id={name}
          autoComplete="off"
          style={label ? { marginTop: 8 } : {}}
          className={error ? `${styles.input} ${styles.errorBackground} ${className}` : `${styles.input} ${className}`}
          placeholder={placeholder}
          {...props}
        />

        {reset && value &&
        <div className={styles.resetButtonContainer}>
          <CloseIcon size="sm" onClick={reset} />
        </div>
        }

        <div className="input-after__svg">
        </div>
      </label>
    );
  }
);

Input.displayName = "Input";

export { Input };


