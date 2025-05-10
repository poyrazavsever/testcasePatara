'use client'

import { Menu } from 'lucide-react'
import { Bell, Settings, Search, ChevronDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname()
  const isConnectPage = pathname === '/connect'

  return (
    <header className="w-full h-16 px-4 flex items-center justify-between bg-black text-white">
      
      {/* Sol taraf */}
      <div className="flex items-center gap-4">
        <Menu className="w-6 h-6" />
        <div className="relative w-36 h-9">
          <Image src="/logo.png" alt="Patara Logo" fill/>
        </div>
      </div>

      {/* Orta arama alanı */}
      <div className="flex-1 mx-8 max-w-xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Enter Accounts, Platforms, NFTs, Token"
          className="pl-10 pr-20 bg-[#1e1e1e] text-sm text-white border-none focus-visible:ring-0"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-neutral-900 px-2 py-0.5 rounded">
          ⌘ K
        </div>
      </div>

      {/* Sağ taraf */}
      <div className="flex items-center gap-2">
        <div className='cursor-pointer flex items-center justify-center w-10 h-10 rounded-sm bg-neutral-800 hover:bg-neutral-700 transition-all duration-200'>
          <Bell className="w-5 h-5" />
        </div>
        <div className='cursor-pointer flex items-center justify-center w-10 h-10 rounded-sm bg-neutral-800 hover:bg-neutral-700 transition-all duration-200'>
          <Settings className="w-5 h-5" />
        </div>
        
        {isConnectPage ? (
          <div className='flex items-center gap-3 bg-neutral-800 p-2 rounded-sm max-h-10'>

            <div className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage src="design.png" alt='avatarNavbar'/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>


              <span>@patara.sui</span>
            </div>

            <ChevronDown />

          </div>
        ) : (
          <a href="/connect">
            <Button className="bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 text-sm px-4 py-2">
              Connect/Sign in
            </Button>
          </a>
        )}

      </div>
    </header>
  )
}

export default Navbar
