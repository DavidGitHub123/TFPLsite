import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import heavengate from '../../Assets/Img/heavengate.jpg'

const Chap14 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
          <Link to="/Chap13">Previous Chapter</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap15">Next Chapter</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 14: Thy Kingdom Come</h1>

      <img src={heavengate} className='image' alt='Gate into heaven' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>In Mormonism, the Kingdom of God is a kingdom of exalted families sealed through priesthood. From the nucleus of this Earth, those husbands and wives sealed as 
            gods and goddesses here will eventually spread kingdoms across universes. “They shall receive a fulness of kingdoms, thrones, principalities, powers, dominions, 
            and all the fulness pertaining to the Godhead.”  
            <btn id="clickable1" className="footnote">1 </btn>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>Brigham Young, Journal of Discourses, October 7, 1860, vol. 8, p. 194.</Tooltip> 
            
            But let’s start small with the Kingdom of God on our Earth.
          </p>
        </div>

        <div className='paragraph'>
          <p>Where did Joseph get his idea of building the Kingdom of God and establishing a physical Zion in Jackson County?  Perhaps it was in the New Testament where Christ 
            declared in the Lord’s prayer, “Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven.”  
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Matthew 6:9-10.</Tooltip> 
            
            The Christian world had no idea that for nearly 2,000 years by uttering the Lord’s Prayer, they were praying for the establishment of Joseph’s Kingdom of God.
          </p>
        </div>

        <div className='paragraph'>
          <p>In the New Testament Christ mentions the Kingdom of God on earth. John writes, “Jesus answered and said unto him, Verily, verily, I say unto thee, 
            Except a man be born again, he cannot see the kingdom of God.”
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>John 3:3.</Tooltip> 
            
            Luke writes, “But rather seek ye the kingdom of God … Fear not, little flock; for it is your Father’s good pleasure to give you the kingdom.” 
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Luke 12:30-32.</Tooltip> 
            
            John writes of Christ’s encounter with Pilate, “Jesus answered, My kingdom is not of this world: if my kingdom were of this world, then would my servants fight … 
            Pilate therefore said unto him, Art thou a king then? Jesus answered, Thou sayest that I am a king. To this end was I born, and for this cause came 
            I into the world.”  
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>John 18:36-37.</Tooltip> 
            
            Mark writes, “And Jesus looked round about, and saith unto his disciples, how hardly shall they that have riches enter into the kingdom of God!”  
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>Mark 10:23.</Tooltip> 
            
            Matthew writes, “And I will give unto thee the keys of the kingdom of heaven: and whatsoever thou shalt bind on earth shall be bound in heaven: and whatsoever thou 
            shalt loose on earth shall be loosed in heaven.”
            <btn id="clickable7" className="footnote">7 </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Matthew 16:19.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph claimed that as part of the restoration he received numerous keys from heaven giving him authority to build God’s kingdom. Those keys would be passed down 
            to each successive prophet. Mormon apostle Heber Kimball stated, “He [Brigham] holds the keys of the kingdom of heaven, just as much as Peter, James, and John did 
            after Jesus committed the keys to them on the mount, and said, ‘I give unto you the keys of the kingdom of heaven: and whomsoever you bless I will bless, and 
            whomsoever you curse I will curse.’ Brigham’s keys unlock the door to the celestial kingdom, and you cannot get there but by through the prophets of the Mormons.”
            <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Heber Kimball, Journal of Discourses, January 27, 1856, vol. 3, p. 197.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>As an aside, treasure seekers in upstate New York in the early 19th century believed they possessed keys which enabled them to locate buried treasures. 
            Joseph’s mother Lucy Smith stated that her son, while traveling to Josiah Stowell’s property in 1825 made the journey “with a view of getting Joseph to 
            assist him in digging for a silver mine . . . on account of having heard that he possessed certain keys, by which he could discern things invisible to the 
            natural eye.”
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>Dan Vogel, Early Mormon Documents vol. 3, p. 148.</Tooltip>  
          </p>
        </div>

        <h2 className="headlinePadding">Kingdom of God Established in Christ’s Day</h2>

        <div className='paragraph'>
          <p>Mormon Apostle Orson Pratt stated in 1859, “… The kingdom of God was built up in the days of Christ … but most of the Jewish nation chose to reject the Gospel … 
            they cast it from them, and were not willing to be governed by it; therefore, the kingdom of God, instead of being a concentrated government among Israel, 
            existed in detached portions here and there … Hence the kingdom … was taken from them and transferred over into the hands of the Gentiles.”
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>Orson Pratt, Journal of Discourses, August 14, 1859, vol. 7, p. 212.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Then, according to Orson, the Kingdom of God disintegrated after the death of the apostles. “The isolated individuals and branches receiving the kingdom were scattered ... There came a falling away, so that the kingdom, which existed in a scattered and broken condition through the Gentile nations, began to lose all the power and blessings pertaining to it.” Orson states that “the gift of healing was no longer made manifest; the gift of prophecy no longer existed; and so complete and dreadful was the apostasy, that one might travel through the whole of the Eastern continent and not find a Prophet, or Apostle, or Revelator … every office and power and authority and gift characterizing the kingdom of God, or in the least resembling a theocracy, ceased from all the Gentile nations.”
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Orson there were 17 centuries of misery without the Kingdom of God on the earth. (You can see this is leading to Joseph’s restoration.) “… the few Saints who remained … became so darkened in their minds, through the wickedness and apostasy which prevailed, that they were counted worthy only to be trodden under the feet of the Gentile nations. Hence the powers of the earth made war with all those branches that professed to be the kingdom of God, and they overcame and destroyed them from the earth, and the kingdom of God no longer existed … for something like seventeen centuries.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Orson casts the earthly governments of those 17 centuries in a dark, oppressive light. “Instead of a theocratical government, or one of Divine origin, you could behold nothing but empires, absolute and limited monarchies, kingdoms, principalities, dukedoms, republics, and heterogeneous masses of conflicting revolutionary elements, thrown together, as if by some fortuitous circumstances, fomenting, igniting, and belching forth the hot lava of destruction, swallowing up millions of unhappy beings, and overwhelming all countries with desolation, misery, and death.” 
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Orson, Christ did establish the Kingdom of God, a theocracy, when he visited the Nephites, which lasted for 200 years until it disintegrated. “We are informed by the sacred and Divine record, called the Book of Mormon, that the kingdom of God flourished to a greater extent here than in the Eastern world. On this Western hemisphere the kingdom of God was established by the personal appearance of our Lord and Savior after his resurrection. Twelve disciples were appointed on this land to administer the Gospel, laws, and institutions of that kingdom. They went forth preaching, prophesying, working miracles, receiving revelations, and administering with authority Divine laws … This was a theocracy indeed.”
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Orson, the formation of the U.S. government was divinely directed to give people religious freedom so the true Kingdom of God could be established. “We believe, when our ancestors threw off the yoke of tyranny and oppression placed on them by the Government of England, that they were not only inspired in doing this, but the Lord had something in view to accomplish … In the Constitution, certain rights were guaranteed to the people.”
          </p>
        </div>

        <div className='paragraph'>
          <p>However, according to Orson, there was a better system of government – the Kingdom of God. “But with all its glory and greatness and perfection, it was only a steppingstone to a form of government infinitely greater and more perfect – a government founded upon Divine laws, with all its institutions, ordinances, and officers appointed by the God of heaven.”
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Orson, this was the final time in the history of this earth that the Kingdom of God would be established. “The Almighty determined to assert his right and establish an everlasting kingdom upon the unalterable principles of eternal truth – a kingdom which could never be destroyed nor ever be shaken, though the heavens should pass away, and the worlds disappear with a universal crash. “The Lord now saw that there was one nation upon the earth where he could venture to begin the great work – where a theocracy could exist in an ecclesiastical form, being legally and lawfully entitled to all the rights and protection guaranteed in the great American Constitution, in common with all religious parties.”
          </p>
        </div>

        <div className='paragraph'>
          <p>But, according to Orson, God knew the U.S. government would not obey a prophet. “They would not suffer a Prophet of God to come into their midst and dictate the laws that should be adopted by the nation. They would show him the door ... They would very likely say, “We will not for a moment listen to him, though he may profess to be inspired, and to have received heavenly visions, and to have seen God, and talked with him face to face, as Moses, Abraham, Isaac, and Jacob did.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Therefore, according to Orson, God’s kingdom was to be established outside U.S. government control – as a small stone cut out of a mountain without hands. “I expect the literal fulfillment of that prophecy relating to the Saints of the last days arising like a small stone unconnected with this image, and disunited from all forms of government, both civil and ecclesiastical. I look for such a kingdom to arise, with a separate form of government, and to continue, and prevail, and progress, until the dominion and the greatness of the dominion under the whole heavens shall be given to the Saints of the Most High.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Then, according to Orson, the whole earth shall be filled with saints of God. “Daniel said that the kingdom which was to be established in the last days never should be destroyed, nor left to other people, but should exist forever, and increase until the whole earth should be filled by the Saints of the Most High.” Once the Kingdom of God is established, according to Orson, the ancient kingdom will come down with Christ at his Second Coming. “Therefore, instead of the ancient Church (Christ’s day) overcoming the image, it was itself to be overcome by the image. History shows the sad fulfillment of these predictions. Therefore, the former-day kingdom was not the stone of the mountain. The ancient kingdom being overcome, fled to heaven, and the Priesthood was caught up to God and to his throne; and there the Saints are reserved in heaven until the coming of the Son of God to reign on the earth, according to the predictions of the Prophets.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Then, Orson refers to the establishment of the Mormon Kingdom and how Christ will merge it with the heavenly kingdom Christ will bring down with him at the Second Coming. “Then he will bring that kingdom which is in heaven with him. He has to set up a kingdom on earth preparatory to that which will come from heaven. This preparatory kingdom must be established on the earth ... It will be a kingdom increasing in greatness and power and glory on the earth for many years preparatory to the coming of the King with the heavenly kingdom, at which time both the heavenly and earthly will be united in one, under their great Head and Lawgiver.”
          </p>
        </div>

        <h2 className="headlinePadding">Kingdom of God in Joseph’s Revelations</h2>

        <div className='paragraph'>
          <p>The establishment of the “Kingdom of God” was a major theme in Joseph’s revelations to the early Mormons of the 1830s. Joseph provided his church with the following revelations.
          </p>
        </div>

        <div className='paragraph'>
          <p>“The keys of the kingdom of God are committed unto man on the earth, and from thence shall the gospel roll forth unto the ends of the earth, as the stone which 
            is cut out of the mountain without hands shall roll forth, until it has filled the whole earth.”
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>D&C 65:2.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“For the purpose of building up my church and kingdom on the earth, and to prepare my people for the time when I shall dwell with them, 
            which is nigh at hand.”
            <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>D&C 104:59.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“That the kingdoms of this world may be constrained to acknowledge that the kingdom of Zion is in very deed the kingdom of our God and his Christ; 
            therefore, let us become subject unto her laws.”
            <btn id="clickable13" className="footnote">13 </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>D&C 105:32.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“And the benefits shall be consecrated unto the inhabitants of Zion, and unto their generations, inasmuch as they become heirs according to the 
            laws of the kingdom.”
            <btn id="clickable14" className="footnote">14 </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>D&C 70:8. </Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“Hearken, O ye people of my church, to whom the kingdom has been given; hearken ye and give ear to him who laid the foundation of the earth.” 
          <btn id="clickable15" className="footnote">15 </btn>
          <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>D&C 45:1  </Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“I am in your midst, and am your advocate with the Father; and it is his good will to give you the kingdom.”
          <btn id="clickable16" className="footnote">16 </btn>
          <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>D&C 29:5.   </Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>“Wherefore, gird up your loins and be prepared. Behold, the kingdom is yours, and the enemy shall not overcome.”
          <btn id="clickable17" className="footnote">17 </btn>
          <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>D&C 38:9. </Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>“I will be merciful unto you, for I have given unto you the kingdom.” 
          <btn id="clickable18" className="footnote">18 </btn>
          <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>D&C 64:4.  </Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>“Wherefore, go forth, crying with a loud voice, saying: The kingdom of heaven is at hand; crying: Hosanna! blessed be the name of the Most High God.”
          <btn id="clickable19" className="footnote">19 </btn>
          <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>D&C 39:19.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“Unto whom I have committed the keys of my kingdom, and a dispensation of the gospel for the last times … in the which I will gather together in one all things, 
            both which are in heaven, and which are on earth.”
            <btn id="clickable20" className="footnote">20 </btn>
            <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>D&C 27:13.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“… pray earnestly that peradventure my servant Joseph Smith, Jun., may go with you, and preside in the midst of my people, and organize my kingdom upon the 
            consecrated land, and establish the children of Zion.”
            <btn id="clickable21" className="footnote">21 </btn>
            <Tooltip anchorSelect="#clickable21" className="footnote-size" clickable>D&C 103:35 </Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>“Behold, the field is white already to harvest; therefore, whoso desireth to reap let him thrust in his sickle with his might … may treasure up for his 
            soul everlasting salvation in the kingdom of God.”
            <btn id="clickable22" className="footnote">22 </btn>
            <Tooltip anchorSelect="#clickable22" className="footnote-size" clickable>D&C 12:3. </Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>“And ye shall go forth baptizing with water, saying: Repent ye, repent ye, for the kingdom of heaven is at hand.”
          <btn id="clickable23" className="footnote">23 </btn>
          <Tooltip anchorSelect="#clickable23" className="footnote-size" clickable>D&C 42:7.  </Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“And we know that all men must repent and believe on the name of Jesus Christ … or they cannot be saved in the kingdom of God.”
          <btn id="clickable24" className="footnote">24 </btn>
          <Tooltip anchorSelect="#clickable24" className="footnote-size" clickable>D&C 20:29.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“And by giving heed and doing these things which ye have received, and which ye shall hereafter receive—and the kingdom is given you of the Father, and 
            power to overcome all things which are not ordained of him.”
            <btn id="clickable25" className="footnote">25 </btn>
            <Tooltip anchorSelect="#clickable25" className="footnote-size" clickable>D&C 50:35.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“The kingdom is yours and the blessings thereof are yours, and the riches of eternity are yours.”
          <btn id="clickable26" className="footnote">26 </btn>
          <Tooltip anchorSelect="#clickable26" className="footnote-size" clickable>D&C 78:18. </Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“Which Twelve hold the keys to open up the authority of my kingdom upon the four corners of the earth, and after that to send my word to every creature.”
          <btn id="clickable27" className="footnote">27 </btn>
          <Tooltip anchorSelect="#clickable27" className="footnote-size" clickable>D&C 124:128.  </Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“And again, verily I say unto thy brethren, Sidney Rigdon and Frederick G. Williams, their sins are forgiven them also, and they are accounted as equal with 
            thee in holding the keys of this last kingdom”
            <btn id="clickable28" className="footnote">28 </btn>
            <Tooltip anchorSelect="#clickable28" className="footnote-size" clickable>D&C 90:6.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>“… thou art the man whom I have chosen to hold the keys of my kingdom … That thou mayest be my servant to unlock the door of the kingdom in all places.”
          <btn id="clickable29" className="footnote">29 </btn>
          <Tooltip anchorSelect="#clickable29" className="footnote-size" clickable>D&C 112:16.</Tooltip> 
          </p>
        </div>

        <h2 className="headlinePadding">Timeline of Revelations on Building the Kingdom and Second Coming</h2>

        <div className='paragraph'>
          <p>According to Joseph, his revelations were the actual words of Jesus Christ. In its official description of The Doctrine and Covenants the church says that 
            it “is a book of scripture containing revelations from the Lord to the Prophet Joseph Smith.” And the Lord said to the Joseph, 
            “This generation shall have my ‘word’ through you.”  
            <btn id="clickable30" className="footnote">30 </btn>
            <Tooltip anchorSelect="#clickable30" className="footnote-size" clickable>D&C 5:10.</Tooltip> 
            
            Eyewitness to Joseph receiving several revelations, Zebedee Coltrin recalled that on one occasion a group of elders attempted to correct the grammar 
            in a revelation. Joseph corrected them, saying that every word had been dictated by Jesus Christ.
            <btn id="clickable31" className="footnote">31 </btn>
            <Tooltip anchorSelect="#clickable31" className="footnote-size" clickable>Donna Hill, Joseph Smith: The First Mormon, p. 141.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>Here are Joseph’s revelations in chronological order concerning the building of Zion. As we review this timeline, remember Joseph had revealed earlier, 
            “… there is nothing that the Lord thy God shall take in his heart to do but what he will do it.”  
            <btn id="clickable32" className="footnote">32 </btn>
            <Tooltip anchorSelect="#clickable32" className="footnote-size" clickable>Abraham 3:17.</Tooltip>  
            
            There are two possible scenarios. Either God changed His mind about establishing Zion, or Joseph got it dramatically wrong – causing great suffering, starvation, spiritual despair, and even death – as the plans for building the Mormon Zion lay in smoldering ruins by 1838.
          </p>
        </div>

        <div className='paragraph'>
          <p>And Joseph set a timeframe on these events. They were to culminate in the “generation” or lifetime of the early Mormons of the 1830s as stated in an 1832 
            revelation.
            <btn id="clickable33" className="footnote">33 </btn>
            <Tooltip anchorSelect="#clickable33" className="footnote-size" clickable>D&C 97:19.</Tooltip>  
            
            A generation is a 20- to 30-year-period. Therefore, the decade of the 1860s were the years to watch.
          </p>
        </div>

        <div className='paragraph'>
          <p>March 1829 – Mankind destroyed by fire at second coming if they do not repent. “For a desolating scourge shall go forth among the inhabitants of the earth, 
            and shall continue to be poured out from time to time, if they repent not, until the earth is empty, and the inhabitants thereof are consumed away and utterly 
            destroyed by the brightness of my coming.” 
            <btn id="clickable34" className="footnote">34 </btn>
            <Tooltip anchorSelect="#clickable34" className="footnote-size" clickable>D&C 5:19.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>September 1830 – Zion to be built on the Missouri borders by the Lamanites. “And now, behold, I say unto you that it is not revealed, and no man knoweth 
            where the city Zion shall be built, but it shall be given hereafter. Behold, I say unto you that it shall be on the borders by the Lamanites.”
            <btn id="clickable35" className="footnote">35 </btn>
            <Tooltip anchorSelect="#clickable35" className="footnote-size" clickable>D&C 28:9.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>September 1830 – Second Coming is “nigh” meaning a short distance. “For the hour is nigh and the day soon at hand when the earth is ripe; and all the proud and 
            they that do wickedly shall be as stubble; and I will burn them up.”
            <btn id="clickable36" className="footnote">36 </btn>
            <Tooltip anchorSelect="#clickable36" className="footnote-size" clickable>D&C 29:9.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>September 1830 – The Lord will come shortly in a pillar of fire. “For I will reveal myself from heaven … dwell in righteousness with men on earth a thousand 
            years, and the wicked shall not stand … it is the will of the Father, that mine apostles, the Twelve which were with me in my ministry at Jerusalem, 
            shall stand at my right hand at the day of my coming in a pillar of fire.”
            <btn id="clickable37" className="footnote">37 </btn>
            <Tooltip anchorSelect="#clickable37" className="footnote-size" clickable>D&C 29:11-12.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>November 1830 – Time is soon at hand that the nations shall tremble. “For behold, verily, verily, I say unto you, the time is soon at hand that I shall come in a 
            cloud with power and great glory. And it shall be a great day at the time of my coming, for all nations shall tremble.”
            <btn id="clickable38" className="footnote">38 </btn>
            <Tooltip anchorSelect="#clickable38" className="footnote-size" clickable>D&C 34:7-8.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>December 1830 – The time speedily cometh that great things are to be shown. “And the time speedily cometh that great things are to be shown forth unto the 
            children of men ... they shall be looking forth for the time of my coming, for it is nigh at hand – And they shall learn the parable of the fig tree, for even 
            now already summer is nigh.”
            <btn id="clickable39" className="footnote">39 </btn>
            <Tooltip anchorSelect="#clickable39" className="footnote-size" clickable>D&C 35:10, 15-16. </Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>December 1830 – The Lord will suddenly come to his temple. Temple never built. “I am Jesus Christ, the Son of God; wherefore, gird up your loins and I will 
            suddenly come to my temple. Even so. Amen.”
            <btn id="clickable40" className="footnote">40 </btn>
            <Tooltip anchorSelect="#clickable40" className="footnote-size" clickable>D&C 36:8.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>January 1831 – Day is near that ye shall see Him and if not purified not abide the day. “But the day soon cometh that ye shall see me, and know that I am; 
            for the veil of darkness shall soon be rent, and he that is not purified shall not abide the day.”
            <btn id="clickable41" className="footnote">41 </btn>
            <Tooltip anchorSelect="#clickable41" className="footnote-size" clickable>D&C 38:8.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>February 1831 – The Lord says he comes quickly. “And I will be your ruler when I come; and behold, I come quickly, and ye shall see that my law is kept.”
          <btn id="clickable42" className="footnote">42 </btn>
          <Tooltip anchorSelect="#clickable42" className="footnote-size" clickable>D&C 41:4.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>February 1831 – The city of the New Jerusalem shall be prepared. “Until the time shall come when it shall be revealed unto you from on high, when the city of the 
            New Jerusalem shall be prepared, that ye may be gathered in one, that ye may be my people and I will be your God.”
            <btn id="clickable43" className="footnote">43 </btn>
            <Tooltip anchorSelect="#clickable43" className="footnote-size" clickable>D&C 42:0.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>February 1831 – Repent for the great day of the Lord is come. “Repent, and prepare for the great day of the Lord? Repent ye, for the great day of the Lord 
            is come? … Behold, the day has come, when the cup of the wrath of mine indignation is full.”
            <btn id="clickable44" className="footnote">44 </btn>
            <Tooltip anchorSelect="#clickable44" className="footnote-size" clickable>D&C 43:21-22, 26.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>March 1831 – New Jerusalem will shine with glory and be a place of terror for the wicked. “…  it shall be called the New Jerusalem, a land of peace, a 
            city of refuge, a place of safety for the saints of the Most High God; And the glory of the Lord shall be there, and the terror of the Lord also shall be there, 
            insomuch that the wicked will not come unto it, and it shall be called Zion.”
            <btn id="clickable45" className="footnote">45 </btn>
            <Tooltip anchorSelect="#clickable45" className="footnote-size" clickable>D&C 45:66-67.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>May 1831 – Heavens to be shaken, valleys exalted, and mountains made low. “… continue in steadfastness, looking forth for the heavens to be shaken, 
            and the earth to tremble and to reel to and fro as a drunken man, and for the valleys to be exalted, and for the mountains to be made low … – and all 
            this when the angel shall sound his trumpet.”
            <btn id="clickable46" className="footnote">46 </btn>
            <Tooltip anchorSelect="#clickable46" className="footnote-size" clickable>D&C 49:23.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>June 1831 – The Lord will hasten the city of the New Jerusalem. City never built. “… assemble yourselves together to rejoice upon the land of Missouri, 
            which is the land of your inheritance, which is now the land of your enemies. But, behold, I, the Lord, will hasten the city in its time, and will crown 
            the faithful with joy and with rejoicing.”
            <btn id="clickable47" className="footnote">47 </btn>
            <Tooltip anchorSelect="#clickable47" className="footnote-size" clickable>D&C 52:42.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>June 1831 – Mormons shall see the kingdom of God coming in glory and their generations shall inherit the earth. “… for they shall see the kingdom of God 
            coming in power and great glory unto their deliverance; for the fatness of the earth shall be theirs. And their generations shall inherit the earth from 
            generation to generation, forever and ever.”
            <btn id="clickable48" className="footnote">48 </btn>
            <Tooltip anchorSelect="#clickable48" className="footnote-size" clickable>D&C 56:18-20.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>August 1831 – The gospel must go forth into all the world from Jackson County. “For, verily, the sound must go forth from this place into all the world … 
            the gospel must be preached unto every creature, with signs following them that believe. And behold the Son of Man cometh. Amen.”
            <btn id="clickable49" className="footnote">49 </btn>
            <Tooltip anchorSelect="#clickable49" className="footnote-size" clickable>D&C 58:64-65.</Tooltip>   
          </p>
        </div>

        <div className='paragraph'>
          <p>September 1831 – Nations of the earth shall tremble because of Zion. “Zion shall flourish, and the glory of the Lord shall be upon her … 
            And the day shall come when the nations of the earth shall tremble because of her, and shall fear because of her terrible ones.”
            <btn id="clickable50" className="footnote">50 </btn>
            <Tooltip anchorSelect="#clickable50" className="footnote-size" clickable>D&C 64:41-43.</Tooltip>    
          </p>
        </div>

        <div className='paragraph'>
          <p>October 1831 – Mormonism to roll forth as the stone cut out of the mountain. “Prepare ye the way of the Lord, make his paths straight … from thence shall the 
            gospel roll forth unto the ends of the earth, as the stone which is cut out of the mountain without hands shall roll forth, until it has filled the whole earth.”
            <btn id="clickable51" className="footnote">51 </btn>
            <Tooltip anchorSelect="#clickable51" className="footnote-size" clickable>D&C 65:1-2.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Nov 1831 – The day speedily cometh. “… the day speedily cometh; the hour … is nigh at hand … and the Lord shall have power over his saints, and shall 
            reign in their midst, and shall come down in judgment upon Idumea, or the world.”
            <btn id="clickable52" className="footnote">52 </btn>
            <Tooltip anchorSelect="#clickable52" className="footnote-size" clickable>D&C 1:35-36.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>September 1832 – Lord appointed Zion to be built on western boundaries of Missouri.  “Yea, the word of the Lord concerning his church, established in the last 
            days for the restoration of his people, as he has spoken by the mouth of his prophets, and for the gathering of his saints to stand upon Mount Zion, which 
            shall be the city of New Jerusalem. Which city shall be built, beginning at the temple lot, which is appointed by the finger of the Lord, in the 
            western boundaries of the State of Missouri, and dedicated by the hand of Joseph Smith, Jun., and others with whom the Lord was well pleased. 
            For verily this generation shall not all pass away until an house shall be built unto the Lord, and a cloud shall rest upon it, which cloud shall be even 
            the glory of the Lord, which shall fill the house.”
            <btn id="clickable53" className="footnote">53 </btn>
            <Tooltip anchorSelect="#clickable53" className="footnote-size" clickable>D&C 84:1-5.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>September 1832 – A little while and ye shall see it. “For I, the Lord, have put forth my hand to exert the powers of heaven; ye cannot see it now, 
            yet a little while and ye shall see it, and know that I am, and that I will come and reign with my people.”
            <btn id="clickable54" className="footnote">54 </btn>
            <Tooltip anchorSelect="#clickable54" className="footnote-size" clickable>D&C 84:119.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>December 1832 – Not many days hence and you will see the signs of the Second Coming. “For not many days hence and the earth shall tremble and reel to and fro as 
            a drunken man; and the sun shall hide his face, and shall refuse to give light; and the moon shall be bathed in blood; and the stars shall become exceedingly 
            angry, and shall cast themselves down as a fig that falleth from off a fig tree … And angels shall fly through the midst of heaven, crying with a loud voice, 
            sounding the trump of God, saying: Prepare ye, prepare ye, O inhabitants of the earth; for the judgment of our God is come. Behold, and lo, the Bridegroom cometh; 
            go ye out to meet him.”
            <btn id="clickable55" className="footnote">55 </btn>
            <Tooltip anchorSelect="#clickable55" className="footnote-size" clickable>D&C 88:87, 92.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>December 1832 – Continuing with signs the Mormons would see in their lifetime. “And immediately there shall appear a great sign in heaven, and all people 
            shall see it together … And there shall be silence in heaven for the space of half an hour; and immediately after shall the curtain of heaven be unfolded, 
            as a scroll is unfolded after it is rolled up, and the face of the Lord shall be unveiled; And the saints that are upon the earth, who are alive, 
            shall be quickened and be caught up to meet him. And they who have slept in their graves shall come forth, for their graves shall be opened; and they also shall 
            be caught up to meet him in the midst of the pillar of heaven.”
            <btn id="clickable56" className="footnote">56 </btn>
            <Tooltip anchorSelect="#clickable56" className="footnote-size" clickable>D&C 88:93-97.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>August 1833 – Nations of the earth shall surely say Zion is the city of God. “And the nations of the earth shall honor her and shall say: Surely Zion is the 
            city of our God, and surely Zion cannot fall, neither be moved out of her place, for God is there, and the hand of the Lord is there; And he hath sworn by the 
            power of his might to be her salvation and her high tower. Therefore, verily, thus saith the Lord, let Zion rejoice, for this is Zion – the pure in heart; 
            therefore, let Zion rejoice, while all the wicked shall mourn. For behold, and lo, vengeance cometh speedily upon the ungodly as the whirlwind; and who shall 
            escape it?”
            <btn id="clickable57" className="footnote">57 </btn>
            <Tooltip anchorSelect="#clickable57" className="footnote-size" clickable>D&C 97:19-22.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>February 1834 – Lord will pour out wrath upon the Missourians. “I will give unto you a revelation … who have been scattered on the land of Zion … 
            Being driven and smitten by the hands of mine enemies, on whom I will pour out my wrath without measure in mine own time.”
            <btn id="clickable58" className="footnote">58 </btn>
            <Tooltip anchorSelect="#clickable58" className="footnote-size" clickable>D&C 103:1-2.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>February 1834 – Mormons shall prevail over the Missourians. “Behold they shall … begin to prevail against mine enemies from this very hour. And by hearkening to 
            observe all the words … they shall never cease to prevail until the kingdoms of the world are subdued under my feet, and the earth is given unto the saints, 
            to possess it forever and ever. But inasmuch as they keep not my commandments, and hearken not to observe all my words, the kingdoms of the world shall prevail 
            against them.”
            <btn id="clickable59" className="footnote">59 </btn>
            <Tooltip anchorSelect="#clickable59" className="footnote-size" clickable>D&C 103:6-8.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>February 1834 – You are of Israel. Joseph is like Moses and will lead you to victory. “… the redemption of Zion must needs come by power; Therefore, I will raise 
            up unto my people a man, who shall lead them like as Moses led the children of Israel. For ye are the children of Israel, and of the seed of Abraham ... And as 
            your fathers were led at the first, even so shall the redemption of Zion be. Mine angels shall go up before you, and also my presence, and in time ye shall possess 
            the goodly land. Joseph Smith, Jun., is the man … Therefore, let my servant Joseph Smith, Jun., say unto the strength of my house, my young men and the middle 
            aged – Gather yourselves together unto the land of Zion.”
            <btn id="clickable60" className="footnote">60 </btn>
            <Tooltip anchorSelect="#clickable60" className="footnote-size" clickable>D&C 103:15-22.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>June 1834 – God blames the Mormons’ transgressions on His failures to establish Zion. “Behold … were it not for the transgressions of my people, speaking 
            concerning the church and not individuals, they might have been redeemed even now. But behold, they have not learned to be obedient to the things which I required 
            at their hands, but are full of all manner of evil … And are not united according to the union required by the law of the celestial kingdom.”
            <btn id="clickable61" className="footnote">61 </btn>
            <Tooltip anchorSelect="#clickable61" className="footnote-size" clickable>D&C 105:2-4.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>June 1834 – God reveals he will build a Mormon army that will be terrible unto all nations. “But first let my army become very great, and let it be sanctified 
            before me, that it may become fair as the sun, and clear as the moon, and that her banners may be terrible unto all nations; That the kingdoms of this world may 
            be constrained to acknowledge that the kingdom of Zion is in very deed the kingdom of our God and his Christ; therefore, let us become subject unto her laws.”
            <btn id="clickable62" className="footnote">62 </btn>
            <Tooltip anchorSelect="#clickable62" className="footnote-size" clickable>D&C 105:31-32.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>November 1835 – Coming of the Lord draweth nigh and Mormons will not be overtaken. “And again, verily I say unto you, the coming of the Lord draweth nigh, 
            and it overtaketh the world as a thief in the night – Therefore, gird up your loins, that you may be the children of light, and that day shall not overtake you 
            as a thief.”
            <btn id="clickable63" className="footnote">63 </btn>
            <Tooltip anchorSelect="#clickable63" className="footnote-size" clickable>D&C 106:4-5.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>March 1839 – The promises of God had failed. Joseph imprisoned in Liberty Jail for war crimes. “O God, where art thou? And where is the pavilion that covereth 
            thy hiding place? How long shall thy hand be stayed, and thine eye, yea thy pure eye, behold from the eternal heavens the wrongs of thy people and of thy servants, 
            and thine ear be penetrated with their cries?”
            <btn id="clickable64" className="footnote">64 </btn>
            <Tooltip anchorSelect="#clickable64" className="footnote-size" clickable>D&C 121:1-2.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>January 1841 – Command to make proclamation to kings of the world that Zion will be established. “I say unto you, that you are now called immediately to make a 
            solemn proclamation of my gospel … This proclamation shall be made to all the kings of the world, to the four corners thereof, to the honorable president-elect, 
            and the high-minded governors of the nation in which you live, and to all the nations of the earth scattered abroad … For it shall be given you by the Holy Ghost 
            to know my will concerning those kings and authorities, even what shall befall them in a time to come. For, behold, I am about to call upon them to give heed to 
            the light and glory of Zion, for the set time has come to favor her.”
            <btn id="clickable65" className="footnote">65 </btn>
            <Tooltip anchorSelect="#clickable65" className="footnote-size" clickable>D&C 124:2-6.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>January 1841 – God will punish the rulers of the world for rejecting his servants. “Call ye, therefore, upon them with loud proclamation … for they are as grass, 
            and all their glory as the flower thereof which soon falleth, that they may be left also without excuse – And that I may visit them in the day of visitation, when 
            I shall unveil the face of my covering, to appoint the portion of the oppressor among hypocrites, where there is gnashing of teeth, if they reject my servants and 
            my testimony which I have revealed unto them. And again, I will visit and soften their hearts, many of them for your good, that ye may find grace in their eyes, 
            that they may come to the light of truth, and the Gentiles to the exaltation or lifting up of Zion.”
            <btn id="clickable66" className="footnote">66 </btn>
            <Tooltip anchorSelect="#clickable66" className="footnote-size" clickable>D&C 124:7-9.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>January 1841 – The day of God’s visitation cometh speedily. Kings commanded to bring their gold and silver to Zion. “For the day of my visitation cometh speedily, 
            in an hour when ye think not of; and where shall be the safety of my people, and refuge for those who shall be left of them? Awake, O kings of the earth! 
            Come ye, O, come ye, with your gold and your silver, to the help of my people, to the house of the daughters of Zion.”
            <btn id="clickable67" className="footnote">67 </btn>
            <Tooltip anchorSelect="#clickable67" className="footnote-size" clickable>D&C 10-11.</Tooltip> 
          </p>
        </div>

        </div>

        <div className="chapterFooter">
          <Link to="/Chap13">Previous Chapter</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap15">Next Chapter</Link>
      </div>
      
    </div>
  )
}

export default Chap14