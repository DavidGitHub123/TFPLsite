import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import destruction from '../../Assets/Img/destruction.png'

const Chap30 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
        <Link to="/Chap29">Previous Chapter</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap31">Next Chapter</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 30: The Second Coming End Date of 1891</h1>

      <img src={destruction} className='image' alt='Modern city burning' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>All eyes in Utah were on the year 1891 – the last year Christ would come according to what Joseph Smith had prophesied. For six decades, Mormons had lived in 
            hopes of fulfilling the dream of one day returning to Jackson County. There, on the holy ground of the Garden of Eden, the Mormons would build the holy city of 
            Zion, the New Jerusalem, preparatory to the Second Coming. In 1886 the Millennial Star quoted Mormon apostle Moses Thatcher, “… the time of our deliverance 
            will be within five years; the time indicated will be February 14, 1891.”  
            <btn id="clickable1" className="footnote">1 </btn>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>Abraham Cannon Journal, October 14, 1886.  </Tooltip>
            
            But deliverance never came. In 1903, Benjamin Johnson recorded his disappointment: “… we were over 70 years ago taught by our leaders to believe that the coming of 
            Christ and the Millennial reign was much nearer than we believe it to be now.” 
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Benjamin Johnson, My Life's Review, p. 7; Dean R. Zimmerman ed., I Knew the Prophets:  An Analysis of the letter of Benjamin F. Johnson to George F. Gibbs, Reporting Doctrinal views of Joseph Smith and Brigham Young (Bountiful, Utah: Horizon, 1976).  </Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Originally, Joseph had prophesied in 1832 that the events leading to the end of the world and Christ’s return were all to take place within the lifetime, 
            “reared in this generation,”  
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>D&C 97:19.</Tooltip>
  
            of the early members of the church. If a generation is 20 to 30 years,  
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Jack Fenner, 28 March 2005, Cross-Cultural Estimation of the Human Generation Interval for Use in Genetics-Based Population Divergence Studies, American Journal of Physical Anthropology. 128: 415–423.</Tooltip>
            
            that would place Christ’s Second Coming between 1852 and 1862.
          </p>
        </div>

        <div className='paragraph'>
          <p>One year later, Joseph revealed another reference to the “generation” of the then-living early Mormons. On January 4, 1833, “… not many years shall pass away 
            before the United States shall present such a scene of bloodshed as has not a parallel in the history of our nation; pestilence, hail, famine, and earthquake will 
            sweep the wicked off this generation from off the face of the land … I declare unto you the warning which the Lord has commanded to declare unto this generation.”
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>History of the Church 1:315.</Tooltip>   
          </p>
        </div>

        <div className='paragraph'>
          <p>But two years later, Joseph extended the date by 50 years. In 1835, he revealed, “... it was the will of God … [to] go forth to prune the vineyard for the last 
            time … the coming of the Lord, which was nigh – even fifty-six years should wind up the scene.” From this and other statements, Joseph prophesied of Christ’s 
            latest return to be 1891.  
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>History of the Church 2:182.</Tooltip>   
            
            On February 14, 1835, Oliver Huntington recorded, “… Joseph Smith said that God had revealed to him that the coming of Christ would be within 56 years, which being 
            added to 1835 shows that before 1891 and the 14th of Feb. the Saviour of the world would make his appearance again upon the earth and the winding up scene take 
            place.”
            <btn id="clickable7" className="footnote">7 </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Oliver Huntington, Autobiography (Typescript, Brigham Young University Special Collections) II: 129.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Luman Shirtluff recorded, “At the April conference, 1840, the Prophet Joseph, while speaking to some of the elders on this matter said they were mistaken; the 
            Lord would not come in ten years, no, nor in twenty years, no, nor in thirty years; no, nor in forty years, and it will be almost fifty years before the Lord will 
            come.”  
            <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Luman Shirtluff, Autobiography, Typescript (Provo Utah: Brigham Young University Library Special Collections): 44.</Tooltip> 
            
            In an April 1843 conference, Joseph predicted that Christ would not return before he reached 85 years of age (1891). “Were I going to prophesy, I would say the 
            end [of the world] would not come in 1844, 5, or 6, or in forty years. There are those of the rising generation who shall not taste death till Christ comes … 
            I prophesy in the name of the Lord God, and let it be written, the Son of Man will not come in the clouds of heaven till I am eighty-five years old.”  
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>History of the Church 5:336.</Tooltip> 
      
            Needless to say, the “rising generation” passed away, as well as a few other generations.
          </p>
        </div>

        <div className='paragraph'>
          <p>True to a Mormon prophet, when a revelation fails, revise and redefine. In 1889, Fourth Mormon prophet Wilford Woodruff revised the Second Coming timetable. 
            “Many of these young men and maidens that are here today will, in my opinion, if they are faithful, stand in the flesh when Christ comes in the clouds of heaven. 
            These young people … will stand in the flesh while the judgments of the Almighty sweep the nations of the earth as with a besom of destruction, in fulfillment of 
            the revelations of God.”
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>Discourses of Wilford Woodruff: 255, quoting the Millennial Star 51: 595-596.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Throughout the 19th century, countless patriarchal blessings referred to the near return of Christ. These blessings stated that the rising generation would not 
            taste death until after Christ comes. Lyman Johnson was promised that “He shall see the Savior come and stand upon the earth with power and great glory.”  
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>Documentary History of the Church vol 2; p. 188.</Tooltip> 
            
            Heber Kimball was promised that “He may stand unto the coming of our Lord.”  
            <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Documentary History of the Church vol 2; p. 189. </Tooltip> 
            
            Orson Hyde was promised “That he may stand upon the earth and bring souls till Christ comes.”  
            <btn id="clickable13" className="footnote">13 </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>Documentary History of the Church vol 2; p. 190.</Tooltip> 
            
            William Smith was blessed that “he shall be preserved and remain on the earth until Christ shall come to take vengeance on the wicked.”
            <btn id="clickable14" className="footnote">14 </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Documentary History of the Church vol 2; p. 191.</Tooltip> 
          </p>
        </div>

        <h2 className="headlinePadding">A Revived Second Coming in the Year 2000</h2>

        <div className='paragraph'>
          <p>Another blow to Mormon prophets was the year 2,000 – with no Second Coming in sight. Throughout the 1960s, 1970s, and 1980s the church led people to believe the Second Coming would occur around the year 2000. There was no date given, but the subtle message from the church was that the Second Coming was nigh at hand. If you were alive during this time, you’ll remember the church counseling members to have two years of food storage. Speculation in the pews ran wild. You would need that food to survive the apocalyptic events destroying the earth. There were rumors of the possibility of returning to Missouri to build the holy city Zion. During the 1960s, 1970s, and 1980s, the imminent Second Coming was part of the Mormon zeitgeist.
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon general authority Vaughn Featherstone wrote a letter in 1983 for a time capsule deposited in the cornerstone of the Atlanta Georgia Temple to be opened in 50 years in the future. He wrote, “… Many of you have probably lived through the darkest period in the history of the world. Those of you who read this letter have witnessed the Second Coming of Christ … What a glorious experience to live in the day when our Lord, our Redeemer, the very Son of God is reigning personally upon the earth.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Speaking in 1988, more than 30 years ago, Mormon prophet Ezra Benson said to the youth of the church “God has held you in reserve to make your appearance in the 
            final days before the Second Coming of the Lord … God has saved for the final inning some of His strongest children, who will help bear off the kingdom 
            triumphantly …”  
            <btn id="clickable15" className="footnote">15 </btn>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>Ezra Taft Benson, The Teachings of Ezra Taft Benson (1988), 104-5.</Tooltip> 
            
            If a generation is 20-40 years, this is a false prophecy. Mormon prophet Ezra Benson said in 1979, 45 years ago, “For nearly six thousand years, God has held you 
            in reserve to make your appearance in the final days before the Second Coming of the Lord … God has saved for the final inning some of his strongest children … 
            you are the generation that must be prepared to meet your God.” Ezra continues, “All through the ages the prophets have looked down through the corridors of time 
            to our day. Billions of the deceased and those yet to be born have their eyes on us. Make no mistake about it—you are a marked generation.”
            <btn id="clickable16" className="footnote">16 </btn>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Ezra Benson, In His Steps, March 4, 1979.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Given Mormonism’s belief in a 6,000-year-old earth, the year 2,000 AD was important. Joseph revealed, “In the beginning of the seventh thousand years (2,000 AD) 
            will the Lord God sanctify the earth, and complete the salvation of man, and judge all things, and shall redeem all things … unto the end of all things; and the 
            sounding of the trumpets of the seven angels are the preparing and finishing of his work, in the beginning of the seventh thousand years – the preparing of the way 
            before the time of his coming.”
            <btn id="clickable17" className="footnote">17 </btn>
            <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>D&C 77:12. Bruce McConkie, The Promised Messiah p.606.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Bruce McConkie commented on this scripture, “We know categorically that from the fall of Adam to the Second Coming of Christ is a period of some six thousand years, and that the Millennial era will then continue for another thousand years.” This led Bruce to teach that the Second Coming was imminent as the Doctrine and Covenants predicts that Christ will return “in the beginning of the seventh thousand years.” But, as we’ve discussed, Christ’s coming around the year 2000 was an extension. Joseph put the absolute last year on the Second Coming as 1891.
          </p>
        </div>

        <h2 className="headlinePadding">25 Years Beyond the Year 2000</h2>

        <div className='paragraph'>
          <p>	Now in 2025, the church is stepping up the Second Coming rhetoric once again. In the October 2024 general conference, Mormon prophet Russell Nelson announced, “Brothers and sisters, now is the time for you and for me to prepare for the Second Coming of our Lord and Savior, Jesus the Christ.” Russell Nelson concluded, “The best is yet to come … because the Savior is coming again!” In the October 2022 general conference, Russell Nelson stated, “In coming days, we will see the greatest manifestations of the Savior’s power that the world has ever seen. Between now and the time He returns ‘with power and great glory,’ He will bestow countless privileges, blessings, and miracles upon the faithful.”
          </p>
        </div>

        <div className='paragraph'>
          <p>But the church says nothing today about Joseph’s original prophetic framework, which he claimed was revealed by Christ, concerning the last days. They do not discuss how the Lamanites and Mormons must travel to Jackson County, Missouri to build the holy city of Zion, the New Jerusalem, on the site of the Garden of Eden, as Christ foretold in the Book of Mormon. Nothing about how the holy city of Zion will become glorified and shine a heavenly light to the world. Nothing about the Lost 10 Tribes, led by John the Revelator, coming to Zion to receive their temple blessings and glory. Nothing about the144,000 priesthood holders scouring the earth to bring the righteous to Zion. Nothing about the Mormons traveling to Jerusalem and establish Zion among the Jews so that Christ will have a throne to rule from during the Millennium.
          </p>
        </div>

        <div className='paragraph'>
          <p>For nearly 200 years, the church has promised every generation that they are the chosen generation to usher in the Second Coming – only for that generation 
            to pass away with that promise unfulfilled. Countless patriarchal blessings promised Mormons that they will live to see the Second Coming. 
            If a generation is 20 to 30 years,  
            <btn id="clickable18" className="footnote">18 </btn>
            <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Jack Fenner, 28 March 2005, Cross-Cultural Estimation of the Human Generation Interval for Use in Genetics-Based Population Divergence Studies, American Journal of Physical Anthropology. 128: 415–423.</Tooltip> 
            
            that means seven generations have passed, with those promises unfulfilled. The first generation of Mormons passed away – and their sacrifices with them. Then the second generation passed. And the third generation. By 1891, Mormons paying attention were left bewildered. Joseph’s prophetic vision had failed spectacularly. There are two conclusions. Christ was never speaking to Joseph. Or Christ has other plans and they don’t include the Mormons.
          </p>
        </div>

        <div className='paragraph'>
          <p>The truth of the matter is that Joseph’s failed prophecies robbed people of their precious lives, misdirecting their life energies and resources towards supporting a failed religious movement. Just think of what those people could have done with their “time, talents, and everything which the Lord had blessed them” (including 10 percent of their income). A generation of Mormons died and suffered in Missouri while trying to establish the holy city of Zion. Generations of Mormons died and suffered crossing the plains following Brigham. Then in Utah, these Mormons lived hard lives in the harsh Great Basin awaiting the call to return to Jackson County, the very center of creation, to build Zion and usher in the Millennial Kingdom of God. But the call never came in their lifetimes as they were led to believe.
          </p>
        </div>

        <div className='paragraph'>
          <p>While Mormons toiled and sacrificed in Utah, their leaders prospered. Brigham Young became the richest man west of the Mississippi River. At his death in 1877, 
             estate was worth $1.6 million. (Equivalent of $45 million today.) It’s good to be king! While my Mormon ancestors were living in godforsaken San Pete County in 
             central Utah, scraping out an existence among the sagebrush, faithfully paying 10 percent of their meager income to the church, Brigham and his favorite wives 
             were living the highlife. It should be mentioned that $1,000,000 of Brigham’s wealth was a $1,000,000 interest-free loan from church tithing funds. So, his estate 
             was really worth a mere $600,000. (Equivalent of $17 million today.)
             <btn id="clickable19" className="footnote">19 </btn>
            <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Utah History Encyclopedia, Brigham Young, Newell Bringhurst.</Tooltip> 

          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham was accused of stealing tithing funds. His response? Satan, or course. Lucifer, the Prince of Darkness, was inspiring “apostates” to claim that Brigham 
            was stealing tithing funds from church coffers. Brigham responded over the pulpit, “You allow the devil to suggest to you that I am not leading you right ... 
            You allow yourselves to doubt anything that God has revealed, (here comes the threat) and it will not be a great while before you begin to neglect your prayers, 
            refuse to pay your Tithing, and find fault with the authorities of the Church. You will be repeating what apostates all say, ‘The Tithing is not used a right,’ 
            etc. … God has so blessed me with regard to things pertaining to this world … the right to dictate the use of the tithing belongs to me.”
            <btn id="clickable20" className="footnote">20 </btn>
            <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Discourse by President Brigham Young, delivered at Logan, Cache Valley, Sunday, Aug. 15, 1876.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>The pioneers, with their weathered hands and bodies, put their meager offerings into the church coffers. And what were the fruits of their labors? Today the Mormon church is a several hundred-billion-dollar corporation with vast real estate and business holdings. To thank the early Mormons, the church has changed and distorted their original beliefs and temple practices which we will get into next.
          </p>
        </div>

        </div>

      <div className="chapterFooter">
        <Link to="/Chap29">Previous Chapter</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap31">Next Chapter</Link>
      </div>

    </div>
  )
}

export default Chap30