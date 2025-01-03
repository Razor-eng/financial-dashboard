import { Card } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"

export function CreditCards() {
  return (
    <ScrollArea className="w-full">
      <div className="grid md:grid-cols-2 gap-3 md:gap-6 pb-2">
        <Card className="relative min-w-[300px] sm:min-w-[360px] flex flex-col h-[200px] bg-gradient-to-r from-gray-800 to-gray-700 dark:from-[#2D3648] dark:to-[#3B465C] text-white rounded-2xl shadow-lg shrink-0">
          <div className="flex justify-between px-6 pt-6 mb-4">
            <div>
              <div className="text-xs opacity-80 mb-1 text-zinc-400">Balance</div>
              <div className="text-xl font-semibold">$5,756</div>
            </div>
            <div className="flex items-center gap-2 w-9">
              <Image src="/chip.png" alt="chip-1" priority height={500} width={500} />
            </div>
          </div>
          <div className="mb-4 px-6">
            <div className="flex items-center justify-between">
              <div className="text-xs">
                <div className="opacity-80 text-zinc-400">CARD HOLDER</div>
                <div className="text-white">Eddy Cusuma</div>
              </div>
              <div className="text-xs">
                <div className="opacity-80 text-zinc-400">VALID THRU</div>
                <div className="text-white">12/22</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between w-full bg-gradient-to-b from-gray-600 to-gray-900 dark:from-zinc-600 dark:to-zinc-900 px-6 py-2 rounded-xl">
            <div className="text-base tracking-wider">3778 **** **** 1234</div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-white opacity-60 rounded-full"></div>
              <div className="w-6 h-6 relative right-2 bg-white opacity-70 rounded-full -ml-2"></div>
            </div>
          </div>
        </Card>


        <Card className="relative min-w-[300px] sm:min-w-[360px] flex flex-col h-[200px] bg-gradient-to-r from-white to-gray-200 text-gray-800 rounded-2xl shadow-lg shrink-0">
          <div className="flex justify-between px-6 pt-6 mb-4">
            <div>
              <div className="text-xs opacity-70 mb-1 text-zinc-500">Balance</div>
              <div className="text-xl font-semibold">$5,756</div>
            </div>
            <div className="flex items-center gap-2 w-9">
              <Image src="/chip1.png" alt="chip-2" priority height={500} width={500} />
            </div>
          </div>
          <div className="mb-4 px-6">
            <div className="flex items-center justify-between">
              <div className="text-xs">
                <div className="opacity-70 text-zinc-500">CARD HOLDER</div>
                <div className="text-black">Eddy Cusuma</div>
              </div>
              <div className="text-xs">
                <div className="opacity-70 text-zinc-500">VALID THRU</div>
                <div className="text-black">12/22</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between w-full border-t border-zinc-300 px-6 py-2 rounded-xl">
            <div className="text-base tracking-wider text-zinc-800">3778 **** **** 1234</div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-zinc-700 opacity-60 rounded-full"></div>
              <div className="w-6 h-6 relative right-2 opacity-70 bg-zinc-700 rounded-full -ml-2"></div>
            </div>
          </div>
        </Card>

      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

