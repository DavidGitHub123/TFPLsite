import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import abraham from '../../Assets/Img/abraham.jpg'

const Chap16 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
          <Link to="/Chap15">Previous Chapter</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap17">Next Chapter</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 16: God’s Beloved House of Israel</h1>

      <img src={abraham} className='image' alt='Abraham sacrificing Issac' />

  <div className="wrapper">


    <div className='paragraph'>
          <p>In temples, Mormons are initiated to rule and reign as Kings and Priests, and Queens and Priestesses in the House of Israel forever. Mormons are told in patriarchal blessings that they descend from the House of Israel – most often descendants of the Tribe of Ephraim. Mormons are also taught they were foreordained from before the earth’s creation to be born into this special genealogical Ephraimite line.
          </p>
        </div>

        <div className='paragraph'>
          <p>Because of this, Mormons believe they inherit the “birthright blessings of the firstborn” from the Tribe of Ephraim. In the Old Testament, Joseph, who was sold into Egypt, inherited the rights of the firstborn to lead the House of Israel. He had two sons, Ephraim and Manasseh, who also inherited their father’s firstborn rights. 
          </p>
        </div>

        <div className='paragraph'>
          <p>When told in their patriarchal blessings that they descend from the Tribe of Ephraim, Mormons believe that they are the elect of God, and that it is their life work to build the Kingdom of God in the last days. This is why Mormons refer to themselves as “youth of a noble birthright” as sung in their hymn “Carry On.”
          </p>
        </div>

        <div className='paragraph'>
          <p>This noble birthright carries sacred responsibilities and obligations. One responsibility is to gather other descendants of the House of 
            Israel into the Mormon church through missionary work. Another responsibility is temple work, sealing the elect of the earth into the 
            family of God through temple ordinances. “Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of 
            the Lord: And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite 
            the earth with a curse.”
            <btn id="clickable1" className="footnote">1 </btn>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>D&C 128:17.</Tooltip> 
          </p>
        </div>

        <h2 className="headlinePadding">How the Legend Goes</h2>

        <div className='paragraph'>
          <p>Joseph and early Mormons were fascinated by the Jews and the House of Israel, especially Joseph sold into Egypt and his two sons Ephraim 
            and Manasseh. Here is how the legend unfolds. In the Old Testament, when Abraham was 99 years old, God appeared to him and said, 
            “I am the Almighty God … I will make my covenant between me and thee and will multiply thee exceedingly … thou shalt be a father of many 
            nations.”  
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Genesis 17:7.</Tooltip> 
            
            This made Abraham the head of God’s covenant family on earth.
          </p>
        </div>

        <div className='paragraph'>
          <p>But Abraham was puzzled. He had no heir – no sons. Then, miraculously, Abraham and Sarah conceived Isaac. Isaac had two sons, Jacob and Esau. Jacob, as the firstborn, was given the priestly birthright to rule over his people – the covenant family of God. This right is known as “office of firstborn” and would be passed from father to eldest son down through the generations.
          </p>
        </div>

        <div className='paragraph'>
          <p>As with Abraham, God appeared to Jacob and said, “… thy name shall not be called any more Jacob, but Israel shall be thy name … be fruitful 
            and multiply; a nation and a company of nations shall be of thee, and kings shall come out of thy loins.”  
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>Genesis 35:10-11.</Tooltip> 
            
            Therefore, Abraham was on his way to becoming a “father of many nations” through the posterity of Jacob, renamed Israel.
          </p>
        </div>

        <div className='paragraph'>
          <p>Next in the legend, Jacob had 12 sons from his two wives, Leah and Rachel, and his two concubines, Zilpah and Bilhah. But then, a twist. 
            Jacob’s firstborn son, Reuben, forfeited the “office of firstborn” by transgression. He slept with his father’s concubine Bilhah. 
            The “office of firstborn” fell upon Joseph, Rachel’s firstborn son, and he became the favored son and received elevated status.
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Although born as the 11th of Jacob’s sons chronologically, Joseph was the firstborn son between Jacob and Rachel – Jacob’s second wife..</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Joseph had two sons, Ephraim and Manasseh. This created the House of Joseph. As was the custom, Joseph brought his sons to his father, 
            Jacob, for blessings. With his two grandsons kneeling before him, the aged Jacob placed his left hand upon the firstborn Manasseh, and his 
            right hand upon the second born Ephraim. Joseph assumed his father had mistaken the birth order and had switched his hands. But Jacob stopped 
            Joseph saying, “I know it: he (Manasseh) also shall become a people, and he also shall be great: but truly his younger brother (Ephraim) 
            shall be greater than he, and his seed shall become a multitude of nations.”
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Genesis 48:19-20.</Tooltip>   
          </p>
        </div>

        <div className='paragraph'>
          <p>So, through revelation from God to Jacob, the prophet and head of the House of Israel, the “office of firstborn” fell to the second-born 
            Ephraim
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>Genesis 49:10, 22-26.</Tooltip>  
            
              – whom Mormons claim they descend from their patriarchal blessings. Before his death, Jacob called his 12 sons together for blessings. 
              Jacob blessed Joseph and his posterity with the priestly “office of firstborn” to build and rule over the House of Israel – the nation of 
              Israel, which consisted of 12 tribes. Jacob bestowed the “kingly office” upon Judah and blessed him with a kingly scepter. Judah and his 
              posterity were to serve as kings over the House of Israel. “Judah, thou art he whom thy brethren shall praise … The sceptre shall not depart 
              from Judah.”
              <btn id="clickable7" className="footnote">7 </btn>
              <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Genesis 49:8-10.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>Therefore, Jacob’s blessings divided the House of Israel into two parts – with “kingship” going to the House of Judah, and the “office of firstborn” and the priestly right to rule and lead the House of Israel going to the House of Joseph. Whereas Judah and his descendants would be seated on the throne as kings, Ephraim would be responsible for building and administering the kingdom, holding together a group of mighty nations, and gathering in the elect of the earth – God’s most righteous sons and daughters.
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Joseph Smith, in the latter days, all descendants of Israel’s tribes – including the Lost Ten Tribes – will gather to Zion, 
            Jackson County, through the efforts of Ephraim (Mormons) and receive their promised blessings. Joseph revealed, “And there shall they (Lost 
            Ten Tribes) fall down and be crowned with glory, even in Zion (Jackson County), by the hands of the servants of the Lord, even the children 
            of Ephraim. And they shall be filled with songs of everlasting joy. Behold, this is the blessing of the everlasting God upon the tribes of 
            Israel, and the richer blessing upon the head of Ephraim and his fellows. And they also of the tribe of Judah (the Jews), after their pain 
            (captivity and exile) shall be sanctified in holiness before the Lord to dwell in his presence day and night, forever and ever.”
            <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>D&C 133:32-35.</Tooltip> 
          </p>
        </div>

        <h2 className="headlinePadding">Today’s Descendants of Ephraim (Mormons)</h2>

        <div className='paragraph'>
          <p>In the Old Testament, Jacob prophesies that his son “Joseph is a fruitful bough, even a fruitful bough by a well; whose branches run over 
            the wall.”  
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>Genesis 49:22.</Tooltip> 
            
            The “fruitful bough” refers to Joseph’s numerous posterities, through Ephraim and Manasseh. Mormons believe the wall is the ocean that separates the old world of Palestine from America, and that Joseph’s posterity would inhabit America and become the Book of Mormon people of Nephites and Lamanites.
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormons also believe that others of Joseph’s descendants were scattered when the Assyrians sacked the Northern Kingdom of Israel in 721 BCE, forming the Lost Ten Tribes of Israel. Ephraim and Manasseh were two of the Ten Lost Tribes. Mormons believe that over the centuries, these people made their way into Europe and Scandinavia. Being from the House of Israel, the message of Joseph Smith’s restored gospel was familiar to them, and they accepted it through baptism.
          </p>
        </div>

        <div className='paragraph'>
          <p>Mormon general authority Orson Whitney stated, “Why did the Savior say, ‘My sheep know my voice?’ Did the sheep ever know the voice of a 
            shepherd it had never heard before? They who love the truth, and to whom it most strongly appeals, were they not acquainted with it in a 
            previous life? I think so. I believe we knew the Gospel before we came here.”  
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>Orson Whitney, Improvement Era, vol. 13, p. 100-1..</Tooltip> 
            
            Sixth Mormon prophet Joseph F. Smith said, “… we often catch a 
            spark from the awakened memories of the immortal soul, which lights up our whole being as with the glory of our former home.”
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>Joseph F. Smith, Gospel Doctrine, 213-14.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>When the first British stake was organized, Mormon prophet Spencer Kimball visited Malvern Hills in England and declared, “This is a place 
            where the blood of Israel is richly concentrated, and there are many still to gather.”  
            <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Quoted in Derek Cuthbert, “Breakthrough in Britain.” Ensign, July 1987, 28–32.</Tooltip> 
            
            Later, Mormon prophet Harold Lee testified in Manchester England that a temple had been built in Great Britain “because of its great 
            contribution to the early and continuous growth of the Church, which gave evidence to the great outpouring of the blood of Israel among 
            the people of these great British Isles.”  
            <btn id="clickable13" className="footnote">13 </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>Harold B. Lee, “The way to eternal life.” Ensign, November 1971, 10.</Tooltip> 
            
            Mormon general authority Derek Cuthbert proclaimed that “these [British] islands have a divine destiny ... Yes, the blood of Israel is richly 
            concentrated in these islands and the promised blessings will all be fulfilled.”
            <btn id="clickable14" className="footnote">14 </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Derek Cuthbert, “Church growth in the British Isles, 1937–1987.” BYU Studies 27, no. 2 (1987), 20.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>This idea is not unique to Mormonism. British Israelism, or Anglo Israelism, was the belief that the peoples of Northern European nations 
            were descended from the lost Ten Tribes of Israel who migrated there after Assyria conquered Israel in 721 B.C. One of the early sources of 
            this idea came from the French magistrate M. le Loyer’s The Ten Lost Tribes, published in 1590. Loyer provided one of the earliest statements 
            of the belief that the Anglo Saxon, Celtic, Scandinavian, Germanic, and associated peoples are the direct descendants of the Old Testament 
            Israelites.  
            <btn id="clickable15" className="footnote">15 </btn>
            <Tooltip anchorSelect="#clickable15" className="footnote-size" clickable>William H. Brackney (3 May 2012). Historical Dictionary of Radical Christianity.</Tooltip> 
            
            Over time, other books and sermons promoted the idea that the lost Ten Tribes of Israel, and the Jews after the Romans sacked 
            Jerusalem in 70 A.D., migrated throughout Europe to Great Britain. As a result, the bloodlines of Israel were scattered through the European 
            nations.
          </p>
        </div>

        <div className='paragraph'>
          <p>However, the truth rings a little differently. The fact is that Europeans are a mishmash of ancient migrations. DNA studies show that almost 
            all indigenous Europeans descend from at least three major migrations. The first migration started with hunter-gatherers who came from the 
            Middle East as the glaciers receded between 19,000 and 14,000 years ago. In a second migration, about 9,000 years ago, farmers from 
            northwestern Anatolia (now Greece and Turkey) moved in. The third major migration began about 5,000 years ago when herders swept in from the 
            Black Sea in what is now Russia.
            <btn id="clickable16" className="footnote">16 </btn>
            <Tooltip anchorSelect="#clickable16" className="footnote-size" clickable>Ann Gibbons, There's no such thing as a 'pure' European – or anyone else, Science, May 15, 2017.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>Nonetheless, Mormon leaders continue to teach the false idea that the British Isles were populated by descendants of the favored tribe of Ephraim from the house of Israel. They use this to explain why European people, especially those in the British Isles, joined the church in high numbers when the first Mormon missionaries arrived in the late 1830s.
          </p>
        </div>

        <h2 className="headlinePadding">Adoption into the House of Israel</h2>

        <div className='paragraph'>
          <p>If a Mormon does not descend from the lineage of the House of Israel, they may be adopted into the House of Israel. Joseph contrasted the 
            experience of a true descendant of the House of Israel and a Gentile when receiving the Holy Ghost by the gift of the laying on of hands. 
            Joseph taught “… [when] the Holy Ghost falls upon one of the literal seed of Abraham, it is calm and serene; and his whole soul and body are 
            only exercised by the pure spirit of intelligence.” But with a Gentile, “the effect of the Holy Ghost upon a Gentile, is to purge out the old 
            blood, and make him actually of the seed of Abraham.”
            <btn id="clickable17" className="footnote">17 </btn>
            <Tooltip anchorSelect="#clickable17" className="footnote-size" clickable>Joseph Smith, Teachings of the Prophet Joseph Smith p. 149-150.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>According to Brigham Young, Joseph taught that when a Gentile is confirmed a member of the church that “When the Lord pours out the Holy 
            Ghost upon that individual, he will have spasms, and you would think that he was going into fits.”  
            <btn id="clickable18" className="footnote">18 </btn>
            <Tooltip anchorSelect="#clickable18" className="footnote-size" clickable>Brigham Young, Journal of Discourses, April 8, 1855, vol. 2, p. 269.</Tooltip>
            
            Brigham also said that Joseph taught that the Gentile blood was actually cleansed out of their veins, and the blood of Jacob made to circulate 
            in them; and the revolution and change in the system were so great that it caused the beholder to think they were going into fits.”
            <btn id="clickable19" className="footnote">19 </btn>
            <Tooltip anchorSelect="#clickable19" className="footnote-size" clickable>Brigham Young, Journal of Discourses, April 8, 1855, vol. 2, p. 269.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>If the genetic makeup changes racially, that Mormon convert’s children would be of Israelite lineage. But regardless, whether a person is 
            an Israelites either by blood (lineage) or adoption, once they are baptized, they become a member of the Mormon House of Israel. They then 
            belong to the eternal family of the Old Testament patriarchs Abraham and Jacob.
            <btn id="clickable20" className="footnote">20 </btn>
            <Tooltip anchorSelect="#clickable20" className="footnote-size" clickable>Chapter 42: The Gathering of the House of Israel, Gospel Principles Manual.</Tooltip>
            
            These family ties are eternal and last beyond this mortal life. 
          </p>
        </div>

        </div>

        <div className="chapterFooter">
          <Link to="/Chap15">Previous Chapter</Link>
          <Link to="/">Home</Link>
          <Link to="/Chap17">Next Chapter</Link>
      </div>
      
    </div>
  )
}

export default Chap16