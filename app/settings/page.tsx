import React from 'react'
import { SettingsPage } from '../components/settings-page'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

const Settings = () => {
    return (
        <div className="bg-[#F5F7FA]">
            <div className="bg-white h-fit">
                <div className="mb-6 p-4 lg:hidden">
                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            className="w-full pl-9 bg-[#F5F7FA] rounded-full"
                            placeholder="Search for something"
                        />
                    </div>
                </div>
            </div>

            <div className="px-4 md:py-4">
                <SettingsPage />
            </div>
        </div>

    )
}

export default Settings