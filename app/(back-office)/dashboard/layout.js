"use client";
import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";
import { useState } from "react";
export default function layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className=" lg:ml-64 md:ml-64 sm:ml-64 ml-0 flex-grow bg-slate-100  min-h-screen ">
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        <main className="  min-h-screen p-5 mt-16 dark:bg-[#17171f] bg-[#F7F7F8]  dark:text-slate-100 text-slate-900 ">
          {children}
        </main>
      </div>
    </div>
  );
}
