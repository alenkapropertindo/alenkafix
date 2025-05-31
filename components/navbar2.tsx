import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";
import { Session } from "next-auth";

export interface NavbarProps {
  session: Session | null;
}
export const Navbar = ({session}:NavbarProps) => {
  return (
    <div className="p-4 border-b h-12 flex items-center bg-white shadow-lg">
      <MobileSidebar />
      <NavbarRoutes session={session}/>
    </div>
  );
};
