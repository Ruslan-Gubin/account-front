import type { FC } from "react";
import { monthsEng, monthsRu } from "../../utils/calendar-utils";

import styles from "./CalendarPanelHeader.module.scss";

type CalendarPanelHeaderProps = {
  panelMonth: number;
  panelYear: number;
  prevYear: () => void;
  prevMonth: () => void;
  nextMonth: () => void;
  nextYear: () => void;
  language?: 'ru' | 'eng'
};

const CalendarPanelHeader: FC<CalendarPanelHeaderProps> = (props) => {
  const { nextMonth, nextYear, panelMonth, panelYear, prevMonth, prevYear, language='ru' } =
    props;

    const languageMounth = language === 'ru' ? monthsRu : monthsEng

  return (
    <div className={styles.calendar_panel__header}>
        <div className={styles.calendar_panel__buttons_left}>
          <button onClick={prevYear} className={styles.calendar_panel__prev_year}>
          <div className={styles.calendar_panel__header_arrow}></div>
          <div className={styles.calendar_panel__header_arrow}></div>
          </button>
          <button onClick={prevMonth} className={styles.calendar_panel__prev_mounth}>
            <div className={styles.calendar_panel__header_arrow}></div>
          </button>
        </div>

      <div className={styles.calendar_panel__date}>
        <span className={styles.calendar_panel__month}>{languageMounth[panelMonth]}</span>
        <span className={styles.calendar_panel__year}>{panelYear}</span>
         
      </div>

        <div className={styles.calendar_panel__buttons_right}>
          <button onClick={nextMonth} className={styles.calendar_panel__next_mounth}>
          <div className={styles.calendar_panel__header_arrow}></div>
          </button>
          <button onClick={nextYear} className={styles.calendar_panel__next_year}>
          <div className={styles.calendar_panel__header_arrow}></div>
          <div className={styles.calendar_panel__header_arrow}></div>
          </button>
        </div>
    </div>
  );
};

export { CalendarPanelHeader };
