import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/general/AppSidebar"
import { Navbar } from "@/components/export"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main >
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}