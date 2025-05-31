"use client";

import { Layout, List, Users, Boxes } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const freelanceRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/freelance",
  },
  {
    icon: Boxes,
    label: "Produk Referal",
    href: `/freelance/aksesproduk`,
  },
  {
    icon: List,
    label: "Data Customer",
    href: "/freelance/datacustomer",
  },
  {
    icon: Users,
    label: "Akun",
    href: "/freelance/akun",
  },
];
const adminRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: Boxes,
    label: "Produk Afiliasi",
    href: `/admin/aksesproduk`,
  },
  {
    icon: List,
    label: "Data Customer",
    href: "/admin/datauser",
  },
  {
    icon: Users,
    label: "Akun",
    href: "/admin/akun",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isFreelancePage = pathname?.includes("/freelance");

  const routes = isFreelancePage ? freelanceRoutes : adminRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
