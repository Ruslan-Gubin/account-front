
import { useCallback, useEffect, useRef, useState } from "react";
import { TimeServices } from "../../service";
import { DatePickerSvg } from "../../svg/DatePickerSvg";
import { DatePickerPopap } from "../date-picker-popap/DatePickerPopap";
import { CloseIcon } from "../icon-close/CloseIcon";

import styles from "./DatePicker.module.css";


export interface DatePickerProps {
  value: Date | null;
  min?: Date;
  max?: Date;
  language?: 'ru' | 'eng';
  label?: string;
  placeholder: string;
  changeDate?: (value: Date | string) => void;
  error?: string | null;
  size?: 'small' | 'default';
}

export const DatePicker = ({  size='default', error, placeholder, value,  language='ru', label, changeDate }: DatePickerProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);


  const clickOutside = (e: MouseEvent) => {
    if (!elementRef.current) return;
    const target = e.target;

    if (!elementRef.current.contains(target as Node)) {
      setShowPopup(false);
    }
  }

  useEffect(() => {
    if (!elementRef.current) return;

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);


  const handleChange = useCallback((value: Date) => {
    if (!changeDate) return;
    changeDate(value);
    setShowPopup(false);
  },[value, changeDate]);

  const onInputClick = () => {
    setShowPopup(true);
  };

  const handleClickReset = (e: any) => {
    e.stopPropagation()
    if (changeDate) {
      changeDate('');
    }
    if (showPopup) {
      setShowPopup(false);
    }
  }

  return (
    <div ref={elementRef} className={styles.root}>
      {error ? 
     <span className={styles.labelErrorText}>{error}</span>
     :  
     <span className={styles.labelText}>{label}</span>
     }
      <div 
          style={label ? { marginTop: 8 } : {}}
      className={error ? `${styles.datePicker} ${styles.datePickerError}` : styles.datePicker}>
        <div  onClick={onInputClick} className={size === 'small' ? `${styles.datePickerInputContainer} ${styles.datePickerInputContainerSmall}` : styles.datePickerInputContainer}>
          <div className={styles.datePickerInputSvg}>
            <DatePickerSvg />
          </div>

        {!value  ?
        <span className={styles.placeholder}>{placeholder}</span>
        :
        <span className={styles.selectedDay}>{TimeServices.getDayMonthYear(value.toString())}</span>
        }
        {value &&
        <div className={styles.resetButtonContainer}>
          <CloseIcon size="sm" onClick={handleClickReset} />
        </div>
        }
        </div>
        {showPopup &&  (
          <DatePickerPopap
          isOpenCalendar={showPopup}
          onChange={handleChange}
          value={value ? value : new Date()}
          language={language}
          />
        )}
      </div>
    </div>
  );
};
