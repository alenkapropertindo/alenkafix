// "use client";
// import UserDropdown from "@/components/UserDropdown";
// import { Menu, X } from "lucide-react";
// import { useSession } from "next-auth/react";

// interface NavbarProps {
//   onMenuToggle: () => void;
//   sidebarOpen: boolean;
// }

// export default function Navbar({ onMenuToggle, sidebarOpen }: NavbarProps) {
//   const { data: session, status } = useSession();
//   return (
//     <header className="bg-white border-b h-16 fixed top-0 w-full z-50 flex items-center px-4 shadow-sm">
//       {/* Hamburger Icon - Always visible */}
//       <button
//         onClick={onMenuToggle}
//         className="text-gray-600 hover:text-gray-900 transition-colors"
//       >
//         {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Spacer */}
//       <div className="flex-1"></div>

//       {/* User Dropdown */}
//       <div className="flex items-center">
//         <UserDropdown session={session} />
//       </div>
//     </header>
//   );
// }

// components/navbar.tsx
'use client'

import { useContext } from 'react'
import UserDropdown from './dropdown'
import { SidebarContext } from './sidebar-context'
// import { SidebarContext } from '@/context/sidebar-context'
// import UserDropdown from '@/components/user-dropdown'

export default function Navbar() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="hidden md:block w-6" /> {/* Spacer untuk alignment */}
        
        <div className="flex items-center space-x-4">
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}