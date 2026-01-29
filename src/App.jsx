import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import MyNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop';
import PageTitle from './components/PageTitle';
import AOS from "aos";

const App = () => {

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      // once: true,
    });
  }, []);

  // Refresh AOS on scroll
  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageTitle />
      <MyNavbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
