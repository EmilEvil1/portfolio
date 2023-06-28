import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IModal {
  children?: ReactNode
  status: boolean
  handleOpen: Dispatch<SetStateAction<boolean>>
}
