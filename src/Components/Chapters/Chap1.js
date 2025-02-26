import React from "react";
import "../../index.css";
import { Link } from "react-router";
import {
  FootnotesProvider,
  FootnoteRef,
  Footnotes,
} from "react-a11y-footnotes";

const Chap1 = () => {
  return (
    <FootnotesProvider>
      <div className="container">
        <h1 className="chapterHeading">
          Chapter 1: The Religious Genius and Mastermind
        </h1>

        {/* <FootnoteRef id="1" description='footnote appears here'></FootnoteRef> */}

        <div className="paragraph">
          <p>
            Throughout the 1830s and 1840s, Joseph Smith built an exciting
            vision of the last days in his small group of followers, which
            reached 26,000 by his death in 1844.{" "}
            <FootnoteRef id="1">
              By his death in 1844, Joseph had amassed a following of 26,000
              people. 2013 Church Almanac, December 12, 2012.'
            </FootnoteRef>
            . He convinced his early converts to Mormonism that he was a prophet
            speaking for God. To them, he was just as much a prophet as Moses,
            Elijah, Isaiah, etc. To the early Mormons, Joseph was an oracle of
            the divine – made in the mold of the Old Testament prophets whom
            they revered. There was a prophet once again walking the earth.{" "}
            <FootnoteRef id="2">
              By his death in 1844, Joseph had amassed a following of 26,000
              people. 2013 Church Almanac, December 12, 2012.'
            </FootnoteRef>
          </p>
        </div>

        <div className="paragraph">
          <p></p>
        </div>

        <div className="paragraph">
          <p></p>
        </div>

        <div className="paragraph">
          <p></p>
        </div>

        <Footnotes />

        <div className="chapterFooter">
          <Link className="" to="/">
            Back
          </Link>
          <Link to="/Chap2">Next Chapter</Link>
        </div>
      </div>
    </FootnotesProvider>
  );
};

export default Chap1;
