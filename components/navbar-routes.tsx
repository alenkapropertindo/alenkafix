"use client";

import { Session } from "next-auth";

export interface NavbarRoutesProps{
  session:Session | null
}
export const NavbarRoutes = () => {

  // const isHomePage = pathname === "/";

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {/* {isFreelancePage ? <UserDropdown/> : null} */}
      </div>
    </>
  );
};
