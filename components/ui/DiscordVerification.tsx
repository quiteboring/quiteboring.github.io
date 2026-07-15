"use client";

import { useState } from "react";
import { discordId } from "@/lib/data";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

export default function DiscordVerification() {
  const [inputId, setInputId] = useState("");

  const trimmed = inputId.trim();
  const status = trimmed === "" ? "idle" : trimmed === discordId ? "success" : "error";

  return (
    <div className="mt-6 w-full max-w-sm rounded-lg border border-(--text-secondary)/15 bg-(--background-secondary)/50 backdrop-blur-sm p-5">
      <label
        htmlFor="discord-id"
        className="mono mb-3 block text-xs font-semibold tracking-wide text-(--text-secondary)"
      >
        DISCORD VERIFICATION
      </label>

      <div className="flex items-center gap-3 rounded-md border border-(--text-secondary)/15 bg-(--background-primary)/70 px-4 py-3">
        <input
          id="discord-id"
          type="text"
          placeholder="Enter Discord ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value.replace(/\D/g, ""))}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-(--text-secondary)/50"
        />

        {status === "success" && (
          <BiCheck className="h-5 w-5 text-(--accent-primary)" />
        )}

        {status === "error" && (
          <RxCross2 className="h-5 w-5 text-(--accent-primary)" />
        )}
      </div>
    </div>
  );
}