import React, { ReactElement } from 'react'
import MainLayout from '@layouts/main/MainLayout'
import { MainProductComponent } from '@modules/product'
function App(): ReactElement {
  return (
    <>
      <MainLayout>
        <MainProductComponent />
      </MainLayout>
    </>
  )
}

export default App
