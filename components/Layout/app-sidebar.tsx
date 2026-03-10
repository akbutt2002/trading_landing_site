import { DropdownMenuAvatar } from "./avatarDemo";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import {
  Bubbles,
  ChartColumnBig,
  CircleGauge,
  ChartBarBig,
  CirclePlus,
  Mail,
  Files,
  Users,
  Database,
  ClipboardList,
  FileLock,
  Settings,
  CircleQuestionMark,
  Search,
} from "lucide-react";

const sideItems = [
  { icon: <CircleGauge size={15} />, name: "Dashboard", href: "/Dashboard" },
  {
    icon: <ChartBarBig size={15} />,
    name: "Lifecycle",
    href: "Dashboard/Lifecycle",
  },
  { icon: <ChartColumnBig size={15} />, name: "Analytics", href: "/analytics" },
  { icon: <Files size={15} />, name: "Project", href: "/project" },
  { icon: <Users size={15} />, name: "Team", href: "/team" },
];

const Docs = [
  { icon: <Database size={15} />, name: "Data Library" },
  { icon: <ClipboardList size={15} />, name: "Reports" },
  { icon: <FileLock size={15} />, name: "Word Assistant" },
];

const sideFooter = [
  { icon: <Settings size={15} />, name: "Settings" },
  { icon: <CircleQuestionMark size={15} />, name: "Get Help" },
  { icon: <Search size={15} />, name: "Search" },
];

export function AppSidebar() {
  return (
    <Sidebar className={`bg-[#171717]  text-white p-3 border-none "}`}>
      <SidebarHeader>
        <h1 className="text-sm font-bold hover:bg-[#1f1f1f] rounded-lg cursor-pointer p-2 flex items-center gap-2  ">
          <Bubbles />
          Trading Dashboard.
        </h1>
        <div className="flex items-center justify-between">
          <Button className="text-gray-600 w-10/12 justify-start bg-white cursor-pointer hover:opacity-80">
            <CirclePlus />
            Quick Create
          </Button>
          <div className="border-gray-500 border rounded-lg p-2  hover:opacity-85">
            <Mail size={15} />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {sideItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center text-sm gap-2 p-2 hover:bg-[#1f1f1f] rounded-lg cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <p className="text-xs text-gray-400">Documents</p>
          {Docs.map((doc, index) => (
            <div
              key={index}
              className="flex items-center text-sm gap-2 py-2 pl-2 hover:bg-[#1f1f1f] rounded-lg cursor-pointer"
            >
              {doc.icon}
              <span>{doc.name}</span>
            </div>
          ))}
          <p className="text-sm font-semibold text-gray-400 p-2 flex items-center gap-3">
            <span className="font-bold text-sm pb-2">...</span>
            More
          </p>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {sideFooter.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-sm gap-2 p-2 hover:bg-[#1f1f1f] rounded-lg cursor-pointer"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}

        <div className="flex items-center rounded-lg">
          <DropdownMenuAvatar />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
