import React, { useState } from 'react'
import { sidebarContext } from './sidebarcontext'
import RegularNavbar from './RegularNavbar'
import Sidebar from './Sidebar'
const WholeNavbar = () => {
   const [sidebar, setSidebar] = useState(false)
  return (
      <sidebarContext.Provider value={[sidebar, setSidebar]}>
              <RegularNavbar />
              <Sidebar />
      </sidebarContext.Provider>
  )
}

export default WholeNavbar