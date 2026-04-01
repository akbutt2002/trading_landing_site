import React from "react";
import {
  Card,
  CardAction,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
const ProfileCards = () => {
  const cardsData = [
    { id: 1, titleCard: "KPI Card", batch: "Public", foot: "KPI Key" },
    { id: 2, titleCard: "Trend Card", batch: "Public", foot: "Trend Key" },
    {
      id: 3,
      titleCard: "Comparison Card",
      batch: "Public",
      foot: "Comparison Key",
    },
    {
      id: 4,
      titleCard: "Utilization Card",
      batch: "Public",
      foot: "Utility Key",
    },
    { id: 5, titleCard: "Details Card", batch: "Public", foot: "Detail Key" },
  ];

  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {cardsData.map((data, index) => (
        <Card className="border-gray-600" key={index}>
          <CardHeader>
            <CardTitle className="text-blue-400">{data.titleCard}</CardTitle>
            <CardAction className="text-xs text-gray-400 font-semibold border rounded-full px-1">
              {data.batch}
            </CardAction>
          </CardHeader>
          <CardFooter className=" text-xs">
            <span className="h-3 w-3 bg-amber-300 rounded-full mr-1"></span>
            {data.foot}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProfileCards;
