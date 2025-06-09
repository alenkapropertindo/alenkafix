// "use client"
// import { useState } from "react";

// export default function UserDropdown() {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="relative">
//       <button onClick={() => setOpen(!open)} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
//         <span className="w-8 h-8 bg-gray-300 rounded-full" />
//         <span className="hidden md:inline">User Name</span>
//       </button>
//       {open && (
//         <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
//           <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
//           <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Settings</button>
//         </div>
//       )}
//     </div>
//   );
// }



// components/user-dropdown.tsx
'use client'

import { useState, useRef, useEffect } from 'react'

export default function UserDropdown({ compact = false }: { compact?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 w-full"
      >
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
        {!compact && (
          <div className="text-left">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-400">admin@example.com</p>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-600">admin@example.com</p>
          </div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-red-500">Logout</a>
        </div>
      )}
    </div>
  )
}