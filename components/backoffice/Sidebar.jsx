"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  FolderSearch,
  LayoutGrid,
  LogOut,
  Settings,
  Layers,
  ShoppingBasket,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import classNames from "classnames";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Setings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];
  const catalogLinks = [
    {
      title: "Categories",
      icon: Layers,
      href: "/dashboard/categories",
    },
    {
      title: "Products",
      icon: ShoppingBasket,
      href: "/dashboard/products",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  // const asideStyle = classNames(
  //   " sm:block space-y-6 w-64 h-screen p-4 px-6 fixed left-0 top-0 dark:bg-[#1E1E1F] bg-slate-50 dark:text-slate-100   border-r dark:border-[#353741] border-[#E7E8EC] ", {
  //     ["w-5"]: showSidebar,
  //     ["2-64"]: !showSidebar
  //   }
  // );
  return (
    <section
      // className={asideStyle}
      className={
        showSidebar
          ? "  sm:block sm:w-20 space-y-6 w-64 h-screen p-4 px-6 fixed left-0 top-0 dark:bg-[#1E1E1F] bg-slate-50 dark:text-slate-100   border-r dark:border-[#353741] border-[#E7E8EC] "
          : " hidden sm:block  space-y-6 w-64 h-screen p-4 px-6 fixed left-0 top-0 dark:bg-[#1E1E1F] bg-slate-50 dark:text-slate-100   border-r dark:border-[#353741] border-[#E7E8EC] "
      }
    >
      <Link className="mb-6 pt-0.5 flex items-center " href="/dashboard">
        <svg
          className="w-7 h-7 fill-[#0F0F0F] dark:fill-[#ffffff]  mr-3 "
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 181 181"
        >
          <path d="M126.8 10.8c-8.1 4.8-14.8 9-14.8 9.4 0 .6 28.4 17.3 30.6 18 .6.2 8.1-3.8 16.7-8.7 11.7-6.7 15.3-9.3 14.4-10.1-2.3-2.1-29.6-17.4-30.9-17.3-.7 0-7.9 4-16 8.7zm-63.5 10c-.7.4-1.3 3.9-1.5 8.6l-.3 7.9-6.7 2.7-6.6 2.7-5.9-5.9-5.8-5.8-12.7 12.7L11 56.5l5.5 5.5c3 3.1 5.5 6 5.5 6.5 0 1.3-4.5 12.3-5.4 13.2-.3.4-4.1.7-8.4.7l-7.7.1-.3 18.2L0 119h17l1.3 3.3c.8 1.7 2 4.9 2.8 7l1.3 3.7-5.7 5.8-5.7 5.7 12.8 12.8L36.5 170l5.9-5.9 5.8-5.8 6.6 2.8 6.7 2.8.3 8.5.3 8.6H98v-45l-4.2 1.8c-3.1 1.2-7.1 1.7-13.8 1.7-8.7 0-10.1-.3-16.1-3.2-8.2-4.1-15.1-10.9-19.2-19.3-3-6-3.2-7.2-3.2-16.5S41.7 90 44.7 84c9-18.3 28.4-26.9 47.2-21.1l6.1 1.9.1-16.7c.2-17.8.1-26.3-.4-26.8-.8-.7-33.3-1.2-34.4-.5zM107 46.4v18.3l7.8 4.5c4.2 2.5 11.3 6.6 15.7 9.1l8 4.6.3-18.1c.1-10-.1-18.5-.5-18.9-1.2-1.1-30-17.9-30.7-17.9-.3 0-.6 8.3-.6 18.4zm55.7-9.3L147 46.2v18.5c0 10.2.4 18.3.9 18.1.5-.2 7.9-4.3 16.5-9.2l15.6-9V46.3c0-10.1-.3-18.3-.8-18.3-.4 0-7.8 4.1-16.5 9.1zM125 100v8h36V92h-36v8zm30 0c0 1.9-.7 2-12 2s-12-.1-12-2 .7-2 12-2 12 .1 12 2z" />
          <path d="M107 139.4V181l36.3-.2 36.2-.3v-82h-14l-.3 6.8-.3 6.7-21.7-.2-21.7-.3-.5-6.6-.5-6.6-6.7-.2-6.8-.2v41.5zm47.7-16.5c5.6 2.8 6 3.8 2.9 6.9l-2.6 2.6-3.1-1.8c-3.7-2.2-12.3-2.5-15.9-.6-6.7 3.4-10.1 8.8-10.2 15.9-.1 15.1 17.5 23.3 29.1 13.5 1.6-1.3 3.7-4.6 4.7-7.2 1.6-4.4 6.8-11.2 8.6-11.2 1.7 0 .8 11.1-1.4 15.6-8 17.1-30 20.6-42.7 6.9-4-4.3-7.1-12-7.1-17.5 0-4.4 2.6-11.8 5.5-15.6 2.8-3.6 9.1-8.1 13.5-9.5 4.2-1.4 14.2-.3 18.7 2zm10.8 10.4 1.7 3.3-11.9 12.1-12 12.2-6.8-6.9-6.9-6.9 2.4-2.6c1.3-1.4 2.8-2.5 3.4-2.5.6 0 2.6 1.6 4.6 3.5l3.6 3.5 9.4-9.5c5.2-5.2 9.7-9.5 10.1-9.5.3 0 1.4 1.5 2.4 3.3z" />
        </svg>
        <h2 className="text-xl font-bold">Inventory</h2>
      </Link>

      <ul className="  flex flex-col space-y-3">
        <li className=" ">
          <Link
            onClick={() => setShowSidebar(false)}
            href="/dashboard"
            className={
              pathname === "/dashboard"
                ? "flex items-center space-x-3 p-3 bg-[#5575F2] rounded-xl"
                : "flex items-center space-x-3 p-3"
            }
          >
            <LayoutGrid />
            <span>Dashboard</span>
          </Link>
        </li>
        <Collapsible className="">
          <li>
            <CollapsibleTrigger
              className="flex items-center  space-x-2 p-3 "
              onClick={() => setOpenMenu(!openMenu)}
            >
              <div className=" flex items-center  space-x-3  ">
                <FolderSearch className="" />
                <span>Catalogue</span>
              </div>
              {openMenu ? (
                <ChevronRight className="pt-1" />
              ) : (
                <ChevronDown className="pt-1" />
              )}
            </CollapsibleTrigger>
          </li>
          <CollapsibleContent className="rounded-lg px-3 py-2 pl-6 bg-slate-800">
            {catalogLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-3 py-1 text-sm text-[#5575F2]"
                      : "flex items-center space-x-3 py-1"
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <li key={i}>
              <span>
                <Link
                  onClick={() => setShowSidebar(false)}
                  href={item.href}
                  className={
                    item.href === pathname
                      ? "flex items-center space-x-3 p-3 bg-[#5575F2] rounded-xl"
                      : "flex items-center space-x-3 p-3"
                  }
                >
                  <Icon />

                  {!showSidebar && <span className="">{item.title}</span>}
                </Link>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="absolute bottom-4  left-6 p-2 hover:bg-[#5575F2]  rounded-xl  duration-300 ease-in ">
        <button className="flex items-center space-x-3  ">
          <LogOut className="text-[#98989A]  " />
          <span className="text-[#98989A] ">Log Out</span>
        </button>
      </div>
    </section>
  );
}
