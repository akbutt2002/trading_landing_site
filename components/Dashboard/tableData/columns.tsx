import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  name: string;
  sectionType: string;
  target: number;
  limit: number;
  status: "pending" | "In Progress" | "Done" | "failed";
  reviewer: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="bg-white text-black"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="bg-white text-black"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Header",
  },
  {
    accessorKey: "sectionType",
    header: "Section Type",
    cell: ({ row }) => {
      const sectionType = row.getValue("sectionType") as string;

      return (
        <span className="rounded-full border border-gray-500 px-1 py-0 text-xs">
          {sectionType}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const sectionType = row.getValue("status") as string;

      return (
        <span className="rounded-full border border-gray-500 px-1 py-0 text-xs">
          {sectionType}
        </span>
      );
    },
  },
  {
    accessorKey: "target",
    header: "Target",
  },
  {
    accessorKey: "limit",
    header: "Limit",
  },
  {
    accessorKey: "reviewer",
    header: "Reviewer",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="hover:bg-gray-400">
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-[#171717] border-gray-600"
          >
            <DropdownMenuItem className="hover:bg-gray-400">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-gray-400"
              onClick={() => navigator.clipboard.writeText(payment.reviewer)}
            >
              Make a copy
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-400">
              Favorite
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-500" />
            <DropdownMenuItem className="text-red-700 hover:bg-red-300">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
