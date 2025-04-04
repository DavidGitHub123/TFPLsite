import React from "react";
import "../../index.css";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import joseph2 from '../../Assets/Img/joseph2.jpg'

const Chap1 = () => {
  return (
      <div className="chapter-container">

        <div className="chapterFooter">
          <Link className="" to="/Intro">Introduction</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap2">Next Chapter</Link>
        </div>

        <h1 className="chapterHeading">
              Chapter 1: The Religious Genius and Mastermind
        </h1>

        <img src={joseph2} className='image' alt='Joseph Smith' />

      <div className="">


        <div>
          <p className='paragraph'>
          Throughout the 1830s and 1840s, Joseph Smith built an exciting vision of the last days in his small group of followers. 
          By his death in 1844, Joseph had amassed a following of 26,000 people.
          <btn id="clickable1" className="footnote">1  </btn>
          <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>2013 Church Almanac, December 12, 2012.</Tooltip>
          He convinced his early converts to Mormonism that he was a prophet speaking for God. To them, he was just as much a prophet as Moses, 
          Elijah, Isaiah, etc. To the early Mormons, Joseph was an oracle of the divine – made in the mold of the Old Testament prophets 
          whom they revered. There was a prophet once again walking the earth.
          Before joining Mormonism, the early Mormons were devout, religious people. The Bible was their meat and drink. 
            They were well versed in the scriptures and committed to living their teachings.
          </p>
        </div>

        <div className='paragraph'>
          <p> 
            Through his heavenly mandates, Joseph instilled in them a revived biblical worldview. As a prophet, Joseph gave them permission to live the biblical doctrines through his revelations (e.g., polygamy, consecration, establishing Zion, participating in the winding up scenes of the earth, restoring the lost tribes of Israel, etc.)
          </p>
        </div>

        <div className='paragraph'>
          <p>Just as Moses beheld God in a burning bush and received his prophetic mantle from that experience, Joseph proclaimed to his followers that an angel from heaven had announced a new dispensation had arrived – the final dispensation. His account of the First Vision would come later. Joseph claimed that the Angel Moroni appeared in 1823 and announced the gospel would be restored and ancient prophecies fulfilled. Joseph reported that Moroni quoted several ancient prophets regarding the end times. Moroni quoted Malachi saying, “For behold, the day cometh that shall burn as an oven, and all the proud, yea, and all that do wickedly shall burn as stubble ... 
            Behold, I will reveal unto you the Priesthood, by the hand of Elijah the prophet, before the coming of the great and dreadful day of the Lord.”
            <btn id="clickable2" className="footnote">2  </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Joseph Smith History 1:37-39.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph led his followers to believe that, in their lifetimes, biblical prophecies would be fulfilled. Great spiritual gifts would be poured out upon God’s new chosen people – the Mormons. Joseph had the early Mormons believing that with their hands, they would build the holy city of Zion. Joseph even received revelations with the dimensions of the temple they would erect. Christ would visit that city before his Second Coming and fill the city with glory so that a pillar of fire appeared above it. You would be able to see the glory-filled city from miles and miles away. The city would strike fear in the world. The early Mormons were going to the gather the elect from the four corners of the earth to Zion. Then as Christ appeared in his ultimate glory at his Second Coming, they would watch the world and its wickedness consumed in the fire of Christ’s presence, ushering in the great Millennial day where the Mormons would reign with Christ.
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph also convinced his followers that they were God’s elect, descended from the royal bloodlines of the House of Israel. He taught the early Mormons that they had been held in reserve to come to this earth with divine missions in the last days. Because of their pre-earth righteousness, they were favored sons and daughters of God. Joseph even told his followers that earlier prophets “have looked forward with joyful anticipation to the day in which we live; and fired with heavenly and joyful anticipation they have sung and written and prophesied of this our day; … we are the favored people that 
            God has made choice of to bring about the Latter-day glory.” 
            <btn id="clickable3" className="footnote">3  </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>Joseph Smith, History of the Church 4:609-10.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>For this vision, which Joseph instilled in the early Mormons, they were willing to experience death and deprivation in Missouri and Nauvoo. They crossed the plains suffering and dying for their latter-day religion. However, today, that glory and fire has gone out of Mormonism. The church, on an extremely simplified level, teaches the purpose of the restoration was to restore the priesthood so people can make covenants and be sealed to their families for the next life. Really, nothing beyond that but obey the brethren.
          </p>
        </div>

        <h2 className="headlinePadding" >Charlatan and Fraud?</h2>

        <div className='paragraph'>
          <p>Let’s address this up front. With the passage of time, as more and more of Mormonism has been discredited, people ask: was Joseph a charlatan and a fraud? Or did he sincerely believe that he was a prophet called from the foundation of the world to usher in the dispensation of the fullness of times?
          </p>
        </div>

        <div className='paragraph'>
          <p>Only Joseph can answer that question. In my opinion, Joseph believed that he was a prophet with the mission to establish his vision of the Kingdom of God and restore lost truths to usher in the Second Coming. But he was not beneath using deception to further his theological aims. Nonetheless, judging by historical accounts, Joseph did many good and noble things. He sacrificed for his religion. He suffered for his religion. The early Mormons loved and revered him as we will see.
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph’s genius lay in setting himself apart from other religious leaders of his day by claiming to have divine authority from heaven. He claimed that Peter, James, and John, and other heavenly beings, laid their physical hands upon his head and divinely bestowed priesthood authority. These miraculous conferrals made Joseph not just another preacher, but a prophet. The ideas he presented to his followers were not merely his best thinking, or truths he identified. Rather, he claimed they were actual revelations from God through Joseph to his followers.
          </p>
        </div>

        <div className='paragraph'>
          <p>Early Mormon John Lee stated, “I could not help believing in Joseph, the prophet of God in these last day. Joseph declared that he was called of God and given power and authority from heaven to do God’s will; that he had received the keys of the holy Priesthood from the apostles Peter, James, and John, and had been dedicated, set apart, and anointed as the prophet, seer, and revelator, and sent to open the dispensation of the fullness of time, according to the words of the apostles; that he was charged with the restoration of the House of Israel, and to gather the Saints from the four corners of the earth to the land of promise, Zion, the Holy Land (Jackson County), and to the setting up of the Kingdom of God preparatory to the Second Coming of Christ in the last days. Every Mormon, true to his faith, believed as fully in Joseph and 
            his holy character as he did that God existed.”
            <btn id="clickable4" className="footnote">4  </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Autobiography of John D. Lee, Chapter 5. John was sentence to death by firing squad for the Mountain Meadows massacre. More on that later.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph also claimed to have had many divine visitations. For example, early Mormon Daniel Allen stated regarding the Lost 10 Tribes, “I heard Joseph the Prophet say that he had seen John the Revelator and had a long conversation with him, who told him that he, John, was their leader, Prophet, Priest and King, and said that he was preparing that people to return, 
            and further said there is a mighty host to us.”
            <btn id="clickable5" className="footnote">5  </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Minutes of the School of the Prophets, Parawan, Utah, 1868-1872, under date of August 17, 1872, typewritten copy in BYU Library.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>While Peter, James, and John were most likely historical figures, Joseph also claimed visitations from non-historical beings. “What do we hear? Glad tidings from Cumorah! Moroni, an angel from heaven, declaring the fulfilment of the prophets … The voice of Michael on the banks of the Susquehanna … the voice of Gabriel, and of Raphael, and of divers angels, from Michael or Adam down to the present time, all declaring their dispensation, their rights, their keys, their honors, 
            their majesty and glory, and the power of their priesthood …”
            <btn id="clickable6" className="footnote">6  </btn>
            <Tooltip anchorSelect="#clickable6" clickable>D&C 128:20-21.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph told his followers that he had many angelic visitations like this from past Old Testament and New Testament figures, that biblical scholars today say did not exist. He even told women to whom he proposed marriage that an angel with a flaming sword visited him.
          </p>
        </div>

        <div className='paragraph'>
          <p>According to early Mormon John Lee, Joseph told his followers many things about the ancient history of Missouri, which according to our modern-day understanding of history, did not occur. “The Temple Block in Jackson County, Missouri, stands on the identical spot where once stood the Garden of Eden. When Adam and Eve were driven from the Garden they traveled in a northwesterly course until they came to a valley on the east side of Grand River … On the top of this range of hills Adam erected an altar of stone, on which he offered sacrifice unto the Lord … There was in our time (1838) a pile of stone there, which the Prophet said was a portion of the altar on which Adam offered sacrifice. Although these stones had been exposed to the elements for many generations, still the traces remained to show the dimensions and design of the altar.
          </p>
        </div>

        <div className='paragraph'>
          <p>“After Adam had offered his sacrifice, he went up the valley some two miles, where he blessed his posterity and called the place the Valley of Adam-ondi-Ahman, which, in the reformed Egyptian language, signifies Adam’s Consecrated Land … Those ancient relics and sacred spots of earth are held holy by the greater portion of the Latter-day Saints. These things, 
            and much more concerning the early days, were revealed to the Prophet Joseph.”
            <btn id="clickable7" className="footnote">7  </btn>
            <Tooltip anchorSelect="#clickable7" clickable>Autobiography of John D. Lee, Chapter 5. </Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>You may believe these things if you like. It is not my objective to address Joseph’s character. But rather to judge Joseph’s prophetic words regarding establishing the Kingdom of God and building the holy city of Zion to usher in the Second Coming.
          </p>
        </div>

        <h2 className="headlinePadding">Actions Speak Louder than Words</h2>

        <div className='paragraph'>
          <p>From his actions, it is clear that Joseph believed that he was a prophet. I believe he thought God was directing him. He believed that he had a divine mission to restore lost truths absent from the Christianity of his day. He devoted his life to establishing the Kingdom of God and Zion and ushering in the Second Coming. He believed in latter-day prophecies found in the Old Testament and New Testament. He believed that it was his mission to prepare the world for these latter-day events.
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph stated, “The Standard of Truth has been erected; no unhallowed hand can stop the work from progressing; persecutions may rage, mobs may combine, armies may assemble, calumny may defame, but the truth of God will go forth boldly, nobly, and independent, till it has penetrated every continent, visited every clime, swept every country, and sounded in every ear, till the purposes of God shall be accomplished, 
            and the Great Jehovah shall say the work is done.”
            <btn id="clickable8" className="footnote">8  </btn>
            <Tooltip anchorSelect="#clickable8" clickable>Joseph Smith, History of the Church, 4:540.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>It is also my opinion that Joseph was one of the greatest theological minds of all time. As with most of his religious concepts, Joseph’s ideas can be found in both the Old Testament and New Testament, as well as past religious thought-leaders and masonic sources. But Joseph impressively enhanced these ideas and built them into a remarkable religious system. Joseph’s ideas include establishing Zion as a refuge in the last days, prophecies of the end of the world, glorification of humankind, becoming priests and kings to stand saviors on Mount Zion, sealing of the eternal family of God into an endless chain through polygamous marriages, premortal existence, three degrees of glory, etc., and claimed them as revelations from God to him.
          </p>
        </div>

        <div className='paragraph'>
          <p>But like all of us, Joseph was a product of his time. He believed that the Old Testament was a record of actual historical events. Adam and Eve lived 6,000 years ago in a garden paradise where they walked and talked with God. There was a flood that engulfed the globe in a baptism. Moses and other Old Testament prophets spoke to God face to face and had priesthood power. The House of Israel consisted of 12 Tribes, descendants of Abraham, who were God’s chosen people – the elite family of God.
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph was also heavily influenced by the religious fervor of his age. Speculative Freemasonry reinforced his belief in the priesthood and the ancient biblical patriarchs. Joseph believed that the priesthood was a real force and power – the authority of God and the power of the universe. Through that power, the deification and glorification of mankind were not only possible, but also the purpose of life.
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph was driven to fulfill the Old Testament prophecies of establishing the New Jerusalem in Jackson County, preparing the world for the Second Coming and ushering in the longed-for, much-prophesied Millennial day when the lion would lie down with the lamb and the earth would return to its Edenic state before the Fall – the great psychological desire of humanity to escape from this world of tears and toil and move beyond to an eternal paradise.
          </p>
        </div>

        <div className='paragraph'>
          <p>This was the heart and soul of Joseph’s Mormonism. 
          </p>
        </div>

        <h2 className="headlinePadding">Joseph’s Followers Believed He Was a Prophet</h2>

        <div className='paragraph'>
          <p>When Mormonism was founded, it was unlike other Christian religions of its day. The Baptists, Methodists, Presbyterians, Lutherans, etc. had their differences, but believed in a loving God and a redeeming Christ, and an eventual eternal reward or fiery punishment. Joseph, on the other hand, introduced concepts of prophecy and revelation (actual words from Christ directing the building of His kingdom), authority to administer essential saving ordinances, priesthoods, covenants, gathering of the descendants of House of Israel, stewardships, inheritances in Zion, calling and election made sure, becoming Gods and Goddesses, creating and populating worlds, etc. 
          </p>
        </div>

        <div className='paragraph'>
          <p>To his followers, Joseph’s ideas were revolutionary and profound. He ignited a fire in their souls. He radicalized them into his revolutionary religious beliefs. They revered and honored him as their prophet until their dying breaths. I respect their desire for truth and to unravel the mysteries of godliness – which Joseph did for them.
          </p>
        </div>

        <div className='paragraph'>
          <p>Third Mormon prophet John Taylor wrote, “Before I ever heard of “Mormonism, when reading the scriptures, I often wondered why it was that we had no prophets, 
            no apostles, no gifts and graces, no healings by the power of God, no visions, no angels, no revelations, no voice of God.”
            <btn id="clickable9" className="footnote">9  </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>John Taylor, Journal of Discourses, Feb. 25, 1855, vol. 2, p. 195-196.</Tooltip>
            
              John also stated, 
            “The Lord called Joseph Smith to be a Prophet, Seer, and Revelator. As soon as this was done, the Devil was ready for the opposition, and 
            said, ‘I shall stand in my place, and what will Joseph Smith be able to accomplish?’ We say that he will accomplish all that is required of him, despite all opposition.”
            <btn id="clickable10" className="footnote">10  </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>John Taylor, Journal of Discourses, Feb. 25, 1855, vol. 2, p. 195-196.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham Young stated, “I feel like shouting Hallelujah, all the time, when I think that I ever knew Joseph Smith, the Prophet whom the Lord raised up and ordained, 
            and to whom he gave keys and power to build up the Kingdom of God on earth.”  
            <btn id="clickable11" className="footnote">11  </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>Brigham Young, Journal of Discourses, September 21, 1856, vol. 3, p. 51.</Tooltip>
            Brigham also stated, “What a delight it was to hear brother Joseph talk upon the great principles of eternity; he would bring them down to the capacity of a child, 
            and he would unite heaven with earth, this is the beauty of our religion.” 
            <btn id="clickable12" className="footnote">12  </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Brigham Young, Journal of Discourses, September 21, 1856, vol. 4, p. 54.</Tooltip> 
            Brigham stated, “I shall bow to Jesus, my Governor, and under him, to brother Joseph. 
            Though he has gone behind the veil, and I cannot see him, he is my head, under Jesus Christ and the ancient Apostles, and I shall go ahead and build up the kingdom.”
            <btn id="clickable13" className="footnote">13  </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size"clickable>Brigham Young, Journal of Discourses, August 31, 1856, vol. 4, p. 41.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>First Presidency Counselor Heber Kimball stated, “When brother Joseph Smith lived, he was our Prophet, our Seer, and Revelator; he was our dictator in the things of God, 
            and it was for us to listen to him, and do just as he told us.”  
            <btn id="clickable14" className="footnote">14  </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, August 13, 1853, vol. 2, p. 106.</Tooltip> 
            Heber also stated, “Joseph Smith many a time said … he was a representative of God to us, to teach and 
            direct us and reprove the wrongdoers. He has passed behind the veil, but there never will a person in this dispensation enter into the celestial glory without his approbation.” 
            <btn id="clickable15" className="footnote">15  </btn>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, October 5, 1856, vol. 4, p. 119.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>First Presidency Counselor Jedediah Grant stated, “When Joseph Smith bore testimony, he told the people that an angel from high heaven had spoken to him, 
            that he had been ordained by authority from Jesus Christ, and sent forth to preach the Gospel. Did you ever hear the Methodists bear such a testimony?”  
            <btn id="clickable16" className="footnote">16  </btn>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Jedediah Grant, Journal of Discourses, March 11, 1855, vol. 2, p. 278.</Tooltip> 
            Jedeiah also stated of Joseph’s ability to bring heaven to earth, “I remember reflecting when very young – my brother had killed a quail, and in conversing upon the 
            circumstances, he asked my mother if there was not a quail heaven ... And, when quite young, I read the sermons of John Wesley, who believed that the animal 
            creation would have an eternal existence … but when I came to read the vision given to Joseph Smith upon a future state, as contained in the Book of Doctrine and Covenants, 
            I believed it … it gave me great joy and satisfaction.” 
            <btn id="clickable17" className="footnote">17  </btn>
            <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>Jedediah Grant, Journal of Discourses, May 30, 1855, vol. 3, p. 8.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Fourth Mormon prophet Wilford Woodruff stated, “… the days before I heard Mormonism. I have spent hours, and days, and nights, among the rocks and in the forest, 
            praying to Almighty God to enlighten my mind … The Lord revealed to me that I should have this privilege, and I have lived to see the Kingdom of God set up.”  
            <btn id="clickable18" className="footnote">18  </btn>
            <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Wilford Woodruff, Journal of Discourses, April 9, 1857, vol. 4, p. 322.</Tooltip> 
            Wilford also stated, “The Lord taught him (Joseph) many things by vision and revelation that were never taught publicly in his days; for the people could not bear the 
            flood of intelligence which God poured into his mind.” 
            <btn id="clickable19" className="footnote">19  </btn>
            <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Wilford Woodruff, Journal of Discourses, April 9, 1857, vol. 5, p. 84.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Orson Pratt taught of Joseph, “… he has given the keys of the holy Priesthood, and there are many sitting before me who have received this Priesthood, 
            and it will remain with the faithful after their graves shall have been covered up and the green grass grown thereon. It will go with them in the spirit world and aid 
            them in disseminating the principles of salvation there.” 
            <btn id="clickable20" className="footnote">20  </btn>
            <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, June 24, 1860, Vol. 8, p. 105.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>In their presence, Joseph talked with God. Mormon apostle Parley Pratt was present when Joseph received a revelation. He records, “After we had joined in prayer 
            in his translating room, he dictated in our presence the following revelation. Each sentence was uttered slowly and very distinctly, and with a pause between each, 
            sufficiently long for it to be recorded, by an ordinary writer, in long hand. … There was never any hesitation, reviewing, 
            or reading back, in order to keep the run of the subject.”  
            <btn id="clickable21" className="footnote">21  </btn>
            <Tooltip anchorSelect="#clickable21" className="footnote-size" clickable>Parley P. Pratt, Autobiography of Parley P. Pratt, ed. Parley P. Pratt Jr., 1938, p. 62.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon apostle Willard Richards offered his life for Joseph. Before Joseph went to Carthage Jail, he said to Willard Richards “‘If we go into the cell, 
            will you go in with us?’ Richards answered ‘Joseph, you did not ask me to cross the river with you – you did not ask me to come to Carthage – you did not ask me to come to jail 
            with you – and do you think I would forsake you now? But I will tell you what I will do; if you are condemned to be hung for treason, I will be hung in your stead, and you 
            shall go free.’” 
            <btn id="clickable22" className="footnote">22  </btn>
            <Tooltip anchorSelect="#clickable22" className="footnote-size" clickable>Teachings of Presidents of the Church: Joseph Smith, 2007, 460.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Learning that a mob of 20 men were near, Joseph went to William Huntington’s home. Joseph stated, “A mob is coming, counsel me.” William responded, “I know what to do. 
            You climb in my bed. I’ll go back and get in yours.” The mob dragged William out of Joseph’s house to the river, then discovered they had the wrong man. They “stripped him, 
            roughed him up, tarred and feathered him, and herded him back into Nauvoo like a mad dog.” When William came home, Joseph could see he had been roughed up. 
            Joseph said, “Brother William, in the name of the Lord, I promise you will never taste of death.” However, his wife reported that William died “without a sigh or a shudder.” 
            The Huntington family believes Joseph’s promise was fulfilled in Joseph’s scripture, “And it shall come to pass that those that die in me shall not taste of death, 
            but it will be sweet to them.” 
            <btn id="clickable23" className="footnote">23  </btn>
            <Tooltip anchorSelect="#clickable23" className="footnote-size" clickable>Diary of Oliver B. Huntington, vol. 2, p. 168, 271, entry of March 19, 1887. D&C 42:46-47.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Few men gain the devotion that Joseph gained among the early Mormons. 
          </p>
        </div>

        <h2 className="headlinePadding">Joseph’s Vision Absent from Today’s Mormonism</h2>

        <div className='paragraph'>
          <p>Today’s Mormon leaders neglect Joseph’s teachings in their altered version of Mormonism. In today’s sloganized Mormonism, apostles dole out “think celestial,”  
          <btn id="clickable24" className="footnote">24  </btn>
          <Tooltip anchorSelect="#clickable24" className="footnote-size" clickable>Russell Nelson, Think Celestial, October 2023, general conference.</Tooltip>
            “let God prevail,”  
            <btn id="clickable25" className="footnote">25  </btn>
            <Tooltip anchorSelect="#clickable25" className="footnote-size" clickable>Russell Nelson, Let God Prevail, October 2020 general conference.</Tooltip>
            “let your faith show,”  
            <btn id="clickable26" className="footnote">26  </btn>
            <Tooltip anchorSelect="#clickable26" className="footnote-size" clickable>Russell Nelson, Let Your Faith Show, April 2014 general conference.</Tooltip>  
            etc. Joseph, on the other hand, encouraged the early Mormons to seek spiritual gifts and visions. He “…advise[d] all to go on to perfection and search deeper and deeper 
            into the mysteries of Godliness.”  
            <btn id="clickable27" className="footnote">27  </btn>
            <Tooltip anchorSelect="#clickable27" className="footnote-size" clickable>Sermon delivered at Nauvoo temple grounds on Friday May 12, 1844, Thomas Bullock report</Tooltip>  
            To reside in Joseph’s Zion, a person must possess a driving desire to know and comprehend God. They needed to undergo born-again experiences and transform their lives upon righteous principles. They needed to receive divine intelligence as they underwent redemptive transformation.
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph taught, “If thou shalt ask, thou shalt receive revelation upon revelation, knowledge upon knowledge, that thou mayest know the mysteries.”  
          <btn id="clickable28" className="footnote">28  </btn>
          <Tooltip anchorSelect="#clickable28" className="footnote-size" clickable>D&C 42:61.</Tooltip> 
            And that a person with the priesthood has, “The power and authority … To have the privilege of receiving the mysteries of the kingdom of heaven, to have the heavens opened 
            unto them … to enjoy the communion and presence of God the Father.
            <btn id="clickable29" className="footnote">29  </btn>
            <Tooltip anchorSelect="#clickable29" className="footnote-size" clickable>D&C 107:18-19.</Tooltip>   
            Another time Joseph stated, “Thy mind … must stretch as high as the utmost Heavens, and search into and contemplate the lowest considerations of the darkest 
            abyss and expand upon the broad considerations of eternal expanse; he must commune with God.” 
            <btn id="clickable30" className="footnote">30  </btn>
            <Tooltip anchorSelect="#clickable30" className="footnote-size" clickable>Dean Jessee and John Welch, “Revelations in Context: Joseph Smith’s Letter from Liberty Jail, March 20, 1839,” BYU Studies 39, no. 3 (2000): 137.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph claimed that God gave him power and authority, which he, in turn, bestowed on the early Mormons. Joseph believed this priesthood power could unlock the 
            mysteries of Godliness and make men and women into Gods and give them the eternal powers of creation over the cosmos. Joseph believed that people seeking 
            righteousness with all their hearts could be filled with heavenly light and transformed into new creatures in Christ. “That which is of God is light; and 
            he that receiveth light, and continueth in God, receiveth more light; and that light groweth brighter and brighter until the perfect day.” 
            <btn id="clickable31" className="footnote">31  </btn>
            <Tooltip anchorSelect="#clickable31" className="footnote-size" clickable>D&C 50:24.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon leaders today do not encourage members to yearn for the mysteries of Godliness. No wonder today’s Mormons gave a collective sigh of relief when two-hour church was announced. Had you taken away an hour of church from the early Mormons, they would have revolted. 
          </p>
        </div>

        <div className='paragraph'>
          <p>In Mormonism today, there is little to no encouragement to partake of the divine nature to the level that Joseph spoke of in this transformational process. You can find this throughout the Book of Mormon. 
            However, over the pulpit today, occasionally you will hear of the “enabling power of atonement” in the context of overcoming personal weaknesses. But there is no real emphasis on Christ’s message on redemption and new birth. Rather, the focus is on merit-based exaltation. The Mormon leadership claims they have priesthood keys that put them between you and God the Father. In reality, they are acting as the angels who stand as sentinels, of which Christ never mentions.
          </p>
        </div>

        <div className='paragraph'>
          <p>Today’s Mormons are told to avoid the mysteries of Godliness. The Doctrine and Covenants Student Manual reads, “A mystery is a truth that cannot be known except 
            through divine revelation – a sacred secret.”  
            <btn id="clickable32" className="footnote">32  </btn>
            <Tooltip anchorSelect="#clickable32" className="footnote-size" clickable>Smith and Sjodahl, Commentary, p. 141; see also D&C 42:61, 65; 76:5-10, 89:18-19, 1 Nephi 10:19; Alma 12:9-11.</Tooltip> 
            Then an appeal to authority. “President Joseph Fielding Smith defined mysteries in a similar way: ‘The Lord has promised to 
            reveal his mysteries to those who serve him in 
            faithfulness … There are no mysteries pertaining to the Gospel, only as we, in our weakness, fail to comprehend Gospel truth … The ‘simple’ principles of the Gospel, 
            such as baptism, the atonement, are mysteries to those who do not have the guidance of the Spirit of the Lord.’”
            <btn id="clickable33" className="footnote">33  </btn>
            <Tooltip anchorSelect="#clickable33" className="footnote-size" clickable>Church History and Modern Revelation, vol. 1, p. 43.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>In the church today, there is nothing from early Mormonism about “millions of eternities yet to be made.”  
          <btn id="clickable34" className="footnote">34  </btn>
          <Tooltip anchorSelect="#clickable34" className="footnote-size" clickable>Discourse of Brigham Young, October 8, 1854, see Journal of Discourses, vol. 7, p. 285-286; vol. 10, p. 175.</Tooltip> 
            “The principles of … eternal lives and the power of God are from eternity to eternity.”  
            <btn id="clickable35" className="footnote">35  </btn>
            <Tooltip anchorSelect="#clickable35" className="footnote-size" clickable>Brigham Young, Journal of Discourses, vol. 11, p. 234.</Tooltip> 
            “… there is no period, in all the eternities, wherein organized existence … cannot advance in knowledge, wisdom, power, and glory.”
            <btn id="clickable36" className="footnote">36  </btn>
            <Tooltip anchorSelect="#clickable36" className="footnote-size" clickable>Brigham Young, Journal of Discourses, vol. 1, p. 349.</Tooltip> 
            Nothing on the key to eternal progression where we can see “… Divinity acting, operating, and defusing principles into matter to produce intelligent beings, and to exalt.”
            <btn id="clickable37" className="footnote">37  </btn>
            <Tooltip anchorSelect="#clickable37" className="footnote-size" clickable>Brigham Young, Journal of Discourses, vol. 7, p. 2-3.</Tooltip>   
          </p>
        </div>

        <div className='paragraph'>
          <p>Continuing with the topic mysteries in the Doctrine and Covenants Student Manual. “A common expression heard in the Church is that we should stay away from 
            the ‘mysteries,’ yet these verses speak of the mysteries in a very positive sense, promising them to the righteous who seek after them. Elder Bruce R. McConkie explained the 
            seeming contradiction: “There is also a restricted and limited usage of the expression mysteries; it is more of a colloquial than a scriptural usage, and it has reference to 
            that body of teachings in the speculative field, those things which the Lord has not revealed in plainness in this day. It is to these things that reference is made when the 
            elders are counseled to leave the mysteries alone.”
            <btn id="clickable38" className="footnote">38  </btn>
            <Tooltip anchorSelect="#clickable38" className="footnote-size" clickable>Bruce McConkie, Mormon Doctrine, p. 524.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>This is not what Joseph Smith taught or did. Today’s Mormon leaders are not bringing forth new revelations and heavenly knowledge despite demanding they be called prophets, 
            seers, and revelators. An article of faith states, “… we believe that he will yet reveal many great and important things pertaining to the Kingdom of God.” 
            <btn id="clickable39" className="footnote">39  </btn>
            <Tooltip anchorSelect="#clickable39" className="footnote-size" clickable>Ninth Article of Faith.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>A case in point is from Mormon apostle Dale Renlund. He stated that Mormon leaders are not to seek new knowledge, but rather to wait upon the Lord. In a recent talk on Mother in 
            Heaven, he said, “Very little has been revealed about Mother in Heaven, but what we do know is summarized in a gospel topic found in our Gospel Library application. 
            Once you have read what is there, you will know everything that I know about the subject … Demanding revelation from God is both arrogant and unproductive. 
            Instead, we wait on the Lord and His timetable to reveal His truths through the means that He has established.” 
            <btn id="clickable40" className="footnote">40  </btn>
            <Tooltip anchorSelect="#clickable40" className="footnote-size" clickable>Dale Renlund, Your Divine Nature and Eternal Destiny, General Conference, April 2022.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Wait on the Lord! Joseph Smith would have literally kicked Dale Renlund to the curb – as Joseph was “wont to do” with people for whom he did not agree. 
            The message of early Mormonism was that what Joseph had revealed was just the beginning. More eternal truths were yet to be revealed. Greater light and knowledge were to be revealed from heaven to the Lord’s prophets. Adam was seeking “the further light and knowledge which Father promised to send.” To which the Father says, reaching out in a loving embrace, pulling Adam to him, “he shall receive it through the veil.”
          </p>
        </div>

        <div className='paragraph'>
          <p>In a brilliant stroke of propaganda, Mormon prophet Russell Nelson flipped the narrative and referred to Mormons who have put in the hard work of understanding Mormonism as 
            “lazy learners and lax disciples [who] will always struggle to muster a particle of faith.”  
            <btn id="clickable41" className="footnote">41  </btn>
            <Tooltip anchorSelect="#clickable41" className="footnote-size" clickable>Russell Nelson, Christ is Risen, General Conference, April 2021.</Tooltip> 
            In reality, it’s today’s Mormon leaders who are lazy apostles. Where are their great teachings, as Joseph taught? Where are their oracles and revelations, as Joseph claimed to possess? Where are their great proclamations to the world that Christ is coming, as Joseph and the early Mormon apostles proclaimed?
          </p>
        </div>

        <div className='paragraph'>
          <p>Jumping off soap box now! Let’s get into the meat of early Mormonism and Joseph’s prophetic framework for the latter days.
          </p>
        </div>

        </div>

        <div className="chapterFooter">
          <Link className="" to="/Intro">Introduction</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap2">Next Chapter</Link>
        </div>
        
      </div>
  );
};

export default Chap1;
