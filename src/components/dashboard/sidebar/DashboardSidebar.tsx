"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, HomeIcon, ShieldCloseIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { name: "Strona Główna", href: "/home", icon: <HomeIcon /> },
  { name: "Zarządzanie Urlopami", href: "/home", icon: <HomeIcon /> },
  { name: "Paski Wynagrodzeń", href: "/home", icon: <HomeIcon /> },
  { name: "Kalendarz Korporacyjny", href: "/home", icon: <HomeIcon /> },
  { name: "Oceny Pracownicze", href: "/home", icon: <HomeIcon /> },
];

const DashboardSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="min-h-screen min-w-min">
      {!showSidebar && (
        <ArrowRightCircle
          className="w-12 h-12 hover:text-gray-300 transition duration-300 absolute top-0 left-0 cursor-pointer md:top-1/2 md:left-2"
          onClick={() => {
            setShowSidebar(true);
          }}
        />
      )}

      <div
        className={cn(
          "fixed z-40 flex flex-col gap-4 left-0 min-h-screen w-full duration-1000 ease-in-out -translate-x-full p-4 md:w-96",
          {
            "bg-[#303D50] translate-x-0": showSidebar,
          }
        )}
      >
        <ShieldCloseIcon
          className="ml-auto text-white cursor-pointer hover:text-red-200"
          onClick={() => {
            setShowSidebar(false);
          }}
        />

        {LINKS.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className="w-full p-4 flex gap-4 justify-center items-center rounded-sm transition duration-300 hover:bg-yellow-100"
            >
              {link.icon}
              {link.name}
            </Link>
          </div>
        ))}

        <Button>SignOut</Button>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
