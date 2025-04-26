import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import lamanites from '../../Assets/Img/lamanites.jpg'

const Chap19 = () => {
  return (
    <div className="chapter-container">

      
      <div className="chapterFooter">
          <Link to="/Chap18">Previous</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap20">Next</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 19: What of the Lamanites Today?</h1>

      <img src={lamanites} className='image' alt='Poster Who and Where are the Lamanites?' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>But where are the Lamanites today? And why haven’t they built Zion in America, the New Jerusalem, in the land of their inheritance as the Book of Mormon prophesied?
          </p>
        </div>

        <div className='paragraph'>
          <p>On July 28, 1828, Joseph revealed regarding the Book of Mormon: “And this testimony shall come to the knowledge of the Lamanites … 
            who dwindled in unbelief. And for this very purpose are these plates preserved which contain these records – that the promises of the Lord might be fulfilled … 
            that the Lamanites might come to the knowledge of their fathers, and that they might know the promises of the Lord.”
            <btn id="clickable1" className="footnote">1 </btn>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>D&C 3:18.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>From the 1830s until the 2000s, Mormons considered Lamanites to be the “principal ancestors of the American Indians” as 
            stated on the title page of the Book of Mormon.  
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>1981 edition of the Book of Mormon.</Tooltip> 
            
            Joseph did not write the title page. Mormon wrote the title page. According to Joseph, the title page of the Book of Mormon 
            was “taken from the very last leaf, on the left-hand side of the collection or book of plates, which contained the record 
            which has been translated.”  
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3"className="footnote-size"  clickable>Joseph Smith History, vol. A-1, 34.</Tooltip> 
            
            Therefore, Mormon believed by the power of God that the Lamanites were “principal ancestors of the American Indians.” 
            This has been scientifically disproven. At the turn of the 21st century, DNA evidence demonstrated that Native Americans 
            are not of Middle Eastern descent and, therefore, not of the House of Israel, as Joseph claimed.
          </p>
        </div>

        <div className='paragraph'>
          <p>In 1967, echoing Mormon beliefs, Mormon apostle (later church president) Spencer Kimball stated that Native Americans were 
            descendants of Middle Eastern settlers who traveled over the ocean and were “not Orientals” of East Asian origin. 
            “The Indian is a Lamanite. There are South American, Central American, Mexican, Polynesian, and other Lamanites running 
            into millions ... They are not Orientals. They are from the Near East.”  
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Spencer Kimball, February 9, 1967, Speech at Brigham Young University, The Lamanite: Their Burden, Our Burden.</Tooltip>
            
            In 1971, Spencer stated, “… the Lamanites number about sixty million; they are in all of the states of America from Tierra 
            del Fuego all the way up to Point Barrows, and they are in nearly all the islands of the sea from Hawaii south to southern 
            New Zealand.”
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Spencer Kimball, Of Royal Blood, Ensign, 1971. This article was adapted from an address delivered at the Lamanite Youth Conference in Salt Lake City on April 24, 1971. John-Charles Duffy, The Use of Lamanite in Official LDS Discourse, Journal of Mormon History, 2008, 34, 1.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>However, DNA studies delivered a death blow to the claim that the Book of Mormon is the most correct book on earth. It is clearly not God talking from its pages as a historical narrative as the church teaches. The ancestors of Native Americans crossed the Bering Land Bridge over Alaska to populate North America around 11,000 BCE – not the Nephites and Lamanites in 600 BCE.
          </p>
        </div>

        <div className='paragraph'>
          <p>To deal with this thorny issue of DNA evidence, the church changed its narrative. Originally, as the Book of Mormon states, Lehi encountered an uninhabited land of promise – an inheritance from the Lord – and filled it with his progeny from the tribes of the House of Israel. However, today the church teaches that Lehi and his family merged with a civilization that already existed in America. But the Book of Mormon does not mention this. The church’s new narrative is that over time, as Lehi’s descendants intermarried with this mystery civilization, Lehi’s DNA markers were washed out. That’s why they cannot be found.
          </p>
        </div>

        <div className='paragraph'>
          <p>But there are several problems with the new narrative. For one, the Book of Mormon states that Lehi’s promised land “should be 
            kept … from the knowledge of other nations; for behold, many nations would overrun the land, that there would be no place for 
            an inheritance.”  
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>2 Nephi 1:8.</Tooltip> 
            
            Secondly, the Book of Mormon states that Lehi and his descendants were to be the primary residents. “… and they shall be 
            kept from all other nations, that they may possess this land unto themselves.”
            <btn id="clickable7" className="footnote">7 </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>2 Nephi 1:9.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>The strongest evidence against the new narrative is that the Book of Mormon does not mention other peoples with whom Lehi and his family integrated. And how could Lehi and his family intermarry and culturally blend into a civilization from which God promised to keep them hidden? Another problem for the new narrative is the title page of the Book of Mormon, which once stated, “The Lamanites ... are the principal ancestors of the American Indians.” To solve this inconvenient problem, the church changed it to read “The Lamanites ... are ‘among’ the ancestors of the American Indians.”
          </p>
        </div>

        <div className='paragraph'>
          <p>So much for Mormon’s title page, written by his own hand! However, as Joseph said, the title page of the Book of Mormon 
            was “taken from the very last leaf, on the left-hand side of the collection or book of plates, which contained the record 
            which has been translated.”
            <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Joseph Smith History, vol. A-1, 34.</Tooltip> 
            
            It does not seem right that Mormon leaders changed the text engraved on the golden plates to change the Book of Mormon’s narrative.
          </p>
        </div>

        <div className='paragraph'>
          <p>In addition to altering the narrative to conform to DNA evidence, the church prefers that individuals rely on their 
            feelings. As Mormon apostle Russell Ballard stated, “You will not get to know it [whether the Book of Mormon is true] 
            by trying to prove it archaeologically, or by DNA, or by anything else … Religious truth is always confirmed by what you 
            feel. And that’s the way heavenly father answers prayers.”  
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>M. Russell Ballard, Mormon Newsroom, October 4, 2007.</Tooltip>
            
            This contradicts Paul’s statement in the New Testament: “Prove all things and hold fast to that which is good.”
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>1 Thessalonians 5:21.</Tooltip>  
          </p>
        </div>

        <h2 className="headlinePadding">Source of Joseph’s Book of Mormon Narrative</h2>

        <div className='paragraph'>
          <p>Long since disproven, the idea that Native Americans were of the House of Israel was a prevalent belief in Joseph’s environment. In America, at the turn of the 18th century, ancient burial mounds were discovered throughout the Mississippi and Ohio valleys. People speculated that a past civilization, rather than Native Americans, had built the mounds. White settlers believed that this race of mound builders had eventually been annihilated by the dark-skinned ancestors of the Native Americans.
          </p>
        </div>

        <div className='paragraph'>
          <p>Two years prior to Joseph’s first vision, in a January 1818 edition of the Palmyra Register, Joseph’s hometown newspaper, 
            an article speculated on battles and burial mounds in upstate New York. A May 1819 article read, “… this country was once 
            inhabited by a race of people, partially civilized, exterminated by forefathers of the … tribes of Indians in this country.” 
            In 1820, author Samuel Mitchill published on the origins of Native Americans that a white race met a dark race in bloody 
            conflicts in upstate New York.  In 1824, a history of New York published, “relating tradition of Seneca Indians and a highly 
            civilized white race that was utterly destroyed, but who built fortifications against savage red Indians.” 
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>History of State of N.Y. Including its Aboriginal and Colonial Annals, 40.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>But these 18th century speculations have been proven wrong. There never was a separate civilization. Archaeology has demonstrated that the mounds were built by past Native Americans – not a light-skin race that immigrated across the ocean to America. Therefore, the historical narrative Joseph incorporated into the Book of Mormon of the Nephites and Lamanites is historically inaccurate. 
          </p>
        </div>

        <h2 className="headlinePadding">18th Century Belief that Native Americans Were of the House of Israel</h2>

        <div className='paragraph'>
          <p>Five years before the publication of the Book of Mormon, the Oct 11, 1825 edition of The Wayne Sentinel, another hometown newspaper of Joseph, published an article describing Native Americans as “lineal descendants of the Israelites.” As early as 1775, James Adair published a history detailing 23 arguments that Native Americans are descendants of Hebrews and tells of buried plates (five copper and two brass) kept by Native Americans, who he claimed were Hebrew descendants.
          </p>
        </div>

        <div className='paragraph'>
          <p>Fifty years later, in 1823, Ethan Smith’s View of the Hebrews: American Antiquities, Discoveries in the West was published. It states, “The opinion that the American Indians are descendants of the lost Ten Tribes, is now a popular one, and generally believed.” View of the Hebrews was published seven years before the Book of Mormon. It tells of the destruction of Jerusalem and suggests that the Ten Tribes came to America, divided into two groups: one barbaric, the other civilized. It describes military fortifications, systems of government, a hidden book that is later revealed, and prophets among ancient Americans, while portraying Native Americans as highly civilized people and incorporating numerous quotations from the King James Version of Isaiah.
          </p>
        </div>

        <div className='paragraph'>
          <p>View of the Hebrews also refers to the prophecy of Ezekiel and suggests that it was America’s mission to gather the remnants 
            of the House of Israel, reiterating the legend that the stick of Joseph and Ephraim would one day be united. “The word of the 
            Lord came again unto me …take thee one stick, and write upon it, For Judah, and for the children of Israel his companions: 
            then take another stick, and write upon it, For Joseph, the stick of Ephraim … and join them one to another into one stick; 
            and they shall become one in thine hand.”
            <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Ezekiel 37:15-17.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>As discussed, the twelve tribes of Israel were divided into two kingdoms, the Northern Kingdom ruled by the tribe of Ephraim and Southern Kingdom ruled by the tribe of Judah. The Assyrians conquered and carried off the Northern Kingdom in 721 BCE. The Babylonians conquered and carried off the Southern Kingdom in 597 BCE – although the Southern Kingdom was allowed to return to Palestine.
          </p>
        </div>

        <div className='paragraph'>
          <p>Biblical scholars take Ezekiel’s prophecy to convey God’s intention to reunite the two former kingdoms. There is nothing mentioned about establishing the two kingdoms in another land. However, from the inception of Mormonism, Ezekiel’s prophecy has played a prominent role in the concept of gathering Israel in America in the last days. Mormon prophets have taught Ezekiel’s prophecy refers to bringing together the Bible and the Book of Mormon – stick of Judah as the Bible and the stick of Ephraim for the Book of Mormon.
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Legrand Richards stated, “…granting that the Bible is the stick of Judah, where is the stick of Joseph? … God commanded 
            that it should be kept, to record the fulfillment of his greater promises to Joseph. It would naturally be a record kept in another land, 
            since Joseph was to be ‘separate from his brethren.’ It is plain from the reading of this scripture that the record of Judah, or the Holy 
            Bible, would remain with this people, that the record of Joseph would be joined unto it, and that the two would become one … Could this 
            promise be fulfilled in a simpler and more perfect manner than it was through the coming forth of the Book of Mormon? ... The two records 
            have now been joined together, constituting a complete fulfillment of another great prophecy … Until someone can explain where the record 
            of Joseph is, the Book of Mormon stands unrefuted in its claim to be the ‘stick of Joseph.’”
            <btn id="clickable13" className="footnote">13 </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>Legrand Richards, A Marvelous Work and a Wonder, 66-67. </Tooltip>  
          </p>
        </div>

        </div>

        <div className="chapterFooter">
          <Link to="/Chap18">Previous</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap20">Next</Link>
        </div>

    </div>
  )
}

export default Chap19