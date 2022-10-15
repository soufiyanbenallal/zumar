import React, { ReactElement, useState } from 'react'
import { IAppContext, IBaseProps } from '@/interfaces'

const INITIAL_STATE: IAppContext = {
  menuModalOpen: false,
}

export const Context = React.createContext(INITIAL_STATE)

export default function AppContext({ children }: IBaseProps): ReactElement {
  const [menuModalOpen, setMenuModalOpen] = useState(false)

  const values: IAppContext = {
    menuModalOpen,
    setMenuModalOpen,
  }
  return <Context.Provider value={values}>{children}</Context.Provider>
}
