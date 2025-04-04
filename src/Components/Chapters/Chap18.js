import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import zion from '../../Assets/Img/zion.jpg'

const Chap18 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
          <Link to="/Chap17">Previous Chapter</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap19">Next Chapter</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 18: Three Failed Concepts of Zion</h1>

      <img src={zion} className='image' alt='Shinging city of gold' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>Joseph Smith had three evolving conceptions of who would build Zion in Jackson County – none of which came to pass. We will go into the details of the three concepts later, but here’s a brief introduction.
          </p>
        </div>

        <div className='paragraph'>
          <p>First Concept – The holy city of Zion would be built by the Lamanites, with the help of the converted Gentiles – Mormons. In the Book of Mormon, Christ prophesies that the Lamanites will recognize their identity as members of the House of Israel through Mormon missionary efforts. Then, the Lamanites will rise as a mighty force and build Zion. However, after the first Mormon missionary effort in 1831 to bring the Book of Mormon to the Lamanites failed, a new concept emerged of who would build Zion. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Second Concept – The holy city of Zion would be built by the Mormons. After the unsuccessful mission to the Lamanites in 1831, the concept of who would build 
            Zion was reinterpreted.  Instead of Native Americans as its builders, contradictory to Christ’s prophecy, the New Jerusalem was now to be built by the Mormons.
            <btn id="clickable1" className="footnote">1 </btn>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>G. St. John Stott, Apr 1987, “New Jerusalem Abandoned: The Failure to Carry Mormonism to the Delaware,” Journal of American Studies, 21 (1).</Tooltip> 

            During this time, Mormons began seeing themselves as the literal remnant of the House of Joseph through Ephraim, who would 
            build the holy city.
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Armand Mauss, 2003, All Abraham’s Children: Changing Mormon Conceptions of Race and Lineage, p. 42. </Tooltip> 

            Joseph Smith revealed, “Verily this is the word of the Lord, that the city New Jerusalem shall be built by the gathering of 
            the saints … even the place of the temple, which temple shall be reared in this generation.”
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>D&C 84:84.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>This clear reversal of prophecy remains a sore spot for the church. Mormon apostle Bruce McConkie stated, “An occasional 
            whiff of nonsense goes around the church acclaiming that the Lamanites will build the temple in the New Jerusalem and that 
            Ephraim and others will come to their assistance. This illusion is born of an inordinate love for Father Lehi’s children and 
            of a desire to see them all become now as Samuel the Lamanite once was. The Book of Mormon passages upon which it is thought 
            to rest have reference not to the Lamanites but to the whole House of Israel. The temple in Jackson County will be built by 
            Ephraim, meaning the Church as it is now constituted.”
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Armand Mauss, 2003, All Abraham’s Children: Changing Mormon Conceptions of Race and Lineage, p. 41. </Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>In their attempts to build Zion, the Mormons were driven out of Missouri twice: once in 1833 and finally in 1838 – not to mention the failed military march of Zion’s Camp in 1834 to redeem Zion. Despite the Lord’s promises to fight their battles and provide divine assistance, Joseph and the Mormons failed to build Zion.
          </p>
        </div>

        <div className='paragraph'>
          <p>Third Concept – The early Mormons would return at a future date – in their lifetimes – to Jackson County to build the holy city of Zion. After fleeing Missouri in 1838, the Mormons settled in Nauvoo. Joseph would live another six years before being murdered after ordering the destruction of the Nauvoo Expositor – a newspaper exposing the secrets of polygamy and other kingdom-building activities. During those six years, Joseph made no attempt to return to Jackson County to establish Zion. However, the idea that the Mormons would one day return and fulfill the divine commands of Lord in Missouri persisted. After all, it was Christ’s will and was essential for the Second Coming. And the Mormons had been promised by their prophet that they had significant roles to play in preparing the earth where they would rule with Christ from Jackson County during the Millennium.
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham stated in 1845, “And when we get into Jackson County … we can say we built this temple: for as the Lord lives, we 
            will build up Jackson County in this generation.”  
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Times and Seasons, 1 July 1845, vol. 6, p. 956.</Tooltip>
            
            First Presidency Counselor Heber Kimball believed he would return to Jackson County in his lifetime. He stated in 1861, 
            “Brethren, I shall go to Jackson County with thousands of this people who will be faithful.”
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, February 17, 1861, vol. 8, p. 350.</Tooltip> 
            
            Heber prophesied to Amanda Wilcox in 1868, “… the Prophet Joseph and others will make their appearance and those who have 
            remained faithful will be selected to return to Jackson County, Missouri and take part in the upbuilding of that beautiful 
            city, the New Jerusalem.”
            <btn id="clickable7" className="footnote">7 </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Prophetic Sayings of Heber C. Kimball to Sister Amanda H. Wilcox.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>The first Mormon pioneers arrived in Utah in 1847 with Zion and Jackson County still on their minds. In 1857 Heber Kimball 
            said of Jackson County, “I shall yet see the day that I will go back there, with brother Brigham and with thousands and 
            millions of others, and we will go precisely according to the dedication of the Prophet of the living God … I am just as 
            confident of it as I am that I am called to be a savior of men, and no power can hinder it.”  
            <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, December 27, 1857, vol 6. p. 190.</Tooltip>
            
            Millions of Mormons traveling 
            to Jackson County? Heber had been promised by Joseph that he had been “called to be a savior of men” Heber died in 1868 and 
            none of this came to pass. In 1857 Elias Smith said, “I expect to live to be an old man, and to go back with the saints 
            to the land of Jackson County.” To which Brigham Young responded from the stand, “God grant it.”  
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>Brigham Young, Journal of Discourses, August 2, 1857, vol. 6, p. 221.</Tooltip>
            
            Elias died in 1888.
          </p>
        </div>

        <div className='paragraph'>
          <p>In 1861, Mormon apostle George Smith declared that his generation would not pass away before the temple was built. “Who is 
            there that is prepared for this movement back to the center stake of Zion, and where are the architects amongst us that are 
            qualified to erect this temple and the city that will surround it … let me remind you that it is predicted that this generation 
            shall not pass away till a temple shall be built, and the glory of the Lord rest upon it, according to the promises.”  
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>George Smith, Journal of Discourse, May 10, 1861, vol. 9, p. 71.</Tooltip>
            
            George died in 1875.
          </p>
        </div>

        <div className='paragraph'>
          <p>In 1864 Mormon apostle George Cannon stated that the current generation would build a temple in Jackson County. “The day is 
            near when a Temple shall be reared in the Center Stake of Zion, and the Lord has said his glory shall rest on that House in this 
            generation, that is in the generation in which the revelation was given, which is upwards of thirty years ago.”  
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>George Cannon, Journal of Discourses, October 23, 1864, vol. 10, p. 344.</Tooltip>
            
            George died in 1901. In 1870, Apostle Orson Pratt taught, “We have just as much confidence in returning to Jackson County and 
            the building of a great city that will remain there a thousand years ... There are many of the old stock … still living, whose 
            faith in returning to Jackson County, and the things that are coming, is as firm and fixed as the throne of the Almighty.”  
            <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, April 10, 1870, vol. 13, p. 138.</Tooltip>
            
            Orson died in 1881.
          </p>
        </div>

        <div className='paragraph'>
          <p>The idea of returning to Jackson County to build the holy city of Zion stretched into the 20th century. Mormon apostle Orson 
            Whitney stated in 1916, “Is the State of Utah the proper monument of the ‘Mormon’ people? No ... The monument to ‘Mormonism’ 
            will stand in Jackson County, Mo. There the great City will be built: There Zion will arise and shine, ‘the joy of the whole 
            Earth,’ and there the Lord will come to His temple in His own time, when His people shall have made the required preparation.”
            <btn id="clickable13" className="footnote">13 </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>Address given 9 April 1916, as quoted in Hyrum M. Smith and Janne M. Sjodahl, Doctrine and Covenants Commentary (1960), 147.</Tooltip>
            
              But the Mormons never returned to Jackson County despite all of Joseph’s prophecies. And church leaders today never mention 
              returning to build Zion.
          </p>
        </div>

        <h2 className="headlinePadding">Zion Built by the Lamanites</h2>

        <div className='paragraph'>
          <p>In 1833, Joseph Smith wrote, “The Book of Mormon is a record of the forefathers of our western tribes of Indians … By it we 
            learn that our western tribes of Indians are descendants from that Joseph that was sold into Egypt, and that the 
            land of America is a promised land unto them.”  
            <btn id="clickable14" className="footnote">14 </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Letter from Joseph Smith to N. C. Saxton, 4 January 1833, Dean C. Jessee, comp. and ed., Personal Writing of Joseph Smith, 2002, 297.</Tooltip>
            
            The Book of Mormon title page announces that it is “… written to the Lamanites, which are a remnant of the House of Israel.”  
            <btn id="clickable15" className="footnote">15 </btn>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>Book of Mormon, 1830 ed., title page.</Tooltip>
            
            The book’s purpose is to teach Native Americans that they are descendants of the House of Israel. That they have a divinely 
            appointed role to accept the gospel in the last days and return to the covenant with the House of Israel.
            <btn id="clickable16" className="footnote">16 </btn>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>In the late 1820s, when the Book of Mormon was written, the prevailing belief was that the Native Americas were descendants of the Jews, not indigenous peoples that crossed the Bering Straits thousands of years before. However, and unfortunately for the Book of Mormon, DNA research has shown that Native Americans are not of Israelite descent, but rather Asiatic descent proving these people did come over the Bering Straits. Therefore, the Native Americans were not Lamanites descended from Jews, nor of the House of Israel.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Nephi prophesied of the future Lamanites, “And the gospel of Jesus Christ shall be declared among them (Lamanites); 
            wherefore, they shall be restored unto the knowledge of their fathers (Book of Mormon Lamanites), and also to the knowledge 
            of Jesus Christ … and their scales of darkness shall begin to fall from their eyes; and many generations shall not pass away 
            among them, save they shall be a white and a delightsome people.”  
            <btn id="clickable17" className="footnote">17 </btn>
            <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>2 Nephi 30:5-6.</Tooltip>
            
            However, this prophecy was never fulfilled!
          </p>
        </div>

        <div className='paragraph'>
          <p>In the Book of Mormon, the tribes of Ephraim and Manasseh (sons of Joseph sold into Egypt) are brought into one family 
            bloodline. Lehi is from the tribe of Manasseh.  
            <btn id="clickable18" className="footnote">18 </btn>
            <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Alma 10:3.</Tooltip>
            
            Joseph Smith stated that Lehi’s wife, Sariah, was from the tribe of Ephraim.  
            <btn id="clickable19" className="footnote">19 </btn>
            <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Joseph McConkie, 1980, His Name Shall Be Joseph: Ancient Prophecies of the Latter-day Seer.</Tooltip>
            
            Lehi had four sons and two daughters. Desiring wives and husbands for his children, Lehi sent for Ishmael, a descendant of 
            the tribe of Ephraim. According to Mormon apostle Erastus Snow “Joseph (Smith) informed us that . . . Ishmael was of the 
            lineage of Ephraim, and that his sons [had] married into Lehi’s family, and Lehi’s sons married Ishmael’s daughters.”
            <btn id="clickable20" className="footnote">20 </btn>
            <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Erastus Snow, Journal of Discourses, May 6, 1882, vol. 23, p. 184.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Therefore, the Nephites and Lamanites were a mixture of both Ephraim and Manasseh. And as the Book of Mormon prophesies, 
            the Lamanites in the last days, being from this sacred genealogical line of the House of Israel, would be the builders of 
            the holy city of Zion. In 3 Nephi, the resurrected Christ preached, “And behold, this people (future Lamanites) will I 
            establish in this land (America), unto the fulfilling of the covenant which I made with your father Jacob; and it shall 
            be a New Jerusalem. And the powers of heaven shall be in the midst of this people; yea, even I will be in the midst of you.”
            <btn id="clickable21" className="footnote">21 </btn>
            <Tooltip anchorSelect="#clickable21" className="footnote-size" clickable>3 Nephi 20:21–22.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Christ then tells the future Gentiles if they repent and accept the Mormon gospel, they can assist the Native Americans in building the Zion. 
            “But if they (Gentiles) will repent … I will establish my church among them, and they shall come in unto the covenant and be numbered among this the remnant of 
            Jacob (Native Americans), unto whom I have given this land (America) for their inheritance.”  
            <btn id="clickable22" className="footnote">22 </btn>
            <Tooltip anchorSelect="#clickable22" className="footnote-size" clickable>3 Nephi 21:22. </Tooltip>
            
            Christ says that the Gentiles who convert to Mormonism will help the Lamanites build the holy city, “And they shall assist my people, the remnant of Jacob 
            (Lamanites) … that they may build a city (in Jackson County), which shall be called the New Jerusalem. And then shall they (Mormon converts) assist my people 
            that they may be gathered in (adopted into the House of Israel) … in unto the New Jerusalem.”
            <btn id="clickable23" className="footnote">23 </btn>
            <Tooltip anchorSelect="#clickable23" className="footnote-size" clickable>3 Nephi 21:23-25.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Then, in a dark moment, Christ warns the Gentiles who do not repent that they will be destroyed by the Lamanites, the Native Americans of their day, to make way 
            Zion. “… lest a remnant of the seed of Jacob (Lamanites) shall go forth among you as a lion among the beasts of the forest, as a young lion among the flocks of 
            sheep, who, if he go through both treadeth down and teareth in pieces, and none can deliver … Yea, wo be unto the Gentiles except they repent … saith the Father, 
            that I will cut off thy horses out of the midst of thee, and I will destroy thy chariots; And I will cut off the cities of thy land, and throw down all thy 
            strongholds.”
            <btn id="clickable24" className="footnote">24 </btn>
            <Tooltip anchorSelect="#clickable24" className="footnote-size" clickable>3 Nephi 20:15-17, 20.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Orson Pratt said of the Native American’s role in building Zion on the American continent, “Now, a great many … have flattered themselves that we 
            are the ones (Mormons) who are going to do all this work. It is not so; we have got to be helpers, we have got to be those who cooperate with the remnants of 
            Joseph (Native Americans) in accomplishing this great work … because they are of the blood of Israel … and will have the privilege of building that city.”
            <btn id="clickable25" className="footnote">25 </btn>
            <Tooltip anchorSelect="#clickable25" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, February 7, 1875, vol. 17, pg. 300.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Parley Pratt affirmed, “All who (Gentiles) will not hearken to the Book of Mormon, shall be cut off from among the people; and that too, in the 
            day it comes forth to the Gentiles and is rejected by them. And not only does this set the time for the overthrow of our government and all other Gentile 
            governments on the American continent, but the way and means of this utter destruction are clearly foretold, namely, the remnant of Jacob (Native Americans) 
            will go through among the Gentiles and tear them in pieces, like a lion among the flocks of sheep … This destruction includes an utter overthrow, and desolation 
            of all our cities … an entire annihilation of our race, except … are numbered with Israel.”
            <btn id="clickable26" className="footnote">26 </btn>
            <Tooltip anchorSelect="#clickable26" className="footnote-size" clickable>Parley P. Pratt, Mormonism Unveiled: Zion’s Watchman Unmasked, 1838, 15</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Parley continued, “I will state as a prophecy, that there will not be an unbelieving Gentile upon this continent 50 years hence, and if they are not greatly 
            scourged, and in a great measure overthrown, within five or ten years from this date, then the Book of Mormon will have proved itself false.”  
            <btn id="clickable27" className="footnote">27 </btn>
            <Tooltip anchorSelect="#clickable27" className="footnote-size" clickable>Parley P. Pratt, Mormonism Unveiled: Zion’s Watchman Unmasked, 1838, 15</Tooltip>
            
            Parley made these 
            remarks in 1838. Fifty years later, by 1888 this prophecy was not fulfilled, and the Gentiles and U.S. government escaped the wrath of God. Incidentally, this 
            narrative, the true narrative of the Book of Mormon, where the Lamanites are principally responsible for build the holy city of Zion is not taught in the 
            correlated curriculum.
          </p>
        </div>

        <div className='paragraph'>
          <p>Viewing the Lamanites under the circumstances of his day, fourth Mormon prophet Wilford Woodruff stated, “Zion is bound to rise and flourish. The Lamanites will 
            blossom as the rose on the mountains … when I see the power of the nation destroying them from the face of the earth, the fulfillment of that prophecy is perhaps 
            harder for me to believe than any revelation of God that I ever read. It looks as though there would not be enough left to receive the Gospel; but notwithstanding 
            this dark picture, every word that God has ever said of them will have its fulfillment, and they, by and by, will receive the Gospel. It will be a day of God’s 
            power among them, and a nation will be born in a day. Their chiefs will be filled with the power of God and receive the Gospel, and they will go forth and build 
            the new Jerusalem.”
            <btn id="clickable28" className="footnote">28 </btn>
            <Tooltip anchorSelect="#clickable28" className="footnote-size" clickable>Wilford Woodruff, Journal of Discourses, January 12, 1873, vol. 15, p. 282.5</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>According to the Book of Mormon the Lord will not allow the Gentiles to “utterly destroy”
          <btn id="clickable29" className="footnote">29 </btn>
          <Tooltip anchorSelect="#clickable29" className="footnote-size" clickable>Alma 9:12.</Tooltip>
            the seed of Lehi. Instead, Christ will afflict the remnant of Jacob “by the hand of the Gentiles” and “soften the hearts of the Gentiles” so that they will “be 
            like unto a father unto them.”
            <btn id="clickable30" className="footnote">30 </btn>
            <Tooltip anchorSelect="#clickable30" className="footnote-size" clickable>2 Nephi 10:18.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>The Book of Mormon states that the converted Gentiles (Mormons) will be as “nursing fathers” and “nursing mothers” to the Lamanites.  
          <btn id="clickable31" className="footnote">31 </btn>
          <Tooltip anchorSelect="#clickable31" className="footnote-size" clickable>2 Nephi 10:9.</Tooltip>
            
            The Mormons will preach the glad tidings to the remnant of Jacob. But, because the Gentiles failed to embrace Joseph’s restored gospel, Christ will return the 
            Gentiles’ iniquities upon their own heads. At this time, Christ will make bare his arm in the eyes of all nations to redeem Israel. The Gentile dominance over 
            the Lamanites will be broken. Christ told the Nephites, “I will show unto thee that the Gentiles shall not have power over you.”  
            <btn id="clickable32" className="footnote">32 </btn>
            <Tooltip anchorSelect="#clickable32" className="footnote-size" clickable>3 Nephi 16:12.</Tooltip>
            
            Then, Christ will give America 
            to the Lamanites “for their inheritance” in connection with the Mormon converts who embrace the restored gospel. Zion will be built, and the powers of heaven, the glory of God, will be amid the people. 
          </p>
        </div>

        <div className='paragraph'>
          <p>In an 1845 proclamation, the Mormon apostles wrote of the redemption of Native Americans as being filled with scenes of “grandeur, greatness, and glory.” The proclamation states, “The Lord will ... assemble the Natives, the remnants of Joseph in America; and make of them a great, and strong, and powerful nation: and he will civilize and enlighten them, and will establish a holy city, and temple, and seat of government among them, which shall be called Zion. And there shall be his tabernacle, his sanctuary, his throne, and seat of government for the whole continent of North and South America for ever ... 
          </p>
        </div>

        <div className='paragraph'>
          <p>“The despised and degraded son of the forest, who has wandered in dejection and sorrow, and suffered reproach, shall then drop his disguise, and stand forth in manly dignity, and exclaim to the Gentiles who have envied and sold him: ‘I am Joseph: does my father yet live?’ Or, in other words: I am a descendant of that Joseph who was sold into Egypt. You have hated me, and sold me, and thought I was dead. But lo! I live, and am heir to the inheritance, titles, honors, priesthood, sceptre, crown, throne, and eternal life and dignity of my fathers, who live for evermore. 
          </p>
        </div>

        <div className='paragraph'>
          <p>“He shall then be ordained, washed, anointed with holy oil, and arrayed in fine linen, even in the glorious and beautiful garments and royal robes of the 
            high priesthood, which is after the order of the Son of God; and shall enter into the congregation of the Lord, even into the Holy of Holies, there to be crowned 
            with authority and power which shall never end. The Spirit of the Lord shall then descend upon him ... His heart shall expand with knowledge, wide as eternity; 
            and his mind shall comprehend the vast creations of his God, and his eternal purpose of redemption, glory, and exaltation, which was devised in heaven before the 
            worlds were organized; but made manifest in these last days for the fullness of the Gentiles, and for the exaltation of Israel. He shall also behold his Redeemer, 
            and be filled with his presence, while the cloud of his glory shall be seen in his temple.” 
            <btn id="clickable33" className="footnote">33 </btn>
            <Tooltip anchorSelect="#clickable33" className="footnote-size" clickable>Proclamation of the Twelve Apostles of the Church of Jesus Christ, of Latter-Day Saints. To all the Kings of the World; To the President of the United States of America; To the Governors of the several States; And to the Rulers and People of all Nations. (New York, April 6, 1845).</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Nephi foretold that the Lamanites, when they embrace the restored gospel in the latter days, “Their scales of darkness shall begin to fall from their eyes; 
            and many generations shall not pass away among them, save they shall be a white and delightsome people.” 
            <btn id="clickable34" className="footnote">34 </btn>
            <Tooltip anchorSelect="#clickable34" className="footnote-size" clickable>2 Nephi 5:21.</Tooltip>
            
            Joseph Smith taught that this transformation would come to pass through intermarriage with the Lamanites. When Joseph arrived in Missouri, in July 1831, to 
            dedicate the land of Zion, he revealed “It is my will that, in time, ye should take unto you wives of the Lamanites and Nephites, that their posterity may 
            become white, delightsome and just; for even now their females are more virtuous than the Gentiles.” 
            <btn id="clickable35" className="footnote">35 </btn>
            <Tooltip anchorSelect="#clickable35" className="footnote-size" clickable>W.W. Phelps 1861 letter recounting Joseph Smith statement on July 17, 1831. Richard Bushman, Rough Stone Rolling, p. 326.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Fourth Mormon prophet Wilford Woodruff reported that Brigham stated, “Our people would be connected with every tribe of Native Americans throughout America, 
            and that our people would yet take their squaws, wash and dress them up, teach them our language, and teach them to labor, and teach them the gospel of their 
            forefathers, and raise up children by them, and teach the children; and not many generations hence they will become a white and delightsome people.”
            <btn id="clickable36" className="footnote">36 </btn>
            <Tooltip anchorSelect="#clickable36" className="footnote-size" clickable>Wilford Woodruff Journal notes from Brigham Young sermon July 28, 1847.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham taught, “We are now going to the Lamanites, to whom we intend to be messengers of instruction... We will have intermarriages with them, they marrying our 
            young women, and we taking their young squaws to wife. By these means it is the will of the Lord that the curse of their color shall be removed, and they restored 
            to their pristine beauty...”  
            <btn id="clickable37" className="footnote">37 </btn>
            <Tooltip anchorSelect="#clickable37" className="footnote-size" clickable>Brigham Young, quoted in The Abominations of Mormonism Exposed, pp. 58-59.</Tooltip>
            
            Brigham also taught “… the way God has revealed for the purification of the Indians and making them ‘a white and delightsome people’ as Joseph prophesied is by us 
            taking the Indian squaws for wives.”
            <btn id="clickable38" className="footnote">38 </btn>
            <Tooltip anchorSelect="#clickable38" className="footnote-size" clickable>John Hyde, Jr., Mormonism: Its Leaders and Designs, pp. 109-110.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">New Jerusalem and the Jaredites</h2>

        <div className='paragraph'>
          <p>According to the Book of Mormon, the Jaredites came to the American continent after leaving the Tower of Babel around 2200 BCE. The prophet Ether taught the 
            Jaredites that a remnant of the House of Joseph (Lamanites) would build Zion, the New Jerusalem, in the Americas in the last days. Moroni provides commentary 
            on Ether’s prophecies, saying that America is a “choice land above all other lands, a chosen land of the Lord … And that it was the place of the New Jerusalem, 
            which should come down out of heaven, and the holy sanctuary of the Lord.”
            <btn id="clickable39" className="footnote">39 </btn>
            <Tooltip anchorSelect="#clickable39" className="footnote-size" clickable>Ether 13:2-3.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Moroni draws a distinction between the Zion to be established in the Americans and the Zion that is to be established in Jerusalem in Israel. “Behold, Ether saw 
            the days of Christ, and he spake concerning a New Jerusalem upon this land (America). And he spake also concerning the House of Israel, and the Jerusalem from 
            whence Lehi should come – after it should be destroyed it should be built up again, a holy city (Jerusalem in Israel) unto the Lord … And that a New Jerusalem 
            should be built up upon this land, (Jackson County) unto the remnant of the seed of Joseph, for which things there has been a type.”
            <btn id="clickable40" className="footnote">40 </btn>
            <Tooltip anchorSelect="#clickable40" className="footnote-size" clickable>Ether 13:3-6.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Then, Moroni discusses the glory of Zion as a city and the events of the Second Coming. “And there shall be a new heaven and a new earth ... And then cometh the 
            New Jerusalem; and blessed are they who dwell therein, for it is they whose garments are white through the blood of the Lamb; and they are they who are numbered 
            among the remnant of the seed of Joseph, who were of the house of Israel.” 
            <btn id="clickable41" className="footnote">41 </btn>
            <Tooltip anchorSelect="#clickable41" className="footnote-size" clickable>Ether 13:9-10.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>But what of the Lamanites today?
          </p>
        </div>

        </div>

        <div className="chapterFooter">
          <Link to="/Chap17">Previous Chapter</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap19">Next Chapter</Link>
      </div>
      
    </div>
  )
}

export default Chap18