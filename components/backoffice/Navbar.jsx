import { LayoutDashboard, LogOut, Settings, ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeProvidersBtn from "@/components/backoffice/ThemeProviders";
export default function Navbar({ showSidebar, setShowSidebar }) {
  return (
    <section className=" flex items-center justify-between  h-16 px-5 py-4 fixed top-0 w-full  lg:pr-[17.3rem] md:pr-[17.3rem] sm:pr-[17.3rem]  z-50  dark:bg-[#1E1E1F] bg-slate-50 dark:text-slate-100 border-b dark:border-[#353741] border-[#E7E8EC] ">
      <button
        className=" text-[#98989A] dark:bg-[#1E1E1F] bg-[#FFFFFF]  border dark:border-[#353741] border-[#E7E8EC] rounded-full   "
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <ChevronLeft className="p-0.5 " />
      </button>
      <div className="space-x-3 flex">
        <ThemeProvidersBtn />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/png.jpg"
              alt="User "
              className="w-7 h-7 rounded-full object-cover"
              width={200}
              height={200}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="fixed -left-[115px] ">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
