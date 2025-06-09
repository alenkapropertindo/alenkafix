// context/sidebar-context.ts
import { createContext } from 'react'

interface SidebarContextProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export const SidebarContext = createContext<SidebarContextProps>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
})