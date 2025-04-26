import React from 'react'
import '../../index.css'
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import winterquarters from '../../Assets/Img/winterquarters.png'

const Chap26 = () => {
  return (
    <div className="chapter-container">

      <div className="chapterFooter">
        <Link to="/Chap25">Previous</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap27">Next</Link>
      </div>

      <h1 className='chapterHeading'>Chapter 26: Winter Quarters, Then on to Utah</h1>

      <img src={winterquarters} className='image' alt='Mormon encampment at Winter Quarters' />

    <div className="wrapper">


    <div className='paragraph'>
          <p>After Joseph’s death, the Mormons’ hatred of their Gentile neighbors intensified. Although Joseph shot a pistol at his attackers, the Mormons claimed that their prophet had gone like a lamb to the slaughter. And the church still claims this today. Due to the animosity and distrust between the Mormons and their Gentile neighbors, it was clear that the Mormons could not remain in Illinois. Mobs drove some Mormons from their homes and the Mormons fought back. Brigham and the apostles began organizing the exodus to the West.
          </p>
        </div>

        <div className='paragraph'>
          <p>In the church’s telling of its history, it positions the trek to Utah as God’s people fleeing persecution. In the isolation of the west, they could practice their “peaceful” religion. The church conveniently leaves out that in 1847, Brigham’s intent was to lead the Mormons out of the United States and to a faraway place to establish a theocracy – the true aim of Joseph’s religion. There, the Mormons would build up the Kingdom of God and await Joseph’s return to lead them to Jackson County. Joseph had uttered prophecies and they would be fulfilled.
          </p>
        </div>

        <div className='paragraph'>
          <p>The Mormons first left Nauvoo for Winter Quarters in Iowa and stayed there during the winter of 1846-1847. During that winter, 2,500 Mormons waited for better conditions to travel westward. Conditions were primitive the first month, with pioneers living in tents. Eight hundred makeshift cabins and sod houses were built. Winter Quarters remained inhabited until 1848. One group of 13 cabins became known as Kimball Row, where First Presidency member Heber Kimball housed his wives and children. The Mormons subsisted on cornbread, salt bacon, milk, and little meat from game. Due to a lack of vegetables, scurvy became a problem. Tuberculosis, malaria, and other diseases plagued the Mormons.
          </p>
        </div>

        <div className='paragraph'>
          <p>Early Mormon Louisa Barnes Pratt wrote, “I hired a man to build me a sod cave. He took turf from the earth, laid it up, 
            covered it with willow brush and sods. Built a chimney of the same ... I paid a five-dollar gold piece for building my sod 
            house, 10 × 12 ... A long cold rainstorm brought more severely again, the chills and fever. These with scurvy made me 
            helpless indeed! ... Many of my friends sickened and died in that place, when I was not able to leave my room, could not go 
            to their bedside to administer comfort to them in the last trying hours, not even to bid them farewell. Neither could I go 
            to see their remains carried to their final resting place where it was thought I would shortly have to be conveyed.”
            <btn id="clickable1" className="footnote">1 </btn>
            <Tooltip anchorSelect="#clickable1" className="footnote-size" clickable>Louisa Barnes Pratt memoir.</Tooltip>  
          </p>
        </div>

        <div className='paragraph'>
          <p>While there, living under harsh conditions of cold and near starvation, not the paradisaical Zion they had been promised, 
            hundreds of Mormons decided they had experienced enough. Hosea Stout reported “great numbers going off through disaffection.” 
            Noah Packard reported “a number of people” in Iowa “that are or have been Latter-day Saints, but ... most of them lie low and 
            keep dark.”
            <btn id="clickable2" className="footnote">2 </btn>
            <Tooltip anchorSelect="#clickable2" className="footnote-size" clickable>Noah Packard to Brigham Young, February 6, 1848, Brigham Young Papers, LDS Archives.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>In Winter Quarters, the Mormons experienced sickness and death. Lacking employment, the Mormons could not afford to feed 
            themselves. They lived in sod shanties, tents, or canvas-covered wagons. Others suffered from serious malnutrition, and 
            scurvy deaths swept the camps in epidemic proportions. “Come to Zion, come to Zion, and within her walls rejoice. Israel, 
            angels are descending from celestial worlds on high, And to man their pow’r extending.”  
            <btn id="clickable3" className="footnote">3 </btn>
            <Tooltip anchorSelect="#clickable3" className="footnote-size" clickable>Mormon Hymn, Israel, Israel, God is Calling.</Tooltip>  

            These true conditions are not reflected in this Mormon hymn.
          </p>
        </div>

        <div className='paragraph'>
          <p>Many Mormons abandoned their faith and left to find work and food for their families. Others left the church to homestead 
            in Iowa or Missouri. A few, once relatively well off, had given out so much in tithing and loans without repayment that 
            Brigham admitted, “they lose confidence in all their brethren and lose the good spirit; this leads to apostasy.”  
            <btn id="clickable4" className="footnote">4 </btn>
            <Tooltip anchorSelect="#clickable4" className="footnote-size" clickable>Journal History, April 5, 1848, LDS Archives.</Tooltip>
            
            One disaffected Mormon wrote, “While in Winter Quarters I found if I kept other men’s [counsel] instead of my own, I could 
            not support my family.”  
            <btn id="clickable5" className="footnote">5 </btn>
            <Tooltip anchorSelect="#clickable5" className="footnote-size" clickable>Daniel Brown to James Brown, April 16, 1854, Papers of James Stephens Brown, Utah State Historical Society, Salt Lake City, Utah.</Tooltip>
            
            Hosea Stout, Winter Quarters police chief, wrote in May 1847, “There was as much dissension now as ever I saw in or at any 
            other period of Church history.”
            <btn id="clickable6" className="footnote">6 </btn>
            <Tooltip anchorSelect="#clickable6" className="footnote-size" clickable>Diary of Hosea Stout 1 (March 14, 1848): 305.</Tooltip>
          </p>
        </div>

        <div className='paragraph'>
          <p>In these deplorable conditions, some Mormons voiced opposition to Brigham’s ordination to the First Presidency in December 
            1847. The secrecy of polygamy was becoming public. When John Neff, one of the Winter Quarters wealthiest men, became 
            aware of the practice, he almost left the church. He stayed after an intervention with church leaders.  
            <btn id="clickable7" className="footnote">7 </btn>
            <Tooltip anchorSelect="#clickable7" className="footnote-size" clickable>Diary of Hosea Stout 1 (April 1, 1847): 243.</Tooltip>
            
            Brigham worried, “… men would rise up and complain that the Twelve were not right and that they themselves were the ones 
            to lead and govern the people.”
            <btn id="clickable8" className="footnote">8 </btn>
            <Tooltip anchorSelect="#clickable8" className="footnote-size" clickable>Diary of Hosea Stout 1 (March 26, 1847): 243. </Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>Where were the Mormon God and Joseph, intervening on behalf of his followers from behind the veil? “I the Lord am Bound when ye do what I say.” A Mormon apologist would say that it is unfortunate that there was suffering at Winter Quarters. They would also say that, as Joseph had said in the past, there is always suffering when we do not fully follow the Lord’s prophet.
          </p>
        </div>

        <h2 className="headlinePadding">The Trek West</h2>

        <div className='paragraph'>
          <p>In April 1847 the vanguard company of Mormons, with Brigham Young at its head, ventured west. The group consisted of 143 men, including three enslaved Black men, eight apostles, three women, and two children. The train contained 73 wagons, one cannon, 93 horses, 52 mules, 66 oxen, 19 cows, 17 dogs and some chickens, and carried enough supplies to provision the group for one year. They reached the Salt Lake Valley in July. Scouts Erastus Snow and Orson Pratt entered the valley on July 2 and began to explore. They reported back that the land had good resources and was habitable. On July 23, Orson offered a dedicatory prayer on the land. On July 24, Brigham came upon the valley and declared “This is the right place, drive on.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Estimates suggest that during the winter of 1847-1848, 1,611 Mormons were living in the Salt Lake Valley. Adults made up 
            the smallest segment, with 53 percent under the age of nineteen and 25 percent children under the age of eight.  
            <btn id="clickable9" className="footnote">9 </btn>
            <Tooltip anchorSelect="#clickable9" className="footnote-size" clickable>Ronald Walker and Doris Dant, editors, “Nearly Everything Imaginable: the Everyday Life of 
              Utah's Mormon Pioneers." BYU Studies, 1999.”</Tooltip>
            
            Impressively, the Mormons began to carve out a community in the desert. Working together in a communal effort, they diverted water, plowed and sowed fields, and laid out towns. Over the next several years and decades, thousands upon thousands of people traveled to the new land of Zion – Deseret
          </p>
        </div>

        <div className='paragraph'>
          <p>But given Mormonism’s theological pursuit of establishing the holy city of Zion in Missouri, Utah was a strange location. It is nearly 1,100 miles away. One can only speculate on the number of lives that would have been saved and the suffering that would have been alleviated if Brigham had decided to locate the Mormons closer to Jackson County. But then, the church never did well near other people. And the isolation in faraway, desolate Utah gave the church the ability to establish a theocracy and mold generation after generation of believers.
          </p>
        </div>

        <div className='paragraph'>
          <p>Brigham and other church leaders promised Zion, and the Mormons made the difficult trek to Utah. Some Mormons traveled 
            the one thousand miles from Winter Quarters. Other Mormons left family and friends behind as far away as European countries 
            and traveled many more miles. Regardless of their point of origination, many people forfeited their lives and others 
            suffered greatly. Nearly 2,000 Mormon pioneers died crossing the plains between 1847 and 1868 with a 3.5 percent mortality 
            rate.  
            <btn id="clickable10" className="footnote">10 </btn>
            <Tooltip anchorSelect="#clickable10" className="footnote-size" clickable>Bashore worked with a team of actuarial scientists at Brigham Young University to analyze 56,000 pioneer records from 1847-1868. Of these 56,000, there were an estimated 1,900 people who died either on the plains or within the calendar year of their arrival.</Tooltip> 
            
            Deaths in non-Mormon pioneer companies share a similar mortality rate – showing no favoritism on God’s part for his chosen latter-day people. The Mormons in the handcart companies did not fare as well. They experienced a 20% mortality rate and suffered greatly.
          </p>
        </div>

        <div className='paragraph'>
          <p>The early years in the Salt Lake Valley were full of hardships and near starvation. During the winter of 1847-48 the Mormons 
            prepared the dry Utah soil for planting crops. On April 16, 1848, John Steele rejoiced that “green stuff is coming very fast,” 
            and that his “wheat, corn, beans and peas are all up and looking grand and grass is 6 inches high.” However, by late May, 
            tragedy struck. Black crickets attacked the crops.  
            <btn id="clickable11" className="footnote">11 </btn>
            <Tooltip anchorSelect="#clickable11" className="footnote-size" clickable>A myth emerged that God sent seagulls to eat the crickets, which had been disproven. See article Mormons, Crickets, and Gulls: A New Look At An Old Story, Utah Historical Quarterly, vol. 38, no. 3, 1970.</Tooltip> 

           One Mormon recorded, “We have grappled with the frost. . . but today to our utter astonishment, the crickets came by millions, sweeping everything before them. They first attacked a patch of beans for us and in twenty minutes there was not a vestige of them to be seen. They next swept over peas, then came into our garden; took everything clean. We went out with brush and undertook to drive them, but they were too strong for us.”
          </p>
        </div>

        <div className='paragraph'>
          <p>With night came frosts, day voracious crickets. This brought discouragement and fear down upon the Mormons like a crushing weight. Eliza Snow recorded, “This morning’s frost in unison with the ravages of the crickets for a few days past produces many sighs, and occasionally some long faces.” The horror of crickets engulfing fields, barns, houses, clothes, and cupboards continued day after day. Mrs. Lorenzo Young feared the future outcome. She recorded, “Today [May 29] they have destroyed 3/4 of an acre of squashes, our flax, two acres of millet and our rye, and are now to work in our wheat. What will be the result we know not.”
          </p>
        </div>

        <div className='paragraph'>
          <p>The Mormons began to doubt Brigham’s decision in this location for settlement. Isaac Haight recorded, “Many of the Saints begin to think of leaving the valley for fear of starvation." John Steele recorded that “the cry is now raised, ‘we cannot live here, away to California,’ and the faith of many were shaken.” Others stated their intentions of leaving for the Eastern States or Oregon.
          </p>
        </div>


        <h2 className="headlinePadding">A Common Experience</h2>

        <div className='paragraph'>
          <p>The experience of young pioneer Kirsten Ericksen 
          <btn id="clickable12" className="footnote">12 </btn>
            <Tooltip anchorSelect="#clickable12" className="footnote-size" clickable>Kirsten Ericksen Benson, “Recollections of Kirsten Ericksen Benson coming to Zion in 1857,” in Kersten E. Benson biographical file, 1, Church History Library.</Tooltip> 
            
            in a handcart company is indicative of the struggles and suffering endured while crossing the plains to Zion. After hearing Mormon missionaries preach that God had raised up a prophet named Joseph Smith and that Zion was being established in the last days in America, Kirsten Ericksen from Denmark desired to gather to the promised land of Mormon milk and honey. Accompanied by her parents and grandmother, the 20-year-old began her journey in 1857. She later said that she was “a young girl in a strange land – [she had] no friends and could not speak English or make [her] wants known.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Uncertain they could withstand the harsh journey west, Kirsten’s parents and grandmother decided to stay in Nebraska for a time. Kirsten stated, “I came to the conclusion that I could not leave my aged parents in a strange country and so made up my mind to stay with them. The Captain . . . came to me and advised me to leave my parents and promised me if I would do so, God would bless me and them and preserve us—this was a very sore trial to me. But I put my trust in God.” Kirsten never forgot July 7, 1857, the day she left the outfitting post, “full of sorrow in parting from [her] parents.”
          </p>
        </div>

        <div className='paragraph'>
          <p>After a few days on the trail Kirsten was “so worn out pulling over the rough roads—up hills—and through the sand” that she lay down in the grass, expecting to die. She was discouraged and lonely and “came to the conclusion that [she] might as well die there as suffer longer.” During the long days, the sun beat down intensely. Kirsten cut rawhide from dead cattle along the road to make moccasins to replace her worn shoes. “Crossing the creeks and rivers would make the Raw hide soft, and the hot sun and Roads would make them hard,” she recalled. “Our feet were nearly all the time sore and bleeding.”
          </p>
        </div>

        <div className='paragraph'>
          <p>Each night, they slept under large, 20-person tents. Since Kirsten had given up her bedclothes to meet the weight limit, she spent the long nights wrapped only in a shawl, grateful for the body heat of her fellow pullers. Even though they were desperate for sleep, their slumber was interrupted to take turns baking bread. Bread was the staple of their diet, with a little salt pork, rice, sugar, and other seasonings. One member of Kirsten’s company recalled that after three weeks on the trail, most of their supplies were gone.
          </p>
        </div>

        <div className='paragraph'>
          <p>Before resupply wagons from Salt Lake City appeared with additional foodstuffs, daily rations were often cut in half, and sometimes down to a quarter, leaving hungry pioneers to travel on only a few ounces of flour a day. One of Kirsten’s fellow travelers reminisced, “I went hungry most of the time.” Kirsten arrived in Salt Lake City on September 13. She recorded her regret leaving behind most of her clothing and her surprise at the ragged pioneers she met in Utah. She was taken to the home of her sister in Lehi, Utah, where she recovered from the journey. One month later she married her brother-in-law Jens Peter Benson as a plural wife. Was he the love of her life? Welcome to the Mormon Zion.
          </p>
        </div>

        <div className='paragraph'>
          <p>A member of a handcart company stated, “There could not have been a more difficult mode of travel ... I knew when I left 
            England that ours was to be a handcart company, but it was impossible for me to realize the hardships I had to meet.”  
            <btn id="clickable13" className="footnote">13 </btn>
            <Tooltip anchorSelect="#clickable13" className="footnote-size" clickable>Susan M. Witbeck autobiographical sketch, 5, Church History Library, Salt Lake City; William Clayton, The Latter-day Saints’ Emigrants’ Guide, ed. Stanley B. Kimball (Gerald, Missouri: Patrice Press, 1983), 80; Carter, “Mormon Handcart Companies,” 5.</Tooltip> 

            John Chislett, a survivor, wrote, “Many a father pulled his cart, with his little children on it, until the day preceding 
            his death.”
            <btn id="clickable14" className="footnote">14 </btn>
            <Tooltip anchorSelect="#clickable14" className="footnote-size" clickable>Hafen and Hafen, 1981, Handcarts to Zion p. 134-138; Bartholomew and Arrington, 1993, Rescue of the 1856 Handcard Companies, p. 28-37.</Tooltip> 
          </p>
        </div>

        <div className='paragraph'>
          <p>In late August 1856, the Willie and Martin handcart companies, consisting of 1,100 British and Scandinavian converts, left Nebraska for Salt Lake City. The survivors reached Utah four months later, with 210 of the company dying during on the journey in heavy snow and severe temperatures in Wyoming. In October the two companies reached Fort Laramie, Wyoming. Expecting to be restocked with provisions, supplies were unavailable. The companies cut food rations down to 12 oz. per person, hoping that their supplies would last the trek. To lighten their loads, the companies cut the luggage allowance to 10 pounds per person, discarding clothing and blankets.
          </p>
        </div>

        <div className='paragraph'>
          <p>On October 19, a blizzard struck, halting the companies and a relief party traveling to them from Salt Lake. Despite the weather, a small scouting party was sent ahead. They found the Willie company and gave them a small amount of flour and told them the rescue party was near. The members of the Willie Company had reached the end of their flour supplies and slaughtered a handful of broken-down cattle. The scouting party rushed on to locate the Martin Company.
          </p>
        </div>

        <div className='paragraph'>
          <p>On October 20th the main rescue party reached the Willie Company and provided food and assistance. Half of the rescue party remained to assist the Willie Company while the other half pressed forward to assist the Martin Company. On October 23, the day after the main rescue party had arrived, the Willie Company faced the most difficult section of the trail—the ascent up Rocky Ridge. The climb took place during a howling snowstorm through knee-deep snow. That night 13 company members died. On October 19, the Martin Company was 110 miles east of the Willie company, crossing the North Platte River near. Shortly after completing the crossing, the blizzard struck. Many company members suffered from hypothermia and frostbite after wading through the frigid river. They set up camp, unable to continue forward through the snow. 
          </p>
        </div>

        <div className='paragraph'>
          <p>The main party continued eastward to find the Martin company. They sought shelter at a vacant fort at Devil’s Gate and sent out a scouting party. They located the Martin company on October 28 and discovered 56 members had died after the river crossing. One of the scouts, Ephraim Hanks, brought meat from a recently slaughtered buffalo which saved lives. The scouting party performed blessings and amputations to stop frostbite and gangrene. Three days later the main rescue party met the Martin Company and helped them on to Devil’s Gate. Leader of the rescue party, George Grant, reported to Brigham, “… you can imagine between five and six hundred men, women and children, worn down by drawing hand carts through snow and mud; fainting by the wayside; falling, chilled by the cold; children crying, their limbs stiffened by cold, their feet bleeding and some of them bare to snow and frost. The sight is almost too much for the stoutest of us.”
          </p>
        </div>

        <div className='paragraph'>
          <p>When the Willie Company arrived in Salt Lake City on November 9, 68 members of the company had died from disease and exposure. The Martin Company arrived in Salt Lake City on November 30; at least 145 members of the company had died. Many of the survivors had to have fingers, toes, or limbs amputated due to severe frostbite. But they had reached the Mormon Zion – or had they?
          </p>
        </div>

        </div>

      <div className="chapterFooter">
        <Link to="/Chap25">Previous</Link>
        <Link to="/">Home</Link>
        <Link to="/Chap27">Next</Link>
      </div>

    </div>
  )
}

export default Chap26