"use client";
import { 
  Layout, 
  List, 
  Users, 
  Boxes,
  LogOut,
  X
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import UserDropdown from "@/components/UserDropdown";
import { useSession } from "next-auth/react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  
  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);
  
  const isFreelancePage = pathname?.includes("/freelance");
  
  const routes = isFreelancePage ? [
    { icon: Layout, label: "Dashboard", href: "/freelance" },
    { icon: Boxes, label: "Produk Referal", href: "/freelance/aksesproduk" },
    { icon: List, label: "Data Customer", href: "/freelance/datacustomer" },
    { icon: Users, label: "Akun", href: "/freelance/akun" },
  ] : [
    { icon: Layout, label: "Dashboard", href: "/admin" },
    { icon: Boxes, label: "Produk Afiliasi", href: "/admin/aksesproduk" },
    { icon: List, label: "Data Customer", href: "/admin/datauser" },
    { icon: Users, label: "Akun", href: "/admin/akun" },
  ];
 const { data: session, status } = useSession();
  return (
    <>
      {/* Desktop Sidebar - Always visible */}
      <aside className="hidden md:block w-64 h-full fixed left-0 top-0 pt-16 border-r bg-white z-40 overflow-y-auto">
        <div className="h-full flex flex-col">
          <div className="flex-1 py-4">
            {routes.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center px-6 py-3 text-sm font-medium transition-colors",
                  "hover:bg-gray-100",
                  pathname === route.href 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-500" 
                    : "text-gray-700"
                )}
              >
                <route.icon className="mr-3 h-5 w-5" />
                {route.label}
              </a>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <a
              href="/logout"
              className="flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </a>
          </div>
        </div>
      </aside>
      
      {/* Mobile Sidebar (with overlay) */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      <aside
        className={cn(
          "md:hidden fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center px-4 border-b">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto py-4">
            {routes.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center px-6 py-4 text-base font-medium transition-colors",
                  "hover:bg-gray-100",
                  pathname === route.href 
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-500" 
                    : "text-gray-700"
                )}
              >
                <route.icon className="mr-4 h-5 w-5" />
                {route.label}
              </a>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="px-4 py-3">
              <UserDropdown session={session} />
            </div>
            
            <a
              href="/logout"
              className="flex items-center px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-100 rounded"
            >
              <LogOut className="mr-4 h-5 w-5" />
              Logout
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}