"use client"
import { BellIcon, MenuIcon, SearchIcon, SettingsIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from '@/components/ui/input'
import { useAppContext } from '@/context/AppContext'
import { Navigation } from './navigation'
import { usePathname } from 'next/navigation'

const Header = () => {
    const { user } = useAppContext()
    const pathname = usePathname();

    return (
        <div className="sticky top-0 z-10 bg-white px-4 py-4 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <MenuIcon className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-0">
                            <SheetHeader className='hidden'>
                                <SheetTitle></SheetTitle>
                                <SheetDescription></SheetDescription>
                            </SheetHeader>
                            <Navigation />
                        </SheetContent>
                    </Sheet>
                    <h1 className="text-xl font-semibold text-[#2D3648]">
                        {pathname === '/' ? 'Overview' : 'Settings'}
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden lg:block">
                        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            className="w-[300px] pl-9 bg-[#F5F7FA] rounded-full"
                            placeholder="Search for something"
                        />
                    </div>
                    <button className="hidden rounded-full p-2 bg-gray-100 lg:block">
                        <SettingsIcon className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="hidden relative rounded-full p-2 bg-gray-100 lg:block">
                        <BellIcon className="h-5 w-5 text-blue-500" />
                        <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-1 right-2"></div>
                    </button>
                    <Avatar>
                        <AvatarImage src={user?.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Header