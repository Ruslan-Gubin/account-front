import { useEffect, useRef, useState } from "react";
import { OptionsSelectType } from "../../types/OptionsSelectType";
import { CloseIcon } from "../icon-close/CloseIcon";
import { SelectBird } from "../select-bird/SelectBird";

import styles from "./Dropdown.module.scss";

type DropdownProps = {
  options: OptionsSelectType[];
  onSelect: (value: OptionsSelectType | null) => void;
  width?: number | string;
  selected: OptionsSelectType;
  label?: string;
  error?: boolean;
  errorText?: string;
  className?: string;
  direction?: "up";
  size?: "sm" | "default";
  topContent?: number;
  reset?: boolean;
  placeholder?: string;
};

const Dropdown = ({
  placeholder,
  reset,
  topContent,
  className,
  onSelect,
  options,
  width,
  selected,
  error,
  errorText,
  label,
  direction,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: OptionsSelectType) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChechClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("click", handleChechClickOutside);
    return () => {
      window.document.removeEventListener("click", handleChechClickOutside);
    };
  }, [isOpen]);

  const handleClickReset = (e: any) => {
    e.stopPropagation();
    if (isOpen) {
      setIsOpen(false);
    }
    onSelect(null);
  };

  return (
    <div ref={ref} style={width ? { width } : {}} className={styles.dropdown}>
      {label && (
        <label
          style={error ? { color: "red" } : {}}
          className={
            error && errorText && label
              ? `${styles.dropdownLabel} ${styles.dropdownLabelError}`
              : styles.dropdownLabel
          }
        >
          {error ? `${errorText}` : `${label}`}
        </label>
      )}
      <div
        onClick={handleToggleDropdown}
        className={
          className
            ? `${styles.dropdown_selected}  ${className}`
            : styles.dropdown_selected
        }
      >
        <div className={styles.value_container}>
          <span
            className={
              Number(selected?.id) === 0
                ? `${styles.dropdown_selected__value} ${styles.dropdown_selected__value_opasity}`
                : styles.dropdown_selected__value
            }
          >
            {selected ? selected.label : placeholder}
          </span>
        </div>
        {!reset && !placeholder && <SelectBird active={isOpen} />}
        {reset && placeholder && (
          <>
            {selected ? (
              <CloseIcon size="sm" onClick={handleClickReset} />
            ) : (
              <SelectBird active={isOpen} />
            )}
          </>
        )}
      </div>
      {isOpen && (
        <div
          style={topContent ? { top: topContent } : {}}
          className={
            direction === "up"
              ? `${styles.dropdown_menu__container} ${styles.dropdown_menu__up}`
              : styles.dropdown_menu__container
          }
        >
          <ul className={styles.dropdown_menu}>
            {options.map((option) => (
              <li
                className={
                  selected?.id === option.id
                    ? `${styles.dropdown_menu__li} ${styles.dropdown_menu__active}`
                    : styles.dropdown_menu__li
                }
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                <span
                  style={selected?.id === option.id ? { color: "white" } : {}}
                  className={styles.dropdown_menu__item}
                >
                  {option.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
