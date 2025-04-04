import React from "react";
import { Routes, Route, } from "react-router";
import Home from "./Home";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Programs from "./Components/Programs/Programs";

import Chap1 from "./Components/Chapters/Chap1";
import Chap2 from "./Components/Chapters/Chap2";
import Chap3 from "./Components/Chapters/Chap3";
import Chap4 from "./Components/Chapters/Chap4";
import Chap5 from "./Components/Chapters/Chap5";
import Chap6 from "./Components/Chapters/Chap6";
import Chap7 from "./Components/Chapters/Chap7";
import Chap8 from "./Components/Chapters/Chap8";
import Chap9 from "./Components/Chapters/Chap9";
import Chap10 from "./Components/Chapters/Chap10";
import Chap11 from "./Components/Chapters/Chap11";
import Chap12 from "./Components/Chapters/Chap12";
import Chap13 from "./Components/Chapters/Chap13";
import Chap14 from "./Components/Chapters/Chap14";
import Chap15 from "./Components/Chapters/Chap15";
import Chap16 from "./Components/Chapters/Chap16";
import Chap17 from "./Components/Chapters/Chap17";
import Chap18 from "./Components/Chapters/Chap18";
import Chap19 from "./Components/Chapters/Chap19";
import Chap20 from "./Components/Chapters/Chap20";
import Chap21 from "./Components/Chapters/Chap21";
import Chap22 from "./Components/Chapters/Chap22";
import Chap23 from "./Components/Chapters/Chap23";
import Chap24 from "./Components/Chapters/Chap24";
import Chap25 from "./Components/Chapters/Chap25";
import Chap26 from "./Components/Chapters/Chap26";
import Chap27 from "./Components/Chapters/Chap27";
import Chap28 from "./Components/Chapters/Chap28";
import Chap29 from "./Components/Chapters/Chap29";
import Chap30 from "./Components/Chapters/Chap30";
import Chap31 from "./Components/Chapters/Chap31";
import Chap32 from "./Components/Chapters/Chap32";
import Chap33 from "./Components/Chapters/Chap33";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />

        <Route index element={<About />} />
        <Route path="Intro" element={<Intro />} />

        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />

        <Route index element={<Home />} />
        <Route path="Chap1" element={<Chap1 />} />

        <Route index element={<Home />} />
        <Route path="Chap2" element={<Chap2 />} />

        <Route index element={<Programs />} />
        <Route path="Chap2" element={<Chap2 />} />

        <Route index element={<Home />} />
        <Route path="Chap3" element={<Chap3 />} />

        <Route index element={<Home />} />
        <Route path="Chap4" element={<Chap4 />} />

        <Route index element={<Home />} />
        <Route path="Chap5" element={<Chap5 />} />

        <Route index element={<Home />} />
        <Route path="Chap6" element={<Chap6 />} />

        <Route index element={<Home />} />
        <Route path="Chap7" element={<Chap7 />} />

        <Route index element={<Home />} />
        <Route path="Chap8" element={<Chap8 />} />
        <Route index element={<Home />} />
        <Route path="Chap9" element={<Chap9 />} />
        <Route index element={<Home />} />
        <Route path="Chap10" element={<Chap10 />} />
        <Route index element={<Home />} />
        <Route path="Chap11" element={<Chap11 />} />
        <Route index element={<Home />} />
        <Route path="Chap12" element={<Chap12 />} />
        <Route index element={<Home />} />
        <Route path="Chap13" element={<Chap13 />} />

        <Route index element={<Home />} />
        <Route path="Chap14" element={<Chap14 />} />
        <Route index element={<Home />} />
        <Route path="Chap15" element={<Chap15 />} />

        <Route index element={<Home />} />
        <Route path="Chap16" element={<Chap16 />} />
        <Route index element={<Home />} />
        <Route path="Chap17" element={<Chap17 />} />
        <Route index element={<Home />} />
        <Route path="Chap18" element={<Chap18 />} />

        <Route index element={<Home />} />
        <Route path="Chap19" element={<Chap19 />} />
        <Route index element={<Home />} />
        <Route path="Chap20" element={<Chap20 />} />
        <Route index element={<Home />} />
        <Route path="Chap21" element={<Chap21 />} />
        <Route index element={<Home />} />
        <Route path="Chap22" element={<Chap22 />} />
        <Route index element={<Home />} />
        <Route path="Chap23" element={<Chap23 />} />
        <Route index element={<Home />} />
        <Route path="Chap24" element={<Chap24 />} />
        <Route index element={<Home />} />
        <Route path="Chap25" element={<Chap25 />} />
        <Route index element={<Home />} />
        <Route path="Chap26" element={<Chap26 />} />
        <Route index element={<Home />} />
        <Route path="Chap27" element={<Chap27 />} />

        <Route index element={<Home />} />
        <Route path="Chap28" element={<Chap28 />} />
        <Route index element={<Home />} />
        <Route path="Chap29" element={<Chap29 />} />
        <Route index element={<Home />} />
        <Route path="Chap30" element={<Chap30 />} />
        <Route index element={<Home />} />
        <Route path="Chap31" element={<Chap31 />} />
        <Route index element={<Home />} />
        <Route path="Chap32" element={<Chap32 />} />
        <Route index element={<Home />} />
        <Route path="Chap33" element={<Chap33 />} />

        <Route index element={<Home />} />

        <Route index element={<Home />} />
      </Routes>
    </>
    // <Routes>
    //   <Route index element={<Home />} />
    //   <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />

    //   <Route index element={<About />} />
    //   <Route path="Intro" element={<Intro />} />

    //   <Route index element={<Home />} />
    //   <Route path="Contact" element={<Contact />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap1" element={<Chap1 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap2" element={<Chap2 />} />

    //   <Route index element={<Programs />} />
    //   <Route path="Chap2" element={<Chap2 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap3" element={<Chap3 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap4" element={<Chap4 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap5" element={<Chap5 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap6" element={<Chap6 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap7" element={<Chap7 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap8" element={<Chap8 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap9" element={<Chap9 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap10" element={<Chap10 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap11" element={<Chap11 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap12" element={<Chap12 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap13" element={<Chap13 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap14" element={<Chap14 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap15" element={<Chap15 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap16" element={<Chap16 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap17" element={<Chap17 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap18" element={<Chap18 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap19" element={<Chap19 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap20" element={<Chap20 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap21" element={<Chap21 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap22" element={<Chap22 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap23" element={<Chap23 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap24" element={<Chap24 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap25" element={<Chap25 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap26" element={<Chap26 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap27" element={<Chap27 />} />

    //   <Route index element={<Home />} />
    //   <Route path="Chap28" element={<Chap28 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap29" element={<Chap29 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap30" element={<Chap30 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap31" element={<Chap31 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap32" element={<Chap32 />} />
    //   <Route index element={<Home />} />
    //   <Route path="Chap33" element={<Chap33 />} />

    //   <Route index element={<Home />} />

    //   <Route index element={<Home />} />
    // </Routes>
  );
}
