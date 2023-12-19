import { FC, memo, useMemo } from "react";
import { DateCellItem, isInRange, isToday } from "../../utils/calendar-utils";

import  "./CalendarPanelItem.scss";

type CalendarPanelItemProps = {
  min: Date | undefined;
  max: Date | undefined;
  year: number;
  month: number;
  day: number;
  todayDate: Date;
  cell: DateCellItem;
  onDateSelect: (item: DateCellItem) => void;
};

const CalendarPanelItem: FC<CalendarPanelItemProps> = memo((props) => {
  const { max, min, day, month, year, todayDate, cell, onDateSelect } = props;

  const isDateInRange = (cell: DateCellItem) => {
    return isInRange(new Date(cell.year, cell.month, cell.date), min, max);
  };

  const classRootItem = useMemo(() => {
    const classes = ['calendar_panel__item'];
    const isSelectedDate =
      cell.year === year && cell.month === month && cell.date === day;
    const isTodayDate = isToday(cell, todayDate);
    const isNotCurrent = cell.type !== "current";
    const isDateinRange = isDateInRange(cell);

    if (isSelectedDate) {
      classes.push('calendar__panel_item__selected');
    }
    if (isTodayDate) {
      classes.push('calendar__panel_item__today');
    }
    if (isNotCurrent) {
      classes.push('calendar_panel__item__not_current');
    }
    if (!isDateinRange) {
      classes.push('calendar_panel__item__not_in_range');
    }
    
    return classes;
  }, [cell, onDateSelect]);

  return (
    <div
      className={classRootItem.join(" ")}
      key={`${cell.date}-${cell.month}-${cell.year}`}
      onClick={() => {
        isDateInRange(cell) && onDateSelect(cell)
      }}
    >
      <div className='calendar-panel--item-date'>{cell.date}</div>
    </div>
  );
});

CalendarPanelItem.displayName = 'CalendarPanelItem'

export { CalendarPanelItem };
