export interface Card {
  id: string
  balance: number
  cardHolder: string
  cardNumber: string
  validThru: string
  isActive?: boolean
}

