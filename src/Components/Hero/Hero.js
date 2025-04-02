import React from "react";
import "./Hero.css";
import "../../index.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="build">The First Presidency Letter</h1>
        <h2 className="button">
          An Open Letter to The First Presidency and Members of The Church of
          Jesus Christ of Latter-Day Saints
        </h2>
        <a
          className="learnmorebtn"
          href="https://www.amazon.com/First-Presidency-Letter-Written-Latter-Day-ebook/dp/B0F289TDB2/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.YwrkAlKGxCFAz_UpIbFYw4llw8bdMHForXGHLVSJ_BgU3_TkxEaXf-x-vkSv91RzuJG8c7ax3k_zC8nxwGz4mw.5AVbJtbFuAUsVbHWRdR2cbXRRphIoExjcNyNtR2uMwY&qid=1742804275&sr=8-1"
        >
          Learn More
        </a>
        {/* <Link to="Contact" className="learnmorebtn" href="https://www.example.com">Learn More</Link> */}
      </div>
    </div>
  );
}
