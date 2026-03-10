import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

type CardData = {
  id: number;
  title: string;
  heading: string;
  subHeading: string;
  progress: number;
  duration: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Ideation",
    heading: "Brainstorm and validate your concept",
    subHeading:
      "Gather insights from market research, customer interviews, and competitor analysis to refine your product idea.",
    progress: 15,
    duration: "2 weeks",
  },
  {
    id: 2,
    title: "Development",
    heading: "Build your MVP",
    subHeading:
      "Design, prototype, and develop the minimum viable product. Iterate quickly based on early feedback and testing.",
    progress: 85,
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Launch",
    heading: "Go to market",
    subHeading:
      "Execute your launch plan with marketing campaigns, outreach, and customer support to maximize impact and adoption.",
    progress: 100,
    duration: "Launch Complete",
  },
];

const LifeCards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4 sm:gap-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          className="p-5 sm:p-6 flex flex-col justify-between h-full border border-gray-200 transition hover:shadow-md"
        >
          {/* Top Content */}
          <div className="space-y-4">
            {/* Button */}
            <Button
              variant="outline"
              className="w-fit text-xs sm:text-sm font-semibold flex items-center gap-3"
            >
              <span className="border-r pr-3">{card.id}</span>
              {card.title}
            </Button>

            {/* Text Content */}
            <div className="space-y-2">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold leading-snug">
                {card.heading}
              </h4>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {card.subHeading}
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-5">
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-gray-700 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${card.progress}%` }}
              />
            </div>

            <span className="text-xs sm:text-sm text-gray-500 mt-2 block">
              ~{card.duration}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default LifeCards;
