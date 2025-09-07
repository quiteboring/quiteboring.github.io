"use client";

import { useEffect, useMemo, useState } from "react";
import { LanyardData } from "./types/lanyard";
import { Grid } from "./components/grid";
import { Socials } from "./components/socials";
import { Birthday } from "./components/birthday";

const DISCORD_ID = "1367543367277219840";

const statusColors: Record<LanyardData["data"]["discord_status"], string> = {
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
  offline: "#80848e",
};

function calculateAge(birthDate: string) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function useLanyard(userId: string) {
  const [presence, setPresence] = useState<LanyardData["data"] | null>(null);

  useEffect(() => {
    async function getLanyardData() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const lanyard: LanyardData = await res.json();
          setPresence(lanyard.data);
        }
      } catch (error) {
        console.error("Failed to fetch Lanyard data:", error);
      }
    }

    getLanyardData();
  }, [userId]);

  return presence;
}

export default function Home() {
  const presence = useLanyard(DISCORD_ID);
  const age = calculateAge("2009-01-05");
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const avatarUrl = useMemo(() => {
    const user = presence?.discord_user;
    if (!user) return "";
    
    if (user.avatar) {
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
    }

    const defaultAvatarIndex = user.discriminator
      ? parseInt(user.discriminator) % 5
      : 0;
    
      return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png`;
  }, [presence]);

  const status = presence?.discord_status ?? "offline";
  const statusColor = statusColors[status];

  return (
    <main className="relative flex min-h-screen items-center justify-center p-6">
      <Grid />
      <div className="relative z-10 flex w-full max-w-sm flex-col gap-2">
        <div className="rounded-[10px] bg-black ring-1 ring-white/10">
          <div className="flex items-start gap-4 p-6">
            <div className="relative h-20 w-20 flex-shrink-0">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="Discord avatar"
                  className="h-full w-full rounded-[10px] object-cover"
                />
              )}
              <span
                title={status}
                className="absolute -bottom-1 -right-1 block h-5 w-5 rounded-full border-3 border-black"
                style={{ backgroundColor: statusColor }}
              />
            </div>

            <div className="text-left pt-1">
              <h1 className="text-xl font-semibold text-white mb-0">Nathan</h1>
              <div className="mt-1 h-1 w-10 bg-[#4682b4]" />
              <p className="text-sm text-white/60 mt-2">
                A {age} year old developer.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 flex justify-center rounded-[10px] bg-black p-3 text-left ring-1 ring-white/10">
            <div>
              <p className="text-xs text-white/60">It is currently</p>
              <p className="text-lg font-semibold text-white">{time}</p>
            </div>
          </div>
          <Birthday />
          <Socials discordId={DISCORD_ID} />
        </div>
      </div>
    </main>
  );
}