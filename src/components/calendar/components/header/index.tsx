import React from "react";
import { LanguageCode, Mode } from "../../utils/locals/types";
import {
  getDaysNameOfTheWeek,
  getMonthsName,
  languageNames,
} from "../../utils/locals";
import Select from "../select";

type DayProps = {
  currentDay: number;
  today: () => void;
  prev: () => void;
  next: () => void;
  month: number;
  year: number;
  locals: LanguageCode;
  mode: Mode;
  onModeChange?: (mode: Mode) => void;
  onLanguageChange?: (language: LanguageCode) => void;
  hideHeaderButtons?: boolean;
};

export const Header: React.FC<DayProps> = React.memo((props) => {
  const {
    currentDay,
    today,
    prev,
    next,
    month,
    year,
    locals = "AMH",
    mode,
    onModeChange,
    onLanguageChange,
    hideHeaderButtons,
  } = props;
  const styles: any = {};
  const languages = languageNames.map((item, index) => ({
    value: item.code,
    label: item.name,
  }));
  return (
    <div>
      {/* EXTRA HEADER */}
      {!hideHeaderButtons && (
        <div className="flex">
          {/* <SwitchMode theme={theme} mode={mode} onModeChange={onModeChange} /> */}
          <div style={styles.todayButton}>
            <button className="p-2" onClick={today}>
              <p style={styles.todayText}>{currentDay}</p>
            </button>
          </div>
          {mode === "EC" && (
            <Select
              label=""
              value={locals}
              data={languages}
              onChange={onLanguageChange}
            />
          )}
        </div>
      )}

      <div className="flex justify-between">
        {/* BACKWARD THE MONTH */}
        <button className="p-2" onClick={prev} style={styles.arrow}>
          {`<`}
        </button>

        <div className="flex">
          <p style={styles.titleText}>
            {getMonthsName({ locals, mode })[month - 1]}
          </p>
          <div style={styles.space} />
          <p style={styles.titleText}>{year}</p>
        </div>

        {/* FORWARD THE MONTH */}
        <button className="p-2" onClick={next} style={styles.arrow}>
          {`>`}
        </button>
      </div>

      {/* LIST OF DAYS OF THE WEEK */}
      <div className="grid grid-cols-7">
        {getDaysNameOfTheWeek(locals).map((item, i) => (
          <p style={styles.dayText} key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
});

Header.displayName = "Header";
