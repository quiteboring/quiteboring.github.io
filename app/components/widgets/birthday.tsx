"use client";

import { useEffect, useState } from "react";

function calculateDaysUntilBirthday(month: number, day: number) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const nextBirthday = new Date(currentYear, month - 1, day);

  if (today.getTime() > nextBirthday.getTime()) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const diffTime = nextBirthday.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function Birthday() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    setDays(calculateDaysUntilBirthday(1, 5));
  }, []);

  return (
    <div className="col-span-1 flex justify-center rounded-[10px] bg-black p-3 text-left ring-2 ring-white/10">
      <div>
        <p className="text-xs text-white/60">Birthday in</p>
        <p className="text-lg font-semibold text-white">{days} days</p>
      </div>
    </div>
  );
}
