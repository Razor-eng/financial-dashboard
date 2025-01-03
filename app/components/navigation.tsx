"use client"
import { cn } from '@/lib/utils';
import { PiggyBank } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { MdHome } from 'react-icons/md';
import { FaTools, FaUser } from 'react-icons/fa';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { TbCreditCardFilled, TbDeviceMobileDollar } from "react-icons/tb";
import { HiLightBulb } from 'react-icons/hi2';
import { IoIosSettings } from 'react-icons/io';

export function Navigation() {
  const router = useRouter();
  return (
    <nav className="w-64 min-h-screen border-r bg-white p-4 sticky left-0 top-0">
      <div className="flex items-center gap-1 mb-8">
        <div className="h-8 w-8 rounded text-white flex items-center justify-center">
          <img src='/logo.png' className="h-5 w-5" />
        </div>
        <span className="font-semibold text-lg tracking-tighter text-[#2D3648]">Soar Task</span>
      </div>

      <div className="space-y-1 flex flex-col gap-2">
        <NavItem icon={MdHome} label="Dashboard" href="/" onClick={() => router.push('/')} />
        <NavItem icon={TbDeviceMobileDollar} label="Transactions" />
        <NavItem icon={FaUser} label="Accounts" />
        <NavItem icon={PiggyBank} label="Investments" />
        <NavItem icon={TbCreditCardFilled} label="Credit Cards" />
        <NavItem icon={FaHandHoldingDollar} label="Loans" />
        <NavItem icon={FaTools} label="Services" />
        <NavItem icon={HiLightBulb} label="My Privileges" />
        <NavItem icon={IoIosSettings} label="Setting" href="/settings" onClick={() => router.push('/settings')} />
      </div>
    </nav>
  )
}

function NavItem({
  icon: Icon,
  label,
  href,
  onClick
}: {
  icon: React.ElementType
  label: string,
  href?: string,
  onClick?: () => void
}) {
  const pathname = usePathname();
  return (
    <button
      className={cn(
        `
        flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm
        text-zinc-400 hover:bg-gray-100
      `,
        pathname === href && 'text-black'
      )}
      onClick={onClick}
    >
      {pathname === href && <div className="w-[5px] h-10 bg-black rounded-tr-md rounded-br-md absolute left-0"></div>}
      <Icon className="h-5 w-5" />
      <span className='text-sm font-semibold'>{label}</span>
    </button>
  )
}