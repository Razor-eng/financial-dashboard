import { Card } from "@/components/ui/card"
import { LiaCcPaypal } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";

const transactions = [
  {
    name: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    icon: <CiCreditCard1 size={22} color="#FFBB38" />,
    color: "#FFF5D9"
  },
  {
    name: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: <LiaCcPaypal size={22} color="#3E6EFF" />,
    color: "#E7EDFF"
  },
  {
    name: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: <AiOutlineDollar size={22} color="#16DBCC" />,
    color: "#DCFAF8"
  }
]

export function RecentTransactions() {
  return (
    <Card className="rounded-3xl">
      {transactions.map((transaction) => (
        <div
          key={transaction.name}
          className="flex items-center gap-4 p-4"
        >
          <div className="h-10 w-10 rounded-full flex items-center justify-center text-base" style={{ backgroundColor: `${transaction.color}` }}>
            {transaction.icon}
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">{transaction.name}</div>
            <div className="text-xs text-blue-600">{transaction.date}</div>
          </div>
          <div className={transaction.amount > 0 ? "text-[#59d9b3] text-sm font-medium" : "text-red-500 text-sm font-medium"}>
            {transaction.amount > 0 ? "+" : ""}{transaction.amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }).split('.')[0]}
          </div>
        </div>
      ))}
    </Card>
  )
}

