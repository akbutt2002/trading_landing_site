import "../globals.css";
import { AppSidebar } from "@/components/Layout/app-sidebar";
import NavBar from "@/components/Layout/NavBar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#171717] text-white min-h-screen">
        <SidebarProvider className="flex">
          <AppSidebar />
          <SidebarInset className="bg-black w-full h-full m-2 rounded-xl px-5">
            <header className="flex h-12 shrink-0 items-center gap-2 border-b border-[#1f1f1f] ">
              <div className="border-r border-gray-800 ">
                <SidebarTrigger className="hover:bg-[#1f1f1f] mr-5" />
              </div>
              <NavBar />
              <div className="flex-1" />
            </header>

            <main>{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
