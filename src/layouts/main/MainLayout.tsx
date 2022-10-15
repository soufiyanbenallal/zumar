import React, { ReactElement, ReactNode } from 'react'
import HeaderComponent from '@components/header/HeaderComponent'
import Modals from '@/components/modals/Modals'

export default function MainLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <main>
      <HeaderComponent />
      {children}
      {/* This space for footer */}
      <Modals />
    </main>
  )
}
