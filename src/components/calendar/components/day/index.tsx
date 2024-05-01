import React from "react";

type DayProps = {
  dayNumber: number;
  today?: boolean;
  extraDays?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

export const Day: React.FC<DayProps> = React.memo((props) => {
  const { dayNumber, today, extraDays, onClick, selected } = props;

  return (
    <button
      className={`p-2 ${
        extraDays ? ' text-gray-300' : ''
      } ${selected ? 'bg-blue-500 text-white' : ''} ${
        today ? 'bg-yellow-200' : ''
      }`}
      disabled={extraDays}
      onClick={onClick}
    >
      <p>{dayNumber}</p>
    </button>
  );
});

Day.displayName = "Day";
