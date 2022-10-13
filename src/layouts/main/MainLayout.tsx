import React, { ReactElement, ReactNode } from 'react'
import HeaderComponent from '@components/header/HeaderComponent'

export default function MainLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <main>
      <HeaderComponent />
      {children}
      {/* This space for footer */}
    </main>
  )
}
