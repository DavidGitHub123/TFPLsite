import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import expulsion from '../../Assets/Img/expulsion.jpg'

const Chap22 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
          <Link to="/Chap21">Previous</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap23">Next</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 22: Mormon War on the Horizon</h1>

      <img src={expulsion} className='image' alt='Mormon expulsion from Missouri' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>After Joseph’s failure as commander-in-chief of the Armies of Israel to restore the Mormons to their lands, and despite the dangerous animosity of the Missourians toward the Mormons, Joseph continued to encourage Mormon settlement in building Zion. After all, Jackson County was the place of the God-appointed holy city.
          </p>
        </div>

        <div className='paragraph'>
          <p>Tensions continued to increase as the Mormon population moved into Missouri. To keep the peace, Mormons settled in Clay County in 1836. This created a period of 
            relative peace. According to the Elders’ Journal, a Mormon newspaper, “The Saints here are at perfect peace with all the surrounding inhabitants, and persecution 
            is not so much as once named among them.” Mormon leader John Corrill wrote, “Friendship began to be restored between (the Mormons) and their neighbors, the old 
            prejudices were fast dying away, and they were doing well, until the summer of 1838.”

          <btn id="clickable1" className="footnote">1  </btn>
          <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>John Corrill, A Brief History of the Church of Jesus Christ of Latter-day Saints (Commonly Called Mormons), St. Louis, Missouri. 1839.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>But danger loomed on the horizon as Joseph would come to Missouri. In 1837, due to the failure of the Kirtland Safety Society and other scandals, mass apostasy ran rampant through the church. To escape legal prosecution and other threats, Joseph relocated in January 1838 to Far West, Missouri. As the loyal Mormons followed Joseph, hundreds more Mormons poured into Missouri. With insufficient room in Caldwell County, the Mormons settled in new areas including Adam-ondi-Ahman in Daviess County and Carroll County. To the Missourians, this was a violation of the compromise where the Mormons would reside in Caldwell County.
          </p>
        </div>

        <h2 className="headlinePadding">Excommunications, Salt Sermon, and Danites</h2>

        <div className='paragraph'>
          <p>With Joseph now residing in Missouri, a leadership struggle emerged between Joseph and the Missouri Mormon leadership. Joseph excommunicated Oliver Cowdery, David Whitmer, John Whitmer, W.W. Phelps, and other church leaders under charges of misusing church finances and labeled them dissenters. (Yes, the witnesses to the Book of Mormon.) These men had purchased land while acting as agents for the church. Ownership disputes arose, and lawsuits were filed. 
          </p>
        </div>

        <div className='paragraph'>
          <p>On June 17, 1838, Sidney Rigdon preached his Salt Sermon, in which he likened the excommunicated Mormon leaders to “salt that had 
            lost its savor.” He went on to state that these once faithful Mormons would be “trodden under the foot of men.”  
          <btn id="clickable2" className="footnote">2  </btn>
          <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Richard Van Wagoner, Sidney Rigdon: A Portrait of Religious Excess, p. 218, 1994. Stephen LeSueur, The 1838 Mormon War in Missouri, p. 37-43, 1990.</Tooltip>

            
            John Corrill stated, “although [Rigdon] did not give names in his sermon, it was plainly understood that he meant the dissenters or those 
            who had denied the faith.”  
            <btn id="clickable3" className="footnote">3  </btn>
          <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>Corrill 1839, A Brief History of the Church of Jesus Christ of Latter-day Saints (Commonly Called Mormons), p. 31.</Tooltip>

            
            Reed Peck alleged that Mormons Jared Carter and Dimick Huntington proposed to “kill these men that they would not be capable of injuring 
            the church.”  
            <btn id="clickable4" className="footnote">4  </btn>
          <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Reed Peck, 1839, The Reed Peck Manuscript, p. 22.</Tooltip>

            Thomas Marsh (Mormon apostle) and John Corrill successfully argued against these murders.
            <btn id="clickable5" className="footnote">5  </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Reed Peck, 1839, The Reed Peck Manuscript, p. 22.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Two days after Sidney preached his Salt Sermon, 80 prominent Mormons, including Hyrum Smith, signed a letter warning Oliver Cowdery, 
            David Whitmer, John Whitmer, W.W. Phelps, and Lyman Johnson to depart the county stating, “… for out of the county you shall go, and 
            no power shall save you. And you shall have three days after you receive this communication … for you to depart with your families 
            peaceably … if you do not depart, we will use the means in our power to cause you to depart; for go you shall.”
            <btn id="clickable6" className="footnote">6  </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>Document (1841), p. 103–106, Document Containing the Correspondence, Orders &c. in Relation to the Disturbances with the Mormons; And the Evidence Given Before the Hon. Austin A. King, Judge of the Fifth Judicial Circuit of the State of Missouri, at the Court-House in Richmond, in a Criminal Court of Inquiry, Begun November 12, 1838, on the Trial of Joseph Smith, and Others, for High Treason and Other Crimes Against the State., Fayette, Missouri: U.S. Government Printing Office.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Oliver, David, John, W.W. Phelps, and Lyman fled the county. John Whitmer stated they had been “driven from their homes” and robbed “of all their goods save 
            clothing & bedding &c.”  
            <btn id="clickable7" className="footnote">7  </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Book of John Whitmer, 86–87, in Anderson and Faulring, Documentary History of Oliver Cowdery, 4:257.</Tooltip>
            
            Reed Peck stated, “the claims by which this property was taken from these men were unjust.”  
            <btn id="clickable8" className="footnote">8  </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Reed Peck, 1839, p. 28, The Reed Peck Manuscript.</Tooltip>
            
            Joseph wrote that Oliver, David, John, W.W. Phelps, and Lyman “took warning, and soon they were seen bounding over the prairie like the scapegoat to carry off 
            their own sins. We have not seen them since, their influence is gone, and they are in a miserable condition.”  
            <btn id="clickable9" className="footnote">9  </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>Lyndon Cook and Donald Cannon, eds. 1983, p. 225, Far West Record: Minutes of the Church of Jesus Christ of Latter-Day Saints, 1830-1844.</Tooltip>
            
            Once Oliver, David, John, W.W. Phelps, and Lyman and their families arrived in neighboring counties, stories of their treatment by Joseph and the Mormons further 
            fanned heated anti-Mormon sentiment.
            <btn id="clickable10" className="footnote">10  </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>Michael Quinn, The Mormon Hierarchy: Origins of Power, p. 94, 1994. Alexandar Baugh, A Call to Arms: The 1838 Mormon Defense of Northern Missouri, p. 36-40, 2000.</Tooltip>
          </p>
        </div>

        <h2 className="headlinePadding">Formation of the Danites</h2>

        <div className='paragraph'>
          <p>With First Presidency Counselor Oliver Cowdery, witnesses to the Book of Mormon, and other dissenters gone, Joseph Smith encouraged the Mormons not to fear the 
            Missourians. In a speech, Joseph referred to Judges 18 about the tribe of Dan, “If the enemy comes, the Danites will be after them, meaning the brethren in 
            self-defense.”
            <btn id="clickable11" className="footnote">11  </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>B.H. Roberts, “Chapter VII,” History of the Church of Jesus Christ of Latter-day Saints, 
              vol. 6, p. 155–180. 1912.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon Sampson Avard heard Joseph’s remarks and organized a vigilante group called the Danites. The Danites also referred to themselves as the Destroying Angels. 
            Later, Sampson would testify in court that Joseph and the First Presidency sanctioned the Danites. Sampson also testified that he taught those who followed him to 
            rob and plunder the Missouri Gentiles and that with their ill-gotten spoils, the Kingdom of God would be built. According to Albert Rockwood, a loyal Mormon 
            writing in October 1838, “The Companies are called Danites because the Prophet Daniel has said that the Saints shall take the kingdom and possess it forever.”
            <btn id="clickable12" className="footnote">12  </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Dean Jessee and David Whitaker, Winter 1998, “The Last Months of Mormonism in Missouri: The Albert Perry Rockwood Journal,” BYU Studies, 28.</Tooltip>  
 
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph’s involvement in Danite day-to-day activities is murky. (Good life advice: When organizing a secret society, keep your involvement secret.) However, the 
            church today agrees, Joseph knew about some of the destroying angels’ surreptitious pursuits. According to a church essay, “Historians generally concur that Joseph 
            Smith approved of the Danites but that he probably was not briefed on all their plans and likely did not sanction the full range of their activities.”
            <btn id="clickable13" className="footnote">13  </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>“Peace and Violence among the 19th Century Latter-Day Saints,” The Church of Jesus Christ of Latter-Day Saints.</Tooltip>  

          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph wrote in his journal, “We have a company of Danites in these times … to cleanse the Church of every great evil which has hitherto existed among us.”  
          <btn id="clickable14" className="footnote">14  </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Scott Faulring, An American Prophet's Record: The Diaries and Journals of Joseph Smith (2 ed.) 1989, p. 198.</Tooltip>  

            Cleanse the church? This means persecuting members until they were more obedient to Joseph and the cause of Zion. Mormon apostle Thomas Marsh left the church after 
            hearing reports of Danites destroying non-Mormon settlements. He was present at early Danite meetings and said that the Danites swore oaths “to support the heads of 
            the church in all things that they say or do, whether right or wrong.”
            <btn id="clickable15" className="footnote">15  </btn>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>Document, (1841), p. 58, Containing the Correspondence, Orders &c. in Relation to the Disturbances with the Mormons; And the Evidence Given Before the Hon. Austin A. King, Judge of the Fifth Judicial Circuit of the State of Missouri, at the Court-House in Richmond, in a Criminal Court of Inquiry, Begun November 12, 1838, on the Trial of Joseph Smith, and Others, for High Treason and Other Crimes Against the State., Fayette, Missouri: U.S. Government Printing Office.</Tooltip>  

          </p>
        </div>

        <div className='paragraph'>
          <p>This Danite “destroying angel” behavior is unbecoming of Christians – let alone the most righteous generation of Heavenly Father’s spirit children held in reserve to come into the world in the last days. But the Danites did not stop with disobedient Mormons. They soon set their sights on the Missourians.
          </p>
        </div>

        <h2 className="headlinePadding">First Presidency Counselor Calls for a “War of Extermination”</h2>

        <div className='paragraph'>
          <p>You hear much talk in the church about Governor Lilburn Boggs unjust and terrible Mormon extermination order. But you don’t hear the complete story and how it came to be. Before the Missourian governor’s Mormon extermination order, First Presidency Counselor Sidney Rigdon called for a “war of extermination” against the Missourians. On July 4, 1838, Sidney turned his attention away from the Mormon dissenters to the Missourians. He gave a speech declaring independence from all mobs and persecutions. Joseph endorsed the speech. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Sidney declared, “And that mob that comes on us to disturb us, it shall be between us and them a war of extermination; for we will follow them until the last drop 
            of their blood is spilled; or else they will have to exterminate us, for we will carry the seat of war to their own houses and their own families, and one party 
            or the other shall be utterly destroyed.”  
            <btn id="clickable16" className="footnote">16  </btn>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Stephen LeSueur, The 1838 Mormon War in Missouri, pp. 37–43, 1990.</Tooltip>  

            The First Presidency printed and distributed copies of Sidney’s speech. Brigham later remarked that Sidney’s speech was “the prime cause of our 
            troubles in Missouri.”
            <btn id="clickable17" className="footnote">17  </btn>
            <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>Times and Seasons, Oct. 1844.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>For the Danites, Sidney’s remarks were a spark to a powder keg, and tacit approval from church leadership to attack the Missouri mobs. As the Danites began to pillage and plunder, old tensions became even more inflamed. A Missouri mob began to harass Mormons, burning homes and plundering property. A group of Danites met at Adam-ondi-Ahman, Mormon headquarters in Daviess County. From there, Mormon apostle David Patten led a raid against Missourians at Gallatin, Millport, and Grindstone Forks. Upon hearing of the approaching Mormon military force, the townspeople deserted their homes. The Mormons burned stores and homes, then returned to Adam-ondi-Ahman and placed the stolen property in the bishop’s storehouse. (Didn’t God write on stone tablets, “Thou shalt not steal?”)
          </p>
        </div>

        <div className='paragraph'>
          <p>In church history you rarely hear the truth that the Mormons were often the aggressors. As a result of these un-Christlike actions, Mormon Apostles Thomas Marsh 
            and Orson Hyde left the church. They traveled to Richmond and swore out an affidavit concerning the existence of the Danites, and of a “destroying company” with 
            instructions to burn Richmond and Liberty. 
            <btn id="clickable18" className="footnote">18  </btn>
            <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Document (1841), p. 57-59, Document Containing the Correspondence, Orders &c. in Relation to the Disturbances with the Mormons; And the Evidence Given Before the Hon. Austin A. King, Judge of the Fifth Judicial Circuit of the State of Missouri, at the Court-House in Richmond, in a Criminal Court of Inquiry, Begun November 12, 1838, on the Trial of Joseph Smith, and Others, for High Treason and Other Crimes Against the State., Fayette, Missouri: U.S. Government Printing Office.</Tooltip> 
            
            This created a panic among the residents of Richmond and Liberty. Women, children, and property were ferried across the Missouri River. The state militias were put on alert and began patrols. Without orders, some of the militia members began visiting Mormon settlements, forcibly disarming and ordering Mormons to leave their homes.
          </p>
        </div>

        <div className='paragraph'>
          <p>One night, a Missouri militia captured three Mormons, who may have been acting as scouts. Word reached the Mormons at Far West that the Missourians intended to 
            execute these Mormon prisoners. In response, the Mormons assembled an armed rescue party led by Mormon apostle David Patten.  
            <btn id="clickable19" className="footnote">19  </btn>
            <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Document (1841), p. 57-59, Document Containing the Correspondence, Orders &c. in Relation to the Disturbances with the Mormons; And the Evidence Given Before the Hon. Austin A. King, Judge of the Fifth Judicial Circuit of the State of Missouri, at the Court-House in Richmond, in a Criminal Court of Inquiry, Begun November 12, 1838, on the Trial of Joseph Smith, and Others, for High Treason and Other Crimes Against the State., Fayette, Missouri: U.S. Government Printing Office.</Tooltip> 

            
            David had become known as “Captain Fear-not” for his fearlessness in attacking Missourians. At daybreak on October 25, 1838, David Patten and his group of Mormons encountered Missourian militia’s sentries. A firefight ensued. One sentry shot Patrick Obanion, a Mormon scout. Obanion later died. Under attack by the Mormons, the Missourian sentries fled to their camp and the militia formed a defensive position. 
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Mormon Charles Rich, the militia “fired upon us with all their guns.”  
          <btn id="clickable20" className="footnote">20  </btn>
          <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Alexander Baugh, A Call to Arms: The 1838 Mormon Defense of Northern Missouri, BYU Studies, 2000, p. 104.</Tooltip> 
            
            Patten, “Captain Fear-not,” decided to charge the militia, shouting the Mormon battle cry of “God and Liberty!” The Missourians were without swords and fled across the river. During the retreat, the Mormons continued to fire and one of the militia, Moses Rowland, was killed. During his charge, Patten “Captain Fear-not” was shot and killed, as well as two other Mormons. 
          </p>
        </div>

        <div className='paragraph'>
          <p>This Mormon attack on the militia escalated the Missouri-Mormon War. It prompted the governor to issue Executive Order 44, the Mormon Extermination Order, echoing First Presidency Counselor Sidney Rigdon’s words of extermination of the Missourians, stating “[t]he Mormons must be treated as enemies, and must be exterminated or driven from the state.” Two thousand five hundred Missouri militiamen were called out to put down the Mormon rebellion. Eventually, Mormon leaders were captured and the Mormons forced to leave the state. 
          </p>
        </div>

        <div className='paragraph'>
          <p>In Missouri, the Mormons had committed a variety of crimes – despite claiming to be God’s chosen people. This letter from Major-General John Clark to Missouri Governor Lilburn Boggs is illustrative of the Mormon’s activities. 
          </p>
        </div>

        <div className='paragraph'>
          <p>“To His Excellency L. W. Boggs: Sir: I find, by inquiry, that of all the enormities we have heard charged against these people (the Mormons), many of which charges 
            we looked upon as the offspring of prejudice on the part of our citizens, the half has not yet been told! There is no crime, from treason down to petty larceny, 
            but these people, or a majority of them, have been guilty of, all, too, under the counsel of Joseph Smith, Jr., the Prophet! They have committed treason, murder, 
            arson, burglary, robbery, larceny and perjury! They have societies formed under the most binding covenants in form, and the most horrid oaths, to circumvent the 
            laws, and put them at defiance, and to plunder, and burn, and murder, and divide the spoils for the use of the church. This is what they call Danite Society.”
            <btn id="clickable21" className="footnote">21  </btn>
            <Tooltip anchorSelect="#clickable21" className="footnote-size" clickable>Letter from John Clark, Major General to Governor of Missouri Lilburn W. Boggs, Headquarters of the Militia, Employed Against the Mormons, Richmond, Nov. 10, 1838. Copy included in “Horrible Massacred of Emigrants!!” The Mountain Meadows Massacre in Public Discourse, p. 322, 1903.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>All this suffering and bloodshed because Joseph believed he was to build a holy city in Jackson County. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon church leaders were eventually captured at Far West. Major General Samuel Lucas had marched the state militia to Far West and laid siege to the Mormon headquarters. The Mormons were to give up their leaders for trial and to surrender their arms. Every Mormon who had taken up arms was required to sell his or her property to compensate for the damages to Missourian property and fund the state militia. Finally, the Mormons who had taken up arms were to leave the state.
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph and other Mormon leaders rode to the Missouri militia encampment and were arrested. The Missouri militia were allowed to ransack the city to search for 
            weapons. According to Brigham, “[T]hey commenced their ravages by plundering the citizens of their bedding, clothing, money, wearing apparel, and everything of 
            value they could lay their hands upon, and also attempting to violate the chastity of the women in sight of their husbands and friends, under the pretense of 
            hunting for prisoners and arms. The soldiers shot down our oxen, cows, hogs and fowls, at our own doors, taking part away and leaving the rest to 
            rot in the streets. The soldiers also turned their horses into our fields of corn.”
            <btn id="clickable22" className="footnote">22  </btn>
            <Tooltip anchorSelect="#clickable22" className="footnote-size" clickable>Brigham Young, The Manuscript History of Brigham Young, taken from the Millennial Star, 1801–1835.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>About 60 men, including Joseph and Sidney, were turned over to a civil court. The court of inquiry began November 12, 1838. 
            All but a few of the Mormon prisoners were released, but Joseph Smith, Sidney Rigdon, Lyman Wight, Caleb Baldwin, Hyrum Smith 
            and Alexander McRae were held in Liberty Jail on charges of treason against the state, murder, arson, burglary, 
            robbery and larceny.  
            <btn id="clickable23" className="footnote">23  </btn>
            <Tooltip anchorSelect="#clickable23" className="footnote-size" clickable>Office of the Secretary of State of Missouri 1841, pp. 153–163.</Tooltip>  

            After six months, during a transfer to another prison in the spring of 1839, Joseph escaped. He headed for Nauvoo on the banks of the Mississippi River.
          </p>
        </div>

        <div className='paragraph'>
          <p>Despite the revelations containing the Lord’s promises to fight their battles and establish Zion as a place of refuge in the last days preparatory to the Second Coming, why was there so much difficulty, death, and violence? Whereas the Church teaches that the Mormons were always a persecuted people for their devotion to revealed truth, history demonstrates that the Mormons brought much of the persecution upon themselves, chasing after false dreams of establishing Zion in the latter days as the Old Testament prophesies. If establishing Zion in Jackson County was really God’s intention, He would have done it by now. Therefore, this was a pipe dream of Joseph feeding his delusions of grandeur. 
          </p>
        </div>

        <div className='paragraph'>
          <p>In the early 1830s, by settling in Missouri, the several thousand Mormons believed they were following the revelations of a prophet to inhabit the promised land – just like the Israelites following Moses to the promised land. The actions of Mormon leaders inflamed a tinderbox of tensions. Sidney’s salt sermon, calling for the violent treatment of dissenting Mormons, and his July 4 speech, calling for the extermination of Missouri mobs, led to the Mormons’ attempt to build Zion to lie in bloody, smoldering ruins.
          </p>
        </div>

        <h2 className="headlinePadding">Zion’s Failure: Blame the Members</h2>

        <div className='paragraph'>
          <p>Again, where is God who claimed He would fight the Mormons’ battles until Zion was established? By 1838, the Mormons had been 
            driven twice from their promised land in Missouri. They were unable to build their “city of refuge, a place of safety for the 
            saints of the Most High God.”  
            <btn id="clickable24" className="footnote">24  </btn>
            <Tooltip anchorSelect="#clickable24" className="footnote-size" clickable>D&C 45:66-67.</Tooltip> 
            
            The Mormons must have been discouraged as they were promised in an 1832 revelation that in their 
            lifetimes they would “… stand upon Mount Zion … which temple, shall be reared in this generation.”  
            <btn id="clickable25" className="footnote">25  </btn>
            <Tooltip anchorSelect="#clickable25" className="footnote-size" clickable>D&C 97:19.</Tooltip>
            
            If a generation is 20 to 30 years,  
            <btn id="clickable26" className="footnote">26  </btn>
            <Tooltip anchorSelect="#clickable26" className="footnote-size" clickable>Jack Fenner, 28 March 2005, Cross-Cultural Estimation of the Human Generation Interval for Use in Genetics-Based Population Divergence Studies, American Journal of Physical Anthropology. 128: 415-423.</Tooltip>
            
            and this revelation was given in 1832, the Mormons would establish Zion on the appointed spot in Jackson County, between 1852 and 1862. 
          </p>
        </div>

        <div className='paragraph'>
          <p>But even with God commanding the Mormons to build it, Joseph’s holy city never materialized. What is a Mormon to make of 
            Joseph’s revelations from God regarding the establishment of Zion by the 1860s?  Regarding divine will, Joseph revealed, 
            “… there is nothing that the Lord thy God shall take in his heart to do but what he will do it.”  
            <btn id="clickable27" className="footnote">27  </btn>
            <Tooltip anchorSelect="#clickable27" className="footnote-size" clickable>Abraham 3:17.</Tooltip>
            
            And revealed, “What I the Lord have spoken, I have spoken … and though the heavens and the earth pass away, my word shall 
            not pass away, but shall all be fulfilled.”
            <btn id="clickable28" className="footnote">28  </btn>
            <Tooltip anchorSelect="#clickable28" className="footnote-size" clickable>D&C 1:38.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>In the Old Testament, God revealed, “I will raise them up a Prophet from among their brethren … and will put my words in 
            his mouth … When a prophet speaketh in the name of the Lord, if the thing follows not, nor come to pass, that is the thing 
            which the Lord hath not spoken.”  
            <btn id="clickable29" className="footnote">29  </btn>
            <Tooltip anchorSelect="#clickable29" className="footnote-size" clickable>Duet. 18:18, 22.</Tooltip>
            
            That is troubling since Joseph claimed to be a prophet! Why all the failed promises from the Lord to help the Mormons 
            establish Zion? “… Mine angels shall go up before you, and also my presence, and in time ye shall possess the goodly land.”  
            <btn id="clickable30" className="footnote">30  </btn>
            <Tooltip anchorSelect="#clickable30" className="footnote-size" clickable>D&C 103:15-22.</Tooltip>
            
            “Behold they [the Mormons] shall … begin to prevail against mine enemies from this very hour … they shall never cease to 
            prevail until the kingdoms of the world are subdued under my feet.”  
            <btn id="clickable31" className="footnote">31  </btn>
            <Tooltip anchorSelect="#clickable31" className="footnote-size" clickable>D&C 103:6-8.</Tooltip>
            
            “I will pour out my wrath [upon the Missourians] without measure in mine own time.” 
            <btn id="clickable32" className="footnote">32  </btn>
            <Tooltip anchorSelect="#clickable32" className="footnote-size" clickable>D&C 103:1-2.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph also revealed in the 1830s that the Lord’s coming to Zion was imminent, and the establishment of the holy city would 
            be hastened. Joseph revealed in November 1830, “… the time is soon at hand that I shall come in a cloud with power and great 
            glory. And it shall be a great day at the time of my coming, for all nations shall tremble.”  
            <btn id="clickable33" className="footnote">33  </btn>
            <Tooltip anchorSelect="#clickable33" className="footnote-size" clickable>D&C 34:7-8.</Tooltip> 
            
            Joseph revealed in June 1831, “… assemble yourselves together to rejoice upon the land of Missouri, which is the land of 
            your inheritance … I, the Lord, will hasten the city in its time.”  
            <btn id="clickable34" className="footnote">34  </btn>
            <Tooltip anchorSelect="#clickable34" className="footnote-size" clickable>D&C 52:42.</Tooltip> 
            
            Joseph revealed in November 1831, “… the day speedily cometh; the hour … is nigh at hand … and the Lord … shall come down in 
            judgment upon Idumea, or the world.”  
            <btn id="clickable35" className="footnote">35  </btn>
            <Tooltip anchorSelect="#clickable35" className="footnote-size" clickable>D&C 1:35-36.</Tooltip> 
            
            Joseph revealed in September 1832, “… ye cannot see it now, yet a little while and ye shall see it … and that I will come 
            and reign with my people.”
            <btn id="clickable36" className="footnote">36  </btn>
            <Tooltip anchorSelect="#clickable36" className="footnote-size" clickable>D&C 84:119.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Naturally, the 1830 Mormons looked to Joseph for why the promises of the Lord had not been fulfilled. And, just as a 
            visionary treasure seeker blames his treasure seeking companions for not following instructions, Joseph, through God, 
            blamed the Mormons for their unrighteousness. Joseph revealed in December 1833, blaming his followers for their defeat 
            in Missouri,  “I, the Lord, have suffered the affliction to come upon them … in consequence of their transgressions … 
            there were jarrings, and contentions, and envyings, and strifes, and lustful and covetous desires among them … 
            They were slow to hearken unto the voice of the Lord their God; therefore, the Lord their God is slow to hearken unto 
            their prayers, to answer them in the day of their trouble.”
            <btn id="clickable37" className="footnote">37  </btn>
            <Tooltip anchorSelect="#clickable37" className="footnote-size" clickable>D&C 101:1-2, 6-7.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Then in the revelation, the Lord shows compassion. “… notwithstanding their sins, my bowels are filled with compassion 
            towards them. I will not utterly cast them off … Mine indignation is soon to be poured out without measure upon all nations.”
            <btn id="clickable38" className="footnote">38  </btn>
            <Tooltip anchorSelect="#clickable38" className="footnote-size" clickable>D&C 101:10-12.</Tooltip>
            
              The Lord promises crowns (think Kingdom of God) to the obedient. “And all they who have given their lives for my name 
              shall be crowned. Therefore, let your hearts be comforted concerning Zion; for all flesh is in mine hands; be still and 
              know that I am God.”  
              <btn id="clickable39" className="footnote">39  </btn>
              <Tooltip anchorSelect="#clickable39" className="footnote-size" clickable>D&C 101:14-16.</Tooltip>
              
              Joseph had promised the Mormons inheritances (property) in Missouri that they would possess forever. “Zion shall not be 
              moved out of her place, notwithstanding her children are scattered. They that remain, and are pure in heart, shall return, 
              and come to their inheritances … to build up the waste places of Zion.”
              <btn id="clickable40" className="footnote">40  </btn>
              <Tooltip anchorSelect="#clickable40" className="footnote-size" clickable>D&C 101:17-18.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Then, in the revelation, the Lord commands them to prepare for great spiritual manifestations, referencing the great 
            Millennial day. “And prepare for the revelation which is to come, when the veil of the covering of my temple, in my 
            tabernacle, which hideth the earth, shall be taken off, and all flesh shall see me together … and all things shall 
            become new, that my knowledge and glory may dwell upon all the earth.”  
            <btn id="clickable41" className="footnote">41  </btn>
            <Tooltip anchorSelect="#clickable41" className="footnote-size" clickable>D&C 101:23-27.</Tooltip>
            
            Then, Christ turns his focus to Satan and death. “And in that day Satan shall not have power to tempt any man. And there 
            shall be no sorrow because there is no death. In that day an infant shall not die until he is old; and his life shall be 
            as the age of a tree; And when he dies he shall not sleep, that is to say in the earth, but shall be changed in the twinkling 
            of an eye, and shall be caught up, and his rest shall be glorious.”
            <btn id="clickable42" className="footnote">42  </btn>
            <Tooltip anchorSelect="#clickable42" className="footnote-size" clickable>D&C 101:28-31.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Then the Lord concludes with a promise for the persecuted Mormons, “And all they who suffer persecution for my name, and 
            endure in faith, though they are called to lay down their lives for my sake yet shall they partake of all this glory. 
            Wherefore, fear not even unto death; for in this world your joy is not full, but in me your joy is full.”  
            <btn id="clickable43" className="footnote">43  </btn>
            <Tooltip anchorSelect="#clickable43" className="footnote-size" clickable>D&C 101:35-36.</Tooltip>
            
            With this revelation, Joseph is saying to the defeated Mormons, “stay with me, great promises await you.”
          </p>
        </div>

        <div className='paragraph'>
          <p>In 1834, in another revelation, Joseph stated that the conditions for the redemption of Zion were not yet fulfilled, 
            and that the establishment of Zion must “wait for a little season.”  
            <btn id="clickable44" className="footnote">44  </btn>
            <Tooltip anchorSelect="#clickable44" className="footnote-size" clickable>D&C 105:9.</Tooltip>
            
            “Behold … were it not for the transgressions of my people … they might have been redeemed even now. But behold, they have 
            not learned to be obedient to the things which I required at their hands but are full of all manner of evil.”  
            <btn id="clickable45" className="footnote">45  </btn>
            <Tooltip anchorSelect="#clickable45" className="footnote-size" clickable>D&C 105:2-4.</Tooltip>
            
            At one time, Joseph stated that he had trouble discerning the mind of God regarding the failure to establish the holy city of 
            Zion, “I cannot learn from any communication by the Spirit to me, that Zion has forfeited her claim to a celestial crown, 
            notwithstanding the Lord has caused her to be thus afflicted, except it may be some individuals, who have walked in 
            disobedience, and forsaken the new covenant … 
          </p>
        </div>

        <div className='paragraph'>
          <p>“I have always expected that Zion would suffer some affliction ... But I would remind you of a certain clause in one which 
            says, that after much tribulation cometh the blessing (D&C 58:4) … in the due time of the Lord, [Zion] will be redeemed; 
            but how many will be the days … the Lord has kept hid from my eyes … And when I inquire concerning this subject, the voice 
            of the Lord is: Be still, and know that I am God! All those who suffer for my name shall reign (think Kingdom of God) with me.”
            <btn id="clickable46" className="footnote">46  </btn>
            <Tooltip anchorSelect="#clickable46" className="footnote-size" clickable>History of the Church, vol. 1, p. 453-54; Letter from Joseph Smith to Edward Partridge and others; Dec. 10, 1833.</Tooltip>

              Strange that Christ, who had been revealing his designs for the establishment of Zion for years, had suddenly fallen silent. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Perhaps to appease the Mormons and shift blame for the failed attempts to establish Zion, in January 1841, Joseph 
            revealed Christ’s anger and bluster, saying He would punish the rulers of the world for rejecting His servants. 
            “Call ye, therefore, upon them with loud proclamation … for they are as grass, and all their glory as the flower 
            thereof which soon falleth … that I may visit them in the day of visitation, when I shall unveil the face of my 
            covering … where there is gnashing of teeth, if they reject my servants and my testimony which I have revealed unto them. 
            I will visit and soften their hearts … that ye may find grace in their eyes, that they may come to the light of truth, 
            and the Gentiles to the exaltation or lifting up of Zion.”
            <btn id="clickable47" className="footnote">47  </btn>
            <Tooltip anchorSelect="#clickable47" className="footnote-size" clickable>D&C 124:7-9.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>In this revelation, Joseph revealed that the day of God’s visitation cometh speedily, and that the rulers of the earth 
            are commanded to bring their gold and silver to Zion. “For the day of my visitation cometh speedily … Awake, O kings of the 
            earth! Come ye, O, come ye, with your gold and your silver, to the help of my people, to the house of the daughters of Zion.”  
            <btn id="clickable48" className="footnote">48  </btn>
            <Tooltip anchorSelect="#clickable48" className="footnote-size" clickable>D&C 124:10-11.</Tooltip>
            
            Third Mormon prophet John Taylor stated, “Kings and princes will come and gaze upon the glory of Zion … we are building 
            up the kingdom of God, and by and by the kings and princes of the earth will come, and gaze upon the glory of Zion.”
            <btn id="clickable49" className="footnote">49  </btn>
            <Tooltip anchorSelect="#clickable49" className="footnote-size" clickable>John Taylor, Journal of Discourses, August 22, 1852, vol. 1, p. 26.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>After all their sufferings and losses, as evidenced by statements from his followers, the early Mormons continued to believe Joseph was speaking for God – with hope of returning to Jackson County burning brightly in their hearts. To regroup, the Mormons next set up residence in Nauvoo until 1847. Eventually, they settled in Utah, where the idea of Daniel’s prophecy of a future all-powerful Mormon Kingdom of God remained in the hearts of Mormon leaders, and the rhetoric to church members continued for decades – unfulfilled.
          </p>
        </div>

        </div>

        <div className="chapterFooter">
          <Link to="/Chap21">Previous</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap23">Next</Link>
      </div>
      
    </div>
  )
}

export default Chap22