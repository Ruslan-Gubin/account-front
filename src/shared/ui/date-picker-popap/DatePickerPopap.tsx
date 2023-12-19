import {  memo, useMemo, useState } from "react";
import { DatePickerPopupContent } from "./ui";
import {
  getInputValueFromDate,
  getDateFromInputValue,
} from "./utils/calendar-utils";

import styles from "./DatePickerPopap.module.scss";


export interface DatePickerPopapProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
  language?: 'ru' | 'eng';
  isOpenCalendar: boolean;
}

export const DatePickerPopap = memo(({ onChange, value, max, min, language='ru', isOpenCalendar }: DatePickerPopapProps) => {
  const [inputValue, setInputValue] = useState("");
  const todayDate = useMemo(() => new Date(), []);

  const handleChange = (value: Date) => {
    onChange(value);
    setInputValue(getInputValueFromDate(value));
  };


  const [inputValueDate] = useMemo(() => {
    const date = getDateFromInputValue(inputValue);

    if (!date) {
      return [undefined];
    }

    return [date];
  }, [inputValue, min, max, value]);

  return (
    <div className={styles.datePicker}>
      {isOpenCalendar && (
        <>
        <div className={styles.popupContentContainer}>
          <DatePickerPopupContent
            selectedValue={value}
            onChange={handleChange}
            max={max}
            min={min}
            inputValueDate={inputValueDate}
            language={language}
            todayDate={todayDate}
            />
        </div>
            </>
      )}
    </div>
  );
});

DatePickerPopap.displayName = 'DatePickerPopap'
