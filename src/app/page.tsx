"use client";
import { useState } from "react";
import { LanguageCode, Mode } from "@/components/calendar/utils/locals/types";
import SelectField from "@/components/calendar/components/select";
import { Calendar } from "@/components/calendar/components/calender";
import { SelectedDate } from "@/components/calendar/model";

export default function Home() {
  const [date, setDate] = useState<Date | null>(null);
  const [mode, setMode] = useState<Mode>("EC");
  const [locale, setLocale] = useState<LanguageCode>("AMH");
  const [selectedDate, setSelectedDate] = useState<SelectedDate>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {selectedDate && (
        <div>
          <p>
            Selected Gregorian Date:{" "}
            {`${selectedDate?.gregorian.year}-${selectedDate?.gregorian.month}-${selectedDate?.gregorian.date}`}
          </p>

          <p>
            Selected Ethiopian Date:{" "}
            {`${selectedDate?.ethiopian.year}-${selectedDate?.ethiopian.month}-${selectedDate?.ethiopian.date}`}
          </p>
        </div>
      )}
      <SelectField
        label="Type"
        value={mode}
        onChange={setMode}
        data={[
          {
            value: "EC",
            label: "Ethiopian",
          },
          {
            value: "GC",
            label: "Gregorian",
          },
        ]}
      />
      <Calendar
        key={mode}
        mode={mode}
        onDatePress={(date) => setSelectedDate(date)}
        onModeChange={(selectedMode) => setMode(selectedMode)}
        onLanguageChange={(lang) => setLocale(lang)}
        locale={locale}
      />
    </main>
  );
}
