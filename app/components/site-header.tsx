import { MainNav } from "@/app/components/main-nav"
import { LoginModal } from "@/app/components/login-modal"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <div className="flex items-center space-x-4">
          <LoginModal />
        </div>
      </div>
    </header>
  )
}
