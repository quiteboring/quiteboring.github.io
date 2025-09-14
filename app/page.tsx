"use client";

import { useEffect, useMemo, useState } from "react";
import { LanyardData, LanyardSuccess } from "./types/lanyard";
import { Grid } from "./components/grid";
import { Socials } from "./components/widgets/socials";
import { Birthday } from "./components/widgets/birthday";
import { Tools } from "./components/widgets/tools";
import { Verification } from "./components/widgets/verification";
import { Projects } from "./components/widgets/projects";
import { discordId, statusColors } from "./utils/constants";
import Image from "next/image";

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
  const [presence, setPresence] = useState<LanyardSuccess["data"] | null>(null);

  useEffect(() => {
    async function getLanyardData() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const lanyard: LanyardData = await res.json();
          if (lanyard.success) {
            setPresence(lanyard.data);
          }
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
  const presence = useLanyard(discordId);
  const age = calculateAge("2009-01-05");
  const [time, setTime] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (presence) {
      setIsLoaded(true);
    }
  }, [presence]);

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );

    updateTime();
    const timer = setInterval(updateTime, 1000);

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
      <title>QuiteBoring</title>
      <Grid />
      <div
        className={`relative z-10 flex w-full max-w-4xl flex-col gap-2 transition-opacity duration-500 lg:flex-row lg:items-stretch ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex w-full flex-col gap-2 lg:w-1/2">
          <div className="rounded-[10px] bg-black ring-2 ring-white/10">
            <div className="flex items-start gap-4 p-6">
              <div className="relative h-20 w-20 flex-shrink-0">
                {avatarUrl && (
                  <Image
                    src={avatarUrl}
                    alt="Discord avatar"
                    className="h-full w-full rounded-[10px] object-cover"
                    fill
                    sizes="80px"
                    priority
                  />
                )}
                <span
                  title={status}
                  className="absolute -bottom-1 -right-1 block h-5 w-5 rounded-full border-3 border-black"
                  style={{ backgroundColor: statusColor }}
                />
              </div>

              <div className="pt-1 text-left">
                <h1 className="mb-0 text-xl font-semibold text-white">
                  Nathan
                </h1>
                <div className="mt-1 h-1 w-10 bg-[#4682b4]" />
                <p className="mt-2 text-sm text-white/60">
                  A {age} year old developer.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 flex justify-center rounded-[10px] bg-black p-3 text-left ring-2 ring-white/10">
              <div>
                <p className="text-xs text-white/60">It is currently</p>
                <p className="text-lg font-semibold text-white">{time}</p>
              </div>
            </div>
            <Birthday />
            <Socials discordId={discordId} />
            <Tools />
            <Verification discordId={discordId} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:min-h-0">
          <Projects />
        </div>
      </div>
    </main>
  );
}
