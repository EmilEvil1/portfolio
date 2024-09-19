export interface ISidebar {
  sidebarActive: boolean
  setSidebarActive: (props: boolean) => void
  onSubmit: (k: string) => void
}
