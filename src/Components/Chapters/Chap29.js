import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import polygamy5 from '../../Assets/Img/polygamy5.jpg'

const Chap29 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
        <Link to="/Chap28">Previous Chapter</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap30">Next Chapter</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 29: Eternal Dynasties</h1>

      <img src={polygamy5} className='image' alt='Political Carton of Polygamous wives and children in a bed' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>Before the internet, polygamy was an unfamiliar topic for most Mormons. Church members knew little to nothing about Joseph’s many wives or his doctrines of exaltation. In church manuals, when the wives of Joseph, Brigham, or other early church leaders were referred to, only one wife was mentioned. If pressed on the issue, the church would claim that less than five percent of the church practiced polygamy. The church would say it was practiced out of necessity as widows needed husbands after so many men died crossing the plains. 
          </p>
        </div>

        <div className='paragraph'>
          <p>In 1998, Mormon prophet Gordon Hinckley stated in a TV interview, “It (polygamy) was a very limited practice; carefully safeguarded.”  
          <btn id="clickable1" className="footnote">1 </btn>
          <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>Gordon Hinckley, Larry King Live interview, August 9, 1998.</Tooltip> 

            Today, in an effort to distance itself from polygamy, the church teaches that polygamy was a “test of faith” that brought Mormons closer to God.  
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Foundations of the Restoration Teacher Manual, Lesson 20, Plural Marriage. LDS.org.</Tooltip>

            Mormon apostle Quentin Cook recently stated, “In the senior councils of the Church, there is a feeling that polygamy, as it was practiced, 
            served its purpose.”  
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>Quentin Cook, Sept. 9, 2019, Face to Face Worldwide Broadcast.</Tooltip>

            He was sending the message that members are to leave the dark and painful chapter of polygamy alone.
          </p>
        </div>

        <div className='paragraph'>
          <p>But the doctrine of plural wives was so much more than that! Polygamy was the crowning doctrine of Mormonism, essential for exaltation and for a man to become a 
            God in the eternities. After being caught in the five percent lie, church sources now state that, from its secret inception in Kirtland in the 1830s and into the 
            early 20th century in Utah, up to 30 percent of Mormon families practiced polygamy.  
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Kathleen Flake (2004). The Politics of American Religious Identity. University of North Carolina Press. pp. 65, 192. Jessie L. Embry (1994), “Polygamy” in Powell, Allan Kent (ed.), Utah History Encyclopedia. Church Essay Plural Marriage and Families in Early Utah..</Tooltip>

            This figure represents tens of thousands of men, women, and children living in polygamous households.
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Solemn Covenant, B. Carmon Hardy, 1992, p. 17. </Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>How important was the doctrine of polygamy? First Presidency Counselor Heber Kimball stated, “I speak of plurality of wives as one of the most holy principles 
            that God ever revealed to man … while those who honor this and every sacred institution of heaven will shine forth as the stars in the firmament of heaven, 
            and of the increase of their kingdom and glory there shall be no end.”
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, April 4, 1866, vol.11, p. 211.</Tooltip>

              Mormon apostle Orson Hyde stated, “A great many men say, ‘… I believe I shall only have one wife’ … but with the commandment of the Lord before us like a blaze of 
              light, can we disregard it and serve him acceptably? … These commandments are sent for our good, for our salvation and exaltation.”  
              <btn id="clickable7" className="footnote">7 </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Orson Hyde, Journal of Discourses, October 5, 1873, vol.16, p. 236.</Tooltip>

              
              Brigham stated, “The only men who become Gods, even the Sons of God, are those who enter into polygamy. Others attain unto a glory and may even be permitted to 
              come into the presence of the Father and the Son; but they cannot reign as kings in glory, because they had blessings offered unto them, and they refused to 
              accept them.”
              <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Brigham Young, Journal of Discourses, August 19, 1866, vol.11, p. 269</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Origins of Mormon Polygamy</h2>

        <div className='paragraph'>
          <p>Joseph developed an interest in polygamy from the Old Testament, where prophets had more than one wife. Joseph claimed Christ revealed, “Verily, thus saith the 
            Lord … that inasmuch as you have inquired … to know and understand wherein I, the Lord, justified my servants Abraham, Isaac, and Jacob, as also Moses, David and 
            Solomon, my servants, as touching the principle and doctrine of their having many wives and concubines … [I] will answer thee as touching this matter.”  
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>D&C 132:1-2.</Tooltip>

            By the end of his life, Joseph had secretly married up to 40 women. Second Mormon prophet Brigham Young married 56 women polygamously. First Presidency Counselor Heber Kimball married 43 women polygamously. The practice was kept secret from church members until the church officially announced it in 1852. The church reluctantly ended the practice in the early 20th century.
          </p>
        </div>

        <div className='paragraph'>
          <p>Rumors of polygamy followed the Mormons from its earliest years. To refute the allegations, Joseph published an untruthful denial in the 1835 Doctrine and 
            Covenants. “Inasmuch as this church of Christ has been reproached with the crime of fornication, and polygamy; we declare that we believe that one man should have 
            one wife; and one woman, but one husband.”  
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>1835 Doctrine and Covenants, C1, p. 251.</Tooltip>
            
            This denial most likely stemmed from Joseph’s relationship with a servant girl, Fanny Alger, in his house between 1833 
            and 1835. It is believed she became Joseph’s first plural wife in 1835. Others believe this relationship was a dalliance, which the church now frames as a plural 
            marriage.
          </p>
        </div>

        <div className='paragraph'>
          <p>Although married to 25 plural wives at the time, Joseph stated from the stand in 1844, “What a thing it is for a man to be accused of committing adultery, 
            and having seven wives, when I can only find one. I am the same man, and as innocent as I was fourteen years ago; and I can prove them all perjurers.”  
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>History of the Church, vol, 6, p. 411, Sunday May 26, 1844.  </Tooltip>
            
            On August 1, 1842, Mormon apostle Parley Pratt published a rebuttal to the rumors that church leaders, including Joseph, were practicing plural marriage. “… but 
            for the information of those who may be assailed by those foolish tales about the two wives … we would say that no such principle ever existed among the 
            Latter-Day Saints and never will.”  
            <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Millennial Star, vol. 3, p. 74. </Tooltip>

            Parley disclosed in his autobiography that Joseph revealed plural marriage to him in January 1840.
          </p>
        </div>

        <div className='paragraph'>
          <p>Two months later, 12 men and 19 women signed affidavits that stated, “We know of no other rule or system of marriage than the one published in the Book of Doctrine and Covenants.” These affidavits were signed by Mormon apostles John Taylor and Wilford Woodruff (both had been taught of polygamy), Newel Whitney (performed a plural marriage ceremony the previous July for his daughter and Joseph), Elizabeth Ann Whitney (witnessed the plural ceremony of her daughter), Sarah Cleveland (had become Joseph’s plural wife in 1842), and Eliza Snow (married Joseph on 29 June 1842). Lying for the Lord.
          </p>
        </div>

        <div className='paragraph'>
          <p>After the Mormons left Nauvoo in 1846, official denials continued. In January 1850, the Mormon newspaper The Millennial Star printed a 
            reply to accusations of secret polygamy. “12th lie – Joseph Smith taught a system of polygamy. 12th refutation – The revelations given 
            through Joseph Smith, state the following … We believe that one man should have one wife.” The editor, Mormon apostle Orson Pratt,
             at this time had married four plural wives and fathered two polygamous children. Nine months later, Mormon apostle John Taylor 
             published a pamphlet saying, “… we are accused here of polygamy, and actions the most indelicate, obscene, and disgusting … these 
             things are too outrageous to admit of belief.”  
             <btn id="clickable13" className="footnote">13 </btn>
             <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>1850, Doctrine and Covenants,” page 330.</Tooltip>
             
             At this time John Taylor had married 12 polygamist wives, producing eight children.
             <btn id="clickable14" className="footnote">14 </btn>
             <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Michael Quinn article “LDS Church Authority and New Plural Marriages, 1890-1904” Dialogue, vol, 18, no. 1, Spring 1985. </Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Essential Doctrine for Exaltation</h2>

        <div className='paragraph'>
          <p>Joseph’s personal secretary, William Clayton, stated, “... [Joseph Smith taught] the doctrine of plural and celestial marriage is the most holy and important 
            doctrine ever revealed to man on the earth, and that without obedience to that principle no man can ever attain to the fullness of 
            exaltation in the celestial glory.”  
            <btn id="clickable15" className="footnote">15 </btn>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>William Clayton, Joseph Smith's secretary, Historical Record, v. 6, p. 226.</Tooltip>

            Polygamy was taught as being essential for exaltation and that a woman could only secure her place in heaven by being sealed to a righteous priesthood holder. 
            Brigham stated, “[A] man who did not have but one wife in the Resurrection that woman will not be his but [be] taken from him & given to another.”
            <btn id="clickable16" className="footnote">16 </btn>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Brigham Young, quoted by Wilford Woodruff, in Abanes, One Nation Under Gods, p. 579.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>In The Millennial Star, a church newspaper, an article states that men and women who refuse to practice polygamy will have a lesser station in the afterlife.
            Brigham Young, quoted by Wilford Woodruff, in Abanes, One Nation Under Gods, p. 579.
            <btn id="clickable17" className="footnote">17 </btn>
            <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>Carmon Hardy, ed. (2007). Doing the Works of Abraham: Mormon Polygamy: Its Origin, Practice, and Demise, p. 117.</Tooltip>
            Mormon apostle Orson Pratt agreed. He stated in 1874, “God has told us Latter-day Saints that we shall be condemned if we do not enter into that principle 
            [of polygamy]; and yet I have heard now and then …a brother or a sister say, ‘I am a Latter-day Saint, but I do not believe in polygamy.’ Oh, what an absurd 
            expression! What an absurd idea! A person might as well say, ‘I am a follower of the Lord Jesus Christ, but I do not believe in him.’ … If the doctrine of polygamy, 
            as revealed to the Latter-day Saints, is not true, I would not give a fig for all your other revelations that came through Joseph Smith the Prophet; I would 
            renounce the whole of them, ... The Lord has said that those who reject this principle reject their salvations, they shall be damned, saith the Lord...”
            <btn id="clickable18" className="footnote">18 </btn>
            <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, October 7, 1874, vol. 17, p. 224-225.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Greater Eternal Glory with More Wives</h2>

        <div className='paragraph'>
          <p>In early Mormon theology, a man’s glory would be greater with more wives and children. According to early Mormon Benjamin Johnson Joseph taught him, 
            “The First Command was to ‘Multiply’ and the Prophet taught us that Dominion & power in the great Future would be Commensurate with the no [number] of ‘Wives 
            Children & Friends’ that we inherit here and that our great mission to earth was to Organize a Nuclei [nucleus] of Heaven to take with us. To the increase of 
            which there would be no end.”  
            <btn id="clickable19" className="footnote">19 </btn>
            <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Benjamin Johnson, I Knew the Prophets: An Analysis of the Letter of Benjamin F. Johnson to George F. Gibbs, Reporting Doctrinal Views of Joseph Smith and Brigham Young, 1976, ed. by Dean R. Zimmerman, p. 47.</Tooltip>
            
            Brigham stated in 1860, “Brother Cannon remarked that people wondered how many wives and children I had. He may inform them that I shall have wives and children by 
            the million, and glory, and riches, and power, and dominion, and Kingdom after Kingdom, and reign triumphantly.”
            <btn id="clickable20" className="footnote">20 </btn>
            <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Brigham Young, Journal of Discourses, September 9, 1860, vol. 8, p. 178-179.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon prophet Wilford Woodruff had 400 of his female ancestors sealed to him as wives. Mormon apostle Abraham Cannon wrote, “THURSDAY, APRIL 5, 1894... 
            I met with the Quorum and Presidency in the temple... President Woodruff then spoke... ‘In searching out my genealogy I found about four hundred of my female 
            kindred who were never married. I asked Pres. Young what I should do with them. He said for me to have them sealed to me unless there were more than 999 of them. 
            The doctrine startled me, but I had it done.”
            <btn id="clickable21" className="footnote">21 </btn>
            <Tooltip anchorSelect="#clickable21" className="footnote-size" clickable>Daily Journal of Abraham Cannon, April 5, 1894, vol. 18, pp. 66-67.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>A pioneer song states, “Now, sisters … help husband get a wife! Now this advice I freely give, if exalted you will be, Remember that your husband must be 
            blessed with more than thee … And aid her husband all she can to obtain a dozen wives.”  
            <btn id="clickable22" className="footnote">22 </btn>
            <Tooltip anchorSelect="#clickable22" className="footnote-size" clickable>Songs of Zion, published by the LDS Church; see Abanes, One Nation Under Gods, p. 303.</Tooltip>
            
            In the Millennial Star, an article teaches that monogamous marriages result in offspring that are physically and mentally lesser than offspring of polygamous 
            marriages.
            <btn id="clickable23" className="footnote">23 </btn>
            <Tooltip anchorSelect="#clickable23" className="footnote-size" clickable>Carmon Hardy, ed. (2007). Doing the Works of Abraham: Mormon Polygamy: Its Origin, Practice, and Demise, p. 187.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Polygamy will Build a Righteous Race</h2>

        <div className='paragraph'>
          <p>According to early Mormon Mosiah Hancock, “As early as Spring of 1832 Bro Joseph said ‘Brother Levi [Mosiah’s father], the Lord has revealed to me that it is his 
            will that righteous men shall take Righteous women even a plurality of Wives that a Righteous race may be sent forth upon the Earth preparatory to the ushering in 
            of the Millennial Reign of our Redeemer – For the Lord has such a high respect for the nobles of his kingdom that he is not willing for them to come through the 
            Loins of a Careless People – Therefore; it behooves those who embrace that Principle to pay strict attention to even the Least requirement of our Heavenly Father.”
            <btn id="clickable24" className="footnote">24 </btn>
            <Tooltip anchorSelect="#clickable24" className="footnote-size" clickable>Mosiah Hancock Autobiography, pp. 61-62.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>For Joseph, “righteous men [taking] of righteous women even a plurality of wives” included Joseph taking the wives of other Mormon husbands. First Presidency 
            Counselor Jedediah Grant, stated in 1854, “When the family organization was revealed from heaven – the patriarchal order of God, and Joseph began, on the right 
            and on the left, to add to his family, what a quaking there was in Israel. Says one brother to another, ‘Joseph says all covenants are done away, and none are 
            binding but the new covenants: now suppose Joseph should come and say he wanted your wife, what would you say to that?’ ‘I would tell him to go to hell.’ This 
            was the spirit of many in the early days of this Church … What would a man of God say, who felt aright, when Joseph asked him for his money? He would say, ‘Yes, 
            and I wish I had more to help to build up the kingdom of God.’ Or if he came and said, ’I want your wife?’ ‘O yes,’ he would say, ’here she is, there are plenty 
            more.’ ... Did the Prophet Joseph want every man’s wife he asked for? ... If such a man of God should come to me and say, ‘I want your gold and silver, or your 
            wives,’ I should say, ‘Here they are, I wish I had more to give you, take all I have got.’”
            <btn id="clickable25" className="footnote">25 </btn>
            <Tooltip anchorSelect="#clickable25" className="footnote-size" clickable>Jedediah Grant, Journal of Discourses, February 19, 1854, vol. 2, p. 13-14.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph taught that his celestial sealings would continue after death. First Presidency Counselor Heber Kimball stated, “In the spirit... world we will go to 
            brother Joseph.... He will say to us, ‘Come along my boys, we will give you a good suit of clothes. Where are your wives.’ [Answering Joseph] ‘They are back 
            yonder; they would not follow us.’ ‘Never mind,’ says Joseph, ‘here are thousands, have all you want.’”
            <btn id="clickable26" className="footnote">26 </btn>
            <Tooltip anchorSelect="#clickable26" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, February 1, 1857, vol. 4, p. 209.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham revealed that it was possible for a man who held a “higher authority” in the priesthood to take someone else’s wife without a divorce. “I will give you a 
            few words of doctrine ... Br Watt will write it, but it is not my intention to have it published; therefore, pay good attention and store it up in your memories ... 
            Can a woman be freed from a man to whom she is sealed? Yes, but a bill of divorcement does not free her ... How can a woman be made free from a man to whom she has 
            been sealed for time and all eternity? There are two ways ... The second way in which a wife can be separated from her husband, while he continues to be faithful to 
            his God and his priesthood, I have not revealed, except to a few persons in this Church, and a few have received it from Joseph the prophet as well as myself. If a 
            woman can find a man holding the keys of the priesthood with higher power and authority than her husband, and he is disposed to take her he can do so, otherwise 
            she has got to remain where she is. In either of these ways of separation, you can discover there is no need for a bill of divorcement. To recapitulate: First if a 
            man forfeits his covenants with a wife, or wives, becoming unfaithful to his God, and his priesthood, that wife or wives are free from him without a bill of 
            divorcement. Second. If a woman claims protection at the hands of a man, possessing more power in the priesthood and higher keys, if he is disposed to rescue her 
            and has obtained the consent of her husband to make her his wife he can do so without a bill of divorcement.”
            <btn id="clickable27" className="footnote">27 </btn>
            <Tooltip anchorSelect="#clickable27" className="footnote-size" clickable>A few words of Doctrine, speech given by Brigham Young in the Tabernacle on Oct. 8, 1861; photocopy of a document in the Mormon Church Historical Department, Brigham Young Addresses, Ms./d/1243/Bx 49/fd 8)</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">God the Father and Jesus Christ as Polygamists</h2>

        <div className='paragraph'>
          <p>Mormon leaders went as far to claim that God the Father and Jesus Christ were polygamists. Brigham taught, “When our father Adam came into the garden of Eden, he 
            came into it with a celestial body, and brought Eve, one of his wives, with him.”  
            <btn id="clickable28" className="footnote">28 </btn>
            <Tooltip anchorSelect="#clickable28" className="footnote-size" clickable>Brigham Young, Journal of Discourses, April 9, 1852, vol. 1, p. 50.</Tooltip>

            In 1853, Mormon apostle Orson Pratt stated, regarding Mary the mother of Jesus, that “… He (God the Father) intended after the resurrection to again take her 
            (Mary) as one of his wives to raise up immortal spirits in eternity ... We have now clearly shown that God the Father had a plurality of wives, one or more being 
            in eternity by whom He begat our spirits as well as the spirit of Jesus His First Born.”
            <btn id="clickable29" className="footnote">29 </btn>
            <Tooltip anchorSelect="#clickable29" className="footnote-size" clickable>Orson Pratt, The Seer, vol. 1, issue 10, p. 158, 172.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Orson also stated that Christ had multiple wives, including New Testament characters Mary Magdalene and Lazarus’ two sisters, Mary and Martha.  
          <btn id="clickable30" className="footnote">30 </btn>
          <Tooltip anchorSelect="#clickable30" className="footnote-size" clickable>Michael Durham, 1997, p. 182, Desert Between the Mountains: Mormons, Miners, Padres, Mountain Men, and the Opening of the Great Basin, 1772-1869. </Tooltip>
            
            First Presidency Counselor Jedediah Grant agreed. “The grand reason why the Gentiles and philosophers of his school persecuted Jesus Christ, was, because he had so 
            many wives; there were Elizabeth, and Mary, and a host of others that followed him ... The grand reason … causing his crucifixion, was evidently based upon 
            polygamy, according to the testimony of the philosophers who rose in that age.”
            <btn id="clickable31" className="footnote">31 </btn>
            <Tooltip anchorSelect="#clickable31" className="footnote-size" clickable>Jedediah Grant, Journal of Discourses, August 7, 1853, vol. 1, p. 345–346.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Women’s Experiences in Polygamy</h2>

        <div className='paragraph'>
          <p>Some women reported living happily in plural marriages. Other women did not. Early Mormon Joseph Robinson stated, “Plural marriage ... is calculated in its nature 
            to severely try the women even to nearly tear their heart strings out of them ...”  
            <btn id="clickable32" className="footnote">32 </btn>
            <Tooltip anchorSelect="#clickable32" className="footnote-size" clickable>Journal and Autobiography of Joseph Lee Robinson, p. 50.</Tooltip>

            One of Brigham’s wife Zina Huntington stated of polygamy, “It is the duty of the first wife to regard her husband not with a selfish devotion ... she must regard 
            her husband with indifference, and with no other feeling than that of reverence, for love we regard as a false sentiment; a feeling which should have no existence 
            in polygamy.”
            <btn id="clickable33" className="footnote">33 </btn>
            <Tooltip anchorSelect="#clickable33" className="footnote-size" clickable>Zina Huntington, wife of Prophet Brigham Young, New York World, November 17, 1869, as cited in The Lion of the Lord, pp. 229-230.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Wife of Mormon apostle Charles Rich, Sarah Rich, stated, “[Polygamy] I could not have done if I had not believed it to be right in the Sight of god and believed 
            it to be one principal of his gospel once again restored to earth.”  
            <btn id="clickable34" className="footnote">34 </btn>
            <Tooltip anchorSelect="#clickable34" className="footnote-size" clickable>Sarah Rich, quoted in Leonard J. Arrington, Charles C. Rich: Mormon General and Western Frontiersman, 1974, p. 288.</Tooltip>

            Wife of Brigham, Mary Ann Angell, stated, “God will be very cruel if he does not give us poor women adequate compensation for the trials we have endured in 
            polygamy.”
            <btn id="clickable35" className="footnote">35 </btn>
            <Tooltip anchorSelect="#clickable35" className="footnote-size" clickable>Mary Ann Angell Young, quoted in Anti-Polygamy Standard, August 1882, p. 36.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Caroline Owens writes about learning she was a plural wife after her marriage: “I can never tell the horrors of the next few hours.... I went to my room and
             dressed for the reception, which took place at Cannon’s other house, where he kept his three wives. When I went down, there was a crowd there, among the rest a 
             plain looking girl in a calico dress, to whom I was introduced. It was Emily Spencer ... I told her to get up. Miles came forward and said, ‘Sit still Emily 
             Spencer, my wife.’ I felt as though I had been shot. I said, Your wife! Then what am I?’ He said, ‘You are both my wives.’ All at once my shame flashed over me. 
             Here I was dishonored, the polygamous wife of a Mormon. I ran out of the house, bent only on escape, I did not think where. I could not do it, though for Miles 
             and young Cannon, a son of the Delegate, ran after me and dragged me back ... But I stole away and returned to the other house, where I had been living the three 
             weeks since my arrival from England. I noticed there was no key in the lock but shot a little bolt and piled chairs against the door. I cried myself to sleep. 
             The next thing I knew, I don’t know what time it was, Miles stood in the room and was locking the door on the inside. I screamed ... Miles said I need not take 
             on, for Brother Cannon had anticipated that I would make trouble and had the house cleared of everyone else. I found out that it was so. He told me that I might 
             as well submit; there was no law here to control the saints. There was no power on earth that would save me.”
             <btn id="clickable36" className="footnote">36 </btn>
             <Tooltip anchorSelect="#clickable36" className="footnote-size" clickable>Caroline Owens, in Matilda Joslyn Gage, Women, Church and State, 1998, pp. 238-240.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Brigham and Wife #19</h2>

        <div className='paragraph'>
          <p>Brigham was 64, and Ann Eliza was 21 when they married. Ann Eliza would go on to divorce Brigham and publish an exposé that shone a light on the practice.  
          <btn id="clickable37" className="footnote">37 </btn>
          <Tooltip anchorSelect="#clickable37" className="footnote-size" clickable>Claudia Glenn Dowling, Brigham Young’s 19th Wife, American History Magazine, June 2012. </Tooltip>

            Ann Eliza wrote a letter, “O Mother, she pleaded, to give myself to a man older than my father … who is already the husband of many wives, the father of children older, by many years, than myself…” Ann Eliza’s life had been intertwined with Brigham’s life since he held her on his knee as a young child in Nauvoo. Years earlier, Ann Eliza’s mother spoke about entering polygamy. When her husband took his second wife to bed she contemplated suicide. Soon Eliza’s father would have five wives.
          </p>
        </div>

        <div className='paragraph'>
          <p>At age 17, Ann Eliza related, “He [Brigham, 59 at this time] seemed suddenly to realize that I had grown to be a young lady, and the first intimation he gave of it was by interfering with my beaux.” One day, Brigham saw her on the arm of one of his brothers-in-law and told Ann Eliza’s mother to cut the connection. Next, Brigham placed Ann Eliza in his new Salt Lake City theater. Since her family lived out of town, she spent most nights in his Lion House. The dormlike structure housed about a dozen of Brigham’s wives. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Ann Eliza fell in love with James Dee, a man slightly older than she was. Brigham “sealed” them to each other. But marital bliss did not last. James threatened Ann Eliza with more wives, and she said no. While Ann Eliza was pregnant with their second son, Dee “seized me by the throat,” and Ann Eliza’s father threw him out. Brigham canceled their sealings in 1865. 
          </p>
        </div>

        <div className='paragraph'>
          <p>“You are very much improved since you left Mr. Dee,” Brigham said, as he walked Ann Eliza home following the meeting. Eventually, Brigham asked Ann Eliza’s parents for her hand, offering her “a good house, well furnished, and $1000 a year pocket money.” Needing financial support for herself and her parents, Ann Eliza accepted the offer. “There was nothing but ruin in store,” wrote Ann Eliza. “My religion, my parents – everything was urging me on to my unhappy fate.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham (66) and Ann Eliza (23) were married by Heber Kimball. Brigham escorted Ann Eliza home to her father’s house after the wedding ceremony and slept alone in his room. Brigham established Ann Eliza and her two sons in a separate house, and her mother joined them, leaving Ann Eliza’s father Chauncey with his other wives. Brigham insisted that Ann Eliza attend dinner and prayers at the Lion House. She dreaded facing her sister wives. At first, Brigham seemed to be quite interested in Ann Eliza and visited her often. But he never escorted her without another wife or two.
          </p>
        </div>

        <div className='paragraph'>
          <p>The attention Brigham paid Ann Eliza was short-lived. Soon, miserly rations came monthly: a bit of pork, five pounds of sugar, a pound of candles, one box of matches, one bar of soap, with her sons allotted a hat and a pair of shoes each year. The promised annual money never materialized. She begged Brigham for a new stove but he refused. Ann Eliza craved the furs and gewgaws Brigham bestowed on other wives as tokens of his affection. Then he came to call no more.
          </p>
        </div>

        <div className='paragraph'>
          <p>Ann Eliza filed for divorce. “In addition to the dread and dislike which had grown up in my heart towards my husband,” she said, “I was beginning to lose faith in the religion which he represented.” In the formal complaint, she claimed he had cohabited with her for about a year after the marriage. She sued for divorce on the grounds of “cruel and inhuman treatment” and “desertion.” The divorce became an international scandal. “Polygamy has received a heavy blow,” wrote the New York Times. “The 17th [sic] wife of Brigham, the Prophet, has thrown off her allegiance.” 
          </p>
        </div>

        <div className='paragraph'>
          <p>One of Brigham’s daughters-in-law had called Salt Lake City “the biggest whorehouse in the world.” Mormons countered that they had no prostitutes, no spinsters, no mistresses. Ann Eliza responded by launching a national lecture tour.  Her audiences were surprised to learn that Mormons claimed Adam had many wives, of whom Eve was one, and that “the love of Jesus for Martha and Mary, her sister, as well as Mary Magdalene, showed that they were his plural wives.” In Washington, D.C., in 1874, a group of U.S. Congressmen and U.S. President Ulysses S. Grant came to hear “My Life in Bondage.” Perhaps as a result, Grant signed one of many bills designed to end polygamy – and reduce Mor¬mon power – a few weeks later.
          </p>
        </div>

        <div className='paragraph'>
          <p>How important of a doctrine was polygamy? First Presidency Counselor Heber Kimball stated, “I speak of plurality of wives as one of the most holy principles that 
            God ever revealed to man … while those who honor this and every sacred institution of heaven will shine forth as the stars in the firmament of heaven, and of the 
            increase of their kingdom and glory there shall be no end.”
            <btn id="clickable38" className="footnote">38 </btn>
            <Tooltip anchorSelect="#clickable38" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, April 4, 1866, vol.11, p.211.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Missionary Work to Find Young Women to Marry</h2>

        <div className='paragraph'>
          <p>To increase their glory in the celestial kingdom and the number of wives, church leaders and high-ranking Mormon men married young convert young women coming 
            over from Europe. Some have labeled this practice trafficking. Mormon missionaries went to European countries with the explicit purpose of recruiting girls and 
            women to be polygamous wives. The historical record shows that Mormon missionaries lied, telling converts that polygamy was an ugly rumor when they themselves 
            had multiple wives. As discussed, third Mormon prophet John Taylor, while in France in 1850, denied the practice of polygamy despite being married to 
            12 women at the time.
            <btn id="clickable39" className="footnote">39 </btn>
            <Tooltip anchorSelect="#clickable39" className="footnote-size" clickable>Public Discussion Between the Revds. C.W. Cleeve, James Robertson, and Philip Cater, and Elder John Taylor of the Church of Jesus Christ of Latter-day Saints at Boulogne-Sur-Mer, France. Taylor remarked, “We are accused of polygamy, and actions the most indelicate, obscene, and disgusting, such that none but a corrupt and depraved heart could have contrived. These things are too outrageous to admit of belief … I shall content myself by reading our views of chastity and marriage, from a work published by us, containing some of the articles of our Faith. “Doctrine and Covenants,” page 330. Taylor read the revelation that claims the Mormon church at that time believed in the doctrine of monogamy, although at the time Taylor had married 12 women.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>New converts were never told about this polygamy. Many left their homes in foreign lands to join the Mormon religion, which was hiding many things such as 
            Joseph Smith’s desire to build a theocracy to rule the world. First Presidency Counselor Heber Kimball had instructed departing missionaries, “The brother 
            missionaries have been in the habit of picking out the prettiest women for themselves before they get here and bringing on the ugly ones for us; hereafter 
            you have to bring them all here before taking any of them and let us all have a fair shake.”  
            <btn id="clickable40" className="footnote">40 </btn>
            <Tooltip anchorSelect="#clickable40" className="footnote-size" clickable>Stanley Hirshon, The Lion of the Lord, pages 139-140.</Tooltip>
            
            This practice was so widely known that Sir Arthur Conan Doyle 
            told the story of these teenage girls in a Sherlock Holmes novel.
          </p>
        </div>

        <div className='paragraph'>
          <p>Wilford Woodruff wrote “nearly all are trying to get wives, until there is hardly a girl 14 years old in Utah, but what is married.”  
          <btn id="clickable41" className="footnote">41 </btn>
          <Tooltip anchorSelect="#clickable41" className="footnote-size" clickable>Eugene Campbell, Establishing Zion: The Mormon Church in the American West, 1847-1869, 181-98; Thomas G. Alexander, “Wilford Woodruff and the Mormon Reformation of 1855-57,” Dialogue 25 (Summer 192), 25-39. See also Paul H. Peterson, “The Mormon Reformation of 1856-1857; The Rhetoric and the Reality,” JHM 15 (1989), 59-87.</Tooltip>

            Lorenzo Snow married two 16-year-olds and had children with them both. Besides women in their 20s and 30s, throughout his life Lorenzo married 18-year-old Charlotte Squires, 18-year-old Sarah Ann Prichard, 17-year-old Eleanor Houtz, 17-year-old Mary Elizabeth Houtz, 16-year-old Phoebe Amelia Woodruff, and 16-year-old Sara Minnie Ephramina Jensen.
          </p>
        </div>

        <div className='paragraph'>
          <p>Historian George D. Smith studied 153 men who took plural wives in the early years of Mormonism. He found that two of the girls were thirteen years old, 
            13 girls were fourteen years old, 21 were fifteen years old, and 53 were sixteen years old.
            <btn id="clickable42" className="footnote">42 </btn>
            <Tooltip anchorSelect="#clickable42" className="footnote-size" clickable>George Smith, “Nauvoo Polygamists”, Dialogue: A Journal of Mormon Thought, Spring 1994, p. ix.</Tooltip>

            The New York Times reported in 1857 cases of girls aged 10 and 11 being married to men in Utah and noted that marriages of girls aged 14 was 
            “a very common occurrence.”  
            <btn id="clickable43" className="footnote">43 </btn>
            <Tooltip anchorSelect="#clickable43" className="footnote-size" clickable>Stanley Hirshson, The New York Times, 1969, The Lion of the Lord.</Tooltip>

            Demonstrating the reality of this practice of marrying young teenage girls, Brigham attempted to stamp out men being sealed to young girls. “I shall not seal the 
            people as I have done. Old Father Alread brought three young girls 12 & 13 years old. I would not seal them to him. They would not be equally yoked together.”
            <btn id="clickable44" className="footnote">44 </btn>
            <Tooltip anchorSelect="#clickable44" className="footnote-size" clickable>Wilford Woodruff's Journal, vol. 5, p. 58.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>Polygamy critic Fanny Stenhouse wrote in 1875, “It would be quite impossible, with any regard to propriety, to relate all the horrible results of this 
            disgraceful system .... Marriages have been contracted between the nearest of relatives; and old men tottering on the brink of the grave have been united to 
            little girls scarcely in their teens; while unnatural alliances of every description, which in any other community would be regarded with disgust and abhorrence, are here 
            entered into in the name of God.”
            <btn id="clickable45" className="footnote">45 </btn>
            <Tooltip anchorSelect="#clickable45" className="footnote-size" clickable>Fanny Stenhouse, 1875, Tell it All: A Woman's Life in Polygamy.</Tooltip>
            
            Fanny Stenhouse also wrote, “I know also another man who married a widow with several children; and when one of the girls had grown into her teens, he insisted on 
            marrying her also… and to this very day the daughter bears children to her stepfather, living as wife in the same house with her mother.”
            <btn id="clickable46" className="footnote">46 </btn>
            <Tooltip anchorSelect="#clickable46" className="footnote-size" clickable>Fanny Stenhouse, Tell It All, 1875, p. 469.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">End of Mormon Polygamy</h2>

        <div className='paragraph'>
          <p>Word traveled from U.S. territorial government officials, settlers passing through Utah, and Mormons leaving their religion for new locations, revealing that not 
            all was well in Zion. News of the abuses under polygamy, the violence of blood atonement, and authoritarian control of Mormon theocracy, etc. leaked out. This was 
            the beginning of the end of polygamy. Outside Utah, polygamy morally outraged people who viewed it as a violation of American Christian values and morals. First 
            Presidency Counselor Heber Kimball confidently stated, “It would be as easy for the United States to build a tower to remove the sun, as to remove polygamy, or the 
            Church and Kingdom of God.”  
            <btn id="clickable47" className="footnote">47 </btn>
            <Tooltip anchorSelect="#clickable47" className="footnote-size" clickable>Heber C. Kimball, Millennial Star, v. 28, p. 190.</Tooltip>

            And in 1879, Mormon apostle, George Cannon boldly stated, “If plural marriage be divine, as the Latter-day Saints say it is, no power on earth can suppress it, 
            unless you crush and destroy the entire people.”
            <btn id="clickable48" className="footnote">48 </btn>
            <Tooltip anchorSelect="#clickable48" className="footnote-size" clickable>George Q. Cannon, Journal of Discourses, July 20, 1879, vol. 20, p. 276.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Apparently, in the late 19th century the U.S. government exerted more power than the Mormon God! In 1856, the Republican platform included abolishing “the twin 
            relics of barbarism – polygamy and slavery.”  
            <btn id="clickable49" className="footnote">49 </btn>
            <Tooltip anchorSelect="#clickable49" className="footnote-size" clickable>Kelly Phipps, 2009, Marriage and Redemption: Mormon Polygamy in the Congressional Imagination, 1862–1887. Virginia Law Review. 95 (2): 438.</Tooltip> 

            In 1862, the U.S. Congress passed the Morrill Anti-Bigamy Act, which prohibited polygamous marriage in the territories. The Mormons ignored the law. In 1879 the Supreme Court upheld the constitutionality of the Morrill Act stating, “Laws are made for the government of actions, and while they cannot interfere with mere religious belief and opinion, they may with practices.” The Mormons ignored the law. In 1882, the U.S. Congress passed the Edmunds Act making polygamy a felony punishable by a $500 fine and five years in prison. It also revoked the right of polygamists to vote or hold office. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Again and again, the Mormons refused to comply with the law. Mormon polygamists were pursued as fugitives. Mormon prophet John Taylor went into hiding, 
            operating the church underground. To show his defiance while hiding, the 78-year-old prophet married a 26-year-old woman. The Mormons did everything they 
            could to escape federal deputies. “In addition to false names, disguises, and ruses, a whole system of information gathering, signaling, and spotting informers was
             developed.”
             <btn id="clickable50" className="footnote">50 </btn>
             <Tooltip anchorSelect="#clickable50" className="footnote-size" clickable>Kimball Young, Isn't One Wife Enough? p. 396.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>At this time, Mormon prophet John Taylor records that he went to the Lord and received a revelation. “My son John: You have asked me concerning the New and 
            Everlasting Covenant and how far it is binding upon my people. Thus, saith the Lord all commandments that I give must be obeyed by those calling themselves by my 
            name unless they are revoked by me or by my authority and how can I revoke an everlasting covenant. For I the Lord am everlasting and my everlasting covenants 
            cannot be abrogated nor done away with; they stand forever.”  
            <btn id="clickable51" className="footnote">51 </btn>
            <Tooltip anchorSelect="#clickable51" className="footnote-size" clickable>John Taylor Papers, Church Historian's Office, Sept. 27th, Unpublished Revelations of the Prophets and Presidents of the Church of Jesus Christ of Latter-day Saints, by Fred C. Collier, 1979.</Tooltip> 

            This revelation motivated John to emerge from hiding and give a sermon, “Are we going to suffer a surrender of this point?” He answered, “No, never! No, never!”
            <btn id="clickable52" className="footnote">52 </btn>
            <Tooltip anchorSelect="#clickable52" className="footnote-size" clickable>John Taylor, Journal of Discourses, August 20, 1882, vol. 23, p. 235.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>As federal pressure increased to arrest polygamists, the prophet responded in defiance again asking all monogamists serving in ward bishoprics or stake 
            presidencies to marry a plural wife or resign from church office. John Taylor asked if he should disobey God in order to support the government? 
            He answered, “No, Never! No, NEVER! NO, NEVER!”  
            <btn id="clickable53" className="footnote">53 </btn>
            <Tooltip anchorSelect="#clickable53" className="footnote-size" clickable>John Taylor, Journal of Discourses, August 20, 1882, vol. 23, p. 235.</Tooltip>
            
            Then the prophet slipped back into hiding to avoid arrest by federal officers. In defiance, “In 1882 President John Taylor issued an Epistle, ‘On Marriage,’ 
            authorizing church marriages outside the Endowment House and temples. Two years later he admitted in court testimony that he had authorized hundreds of men to 
            perform secret marriages at any place convenient.”
            <btn id="clickable54" className="footnote">54 </btn>
            <Tooltip anchorSelect="#clickable54" className="footnote-size" clickable>Samuel W. Taylor, Rocky Mountain Empire, pp. 20-21, footnote 15.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>By 1887, the U.S. government was losing its patience with the Mormon rebellion. It passed the Edmunds-Tucker Bill which provided up to five years’ imprisonment 
            and $500 fine for entering into polygamy and six months’ imprisonment and $300 fine for the unlawful cohabitation. Other provisions in the bill would intentionally 
            bankrupt the church because of its polygamy practices. That same year John Taylor died, and Wilford Woodruff became the prophet.
          </p>
        </div>

        <div className='paragraph'>
          <p>While hiding from authorities, Fourth Mormon prophet Wilford Woodruff had an armed guard protect him. He wrote, “I have a large stout man who goes with me … 
            night and day [he] carries 2 pistols & a double barrel shot gun and says he will shoot the marshals if they come to take me (Don’t tell anybody this) so I am … 
            well-guarded.”  
            <btn id="clickable55" className="footnote">55 </btn>
            <Tooltip anchorSelect="#clickable55" className="footnote-size" clickable>Letter from Wilford Woodruff to Miss Nellie Atkin, dated Sept. 3, 1887.</Tooltip>
            
            Eventually, Woodruff fled to San Francisco.
          </p>
        </div>

        <div className='paragraph'>
          <p>According to historian Michael Quinn, church leaders considered signing a document like the 1890 Manifesto on 20 December 1888 but rejected the idea. 
            Wilford told the apostles, “Had we yielded to that document every man of us would have been under condemnation before God. The Lord never will give a revelation 
            to abandon plural marriage.”  
            <btn id="clickable56" className="footnote">56 </btn>
            <Tooltip anchorSelect="#clickable56" className="footnote-size" clickable>Michael Quinn, Dialogue: A Journal of Mormon Thought, Spring 1985, p. 35.</Tooltip>
            
            The following year Wilford considered concessions to the court regarding the Edmunds-Tucker Act. On 24 November 1889, Wilford read a revelation to the Quorum of the 
            Twelve. “The answer came quick and strong. The Word of the Lord was for us not to yield one particle of that which he had revealed and established. He had done and 
            would continue to care for His work and those of the Saints who were faithful, and we need have no fear of our enemies when we were in the line of duty.”
            <btn id="clickable57" className="footnote">57 </btn>
            <Tooltip anchorSelect="#clickable57" className="footnote-size" clickable>Daily Journal of Abraham Cannon, December 19, 1889.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>By 1890, the Edmunds-Tucker Act had disincorporated the Mormon church. That same year, the U.S. Attorney General filed suit to seize all church assets. Amendments were made to the law which required plural wives to testify against their husbands, dissolve the Perpetual Emigration Fund, and abolished the Nauvoo Legion. The Mormons wanted desperately for Utah to gain statehood. It was clear that Utah would not be admitted to the Union while polygamy was practiced. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Wilford could see the writing on the wall. It was time to surrender. In September 1890 the prophet returned to Salt Lake to obtain divine confirmation on a course to pursue. On 23 September 1890 he records he struggled through the night with the Lord. He produced a document which stated his intentions to comply with the Edmunds-Tucker Act and falsely denied that the church continued to solemnize or condone plural marriages. 
          </p>
        </div>

        <div className='paragraph'>
          <p>His 1890 Manifesto did not dissolve existing plural marriages but merely claimed to end the practice of new polygamous marriages. Thus, the practice was 
            “suspended” while still retaining polygamy as a doctrine. The church unanimously sustained the 1890 manifesto as the will of God, but it was a lie. Records 
            show that more than 200 plural marriages were performed between 1890 and 1904.
            <btn id="clickable58" className="footnote">58 </btn>
            <Tooltip anchorSelect="#clickable58" className="footnote-size" clickable>Carmon Hardy, (1992). Solemn Covenant: The Mormon Polygamous Passage.</Tooltip>
            
            There were probably many more plural marriages performed for which records 
            do not exist.
          </p>
        </div>

        <div className='paragraph'>
          <p>Church leaders ignored the law and the manifesto, continuing to secretly marry men and women polygamously. Perhaps they were holding on to John Taylor’s revelation claiming the Lord revealed that polygamy would continue to be practiced until the Second Coming – and then continue into the Millennium.
          </p>
        </div>

        <div className='paragraph'>
          <p>Historian Michael Quinn writes: “All First Presidency members either allowed or authorized new plural marriages from 1890 to 1904, and a few as late as 1906 and 
            1907. One Church President married a plural wife, and three Counselors in the First Presidency performed marriages for men who had living wives already. 
            A Presidency’s secretary proposed polygamous marriage in 1907. Of the sixteen men who served only as Apostles … eight of these sixteen men married post-manifesto 
            plural wives. Three of them who did not do so, performed plural marriages. Two of them who did not do either of the above, arranged for plural marriages ... Now, 
            looking at the men individually. Wilford Woodruff … personally approved 7 new plural marriages, to be performed in Mexico. He also approved polygamous ceremonies 
            for a couple of Mexican residents as early as 1891. He delegated George Q. Cannon, his first counselor, to give approval for plural marriages from 1892 to 1898. 
            That approval was in the form of written letters … Woodruff himself married a new Plural Wife in 189 ... [Lorenzo Snow] cohabited with his youngest plural wife 
            who went to Canada briefly, in 1896, to bear his last child. And in so doing, he violated the testimony that he had given publicly in 1891, that the Manifesto 
            prohibited cohabitation with plural wives … [Joseph F. Smith] In 1896 as a counselor, he performed in the Salt Lake Temple a ‘proxy plural marriage’ for Abraham 
            Cannon, which had been approved earlier by the First Presidency…. Smith instructed Seymour B. Young of the First council of seventy, to perform two plural marriages 
            in Mexico. And later that same year, second counselor Smith authorized Patriarch Alexander F. MacDonald to perform new plural marriages in Mexico for any Mexican 
            residents who requested them…. George Q. Cannon was Presidency counselor and next in line to be Church President from 1899 to 1901. He personally authorized new 
            plural marriages performed in Mexico, Canada, and the United States, from 1892 until his death in 1901. This included plural marriages performed for 3 of his sons 
            and 3 of his nephews.”
            <btn id="clickable59" className="footnote">59 </btn>
            <Tooltip anchorSelect="#clickable59" className="footnote-size" clickable>Michael Quinn, “Plural Marriages After The 1890 Manifesto,” lecture, August 1991 at Bluffdale, Utah.</Tooltip>

          </p>
        </div>

        <div className='paragraph'>
          <p>If anything, the 1890 Manifesto was deception and mere overtures to appease the U.S. federal government as an attempt to gain statehood. Therefore, if God is a 
            God of truth, the Lord had no hand in the 1890 Manifesto. Wilford explained to church members that the Lord had directed, “I should have let all the temples go
             out of our hands; I should have gone to prison myself, and let every other man go there, had not the God of heaven commanded me to do what I do; and when the hour 
             came that I was commanded to do that, it was all clear to me.”   
             <btn id="clickable60" className="footnote">60 </btn>
            <Tooltip anchorSelect="#clickable60" className="footnote-size" clickable>Official Declaration 1. </Tooltip>

             Essentially, the choice was between continuing to practice plural marriage and losing the temples. Wilford decided it was best to discontinue plural marriage so as not to lose the temples while retaining the ability to perform temple ordinances.
          </p>
        </div>

        <div className='paragraph'>
          <p>At another time, Wilford claimed the Manifesto was the will of the Lord and was given to stop the persecution of the church. “The Lord showed me by vision and revelation exactly what would take place if we did not stop this practice. If we had not stopped it … all [temple] ordinances would be stopped throughout the land of Zion. Confusion would reign throughout Israel, 
            and many men would be made prisoners …” 
            
            Wilford continued, “I went before the Lord, and I wrote what the Lord told me to write. I laid it before my brethren – such strong men as Brother George Q. Cannon, 
            Brother Joseph F. Smith, and the Twelve Apostles. I might as well undertake to turn an army with banners out of its course as to turn them out of a course that they 
            considered to be right. These men agreed with me, and ten thousand Latter-day Saints also agreed with me.… Why? Because they were moved upon by the Spirit of God 
            and by the revelations of Jesus Christ to do it.”
            <btn id="clickable61" className="footnote">61 </btn>
            <Tooltip anchorSelect="#clickable61" className="footnote-size" clickable>Remarks of Wilford Woodruff at Cache Stake Conference, Logan, UT Sunday afternoon, Nov. 1, 1891, Appeared in the Deseret Weekly, Vol. 43. pp. 659-60.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>This is the same man who claimed that on 26 January 1880 in the wilderness of the San Francisco Mountains in Arizona he received a revelation which threatened 
            the United States with destruction if it continued to oppose the “Patriarchal Law” (plural marriage). Wilford recorded the Lord as saying to him, “And I say 
            again wo unto that nation or house or people who seek to hinder my people from obeying the Patriarchal Law of Abraham which leadeth to a celestial glory which 
            has been revealed unto my Saints through the mouth of my servant Joseph, for whosoever doeth those things shall be damned saith the Lord of Hosts and shall be 
            broken up and wasted away.”
            <btn id="clickable62" className="footnote">62 </btn>
            <Tooltip anchorSelect="#clickable62" className="footnote-size" clickable>Wilford Woodruff’s Journal, vol. 7, p. 615-617.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Heber Kimball had prophesied earlier, “I speak of plurality of wives as one of the most holy principles that God ever revealed to man, and all those who exercise 
            an influence against it … will suffer the buffetings of Satan in the flesh; for the curse of God will be upon them, and poverty, and distress, and vexation of 
            spirit will be their portion; while those who honor this and every sacred institution of heaven will shine forth as the stars in the firmament of heaven, and of 
            the increase of their kingdom and glory there shall be no end.”  
            <btn id="clickable63" className="footnote">63 </btn>
            <Tooltip anchorSelect="#clickable63" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, April 4, 1866, vol. 11, p. 211.</Tooltip>
            
            Given the historical record after 1890, did the Christ change his mind?
          </p>
        </div>

        <div className='paragraph'>
          <p>Since polygamy was a key doctrine for exaltation, the church sent families to Canada and Mexico to continue the practice where there was unlikely to be 
            interference from those governments. Some Mormon leaders considered concubinage a potential solution. Mormon apostle Abraham Cannon reported, 
            “Father [George Cannon] now spoke of the unfortunate condition of the people at present in regard to marriage ... ‘I believe in concubinage, or some plan 
            whereby men and women can live together under sacred ordinances and vows until they can be married. Thus, our surplus girls can be cared for, and the law of 
            God to multiply and replenish the earth be fulfilled. There is the danger of wicked men taking license from such a condition.”  
            <btn id="clickable64" className="footnote">64 </btn>
            <Tooltip anchorSelect="#clickable64" className="footnote-size" clickable>Daily Journal of Abraham Cannon, April 5, 1894, vol. 18, p. 70. Minutes of the Apostles of the Church of Jesus Christ of Latter-day Saints, 1835–1893 (Salt Lake City: Privately Published, 2010), 157.</Tooltip>
            
            Thankfully, as far as we know, concubinage was never officially put into practice.
          </p>
        </div>

        <div className='paragraph'>
          <p>Fifth Mormon prophet Lorenzo Snow stated, “I have no doubt but concubinage will yet be practiced in this church … When the nations are troubled good women will 
            come here for safety and blessing, and men will accept them as concubines.”
            <btn id="clickable65" className="footnote">65 </btn>
            <Tooltip anchorSelect="#clickable65" className="footnote-size" clickable>Minutes of the Apostles of the Church of Jesus Christ of Latter-day Saints, 1835–1893 (Salt Lake City: Privately Published, 2010), 157.</Tooltip>

            Church president Wilford Woodruff spoke on concubinage saying, “If men enter into some practice of this character to raise a righteous posterity, they will be 
            justified in it.”
            <btn id="clickable66" className="footnote">66 </btn>
            <Tooltip anchorSelect="#clickable66" className="footnote-size" clickable>Abraham H. Cannon, Diary, April 5, 1894, in Dennis B. Horne, An Apostle’s Record: The Journals of Abraham H. Cannon, 314-15.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>In January 1904, testimony given under oath in the Smoot hearings before the U.S. Congress made it clear that polygamy had not been entirely abolished. That same 
            year, sixth Mormon prophet Joseph F. Smith issued a second manifesto threatening excommunication for those who continued the practice. This brought schisms within 
            the church and several groups formed new churches to continue God’s divinely appointed practice of celestial marriage. Joseph had revealed Christ’s words, “Behold, 
            mine house is a house of order, saith the Lord God, and not a house of confusion.”
            <btn id="clickable67" className="footnote">67 </btn>
            <Tooltip anchorSelect="#clickable67" className="footnote-size" clickable>D&C 132:8.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>The 1904 Manifesto ended the official practice of new polygamous marriages. Those involved in plural marriages after 1904 were excommunicate, and those 
            married between 1890 and 1904 were not to have church callings where other members would have to sustain them. Although the Mormon church officially prohibited 
            new plural marriages after 1904, many plural husbands and wives continued to cohabit until their deaths in the 1940s and 1950s.
            <btn id="clickable68" className="footnote">68 </btn>
            <Tooltip anchorSelect="#clickable68" className="footnote-size" clickable>Jessie Embry, 1994, The History of Polygamy, Utah State Historical Society.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Polygamy Apologetics </h2>

        <div className='paragraph'>
          <p>Today the church teaches that one man and one woman sealed in the temple will inherit all the blessings of the celestial kingdom. Mormon apostle Bruce McConkie 
            stated in the late 20th century, “Plural marriage is not essential to salvation or exaltation.”  
            <btn id="clickable69" className="footnote">69 </btn>
            <Tooltip anchorSelect="#clickable69" className="footnote-size" clickable>Bruce McConkie, Mormon Doctrine, p. 523.</Tooltip>
            
            However, Joseph and other early Mormon prophets, seers, and revelators claim to have received revelations from heaven that plural marriage is required for 
            exaltation and entry into the highest level of the celestial kingdom, and that a monogamist may obtain at least a lower degree of “exaltation” through mere 
            belief in polygamy.
            <btn id="clickable70" className="footnote">70 </btn>
            <Tooltip anchorSelect="#clickable70" className="footnote-size" clickable>Michael Quinn, (1985). The LDS Church Authority and New Plural Marriages, 1890-1904, Dialogue Vol. 18, p. 24 fn. 65.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>The church admitted publicly in 1891 in a petition to the President of the United States, “We formerly taught to our people that polygamy or celestial marriage 
            as commanded by God through Joseph Smith was right; that it was a necessity to man’s highest exaltation in the life to come.”
            <btn id="clickable71" className="footnote">71 </btn>
            <Tooltip anchorSelect="#clickable71" className="footnote-size" clickable>Reed Smoot Case, vol. 1, p. 18.</Tooltip>
  
            That contradicts statements from past prophets, seers, and revelators. Were the many prophets who claimed polygamy was the most important “eternal doctrine” wrong? Why was it taught consistently, decade after decade, as the highest “doctrine” and that no one could get into the highest degree of the Celestial Kingdom without polygamy? The real question is, did God ever reveal polygamy to Joseph?
          </p>
        </div>

        <div className='paragraph'>
          <p>The same 20th century Mormon apostle, Bruce McConkie, who stated “Plural marriage is not essential to salvation or exaltation,”  
          <btn id="clickable72" className="footnote">72 </btn>
          <Tooltip anchorSelect="#clickable72" className="footnote-size" clickable>Bruce R. McConkie, Mormon Doctrine, p. 522-523.</Tooltip>
            
            also stated that Mormon polygamy will be practiced in the Millennium: “... the Lord frequently did command his ancient saints to practice plural marriage... 
            the whole history of ancient Israel was one in which plurality of wives was the divinely accepted and approved order of matrimony. Millions of those who entered 
            this order have, in and through it, gained for themselves eternal exaltation in the highest heaven of the celestial world ... the Prophet (Joseph) and leading 
            brethren were commanded to enter into the practice, which they did in all virtue and purity of heart... plural marriage was openly taught and practiced until the 
            year 1890. At that time conditions were such that the Lord by revelation withdrew the command to continue the practice ... Obviously, the holy practice will 
            commence again after the Second Coming of the Son of Man and the ushering in of the Millennium .” 
          </p>
        </div>

        <div className='paragraph'>
          <p>The Mormon Church has not abandoned polygamy! The church still seals men to multiple spouses. Therefore, the church believes there will be polygamy in the next 
            life. The 1890 and 1904 Manifestos only rescinded God’s authorization to practice polygamy. According to Mormon leaders, polygamy will be reinstituted. 
          </p>
        </div>

        </div>

      <div className="chapterFooter">
        <Link to="/Chap28">Previous Chapter</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap30">Next Chapter</Link>
      </div>

    </div>
  )
}

export default Chap29