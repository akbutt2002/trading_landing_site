"use client";
import AutoProgress from "@/components/LifeCycle/AutoProgress";
import { Button } from "@/components/ui/button";
import LifeCards from "@/components/LifeCycle/LifeCards";

export default function AutoProgressPage() {
  return (
    <div className="min-w-xs sm:w-full  h-full p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold pb-2">Life Cycle</h1>
      <p className="pt-2 text-gray-500">
        Follow the essential steps to bring your innovative idea to market and
        ensure a successful product debut.
      </p>
      <div className=" w-full sm:w-3/4 my-6 border border-gray-700 rounded-xl p-6">
        <div className="  sm:items-center sm:flex sm:justify-between ">
          <h1 className="text-sm  ">Guidance from industry leaders</h1>
          <Button className="bg-[#171717] cursor-pointer hidden sm:block text-xs  hover:opacity-70">
            Request a Demo
          </Button>
        </div>
        <div className="flex flex-row items-stretch sm:flex-col gap-6">
          {/* progress bar container, shrink so cards can flex */}
          <div className="shrink-0">
            <AutoProgress />
          </div>

          {/* cards area */}
          <div className="flex-1">
            <LifeCards />
          </div>
        </div>
        {/* mobile-only request button beneath cards */}
        <div className="mt-6 sm:hidden ">
          <Button className="w-full bg-[#171717] text-xs hover:opacity-70">
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
