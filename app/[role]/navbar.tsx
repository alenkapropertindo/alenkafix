"use client";
import UserDropdown from "@/components/UserDropdown";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";

interface NavbarProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

export default function Navbar({ onMenuToggle, sidebarOpen }: NavbarProps) {
  const { data: session, status } = useSession();
  return (
 <header className="bg-white border-b h-16 fixed top-0 w-full z-50 flex items-center px-4 shadow-sm">
      {/* Hamburger Icon - Always visible */}
      <button 
        onClick={onMenuToggle}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Spacer */}
      <div className="flex-1"></div>
      
      {/* User Dropdown */}
      <div className="flex items-center">
        <UserDropdown session={session} />
      </div>
    </header>
  );
}