import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import {
  DateCellItem,
  daysOfTheWeekEng,
  daysOfTheWeekRu,
  getCurrentMothDays,
  getDaysAmountInAMonth,
  getNextMonthDays,
  getPreviousMonthDays,
} from "../../utils/calendar-utils";
import { CalendarPanelHeader } from "../calendar-panel-header/CalendarPanelHeader";
import { CalendarPanelItem } from "../calendar-panel-item/CalendarPanelItem";

import styles from "./DatePickerPopupContent.module.scss";

interface DatePickerPopupContentProps {
  selectedValue: Date;
  inputValueDate?: Date;
  min?: Date;
  max?: Date;
  onChange: (value: Date) => void;
  language?: 'ru' | 'eng';
  todayDate: Date;
}

export const DatePickerPopupContent = ({
  selectedValue,
  inputValueDate,
  onChange,
  min,
  max,
  language='ru',
  todayDate,
}: DatePickerPopupContentProps) => {
  const [panelYear, setPanelYear] = useState(() => selectedValue.getFullYear());
  const [panelMonth, setPanelMonth] = useState(() => selectedValue.getMonth());

  useLayoutEffect(() => {
    if (!inputValueDate) {
      return;
    }

    setPanelMonth(inputValueDate.getMonth());
    setPanelYear(inputValueDate.getFullYear());
  }, [inputValueDate]);

  const [year, month, day] = useMemo(() => {
    const currentYear = selectedValue.getFullYear();
    const currentDay = selectedValue.getDate();
    const currentMonth = selectedValue.getMonth();

    return [currentYear, currentMonth, currentDay];
  }, [selectedValue]);

  const dateCells = useMemo(() => {
    const daysInAMonth = getDaysAmountInAMonth(panelYear, panelMonth);

    const currentMonthDays = getCurrentMothDays(
      panelYear,
      panelMonth,
      daysInAMonth
    );
    const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth);
    const nextMonthDays = getNextMonthDays(panelYear, panelMonth);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [panelYear, panelMonth]);

  const onDateSelect = useCallback((item: DateCellItem) => {
    onChange(new Date(item.year, item.month, item.date));
  }, [inputValueDate]);

  const nextYear = () => {
    setPanelYear(panelYear + 1);
  };

  const prevYear = () => {
    setPanelYear(panelYear - 1);
  };

  const nextMonth = () => {
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear(panelYear + 1);
    } else {
      setPanelMonth(panelMonth + 1);
    }
  };

  const prevMonth = () => {
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear(panelYear - 1);
    } else {
      setPanelMonth(panelMonth - 1);
    }
  };

  const daysWeekLanguage = language === 'ru' ? daysOfTheWeekRu : daysOfTheWeekEng

  return (
    <div className={styles.root}>
      <CalendarPanelHeader
        panelMonth={panelMonth}
        panelYear={panelYear}
        nextMonth={nextMonth}
        nextYear={nextYear}
        prevMonth={prevMonth}
        prevYear={prevYear}
        language={language}
      />
      <div className={styles.calendar_panel__content}>
        {daysWeekLanguage.map((weekDay) => (
          <div key={weekDay} className={styles.calendar_panel__item}>
            {weekDay}
          </div>
        ))}

        {dateCells.map((cell) => {
          return (
            <CalendarPanelItem
              cell={cell}
              day={day}
              max={max}
              min={min}
              month={month}
              onDateSelect={onDateSelect}
              todayDate={todayDate}
              year={year}
              key={`${cell.date}-${cell.month}-${cell.year}`}
            />
          );
        })}
      </div>
    </div>
  );
};
