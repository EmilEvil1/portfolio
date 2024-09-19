export interface Root {
  first: First
  second: Second
  third: Third
  fourth: Fourth
}

export interface First {
  title: string
  name: string
  whoiam: string
  cookieText: string
  btn: string
}

export interface Second {
  title: string
  cards: Card[]
}

export interface Card {
  icon: string
  title: string
  points: string[]
}

export interface Third {
  title: string
  projects: Project[]
  button: string
  yearTitle: string
  roleTitle: string
  stackTitle: string
  sortUp: string
  sortDown: string
}

export interface Project {
  title: string
  description: string
  img?: string
  link?: string
  year?: number | undefined
  role?: string
  technology?: string[]
  isNda?: boolean
}

export interface Fourth {
  title: string
  btn: string
  form: Form
}

export interface Form {
  name: Name
  email: Email
  subject: Subject
  message: Message
  submitBtn: string
}

export interface Name {
  placeholder: string
  label: string
  validation: string
}

export interface Email {
  placeholder: string
  label: string
  validation: string
  required: string
}

export interface Subject {
  placeholder: string
  label: string
  validation: string
  required: string
}

export interface Message {
  placeholder: string
  label: string
  validation: string
  required: string
}
