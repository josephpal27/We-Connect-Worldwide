import { Outlet } from "react-router-dom"
import MyNavbar from "./components/Navbar"

const App = () => {

  return (
    <>
      {/* <PageTitle/> */}
      <MyNavbar/>
      <Outlet />
      {/* <Footer/> */}
      {/* <ScrollToTop/> */}
    </>
  )
}

export default App
