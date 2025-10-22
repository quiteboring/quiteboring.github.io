"use client";

import { useEffect, useState } from "react";

export function Verification({ discordIds }: { discordIds: string[] }) {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"verified" | "impersonator" | null>(
    null,
  );

  useEffect(() => {
    if (!inputValue) {
      setStatus(null);
      return;
    }

    if (discordIds.includes(inputValue)) {
      setStatus("verified");
    } else {
      setStatus("impersonator");
    }
  }, [inputValue, discordId]);

  return (
    <div className="col-span-3 rounded-[10px] bg-black p-3 text-left ring-2 ring-white/10">
      <div>
        <p className="text-xs text-white/60">Discord ID Verification</p>
        <div className="mt-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                setInputValue(e.target.value);
              }
            }}
            placeholder={discordIds[0]}
            className="w-full rounded-md bg-white/10 px-2 py-1 text-sm text-white placeholder-white/30 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-[#4682b4]"
          />
        </div>
      </div>
      {status === "verified" && (
        <p className="mt-2 text-xs text-green-500">It is me!</p>
      )}
      {status === "impersonator" && (
        <p className="mt-2 text-xs text-red-500">Impersonator</p>
      )}
    </div>
  );
}
