'use client'

import { SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { CreditCards } from "./components/credit-cards"
import { WeeklyActivity } from "./components/weekly-activity"
import { QuickTransfer } from "./components/quick-transfer"
import { BalanceHistory } from "./components/balance-history"
import { RecentTransactions } from "./components/recent-transactions"
import { ExpenseStatistics } from "./components/expense-statistics"

export default function DashboardPage() {
  return (
    <div className="lg:p-8 bg-white lg:bg-transparent p-4">
      <div className="mb-6 lg:hidden bg-white">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            className="w-full pl-9 bg-[#F5F7FA] rounded-full"
            placeholder="Search for something"
          />
        </div>
      </div>

      <div className="">
        <div className="grid md:grid-cols-6 gap-6 mb-8">
          <div className="flex flex-col md:col-span-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#2D3648]">My Cards</h2>
              <button className="text-sm text-zinc-700 font-semibold">See All</button>
            </div>
            <CreditCards />
          </div>
          <div className="flex flex-col md:col-span-2">
            <h2 className="text-lg font-semibold text-[#2D3648] mb-4">Recent Transaction</h2>
            <RecentTransactions />
          </div>
        </div>

        <div className="grid md:grid-cols-6 gap-6 mb-8">
          <div className="md:col-span-4 flex flex-col">
            <h2 className="text-lg font-semibold text-[#2D3648] mb-4">Weekly Activity</h2>
            <WeeklyActivity />
          </div>
          <div className='md:col-span-2'>
            <h2 className="text-lg font-semibold text-[#2D3648] mb-4">Expense Statistics</h2>
            <ExpenseStatistics />
          </div>
        </div>

        <div className="grid md:grid-cols-7 gap-6">
          <div className='md:col-span-3'>
            <h2 className="text-lg font-semibold text-[#2D3648] mb-4">Quick Transfer</h2>
            <QuickTransfer />
          </div>
          <div className='md:col-span-4'>
            <h2 className="text-lg font-semibold text-[#2D3648] mb-4">Balance History</h2>
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  )
}

