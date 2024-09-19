export interface ISwitcher {
  language: string
  onSubmit: (type: string) => void
  displayStatus?: boolean
  setSidebarActive?: (l: boolean) => void
}
