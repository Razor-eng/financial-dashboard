'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/types/card'
import { Transaction } from '@/types/transaction'
import { User } from '@/types/user'
import { Loader, Loader2 } from 'lucide-react'
import React, { createContext, useContext, useState, useEffect } from 'react'

interface AppContextType {
  user: User | null
  cards: Card[]
  transactions: Transaction[]
  updateUser: (user: User) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [cards, setCards] = useState<Card[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '/user.png',
    })
    setCards([
      { id: '1', balance: 5756, cardHolder: 'Eddy Cusuma', cardNumber: '3778 **** **** 1234', validThru: '12/22' },
      { id: '2', balance: 5756, cardHolder: 'Eddy Cusuma', cardNumber: '3778 **** **** 1234', validThru: '12/22' },
    ])
    setTransactions([
      { id: '1', name: 'Deposit from my Card', date: '28 January 2021', amount: -850, icon: '💳' },
      { id: '2', name: 'Deposit Paypal', date: '25 January 2021', amount: 2500, icon: '🅿️' },
      { id: '3', name: 'Jemi Wilson', date: '21 January 2021', amount: 5400, icon: '💰' },
    ])
  }, [])

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser)
  }

  return (
    <AppContext.Provider value={{ user, cards, transactions, updateUser }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

