import React from 'react'
// import '../../index.css'
import './Programs.css'
import joseph2 from '../../Assets/Img/joseph2.jpg'
import angelsfighting from '../../Assets/Img/angelsfighting.png'
import brigham2 from '../../Assets/Img/brigham2.jpg'
import premortal from '../../Assets/Img/premortal.png'
import pioneers from '../../Assets/Img/pioneers.png'
import apostles from '../../Assets/Img/apostles.png'
import { Link } from "react-router";


export default function Programs () {
  return (


    <div className='bar'>
        
        <div className='container'>

            <div className='program'>
                <div>
                    <h1 className='feature-header'>Part I:</h1>
                    <h1 className='feature-header'>Joseph's Prophetic Vision</h1>
                </div>
                <img src={joseph2} className='caption-img'alt='' />
                <div className='caption'>
                    <div className="margin-part">
                        <Link to="Intro"><p>The First Presidency Letter</p></Link>
                    </div>
                    <div className="margin-part">
                        <Link to="Chap1"><p>1. Religious Mastermind</p></Link>
                    </div>
                    <div className="margin-part">
                        <Link to="Chap2"><p>2. Daniel’s Stone</p></Link>
                    </div>
                    <div className="margin-part">
                        <Link to="Chap3"><p>3. Joseph's Visionary Prowess</p></Link>
                    </div>
                    <div className="margin-part">
                        <Link to="Chap4"><p>4. Ideas on Zion</p></Link>
                    </div>
                    <div className="margin-part">
                        <Link to="Chap5"><p>5. The Zion Builders</p></Link>
                    </div>
                    <div className="margin-part">
                        <Link to="Chap6"><p>6. Revealed Timeline</p></Link>
                    </div>
                </div>
            </div>

            <div className='program'>
                <div>
                    <h1 className='feature-header'>Part II:</h1>
                    <h1 className='feature-header'>Joseph's End Day Scenario</h1>
                </div>

                <img src={angelsfighting} className='caption-img' alt='' />
                <div className='caption'>
   
                    <div className="margin-part">
                    <Link to="Chap7"><p>7. First Domino to Fall</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap8"><p>8. Zion Will Be Sanctified</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap9"><p>9. The Lost 10 Tribes</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap10"><p>10. Zion in Jerusalem </p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap11"><p>11. Book of Revelation</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap12"><p>12. Angels & Plagues</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap13"><p>13. Second Coming</p></Link>
                    </div>
                </div>
            </div>

            <div className='program'>
                <div>
                    <h1 className='feature-header'>Part III:</h1>
                    <h1 className='feature-header'>The Family of God</h1>
                </div>
                <img src={premortal} className='caption-img' alt='' />
                <div className='caption'>
                    <div className="margin-part">
                    <Link to="Chap14"><p>14. Thy Kingdom Come</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap15"><p>15. Joseph’s Revelations</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap16"><p>16. God’s Favored Sons</p></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap17"><p>17. Premortal Past</p></Link>
                    </div>
                </div>
            </div>
            </div>

    <div className='container'>

        <div className='program'>
            <h1 className='feature-header'>Part IV:</h1>
            <h1 className='feature-header'>Building the Kingdom of God</h1>
            <img src={brigham2} className='caption-img' alt='' />
            <div className='caption'>
                <div className="margin-part">
                    <Link to="Chap18"><p>18. Three Failed Concepts</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap19"><p>19. What of the Lamanites?</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap20"><p>20. Mission to the Lamanites</p></Link>
                </div>
                <div className="margin-part">
                <Link to="Chap21"><p>21. Unfulfilled Prophecies </p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap22"><p>22. Mormon War</p></Link>
                </div>
            </div>
        </div>

        <div className='program'>
            <h1 className='feature-header'>Part V:</h1>
            <h1 className='feature-header'>Historical Events</h1>
            <img src={pioneers} className='caption-img' alt='' />
            <div className='caption'>
                <div className="margin-part">
                    <Link to="Chap23"><p>23. King Over All the Earth</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap24"><p>24. Power and Violence</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap25"><p>25. Death of the King</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap26"><p>26. Winter Quarters</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap27"><p>27. Mormon Reformation</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap28"><p>28. Native Americans</p></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap29"><p>29. Eternal Dynasties</p></Link>
            </div>
            </div>
        </div>

        <div className='program'>
            <h1 className='feature-header'>Part VI:</h1>
            <h1 className='feature-header'>Reinvent to Survive</h1>
            <img src={apostles} className='caption-img' alt='' />
            <div className='caption'>
                <div className="margin-part">
                <Link to="Chap30"><p>30. 1891 Second Coming</p></Link>
                </div>
                <div className="margin-part">
                <Link to="Chap31"><p>31. Reinvent for Survival</p></Link>
                </div>
                <div className="margin-part">
                <Link to="Chap32"><p>32. Denying Past Teachings</p></Link>
                </div>
                <div className="margin-part">
                <Link to="Chap33"><p>33. Daniel's Prophecy Gone</p></Link>
                </div>
            </div>
            
        </div>
        </div>
        </div>


    
  )
}

