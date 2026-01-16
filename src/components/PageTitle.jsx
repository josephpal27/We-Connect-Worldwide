import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "We Connect Worldwide"; // default
    let description = ""; // default

    switch (location.pathname) {
      case "/":
        title = "We Connect Worldwide";
        description = "";
        break;
      case "/services":
        title = "Services - We Connect Worldwide";
        description = "";
        break;
      case "/about":
        title = "About Us - We Connect Worldwide";
        description = "";
        break;
      case "/contact":
        title = "Contact - We Connect Worldwide";
        description = "";
        break;
      default:
        title = "We Connect Worldwide";
        description = "";
    }

    // Page Title update
    document.title = title;

    // Meta Title & Description update
    let metaTitle = document.querySelector("meta[name='title']");
    let metaDesc = document.querySelector("meta[name='description']");

    if (metaTitle) metaTitle.setAttribute('content', title);
    if (metaDesc) metaDesc.setAttribute('content', description);

  }, [location]);

  return null; // doesn’t render anything visible
};

export default PageTitle;
