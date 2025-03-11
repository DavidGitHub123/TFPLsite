import React from "react";
import "../../index.css";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import missionaries from '../../Assets/Img/missioaries.jpg'

const Chap7 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
        <Link to="/Chap6">Previous Chapter</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap8">Next Chapter</Link>
      </div>

      <h1 className="chapterHeading">Chapter 7: First Domino to Fall</h1>

      <img src={missionaries} className='image' alt='photo of Joseph Smith Mormon Prophet' />

    <div className="wrapper">


      <div className="paragraph">
        <p>
          By 1830, impressively, Joseph had published the Book of Mormon and
          founded a new church. The new religion was gaining converts. These new
          converts were deeply moved by Mormonism’s teachings. They accepted
          mission calls just as Christ’s disciples had done in the New
          Testament. With this new religion burning brightly in their souls,
          these converts traveled throughout the United States and eventually
          the world preaching the restored gospel. Brigham Young reported on
          meeting the missionaries, “… their testimony was like fire in my
          bones; I understood the spirit of their preaching; I received that
          spirit; it was light, intelligence, power, and truth.”
          <a id="clickable1" className="footnote">1 </a>
          <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>Brigham Young, Journal of Discourses, July 28, 1861, vol. 9, p. 141.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          But the message of Mormonism was not attracting the mass following
          Joseph anticipated. In 1838, when the Mormons were expelled from
          Missouri, there were 17,881 Mormons. 
          <a id="clickable2" className="footnote">2 </a>
          <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>2013 Church Almanac, December 12, 2012.</Tooltip>
          
          At the time of Joseph’s death in 1844, there were 26,000 Mormons. 
          <a id="clickable3" className="footnote">3 </a>
          <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>2013 Church Almanac, December 12, 2012.</Tooltip>
          
          According to the 1840 U.S. census,
          the United States’ population was 17 million. Given that only a small
          number of Gentiles accepted Mormonism, it was evident that the nation
          had rejected Joseph’s restored gospel. As a result of this rejection,
          there would be consequences.
        </p>
      </div>

      <div className="paragraph">
        <p>
          While speaking to the Nephites, Christ prophesied of the last days,
          “At that day when the Gentiles … shall reject the fulness of my gospel
          … and shall be filled with all manner of lyings, and of deceits, and
          of mischiefs, and all manner of hypocrisy, and murders, and priest
          crafts, and whoredoms, and of secret abominations … I will bring the
          fulness of my gospel from among them.” 
          <a id="clickable4" className="footnote">4 </a>
          <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>3 Nephi 16:10-12.</Tooltip>
          
          Then Christ offered a promise.
          “But if the Gentiles will repent and return unto me, saith the Father,
          behold they shall be numbered among my people, O house of Israel.” 
          <a id="clickable5" className="footnote">5 </a>
          <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>3 Nephi 16:14.</Tooltip>
          
          As
          a result, a consequence followed. “But if they will not turn unto me,
          and hearken unto my voice, I will suffer … that they (Lamanites) shall
          go through among them, and shall tread them down, and they shall be as
          salt that hath lost its savor … and to be trodden under foot of my
          people.”
          <a id="clickable6" className="footnote">6 </a>
          <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>3 Nephi 16:15.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Christ raises this theme a second time in 3rd Nephi – with even
          stronger language of how the seed of Jacob (Lamanites) “shall go forth
          among you as a lion among the beasts of the forest, as a young lion
          among the flocks of sheep, who, if he go through both treadeth down
          and teareth in pieces, and none can deliver … Yea, wo be unto the
          Gentiles except they repent … saith the Father, that I will cut off
          thy horses out of the midst of thee, and I will destroy thy chariots;
          And I will cut off the cities of thy land, and throw down all thy
          strongholds.”
          <a id="clickable7" className="footnote">7 </a>
          <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>3 Nephi 20:15-17, 20.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Mormon apostle Parley Pratt detailed the results of the Gentiles’
          rejection of Mormonism. “All who (Gentiles) will not hearken to the
          Book of Mormon, shall be cut off from among the people; and that too,
          in the day it comes forth to the Gentiles and is rejected by them. And
          not only does this set the time for the overthrow of our government
          and all other Gentile governments on the American continent, but the
          way and means of this utter destruction are clearly foretold, namely,
          the remnant of Jacob (Lamanites) will go through among the Gentiles
          and tear them in pieces, like a lion among the flocks of sheep … This
          destruction includes an utter overthrow, and desolation of all our
          cities … an entire annihilation of our race, except … are numbered
          with Israel.”
          <a id="clickable8" className="footnote">8 </a>
          <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Parley P. Pratt, Mormonism Unveiled: Zion’s Watchman Unmasked, 1838, 15</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Parley continued, “I will state as a prophecy, that there will not be
          an unbelieving Gentile upon this continent 50 years hence, and if they
          are not greatly scourged, and in a great measure overthrown, within
          five or ten years from this date, then the Book of Mormon will have
          proved itself false.” 
          <a id="clickable9" className="footnote">9 </a>
          <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>Parley P. Pratt, Mormonism Unveiled: Zion’s Watchman Unmasked, 1838, 15</Tooltip>
          
          According to this prophecy, if the American
          Gentiles rejected the restored gospel, the Lamanites would “tread
          down” the Gentiles. Parley made this statement in 1838. Fifty years
          later, by 1888, fortunately Parley’s prediction had not come to pass.
        </p>
      </div>

      <div className="paragraph">
        <p>
          To scourge is to whip or punish severely. Joseph made it clear that
          there would be a series of scourging judgments sent forth upon the
          Gentiles for rejecting his restored gospel. Joseph revealed, “A
          desolating scourge shall go forth among the inhabitants of the earth
          and shall continue to be poured out from time to time, if they repent
          not, until the earth is empty.”
          <a id="clickable10" className="footnote">10 </a>
          <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>D&C 5:19.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Joseph attached a shorter timeframe to the scourging than Parley’s 50
          years. In January 1833, Joseph prophesied, “… by the authority of
          Jesus Christ, that not many years shall pass away before the United
          States shall present such a scene of bloodshed as has not a parallel
          in the history of our nation.”
          <a id="clickable11" className="footnote">11 </a>
          <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>History of the Church 1:315.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Wandle Mace stated, “I have listened to his (Joseph) recital of the
          vision given him of the terrible calamities which would sweep over the
          earth as with a besom of destruction. The vision was so horrifying
          that he prayed the Lord to take it away; and the Lord gave him the
          vision a little at a time so he could bear it.”
          <a id="clickable12" className="footnote">12 </a>
          <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Journal of Wandle Mace, 1809-1890, Brigham Young University Library, MSS 921, p. 61.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Mormon apostle Orson Pratt stated, “nothing compare[s] to that which
          God has spoken concerning this nation, if they will not repent. He
          will throw down all their strongholds and cut off the cities of the
          land, and will execute vengeance and fury on the nation, even as upon
          the heathen, such as they have not heard.”
          <a id="clickable13" className="footnote">13 </a>
          <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, December 27, 1868, vol. 12, p. 344.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>Fortunately, none of this ever happened.</p>
      </div>

      <h2 className="headlinePadding">Mormon Leaders Called to Washington, D.C.</h2>

      <div className="paragraph">
        <p>
          Even after Joseph’s death in 1844, the Mormons continued to look for
          the signs of the times leading to the building of Zion. In Utah,
          Mormon leaders prophesied of a time when they would be summoned to the
          U.S. Capitol to testify before Congress. While in the nation’s
          capital, the prophets, seers, and revelators would be subjected to
          ridicule and derision.
        </p>
      </div>

      <div className="paragraph">
        <p>
          Brigham Young stated, “When our Brethren, the Twelve, should be called
          to the courts of Washington, then look out; for the world will be in
          commotion and the Lord will have something to work upon.”
          <a id="clickable14" className="footnote">14 </a>
          <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Brigham Young recorded in a letter from Amanda H. Wilcox to Susie Young Gates, March 11, 1904, Historical Dept. of the Church.</Tooltip>
          
           Oliver
          Huntington reported that Joseph Smith stated, “…. that before the
          destruction of the nation, it (U.S. government) would resolve itself
          into a mob against the saints.” 
          <a id="clickable15" className="footnote">15 </a>
          <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>Journal of Oliver B. Huntington, March 28, 1883; original journal in the Brigham Young University Library. These developments, which will result in America being reduced to a state of chaos and disunion, were shown to Joseph Smith in vision. History of the Church, vol. 3, p. 390-391; Journal of Discourses, April 2, 1854, vol. 2, p. 146-147.</Tooltip>
          
          First Presidency Counselor Heber
          Kimball stated, “… that the time would come when the government would
          stop the Saints from holding meetings … When this was done the Lord
          would pour out his judgments.”
          <a id="clickable16" className="footnote">16 </a>
          <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Heber Kimball, Orson Whitney’s, “Life of Heber C. Kimball: An Apostle, the Father and Founder of the British Mission”, p. 452-453.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          During this time, the U.S. government will persecute Mormon church
          leaders. According to Heber Kimball, “You (now) have the First
          Presidency … The time will come when they will not be with you. Why?
          Because they will have to flee and hide up to keep out of the hands of
          their enemies. You have the Twelve now. You will not always have them,
          for they too will be hunted and will have to keep out of the way of
          their enemies.”
          <a id="clickable17" className="footnote">17 </a>
          <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>Heber Kimball, Orson Whitney’s, “Life of Heber C. Kimball: An Apostle, the Father and Founder of the British Mission”, p. 450.</Tooltip>
        </p>
      </div>

      <h2 className="headlinePadding">Joseph Smith to Lead the Mormons to Jackson County to Build Zion</h2>

      <div className="paragraph">
        <p>
          During these persecutions, Christ will reveal to Mormon leaders and
          Lamanites, that it is time for a vanguard group to travel to Jackson
          County to begin building Zion. Brigham Young stated that during the
          persecution, “The Lord will hear the prayers of his children. It will
          be after that, when our Savior, with Joseph and Hyrum and hosts of
          others will come to earth. After the people have been tried, yes,
          tried, then will Joseph the Prophet lead this people to Jackson
          County, and then the glorious temple will be built.”
          <a id="clickable18" className="footnote">18 </a>
          <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Letter of Amanda H. Wilcox to Susa Young Gates, daughter of Brigham Young, written at Salt Lake City, Utah, March 11, 1904, as a report from her journal of 1861; Amanda H. Wilcox file, Church Historian’s Library, Salt Lake City, Utah.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Speaking of this time, First Presidency Counselor Heber Kimball
          stated, “… the Saints will be put to a test … the more righteous among
          them will cry unto the lord day and night until deliverance comes.
          Then the Prophet Joseph and others will make their appearance and
          those who have remained faithful will be selected to return to Jackson
          County, Missouri and take part in the upbuilding of that beautiful
          city, the New Jerusalem.”
          <a id="clickable19" className="footnote">19 </a>
          <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Prophetic Sayings of Heber C. Kimball to Amanda H. Wilcox, personal journal, no date or place of publication, 8 page document.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          Mormon apostle Orson Pratt concurred that Christ and Joseph Smith
          would lead the Mormons to Jackson County in power and glory. He
          stated, “I expect that when the Lord leads forth his people to build
          up the city of Zion, his presence will be visible ... His presence was
          with the children of Israel as a cloud by day, and as the shining of a
          flaming fire by night. We shall go back to Jackson County ... They
          (Mormons) will march forward, the glory of God overshadowing their
          camp by day in the form of a cloud, and a pillar of flaming fire by
          night, the Lord’s voice being uttered forth before his army … the very
          trees of the field will wave to and fro by the power of God, and clap
          like hands. The everlasting hills will rejoice, and they will tremble
          before the presence of the Lord; and the people will go forth and
          build up Zion according to celestial law.”
          <a id="clickable20" className="footnote">20 </a>
          <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, March 9, 1873, vol. 15, p. 363, 364.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          As Mormon apostle Parley Pratt made his way to Nauvoo after Joseph’s
          death, he cried out, “O Lord … show me what these things mean.” Parley
          continued, “… the Spirit said unto me: … ‘My servant Joseph still
          holds the keys of my kingdom in this dispensation, and he shall stand
          in due time on the earth, in the flesh, and fulfill that to do which
          he is appointed.” 
          <a id="clickable21" className="footnote">21 </a>
          <Tooltip anchorSelect="#clickable21" className="footnote-size" clickable>Autobiography of Parley P. Pratt, p. 368-372.</Tooltip>
          
          Mormon apostle Orson Pratt said of Joseph’s return,
          “God’s arm is not shortened that he cannot raise him (Joseph) up even
          from the tomb … if the Lord sees proper to bring forth that man just
          before the winding up scene to lead forth the army of Israel, he will
          do so.”
          <a id="clickable22" className="footnote">22 </a>
          <Tooltip anchorSelect="#clickable22" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, March 9, 1873, vol. 15, p. 363.</Tooltip>
        </p>
      </div>

      <h2 className="headlinePadding">Jackson County Wiped Clean of Inhabitants</h2>

      <div className="paragraph">
        <p>
          When the first group of Zion builders arrive, they will find Jackson
          County desolate due to the scourges of God upon the wicked. First
          Presidency Counselor Heber Kimball stated about the Mormons returning
          to Jackson County, “… the western boundaries of the state of Missouri
          will be swept so clean of its inhabitants that as President Young
          tells us, ‘that there will not be so much as a yellow dog to wag his
          tail.’” 
          <a id="clickable23" className="footnote">23 </a>
          <Tooltip anchorSelect="#clickable23" className="footnote-size" clickable>Reported by Amanda H. Wilcox, Prophetic Sayings of Heber C. Kimball to Sister Amanda H. Wilcox quoted by J. Golden Kimball in Conference October 1930, Deseret News, Church Department, May 23, 1931, p. 3.</Tooltip>
          
          Mormon apostle Orson Pratt explained that there will “be no
          owners left to occupy the country.” 
          <a id="clickable24" className="footnote">24 </a>
          <Tooltip anchorSelect="#clickable24" className="footnote-size" clickable>Orson Pratt, The Deseret Evening News, VIII, October 2, 1875.</Tooltip>
          
          Wilford Woodruff recorded a vision
          of John Taylor in which he was shown that “the whole area was with no
          living being [there].”
          <a id="clickable25" className="footnote">25 </a>
          <Tooltip anchorSelect="#clickable25" className="footnote-size" clickable>Vision received by John Taylor, December 16, 1877, and recorded in the journal of Wilford Woodruff, June 15, 1878.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          But when the Mormons and Lamanites begin to build their holy city, all
          will not be well in Zion. The Mormons and Lamanites will struggle with
          opposing forces. In the Book of Mormon, the Great and Abominable
          Church (“great whore of all the earth” and “church of the devil”)
          fights against Zion. The establishment of Zion is in direct opposition
          to Satan. After all, it will lead to his being bound for 1,000 years
          during the Millennium in a bottomless pit.
        </p>
      </div>

      <div className="paragraph">
        <p>
          Both, Nephi in the Book of Mormon, and John in the Book of Revelation,
          were given visions pertaining to how the Great and Abominable Church
          will fight against the Church of the Lamb of God and the Zion
          builders. 
          <a id="clickable26" className="footnote">26 </a>
          <Tooltip anchorSelect="#clickable26" className="footnote-size" clickable>1 Nephi 14:10; Revelation 14:8; 17; 18; 19:2, 19.</Tooltip>
          
          Nephi beheld that the Great and Abominable Church would
          gather “together multitudes upon the face of all the earth, among all
          the nations of the Gentiles, to fight against the Lamb of God.” 
          <a id="clickable27" className="footnote">27 </a>
          <Tooltip anchorSelect="#clickable27" className="footnote-size" clickable>1 Nephi 14:13.</Tooltip>
          
          Mormon
          apostle Orson Pratt said of an Isaiah prophecy that those who oppose
          Zion will “gather together in multitudes ... to battle” against her.
          But “the power of the Lamb of God ... (would) descend upon the
          Saints.” 
          <a id="clickable28" className="footnote">28 </a>
          <Tooltip anchorSelect="#clickable28" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, July 10, 1859, vol. 7, p. 186, citing 1 Nephi 14:13-14.</Tooltip>
          
          The Book of Mormon states that in the last day Isaiah’s words
          will be fulfilled. “The Lord hath made bare his holy arm in the eyes
          of all the nations; and all the ends of the earth shall see the
          salvation of our God.”
          <a id="clickable29" className="footnote">29 </a>
          <Tooltip anchorSelect="#clickable29" className="footnote-size" clickable>1 Nephi 22:11.</Tooltip>
        </p>
      </div>

      <div className="paragraph">
        <p>
          The Lord’s power will protect Zion. Nephi says, “… he that fighteth
          against Zion, both Jew and Gentile, both bond and free, both male and
          female, shall perish; for they are they who are the whore of all the
          earth; for they who are not for me are against me, saith our God”
          <a id="clickable30" className="footnote">30 </a>
          <Tooltip anchorSelect="#clickable30" className="footnote-size" clickable>2 Nephi 10:13.</Tooltip>

          Speaking of the inhabitants of Zion, Christ will “… manifest himself
          unto them in power and great glory, unto the destruction of their
          enemies … And they that believe not in him shall be destroyed, both by
          fire, and by tempest, and by earthquakes, and by bloodsheds, and by
          pestilence, and by famine.”
          <a id="clickable31" className="footnote">31 </a>
          <Tooltip anchorSelect="#clickable31" className="footnote-size" clickable>2 Nephi 6:14-15.</Tooltip>
          
          Jacob also reveals that those who fight
          against Zion, “… shall be destroyed, both by fire, and by tempest, and
          by earthquakes, and by bloodsheds, and by pestilence, and by famine.”
        </p>
      </div>

      <div className="paragraph">
        <p>
          Speaking of when the Lord will “proceed to make bare his arm in the
          eyes of all the nations,” Nephi wrote, “Every nation which shall war
          against thee, O house of Israel, shall ... be destroyed, and that
          great whore, who hath perverted the right ways of the Lord, yea, that
          great and abominable church, shall tumble to the dust and great shall
          be the fall of it.” 
          <a id="clickable32" className="footnote">32 </a>
          <Tooltip anchorSelect="#clickable32" className="footnote-size" clickable>1 Nephi 22:14.</Tooltip>
          
          Nephi concluded, “those who belong to the kingdom
          of the devil ... must be brought low in the dust; they are those who
          must be consumed as stubble.”
          <a id="clickable33" className="footnote">33 </a>
          <Tooltip anchorSelect="#clickable33" className="footnote-size" clickable>1 Nephi 22:23.</Tooltip>
        </p>
      </div>
      </div>

      <div className="chapterFooter">
        <Link to="/Chap6">Previous Chapter</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap8">Next Chapter</Link>
      </div>
      
    </div>
  );
};

export default Chap7;
