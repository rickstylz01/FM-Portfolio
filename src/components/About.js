import React, {useLayoutEffect, useRef, useState} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer/Footer";
import Thumbnail from "./Thumbnail/Thumbnail";

const About = (props) => {
  const refRef = useRef();

  useLayoutEffect(() => {
    window.addEventListener('scroll', onscroll)
    return () => window.removeEventListener('scroll', onscroll);
  }, []);

  const topPos = refRef.current.getBoundingClientRect().top;
  const onScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight;
    if (topPos < scrollPos) {
      // enter animation code here
    }
  }

  const [show, doShow] = useState({
    itOne: false,
    itTwo: false,
    itThree: false,
  });

  return(
    <div>
      <Navigation />

      <Thumbnail animate={show.itOne} ref={refRef} />

      <Footer />
    </div>
  )
}

export default About;
