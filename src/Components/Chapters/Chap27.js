import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import bloodatonement from '../../Assets/Img/bloodatonement.jpg'

const Chap27 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
        <Link to="/Chap26">Previous</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap28">Next</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 27: Mormon Reformation and Blood Atonement</h1>

      <img src={bloodatonement} className='image' alt='Blood Atonement sacrifice of man' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>By the mid-1850s in Utah, things began to improve economically. But in 1855, a drought struck the Salt Lake Valley, diminishing crop yields. Basic necessities were scarce and costly. In September 1856, misunderstanding the cycles of nature, Brigham and other church leaders assumed the Mormons had incurred God’s wrath due to their disobedience – a false pattern familiar in the Old Testament and Book of Mormon. Church leaders blamed the scarcity of food on the sins of the Mormons and launched the Mormon Reformation. Its purpose was to rededicate Mormons to living their religion and to obey their leaders. This was not the Zion the early Mormons had been promised.
          </p>
        </div>

        <div className='paragraph'>
          <p>To rectify the problem, Mormon leaders traveled through settlements, berating congregations with fiery sermons calling for repentance and emphasizing the need for purification. As a result, Mormons came forward to repent and be rebaptized. To demonstrate loyalty to their leaders, men requested to be advanced in priesthood offices and to take more wives. At one time, 500 people presented themselves for re-baptism as a symbol of their determination to reform their lives. On December 30, 1856, the all-Mormon Utah territorial legislature was rebaptized for the remission of their sins.
          </p>
        </div>

        <div className='paragraph'>
          <p>The Mormons were told to live the “celestial law” or suffer the consequences, which meant facing physical violence. 
            Brigham stated, “The time is coming when justice will be laid to the line and righteousness to the plummet; when we shall take 
            the old broadsword (a sword with a wide blade used for cutting rather than thrusting) and ask, Are you for God? And if you 
            are not heartily on the Lord’s side, you will be hewn down.”  
            <btn id="clickable1" className="footnote">1 </btn>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>Brigham Young, Journal of Discourses, March 2, 1856, vol. 3, p. 221.</Tooltip> 
            
            Brigham warned the Mormons that the time “is not far distant” when the church would enforce the law of blood atonement 
            against covenant breakers. 
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Brigham Young, Journal of Discourses, March 2, 1856, vol. 3, p. 221–226.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>First Presidency Counselor Jedediah Grant asked, “What disposition ought the people of God to make of covenant breakers?” 
            He stated they should be put to death.  
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>Jedediah Grant, Journal of Discourses, March 12, 1854, vol. 4, p. 20. </Tooltip> 
 
            Mormon apostle Parley Pratt pressed the Utah Territory legislature to “… make death the penalty for fornication and adultery.”
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Parley Pratt, December 31, 1855, Marriage and Morals in Utah, Deseret News, (published January 16, 1856), 5 (45), pp. 356-57.</Tooltip> 
            
            First Presidency Counselor Heber Kimball said of adulterers “… they are worthy of death, and they will get it … God has 
            spoken from the heavens … we shall make a public example of those characters.”
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, January 11, 1857, vol. 4, p. 164–81.</Tooltip> 
          </p>
        </div>

        <h2 className="headlinePadding">Blood Atonement</h2>

        <div className='paragraph'>
          <p>The Book of Mormon teaches “… then are ye sanctified in Christ by the grace of God, through the shedding of the blood of 
            Christ … unto the remission of your sins, that ye become holy, without spot.”  
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>Moroni 10:33.</Tooltip> 

            However, Mormonism’s blood atonement meant that, in some cases of sin, the “blood of Christ” was insufficient. The rationale 
            of Blood Atonement was that it was more charitable to sacrifice a life than to see a person endure eternal torment in the 
            afterlife. If sins were extremely heinous, a person should be killed, and their blood shed upon the ground as a sacrificial 
            offering. The sinner voluntarily chose to practice the doctrine, but it could be enforced by church leaders.  
            <btn id="clickable7" className="footnote">7 </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Lowell Snow, Blood Atonement, Encyclopedia of Mormonism.</Tooltip> 

            The historical record shows that in Utah during the 1850s and 1860s, blood atonement was exacted for sins of apostasy, 
            theft, fornication, and adultery.
            <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Michael Quinn, (2001). Same-Sex Dynamics Among Nineteenth Century Americans: A Mormon Example, P. 269.</Tooltip> 

          </p>
        </div>

        <div className='paragraph'>
          <p>Blood atonement is most often associated with the church under Brigham’s leadership; however, the idea originated with 
            Joseph. He taught that if he could enact a death penalty law, “I am opposed to hanging, even if a man kill another, I 
            will shoot him, or cut off his head, spill his blood on the ground and let the smoke ascend thereof up to God ...”  
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>B.H. Roberts, ed. (1909), History of the Church of Jesus Christ of Latter-day Saints, vol. 5, p. 296. </Tooltip> 
            
            Joseph also commented that the common execution method in Christian nations was hanging, “instead of blood for blood according 
            to the law of heaven.”  
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>Statement found in Roberts 1902, p. 435, which was written by Willard Richards in 1843. Jessee, p. 441.</Tooltip> 
            
            One year after Joseph’s death, in Nauvoo, Brigham approved of a Mormon being killed as “a deed of charity” because “he might 
            now possibly be redeemed in the eternal world.”
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>William Smith, October 29, 1845, A Proclamation, Warsaw Signal, Warsaw, Illinois, 2 (32).</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>During the exodus west, Brigham threatened adherents who had stolen supplies that “… when a man is found to be a thief ... 
            cut his throat & thro’ him in the River.”  
            <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Diary of Thomas Bullock, 13 December 184.</Tooltip> 
  
            Brigham also stated that decapitation of repeated sinners “… is the law of God and it shall be executed.”  
            <btn id="clickable13" className="footnote">13 </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>Diary of Willard Richards, December 20, 1846; Watson, Manuscript History of Brigham Young, 1846-1847, p. 480.</Tooltip> 
            
            Brigham stated, “… a thief should not live in the Valley, for he would cut off their heads or be the means of having it done 
            as the Lord lived.”
            <btn id="clickable14" className="footnote">14 </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Diary of Mary Haskin Parker Richards, 16 April 1848.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>In meetings from the stand, Mormons, on their own accord, were encouraged to take blood atonement into their own hands. 
            Brigham stated, “… [if] you found your brother in bed with your wife, and put a javelin through both of them, you would be 
            justified, and they would atone for their sins, and be received into the kingdom of God.”  
            <btn id="clickable15" className="footnote">15 </btn>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>Brigham Young, Journal of Discourses, March 2, 1856, vol. 3, p. 221–226.</Tooltip> 
 
            Brigham continued, “under such circumstances, I have no wife whom I love so well that I would not put a javelin through her 
            heart, and I would do it with clean hands.”  
            <btn id="clickable16" className="footnote">16 </btn>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Brigham Young, Journal of Discourses, March 2, 1856, vol. 3, p. 247.</Tooltip> 

            Brigham’s rationale? “The blood of Christ will never wipe that out; your own blood must atone for it.”
            <btn id="clickable17" className="footnote">17 </btn>
            <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>Brigham Young, Journal of Discourses, March 2, 1856, vol. 3, p. 247.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Denying the forgiveness of sins through baptism, First Presidency Counselor Jedediah Grant stated that there were many 
            covenant-breaking members in the church “who have committed sins that cannot be forgiven through baptism.” Jedediah said 
            these people will, “… need to have their bloodshed, for water will not do, their sins are too deep a dye.” 
            Jedediah advised these people to volunteer to have a committee appointed by the First Presidency to select a place and 
            “shed their blood.”  
            <btn id="clickable18" className="footnote">18 </btn>
            <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Jedediah Grant, Journal of Discourses, September 21, 1856, vol. 4, p. 49-51.</Tooltip> 
            
            Brigham agreed saying, “There are sins that men commit for which they cannot receive forgiveness in this world, or in that which is to come, and if they had their eyes open to see their true condition, they would be perfectly willing to have their blood spilt upon the ground, that the smoke thereof might ascend to heaven as an offering for their sins, and the smoking incense would atone for their sins.” 
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham claimed that men had actually come to him and offered their blood to atone for their sins.  
          <btn id="clickable19" className="footnote">19 </btn>
            <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Brigham Young, Journal of Discourses, March 2, 1856, vol. 3, p. 221-226.</Tooltip> 
            
            Brigham said that if a person “overtaken in a gross fault” truly understood that “by having his blood shed he will atone 
            for that sin, and be saved and exalted with the Gods,” he would voluntarily ask to have his blood shed so he could gain his 
            exaltation. Brigham framed blood atonement as an act of selfless love. “Will you love that man or woman well enough to 
            shed their blood?” As a matter of love, he said, “… if [your neighbor] needs help, help him; and if he wants salvation and 
            it is necessary to spill his blood on the earth in order that he may be saved, spill it.”
            <btn id="clickable20" className="footnote">20 </btn>
            <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Brigham Young, Journal of Discourses, February 8, 1857, vol. 4, p. 215-219.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Examples of blood atonement include Thomas Coleman, Rasmos Anderson, Henry Jones and his mother, and others. Look them up.
          </p>
        </div>

        <h2 className="headlinePadding">Mormon Attitudes towards “Gentiles”</h2>

        <div className='paragraph'>
          <p>For the Mormon pioneers arriving in Utah, the Great Basin was their new promised land. They were hundreds of miles from the conflict and persecutions they had experienced in Missouri and Illinois. Having endured past persecutions together forged strong bonds among the Mormon community. This persecution narrative was frequently rehearsed by Brigham and other church leaders. Over the pulpit they would recount how Mormons had been unjustly driven from their inheritances in Missouri and would one day return. With God’s help their Gentile enemies would be vanquished and the Mormons would build Zion so Christ would return.
          </p>
        </div>

        <div className='paragraph'>
          <p>The Mormons were an insular group: the House of Israel in the latter days, God’s chosen people bearing His holy priesthood. With the influx of converts year after year into Salt Lake, the Mormon theocracy was growing into a kingdom Joseph desired. As settlements were built, a strong sense of unity and community developed. Mormons were not the only people living in the Utah territory. Non-Mormon groups included U.S. government authorities sent to administer in the courts and other offices, Native American tribes, European explorers, trappers and traders, non-Mormon immigrants coming to farm and work in the mines, etc. Due to the Mormons’ cohesiveness, and authoritarianism from its leaders, there was a definite boundary formed between the Mormon and Gentiles – an invisible wall of separation, an “us versus them” mentality.
          </p>
        </div>

        <div className='paragraph'>
          <p>Conflicts naturally arose between the two groups as Mormon leaders attempted to enforce their dominance as leaders of the Mormon Kingdom of God on earth in state politics, economics, and social life. This would further solidify the boundary between Mormon and Gentile. However, the Mormon/Gentile boundary would begin to slowly dissolve when polygamy was abandoned in order for Utah to gain statehood in 1896, and the church lessened its authoritarian stance. 
          </p>
        </div>

        <div className='paragraph'>
          <p>From the beginning, Joseph set up the Gentiles as the enemy if they rejected the restored gospel of the latter-day. In the Book 
            of Mormon while speaking to the Nephites, Christ prophesied of the last days, “At that day when the Gentiles … shall reject the 
            fulness of my gospel … and shall be filled with all manner of lyings, and of deceits, and of mischiefs, and all manner of 
            hypocrisy, and murders, and priest crafts, and whoredoms, and of secret abominations … I will bring the fulness of my gospel from 
            among them.”
            <btn id="clickable21" className="footnote">21 </btn>
            <Tooltip anchorSelect="#clickable21" className="footnote-size" clickable>3 Nephi 16:10-12.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Themes of vengeance upon wicked Gentiles, blood oaths in the temple, and the insanity of blood atonement were preached by 
            Mormon leaders over the pulpit. First Presidency Counselor Jedediah Grant stated, “It is a stern fact that the people of 
            the United States have shed the blood of the Prophets, driven out the Saints of God ... consequently I look for the Lord to 
            use His whip on the refractory son called ‘Uncle Sam.’”
            <btn id="clickable22" className="footnote">22 </btn>
            <Tooltip anchorSelect="#clickable22" className="footnote-size" clickable>Jedediah Grant, Journal of Discourses, April 2, 1854, vol. 2. p. 148–49.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Vengeance upon the Gentiles of the United States was a covenant built into the Mormon temple endowment. In the ceremony, 
            Mormons took an oath requiring a “private, immediate duty to avenge the death of the Prophet and Martyr, Joseph Smith.”  
            <btn id="clickable23" className="footnote">23 </btn>
            <Tooltip anchorSelect="#clickable23" className="footnote-size" clickable>Diary of Heber Kimball, December 21, 1845; Beadle 1870, p. 496–97; George Cannon, Daily Journal of Abraham H. Cannon, December 6, 1889, p. 205.</Tooltip> 
            
            In 1904, 60 years after the death of Joseph and Hyrum, several witnesses said that the oath as it then existed was that 
            temple participants would “…  never cease to pray that God would avenge the blood of the prophets on this nation” and that 
            they would teach this practice to their posterity “unto the 3rd and 4th generation.”
            <btn id="clickable24" className="footnote">24 </btn>
            <Tooltip anchorSelect="#clickable24" className="footnote-size" clickable>James Buerger, The Mysteries of Godliness, 2002 p. 134, The oath was deleted from the ceremony in the early 20th century.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>As a result of this oath, at least two Mormon apostles considered it their religious duty to kill the Joseph’s and Hyrum’s 
            murderers if they ever came upon them. First Presidency Counselor Heber Kimball said that he had, “covenanted, and will never 
            rest ... until those men who killed Joseph & Hyrum have been wiped out of the earth.”  
            <btn id="clickable25" className="footnote">25 </btn>
            <Tooltip anchorSelect="#clickable25" className="footnote-size" clickable>Diary of Heber Kimball, December 21, 1845.</Tooltip> 

            Mormon apostle George Cannon stated that he understood that his endowment in Nauvoo included “an oath against the murders of 
            the Prophet Joseph as well as other prophets, and if he had ever met any of those who had taken a hand in that massacre he 
            would undoubtedly have attempted to avenge the blood of the Martyrs.”
            <btn id="clickable26" className="footnote">26 </btn>
            <Tooltip anchorSelect="#clickable26" className="footnote-size" clickable>Daily Journal of Abraham H. Cannon, December 6, 1889, p. 205.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon William Dame received a patriarchal blessing in 1854 stating that he would “be called to act at the head of a 
            portion of thy Brethren and of the Lamanites in the redemption of Zion and the avenging of the blood of the prophets 
            upon them that dwell on the earth.”  
            <btn id="clickable27" className="footnote">27 </btn>
            <Tooltip anchorSelect="#clickable27" className="footnote-size" clickable>See Patriarchal blessing of William H. Dame, February 20, 1854, in Harold W. Pease, 
            “The Life and Works of William Horne Dame,” M.A. thesis, BYU, 1971, pp. 64–66.</Tooltip> 

            In 1857, Philip Klingensmith was blessed that he would participate in “avenging the blood of Brother Joseph.”  
            <btn id="clickable28" className="footnote">28 </btn>
            <Tooltip anchorSelect="#clickable28" className="footnote-size" clickable>See Patriarchal blessing of Philip Klingensmith, Anna Jean Backus, Mountain Meadows Witness: The Life and Times of Bishop Philip Klingensmith (Spokane: Arthur H. Clark Co., 1995), pp. 118, 124; Scott, Malinda Cameron (1877) Malinda (Cameron) Scott Thurston Deposition, Mountain Meadows Association.</Tooltip> 
            
            Both William and Philip participated in the Mountain Meadows Massacre.
          </p>
        </div>

        <h2 className="headlinePadding">Mountain Meadows Massacre</h2>

        <div className='paragraph'>
          <p>Violent rhetoric preached against the Gentiles in a religious context had consequences. It created an environment that led to Mormons killing 120 Gentiles in the Mountain Meadows Massacre. 
          </p>
        </div>

        <div className='paragraph'>
          <p>Several months before the massacre, Mormon apostle Parley Pratt was shot and killed in Arkansas by Hector McLean. 
            Parley had married Hector’s estranged wife Eleanor as his twelfth plural wife. Hector and Eleanor were legally married at the 
            time of her celestial marriage to Parley. Upon Parley’s murder, Mormon leaders proclaimed him a martyr for polygamy, with 
            Brigham stating, “Nothing has happened so hard to reconcile my mind to since the death of Joseph.”  
            <btn id="clickable29" className="footnote">29 </btn>
            <Tooltip anchorSelect="#clickable29" className="footnote-size" clickable>Millennial Star, vol. 19, Murder of Parley P. Pratt, One of the Twelve Apostles of The Church of Jesus Christ of Latter-Day Saints.</Tooltip> 
            
            The Mormons held the people of Arkansas responsible.  
            <btn id="clickable30" className="footnote">30 </btn>
            <Tooltip anchorSelect="#clickable30" className="footnote-size" clickable>Juanita Brooks, 1962, [1st pub. 1950]. The Mountain Meadows Massacre, p. 36-37.</Tooltip> 
            
            “It was in accordance with Mormon policy to hold every Arkansan accountable for Pratt’s death, just as every Missourian was
             hated because of the expulsion of the church from that state.”
             <btn id="clickable31" className="footnote">31 </btn>
            <Tooltip anchorSelect="#clickable31" className="footnote-size" clickable>William Linn, 1902, The Story of the Mormons, p. 519-520.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>On 11 September 1857, a Mormon militia dressed as Native Americans attacked an Arkansan wagon train traveling through Utah. The Mormons butchered all the men, women, and children aged six and older. The 17 surviving children were adopted by Mormon families as part of the cover-up. The Mormons buried some of the victims. Other victims were left to the wild animals and weather. The victims’ possessions were auctioned off among the Mormons. Only after the U.S. Army stumbled upon the bleached bones was the bloody incident discovered. An investigation resulted in nine indictments in 1874. Due to the coverup, only one Mormon, John Lee, was tried in court. He was found guilty after two trials and died by firing squad.
          </p>
        </div>

        <div className='paragraph'>
          <p>The wagon train from Arkansas attempted to restock its supplies in Salt Lake City. But the Mormons refused them. Traveling south, Mormon Jacob Hamblin suggested the wagon train rest their cattle at Mountain Meadows. On 7 September, Mormons dress as Native Americans attacked the pioneer party. The people defended themselves by circling wagons and digging shallow trenches. Seven people were killed and 16 wounded during the opening attack. The Mormons continued to attack for five days. The besieged families had no access to food or water. Their ammunition became depleted.
          </p>
        </div>

        <div className='paragraph'>
          <p>On September 11, two Mormons approached the wagons with a flag of truce. Indian Agent and Mormon leader John Lee told the emigrants that they had negotiated a truce with the Native Americans who had attacked them. Relieved, the people came out from their wagons. The men were separated from the women and children. A signal was given. Then at point blank range, the Mormons turned and shot the male members of the party. Women and children hid in nearby bushes and ravines. These faithful priesthood holders, reserved to come forth on the earth in the last days to be part of the Kingdom of God, then bludgeoned these innocents with hatchets and clubs. 
          </p>
        </div>

        <div className='paragraph'>
          <p>The Mormons were sworn to secrecy and a plan was set to blame the massacre on the Native Americans. The Mormons confiscated 
            the emigrants’ valuables and cattle. Some cattle were taken to Salt Lake City and sold or traded. The remaining personal 
            property was taken to the tithing house at Cedar City and auctioned off to local Mormons.
            <btn id="clickable32" className="footnote">32 </btn>
            <Tooltip anchorSelect="#clickable32" className="footnote-size" clickable>Philip Klingensmith, September 5, 1872, Written at Lincoln County, Nevada. Dennis Toohy, ed. “Mountain Meadows Massacre, Affidavit of Philip Klingensmith.” Corinne Journal Reporter. Corinne, Utah, published September 24, 1872. 5 (252): 1.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham interviewed John Lee, a leader of the massacre, on September 29, 1857, and sent a report to the Commissioner of 
            Indian Affairs. Brigham stated that the massacre was the work of Native Americans. (A Mormon prophet lying for the Lord.) 
            U.S. Army Major James Henry Carleton went to investigate. At the site of the massacre, he found women’s hair tangled in 
            sage brush and the bones of children still in their mothers’ arms. Carleton said it was “a sight which can never be 
            forgotten.” Carleton described the killing field as “one too horrible and sickening for language to describe. Human 
            skeletons, disjointed bones, ghastly skulls and the hair of women were scattered in frightful profusion over a distance of 
            two miles.” He continued, “the remains were not buried at all until after they had been dismembered by the wolves and the 
            flesh stripped from the bones, and then only such bones were buried as lay scattered along nearest the road.”
            <btn id="clickable33" className="footnote">33 </btn>
            <Tooltip anchorSelect="#clickable33" className="footnote-size" clickable>Harper’s Weekly, August 13, 1859.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>In 1999, the remains of 28 massacre victims were dug up. Forensic evidence showed the males had been shot by firearms at 
            close range. Remains of the women and children showed evidence of blunt force trauma.
            <btn id="clickable34" className="footnote">34 </btn>
            <Tooltip anchorSelect="#clickable34" className="footnote-size" clickable>Alyssa Fisher, September 16, 2003, The Mountain Meadows Massacre: A Sight Which Can 
              Never Be Forgotten. Archaeology.com. Archaeological Institute of America; Luscinia Brown-Hovelt, Elizabeth J. Himelfarb, November 30, 1999, Mountain Meadows Massacre. Archaeology. Archaeological Institute of America.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>After gathering up the skulls and bones, Carleton’s troops buried them and erected a cairn and cross.  
          <btn id="clickable35" className="footnote">35 </btn>
            <Tooltip anchorSelect="#clickable35" className="footnote-size" clickable>Alyssa Fisher, September 16, 2003, The Mountain Meadows Massacre: A Sight Which Can 
              Never Be Forgotten Archaeology.com. Archaeological Institute of America. </Tooltip> 
            
            After interviewing Mormons and Paiute Native American chiefs, Carleton concluded there was Mormon involvement in the massacre.
            Carleton’s report to the U.S. Congress called the mass killings a “heinous crime”  
            <btn id="clickable36" className="footnote">36 </btn>
            <Tooltip anchorSelect="#clickable36" className="footnote-size" clickable>James Henry Carleton, 1859, Special Report of the Mountain Meadow Massacre, Washington: Government Printing Office, published 1902.</Tooltip> 
            
            blaming both local and senior church leaders for the massacre. In 1864 the U.S. Army returned to find the rock cairn and wooden 
            cross monument missing. Reports suggest that the monument was destroyed in 1861, when Brigham brought an entourage to Mountain 
            Meadows. Wilford Woodruff reported that upon reading the inscription on the cross, “Vengeance is mine, thus saith the Lord. 
            I shall repay” that Brigham responded, “… it should be vengeance is mine and I have taken a little.”
            <btn id="clickable37" className="footnote">37 </btn>
            <Tooltip anchorSelect="#clickable37" className="footnote-size" clickable>Sally Denton, 2003. American Massacre: The Tragedy at Mountain Meadows, September 1857, p. 210. Scott G. Kenney, ed., Wilford Woodruff's Journal, vol. 5, p. 577.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>In 1859, Jacob Forney, Superintendent of Indian Affairs for Utah, also investigated and concluded that the Paiutes did not 
            act alone. The massacre would not have occurred without the Mormons.  
            <btn id="clickable38" className="footnote">38 </btn>
            <Tooltip anchorSelect="#clickable38" className="footnote-size" clickable>Jacob Forney, May 5, 1859. Visit of the Superintendent of Indian Affairs to Southern Utah, Deseret News, published May 11, 1859, p. 1.</Tooltip> 

            Forney retrieved the surviving children of massacre victims and sent them to their relatives in Arkansas. Federal judge 
            John Cradlebaugh toured Mountain Meadows in March 1859 with a military escort. He attempted to arrest Mormon leaders John 
            Lee, Isaac Haight, and John Higbee, but they fled. Cradlebaugh publicly charged Brigham Young as an instigator to the 
            massacre and “accessory before the fact.” Territorial probate court judge Elias Smith arrested Brigham under a territorial 
            warrant, perhaps hoping to divert any trial of Brigham into a friendly Mormon territorial court. When no federal charges 
            ensued, Young was apparently released.
            <btn id="clickable39" className="footnote">39 </btn>
            <Tooltip anchorSelect="#clickable39" className="footnote-size" clickable>Will Bagley and David L. Bigler, 2008, Innocent Blood: Essential Narratives of the Mountain Meadows Massacre, Norman, Oklahoma: The Arthur H. Clark Company. Will Bagley, 2002, Blood of the Prophets: Brigham Young and the Massacre at Mountain Meadows.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>However, John Lee stood trial. His first trial before a jury of eight Mormons and four non-Mormons ended in a deadlocked 
            jury. Lee was later convicted in a second trial before an all-Mormon jury. He was sentenced to die and chose firing squad 
            over hanging. Perhaps a choice made based on a belief in Mormon blood atonement that his blood must be spilled onto the 
            ground. Just before his execution, he confessed that he was a scapegoat for Mormon church leaders.  
            <btn id="clickable40" className="footnote">40 </btn>
            <Tooltip anchorSelect="#clickable40" className="footnote-size" clickable>John D. Lee, 1877, William Bishop, ed. Mormonism Unveiled: Or the Life and Confessions of the Late Mormon Bishop John D. Lee, St. Louis, Missouri: Bryan, Brand & Co. </Tooltip> 

            Brigham stated Lee’s 
            fate was just, but not a sufficient blood atonement given the enormity of the crime. After being asked by the interviewer 
            if he believed in blood atonement, Brigham replied, “I do, and I believe that Lee has not half atoned for his great crime.”
            <btn id="clickable41" className="footnote">41 </btn>
            <Tooltip anchorSelect="#clickable41" className="footnote-size" clickable>Brigham Young, May 30, 1877. Interview with Brigham Young UDN/Utah Digital Newspapers. (Utah Digital Newspapers, J. Willard Marriott Library/University of Utah) Deseret News 
              [After being asked by the interviewer if he believed in blood atonement, Young replied] “I do, and I believe that Lee has not half atoned for his great crime.”</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Today, the church attempts to distance Brigham from direct involvement in the massacre. There is no evidence that the 
            Mormon prophet ordered the crime. They put the blame on local leaders such as John Lee. However, it is beyond dispute that 
            Brigham and other church leaders were part of the cover up. Their fiery rhetoric fueled the incendiary environment of 
            vengeance. Privately, Brigham stated that God had taken vengeance on the Baker–Fancher party.
            <btn id="clickable42" className="footnote">42 </btn>
            <Tooltip anchorSelect="#clickable42" className="footnote-size" clickable>Will Bagley, 2002, Blood of the prophets: Brigham Young and the massacre at Mountain Meadows, p. 247. </Tooltip> 
          </p>
        </div>

        </div>

      <div className="chapterFooter">
        <Link to="/Chap26">Previous</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap28">Next</Link>
      </div>

    </div>
  )
}

export default Chap27