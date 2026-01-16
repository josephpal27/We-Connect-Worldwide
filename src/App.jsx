import { Outlet } from "react-router-dom"
import MyNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  return (
    <>
      {/* <PageTitle/> */}
      <MyNavbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
