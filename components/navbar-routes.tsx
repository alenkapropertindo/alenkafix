"use client";

import { usePathname } from "next/navigation";
import UserDropdown from "./UserDropdown";
import { Session } from "next-auth";

export interface NavbarRoutesProps{
  session:Session | null
}
export const NavbarRoutes = ({session}:NavbarRoutesProps) => {
  const pathname = usePathname();

  const isFreelancePage = pathname?.startsWith("/freelance");
  // const isHomePage = pathname === "/";

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {isFreelancePage ? <UserDropdown session={session}/> : null}
      </div>
    </>
  );
};
