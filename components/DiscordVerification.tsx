"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { discordIds } from "@/lib/constants";

export default function DiscordVerification() {
  const [inputId, setInputId] = useState("");

  const trimmed = inputId.trim();
  const isMatch = trimmed && discordIds.includes(trimmed);
  const isNoMatch = trimmed && !discordIds.includes(trimmed);

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="Enter Discord User ID..."
          className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 placeholder-neutral-500 transition-colors outline-none focus:border-neutral-600"
        />
      </div>

      {isMatch && (
        <div className="mt-3 flex items-center gap-2 rounded-md border border-green-700 bg-green-900/30 px-3 py-2 text-green-400">
          <FaCheckCircle className="h-4 w-4" />
          <span className="text-sm">It is me!</span>
        </div>
      )}

      {isNoMatch && (
        <div className="mt-3 flex items-center gap-2 rounded-md border border-red-700 bg-red-900/30 px-3 py-2 text-red-400">
          <FaTimesCircle className="h-4 w-4" />
          <span className="text-sm">Not me!</span>
        </div>
      )}
    </div>
  );
}
