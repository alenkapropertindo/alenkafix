"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  mobile?: boolean;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  mobile = false
}: SidebarItemProps) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex items-center p-4 hover:bg-sky-100 transition",
          mobile ? "text-lg" : "text-sm"
        )}
      >
        <Icon className={cn("h-5 w-5", mobile && "h-6 w-6")} />
        <span className="ml-4">{label}</span>
      </div>
    </Link>
  );
};