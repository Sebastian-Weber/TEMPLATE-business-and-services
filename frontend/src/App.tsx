
import './App.css'

import { Outlet } from 'react-router-dom';




function App() {

  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto">
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
    </>
  )
}

export default App
