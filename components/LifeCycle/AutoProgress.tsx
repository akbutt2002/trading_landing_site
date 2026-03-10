"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const milestones = [0, 33, 66]; // only visible milestones

export default function AutoProgress() {
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (isMobile) {
    return (
      <div className="h-full flex items-stretch py-7">
        <div className="relative w-0.5 h-full bg-gray-700">
          {/* Progress Fill */}
          <div
            className="absolute bottom-0 left-0 w-full bg-white transition-all duration-75"
            style={{ height: `${progress}%` }}
          />

          {/* Milestones */}
          {milestones.map((point, i) => {
            const reached = progress >= point;

            return (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2"
                style={{ bottom: `${point}%` }}
              >
                <div
                  className={cn(
                    "w-3 h-3 rounded-full border transition-colors",
                    reached
                      ? "bg-white border-white"
                      : "bg-background border-muted-foreground",
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // horizontal fallback for larger screens
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <div className="relative">
        {/* Track */}
        <div className="h-0.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Milestones */}
        <div className="absolute left-0 w-full -translate-y-[57%] flex justify-between">
          {milestones.map((point, i) => {
            const reached = progress >= point;

            return (
              <div
                key={i}
                className={cn(
                  "flex flex-col items-center",
                  i === 0, // 👈 remove left gap
                )}
              >
                <div
                  className={cn(
                    "w-3 h-3 rounded-full border transition-colors",
                    reached
                      ? "bg-white border-white"
                      : "bg-background border-muted-foreground",
                  )}
                />
              </div>
            );
          })}

          {/* empty space for 100% */}
          <div className="w-4" />
        </div>
      </div>
    </div>
  );
}
