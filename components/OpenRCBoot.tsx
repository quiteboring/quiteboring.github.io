"use client";

import { useState, useEffect } from "react";

interface Service {
  name: string;
  delay: number;
}

const services: Service[] = [
  { name: "Loading kernel modules", delay: 200 },
  { name: "Mounting filesystems", delay: 300 },
  { name: "Starting system logger", delay: 150 },
  { name: "Initializing network", delay: 400 },
  { name: "Starting portfolio service", delay: 250 },
  { name: "Loading user interface", delay: 350 },
  { name: "Starting web server", delay: 200 },
];

interface OpenRCBootProps {
  onComplete: () => void;
}

export default function OpenRCBoot({ onComplete }: OpenRCBootProps) {
  const [completedServices, setCompletedServices] = useState<number[]>([]);
  const [currentService, setCurrentService] = useState<number>(0);

  useEffect(() => {
    if (currentService >= services.length) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCompletedServices((prev) => [...prev, currentService]);
      setCurrentService((prev) => prev + 1);
    }, services[currentService].delay);

    return () => clearTimeout(timeout);
  }, [currentService, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-mono text-sm">
      <div className="w-full max-w-2xl p-8">
        <div className="mb-6 text-slate-500">
          <p className="mt-2 text-neutral-500">nathan&apos;s website v2.0.0</p>
        </div>

        <div className="space-y-1">
          {services.map((service, index) => {
            const isCompleted = completedServices.includes(index);

            if (index > currentService) return null;

            return (
              <div key={index} className="flex items-center gap-2">
                <span className={isCompleted ? "text-slate-500" : "text-neutral-500"}>*</span>
                <span className="flex-1 text-neutral-300">
                  {service.name} ...
                </span>
              </div>
            );
          })}
        </div>

        {currentService < services.length && (
          <div className="mt-6">
            <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-800">
              <div
                className="h-full bg-slate-500 transition-all duration-300"
                style={{
                  width: `${(completedServices.length / services.length) * 100}%`,
                }}
              />
            </div>
          </div>
        )}

        {currentService >= services.length && (
          <div className="mt-6 text-slate-500">
            <p>Boot complete. Starting interface...</p>
          </div>
        )}
      </div>
    </div>
  );
}
