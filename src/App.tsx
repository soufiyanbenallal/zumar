import React, { ReactElement } from 'react'
import MainLayout from '@layouts/main/MainLayout'
import { MainProductComponent } from '@modules/product'
import AppContext from './context/modals/AppContext'
function App(): ReactElement {
  return (
    <AppContext>
      <MainLayout>
        {/* 
          // * Here Where you need to add routers from react-router-dom 
          // ? Because we have one page i decieded do not use it 
          // TODO : Follow instruction below 
          // MainProductComponent is the index of the whole module that i imported directly 
          // but for best practice you need to add routes file on each module that container their main component or pages then imported here, 
          // the last touch, is to combine between routes file and set the required component from react-router dom here inside MainLayout.
          // BOOM: you have an application with a lot of structured pages 
          // last but not least, here the link of previous full modular architecture project with blogger boilerplate for free
          // ! https://github.com/soufiyanbenallal/Modular-Architecture-Features-Design-Pattern
          // join to figure out ;)
        */}
        <MainProductComponent />
      </MainLayout>
    </AppContext>
  )
}

export default App
