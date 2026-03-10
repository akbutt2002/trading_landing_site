import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const CardsStat = () => {
  const data = [
    {
      title: "Total Revenue",
      description: "$1,250.00",
      batch: "+12.5%",
      content: "Trending up this month",
      footer: "Visitors for the last 6 months",
    },
    {
      title: "New Customers",
      description: "1,234",
      batch: "-20%",
      content: "Down 20% this period",
      footer: "Acquisition needs attention",
    },
    {
      title: "Active Accounts",
      description: "45,678",
      batch: "+12.5%",
      content: "Strong user retention",
      footer: "Engagement exceed targets",
    },
    {
      title: "Growth Rate",
      description: "+4.5%",
      batch: "+4.5%",
      content: "Steady performance",
      footer: "Meets growth projections",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
      {data.map((items, index) => (
        <Card
          key={index}
          className="bg-[#1f1f1f] border border-gray-700 flex flex-col justify-between h-full"
        >
          {/* HEADER */}
          <CardHeader className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <CardTitle className="text-sm text-gray-400 truncate">
                {items.title}
              </CardTitle>

              <CardDescription className="text-2xl md:text-3xl font-bold">
                {items.description}
              </CardDescription>
            </div>

            <CardAction className="shrink-0 text-xs flex items-center gap-1 border border-gray-600 rounded-xl px-2 py-1 whitespace-nowrap">
              <TrendingUp size={12} />
              {items.batch}
            </CardAction>
          </CardHeader>

          {/* CONTENT */}
          <CardContent className="mt-auto text-sm">
            <p className="font-semibold pb-2 flex items-center gap-2">
              {items.content}
              <TrendingUp size={15} />
            </p>

            <p className="text-gray-400 text-xs md:text-sm">{items.footer}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default CardsStat;
