// // app/dashboard/layout.tsx (Dashboard Layout)
// import Providers from '@/components/providers'
// import Sidebar from '@/components/sidebar'
// import Navbar from '@/components/navbar'

import { Sidebar } from "lucide-react"
import Navbar from "./navbar"
import Providers from "./providers"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {children}
          </div>
        </main>
      </div>
    </Providers>
  )
}