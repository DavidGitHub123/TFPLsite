import React from "react";
import "../../index.css";
import './Intro.css';
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import video from '../../Assets/Img/video.jpg'

const Chap1 = () => {
  return (
      <div className="chapter-container">

        <div className="chapterFooter">
          <Link className="" to="/">Home</Link>
          <Link to="/Chap1">Next Chapter</Link>
        </div>

        <h1 className="chapterHeading">
          Introduction to the First Presidency Letter
        </h1>

        <img src={video} className='image' alt='photo of Joseph Smith Mormon Prophet' />

      <div className="wrapper">


        <div className='paragraph'>
          <p>In the October 2024 general conference, Mormon prophet Russell Nelson announced, “Brothers and sisters, now is the time for you and for me to prepare for the Second Coming of our Lord and Savior, Jesus the Christ.” The theme of his remarks was hastening the Lord’s work and preparing for an implied near Second Coming. Russell Nelson concluded, “The best is yet to come … because the Savior is coming again!” Two years earlier in the October 2022 general conference, Russell Nelson stated, “In coming days, we will see the greatest manifestations of the Savior’s power that the world has ever seen. Between now and the time He returns ‘with power and great glory,’ He will bestow countless privileges, blessings, and miracles upon the faithful.”        
          </p>
        </div>

        <div className='paragraph'>
          <p>To make such bold claims, did Russell Nelson receive a revelation? Did Christ appear to him in vision? Did he hear an audible voice, 
            “I am coming?” Did Christ reveal any additional information? Russell Nelson was silent on the matter. Instead, this Mormon prophet left his church membership to 
            come to their own conclusions. Perhaps he should have given his followers more information about such a life-altering event? The response from church members to this grand revelation? The prophet’s remarks ignited a firestorm of speculation and concern. Young people online wondered aloud about what the future holds. Dyed-in-the-wool, true-blue Mormons expressed excitement.       
          </p>
        </div>

        <h2 className="headlinePadding">Joseph Smith’s Revealed Latter-Day Framework</h2>

        <div className='paragraph'>
          <p>Today’s prophets, seers, and revelators teach virtually nothing about Mormonism’s extensive revealed framework of events that are to precede Christ’s Second Coming – even though they preside over the church of Latter-Day Saints. As a result, today’s church members believe that Christ will one day appear in the sky. But nothing could be further from the truth if Joseph Smith’s revelations – given in the words of Christ to the church and world – are to be believed!
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph provided an entire framework outlining actions and responsibilities for the Mormons in building the Kingdom of God by priesthood authority prior to the Second Coming. According to Mormon scripture, key events must unfold before Christ will appear in glory to the world. But because it is strange, wild, apocalyptic, and violent, today’s Mormon leaders do not talk about Joseph’s revealed Second Coming framework – even though it comprises the bulk of Joseph’s revealed words. 
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Joseph, the following events must take place prior to Christ’s Second Coming. For example, the Lamanites and Mormons must travel to Jackson County, Missouri to build the holy city of Zion, the New Jerusalem, on the site of the Garden of Eden, as Christ foretold in the Book of Mormon. As Zion is being built, the world will fall deeper and deeper into sin and wickedness. Satan, along with his Great and Abominable Church, will make war upon Zion, as outlined in the Book of Mormon and Doctrine and Covenants. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Eventually, the holy city of Zion will become glorified – a true shining city on a hill. In the darkening world around it, righteous people across the globe will 
            flee to it as a place of refuge. Kings and rulers will come to Zion with their riches. Joseph revealed Christ’s words, 
            “… where shall be the safety of my people, and refuge for those who shall be left of them? Awake, O kings of the earth! 
            Come ye, O, come ye, with your gold and your silver, to the help of my people, to the house of the daughters of Zion.” 
            <a id="clickable1" className="footnote">1  </a>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>D&C 124:10-11.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Orson Pratt stated in 1855, “… The people will see that the hand of God is over this people; they will see that He is in our midst … 
            they will say, ‘Let us go up and put our riches in Zion, for there is no safety in our own nations.’ Those nations are trembling and tottering and 
            will eventually crumble to ruin, and those men of wealth will come here … they will hear that peace and health dwell among us.”
            <a id="clickable2" className="footnote">2  </a>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, May 20, 1855, vol. 3, p. 17.</Tooltip>     
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph put all this succinctly in his Tenth Article of faith, once recited by Mormon children throughout the world, “We believe in the literal 
            gathering of Israel and in the restoration of the Ten Tribes; that Zion (the New Jerusalem) will be built upon the American continent.”
            <a id="clickable3" className="footnote">3  </a>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>Articles of Faith 1:10.</Tooltip>          
          </p>
        </div>

        <div className='paragraph'>
          <p>Eventually, the Lost 10 Tribes, led by John the Revelator, will travel to Zion. In the holy city, under the hands of the Mormon priesthood, 
            they will receive their temple blessings and glory. Joseph wrote that pestilence, hail, famine, and earthquake will sweep the wicked “from off the face of the land, 
            to open and prepare the way for the lost tribes of Israel from the north country.”
            <a id="clickable4" className="footnote">4  </a>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>History of the Church, Joseph Smith 1:315.</Tooltip>  
            Joseph also revealed, “… and they shall smite the rocks, and the ice shall flow down at their presence. 
            And an highway shall be cast up in the midst of the great deep.”  
            <a id="clickable5" className="footnote">5  </a>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>D&C 133:26-27.</Tooltip> 
            When the Lost 10 Tribes arrive in Zion, they shall, “… fall down and be crowned with glory, even in Zion, by the hands of the servants 
            of the Lord, even the children of Ephraim. And they shall be filled with songs of everlasting joy.”
            <a id="clickable6" className="footnote">6  </a>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>D&C 133:32-33.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph also revealed that 144,000 priesthood holders will leave from Zion in Jackson County and scour the earth to bring the righteous to the New Jerusalem. Additionally, the Mormons will travel to Jerusalem and establish Zion among the Jews. This is necessary so that a seat of God’s priesthood government will be established in Jerusalem so Christ will have a throne to rule from during the Millennium. Just prior to the Second Coming, to further cleanse the earth of wickedness, Joseph revealed commenting on the Book of Revelation, that seven angels will pour out violent judgments and plagues to torment Satan and his forces, killing billions of the wicked. This will purify the earth allowing Christ to sanctify the globe at his triumphant return.      
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Mormon scripture and Joseph Smith’s prophetic statements, all these events and more will occur before Christ appears in glory to the world. Therefore, if Joseph was a prophet, Christ will not simply appear in the sky as many Mormons believe today. In these pages you will find Joseph’s grand prophetic vision of establishing the Kingdom of God, and how that will lead to the Second Coming. 
          </p>
        </div>

        <h2 className="headlinePadding">Is the Second Coming Rhetoric Responsible?</h2>

        <div className='paragraph'>
          <p>Another problem with Russell Nelson’s announcement that Christ is coming soon is the credibility problem it creates for the Mormon church. 
            It has been almost 200 years since Joseph Smith revealed to the early Mormons that Christ’s Second Coming was “nigh at hand.”
            <a id="clickable7" className="footnote">7  </a>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>D&C 1:35-36.</Tooltip> 
            And relaying Christ’s words “behold, I come quickly.”
            <a id="clickable8" className="footnote">8  </a>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>D&C 41:4.</Tooltip>        
          </p>
        </div>

        <div className='paragraph'>
          <p>Speaking of building Zion in Jackson County, Joseph promised that the holy city would be built in the “generation” or lifetime of the early Mormons of the 1830s. 
            Joseph revealed in 1832, “Yea, the word of the Lord concerning his church, established in the last days for the restoration of his people … for the gathering of 
            his saints to stand upon Mount Zion, which shall be the city of New Jerusalem.” The revelation continues, “Which city shall be built … in the western boundaries 
            of the State of Missouri … even the place of the temple, which temple, shall be reared in this generation. For verily, this generation shall not all pass away 
            until a house shall be built unto the Lord, and a cloud shall rest upon it, which cloud shall be even the glory of The Lord.”
            <a id="clickable9" className="footnote">9  </a>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>D&C 97:19.</Tooltip>   
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Joseph’s revelations, establishing the city of Zion in Jackson County, and building the temples on the site of the Garden of Eden, is the critical first step of Christ’s latter-day framework. It will set other things in motion to then bring on the Second Coming.         
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Orson Pratt believed Joseph’s revelation. He stated, “God promised in the year 1832 that we should, before the generation then living 
            had passed away, return and build up the City of Zion in Jackson County ... We believe in these promises as much as we believe in any promise ever 
            uttered by the mouth of Jehovah … Why?  Because God cannot lie.  He will fulfill all His promises.”  
            <a id="clickable10" className="footnote">10  </a>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, May 5, 1870, vol. 13, p. 362.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>But this never happened. For nearly 200 years, the church has promised every generation that they are the chosen generation to usher in the Second Coming 
            – only for that generation to pass away with that promise unfulfilled. Countless patriarchal blessings promised people, 
            now in silent graves, that they will live to see the Second Coming. If a generation is 20 to 30 years,  
            <a id="clickable11" className="footnote">11  </a>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable className="footnote-size">Jack Fenner, 28 March 2005, Cross-Cultural Estimation of the Human Generation Interval for Use in Genetics-Based Population Divergence Studies, American Journal of Physical Anthropology. 128: 415–423.</Tooltip>
            that means seven generations have passed, with those promises unfulfilled.         
          </p>
        </div>

        <div className='paragraph'>
          <p>Is it responsible to trot out this tired Second Coming rhetoric? Are Russell Nelson’s words a desperate hail Mary to stem the overflowing exodus of people leaving the church? By implying that a Second Coming is “nigh at hand,” some members may stay around a little longer. It may also shore up the belief systems of the more devout members.        
          </p>
        </div>

        <h2 className="headlinePadding">If True, Proclaim it to the World </h2>

        <div className='paragraph'>
          <p>If prophets see around corners, and Russell Nelson knows that the Second Coming is “nigh at hand,” he is responsible for teaching what Joseph Smith and 
            other prophets, seers, and revelators have taught about the last days and the approaching Second Coming. 
            Therefore, Mormon leaders should issue a proclamation to the world. They should meet with world leaders to call their nations to repentance, 
            so they can prepare for the “coming of the great and dreadful day of the Lord.”
            <a id="clickable12" className="footnote">12  </a>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Joseph Smith – History 1:37-39.</Tooltip>
            Joseph revealed Christ’s words to church leaders that, “… they should proclaim these things unto the world; and all this that it might be fulfilled, 
            which was written by the prophets.”
            <a id="clickable13" className="footnote">13  </a>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>D&C 1:18.</Tooltip>     
          </p>
        </div>

        <div className='paragraph'>
          <p>The First Presidency should issue a proclamation to the world that the Kingdom of God has been established, and the Second Coming is nigh at hand, 
            as the Mormon apostles issued in 1845. Their proclamation states, “Know ye: That the kingdom of God has come: as has been predicted by ancient 
            prophets and prayed for in all ages; even that kingdom which shall fill the whole earth and shall stand forever.” Their proclamation states that 
            Christ’s “coming is near at hand; and not many years hence, the nations and their kings shall see him coming in the clouds of heaven with power and great glory.”
            <a id="clickable14" className="footnote">14  </a>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Proclamation of the Twelve Apostles of the Church of Jesus Christ, of Latter-Day Saints. To all the Kings of the World; To the President of the United States of America; To the Governors of the several States; And to the Rulers and People of all Nations. (New York, April 6, 1845), 1.</Tooltip>           
          </p>
        </div>

        <div className='paragraph'>
          <p>If the current Mormon leadership shirks their responsibility to “proclaim these things unto the world” is it because they don’t believe the Lord’s words, 
            revealed through Joseph Smith and canonized in Mormon scriptures? Do they not believe in past prophetic statements? Do they not believe that Joseph 
            was restoring the Kingdom of God, which must be established before the great latter-day events can roll forth? Do they not believe Daniel’s prophecy? 
            Joseph stated, “I calculate to be one of the instruments of setting up the kingdom of Daniel by the word of the Lord, and I intend to lay a foundation 
            that will revolutionize the whole world.”
            <a id="clickable15" className="footnote">15  </a>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>Statement on 12 May 1844 to the Council of Fifty, as recorded in Underwood, the Millenarian World of Early Mormonism, 109.</Tooltip>    
          </p>
        </div>

        <div className='paragraph'>
          <p>Second Mormon prophet Brigham Young stated, “The Lord God Almighty has set up a kingdom that will sway the scepter of power and authority over all the kingdoms of the world, 
            and will never be destroyed, it is the kingdom that Daniel saw and wrote of … The kingdom will continue to increase, to grow, to spread and prosper more and more … 
            and become more wonderful and conspicuous to the nations, until it fills the whole earth.”
            <a id="clickable16" className="footnote">16 </a>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Brigham Young, Journal of Discourses, April 6, 1852, vol. 1, p. 202-203</Tooltip>          
          </p>
        </div>

        <h2 className="headlinePadding">I Present to You…</h2>

        <div className='paragraph'>
          <p>To this end, I have done all the heavy lifting and present for the First Presidency and church members Joseph Smith’s revealed latter-day framework that must be fulfilled prior to the Second Coming – as revealed from the mouth of Jesus Christ. Enjoy.    
          </p>
        </div>

        <div className='paragraph'>
          <p>Nom De Guerre: A Disappointed Saturday’s Warrior         
          </p>
        </div>

      </div>

        <div className="chapterFooter">
          <Link className="" to="/">Home</Link>
          <Link to="/Chap1">Next Chapter</Link>
        </div>

      </div>
  );
};

export default Chap1;
