export interface ISortBtn {
  sortedStatus: boolean
  action: (e: boolean) => void
  up: string
  down: string
}
