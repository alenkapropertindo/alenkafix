// components/providers.tsx
'use client'

import { useState } from 'react'
import { SidebarContext } from './sidebar-context'
// import { SidebarContext } from '@/context/sidebar-context'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}