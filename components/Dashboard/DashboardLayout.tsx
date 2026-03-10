"use client";

import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import CardsStat from "../Layout/CardsStat";
import { ChartAreaInteractive } from "../Layout/ChartDemo";
import TableData from "./tableData";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <SidebarInset>
        <CardsStat />
        <ChartAreaInteractive />
        <TableData />

        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
