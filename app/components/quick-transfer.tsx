import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react'
import { MdArrowForwardIos } from "react-icons/md";

const people = [
  {
    name: "Livia Bator",
    role: "CEO",
    image: "/user1.png"
  },
  {
    name: "Randy Press",
    role: "Director",
    image: "/user2.png"
  },
  {
    name: "Workman",
    role: "Designer",
    image: "/user3.png"
  }
]

export function QuickTransfer() {
  return (
    <Card className="p-4 px-8 rounded-3xl max-w-fit">
      <div className="flex items-center justify-center gap-4 w-full h-full pb-6">
        <div className="flex items-center gap-4">
          {people.map((person) => (
            <button
              key={person.name}
              className="text-center shrink-0"
            >
              <Avatar className="h-16 w-16 mb-2">
                <AvatarImage src={person.image} />
                <AvatarFallback>{person.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-sm font-medium">{person.name}</div>
              <div className="text-sm text-blue-600">{person.role}</div>
            </button>
          ))}
        </div>
        <Button variant={"outline"} size={"icon"} className="rounded-full w-12 h-12">
          <MdArrowForwardIos />
        </Button>
      </div>
      <div className="grid grid-cols-3 md:flex text-sm">
        <input type="text" placeholder="Write Amount" />
        <Input
          type="number"
          placeholder="Write Amount"
          defaultValue="525.50"
          className="text-center bg-[#edf1f7] text-sm rounded-l-full"
          disabled
        />
        <Button className="bg-[#2D3648] hover:bg-[#2D3648]/90 rounded-full relative right-2">
          Send <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

