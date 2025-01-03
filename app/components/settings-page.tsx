'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PenSquare } from 'lucide-react'
import { useAppContext } from '@/context/AppContext'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from 'sonner'

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  dateOfBirth: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
})

type ProfileFormData = z.infer<typeof profileSchema>

export function SettingsPage() {
  const { user } = useAppContext()
  const [activeTab, setActiveTab] = useState('editProfile')
  const [avatar, setAvatar] = useState(user?.avatar || '/user.png')

  const { register, handleSubmit } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: 'Charlene Reed',
      username: 'Charlene Reed',
      email: 'charlenereed@gmail.com',
      password: '**********',
      dateOfBirth: '25 January 1990',
      presentAddress: 'San Jose, California, USA',
      permanentAddress: 'San Jose, California, USA',
      city: 'San Jose',
      postalCode: '45962',
      country: 'USA',
    },
  })

  const onSubmit = async () => {
    toast.success("Form saved");
  };


  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setAvatar(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-white rounded-3xl">
      {/* Mobile Search */}
      <div className="p-4">
        <div className="mb-2">
          <div className="flex space-x-4 lg:space-x-8 border-b overflow-x-auto">
            <TabButton
              isActive={activeTab === 'editProfile'}
              onClick={() => setActiveTab('editProfile')}
            >
              Edit Profile
            </TabButton>
            <TabButton
              isActive={activeTab === 'preferences'}
              onClick={() => setActiveTab('preferences')}
            >
              Preferences
            </TabButton>
            <TabButton
              isActive={activeTab === 'security'}
              onClick={() => setActiveTab('security')}
            >
              Security
            </TabButton>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 lg:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-[1000px] flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-28">
            <div className="flex justify-center lg:justify-start items-center gap-6 mb-8">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={avatar} alt="Profile picture" />
                  <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>
                <label
                  htmlFor="avatar-upload"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md cursor-pointer"
                >
                  <PenSquare className="w-4 h-4 text-gray-600" />
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col flex-1 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Your Name</label>
                  <Input
                    {...register('name')}
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">User Name</label>
                  <Input
                    {...register('username')}
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email</label>
                  <Input
                    {...register('email')}
                    type="email"
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Password</label>
                  <Input
                    {...register('password')}
                    type="password"
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Date of Birth</label>
                  <Select defaultValue="25 January 1990">
                    <SelectTrigger className="bg-white text-zinc-500">
                      <SelectValue placeholder="Select date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25 January 1990">25 January 1990</SelectItem>
                      {/* Add more date options as needed */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Present Address</label>
                  <Input
                    {...register('presentAddress')}
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Permanent Address</label>
                  <Input
                    {...register('permanentAddress')}
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">City</label>
                  <Input
                    {...register('city')}
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Postal Code</label>
                  <Input
                    {...register('postalCode')}
                    className="bg-white text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Country</label>
                  <Input
                    {...register('country')}
                    className="bg-white text-zinc-500"
                  />
                </div>
              </div>

              <div className="mt-8 w-full flex justify-end">
                <Button
                  type="submit"
                  className="w-full lg:w-auto bg-[#2D3648] hover:bg-[#2D3648]/90 text-white px-12"
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function TabButton({
  children,
  isActive,
  onClick
}: {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`pb-4 px-2 whitespace-nowrap relative ${isActive
        ? 'text-[#2D3648] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#2D3648]'
        : 'text-gray-500'
        }`}
    >
      {children}
    </button>
  )
}

