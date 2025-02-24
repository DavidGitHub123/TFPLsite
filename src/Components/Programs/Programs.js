import React from 'react'
import '../../index.css'
import './Programs.css'
import gallery_2 from '../../Assets/Img/gallery-2.png'
import { Link } from "react-router";


export default function Programs () {
  return (

    <div>
    <div className='programs'>

            <div className='program'>
            <h1 className='feature-header'>Part I: Joseph's Grand Prophetic Vision</h1>
                <img src={gallery_2} alt='' />
                <div className='caption'>
                    <div className="margin-part">
                    <Link to="Chap1"><h3>Chapter 1: The Religious Mastermind</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap2"><h3>Chapter 2: Daniel’s Stone</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap3"><h3>Chapter 3: Joseph’s Visionary Prowess</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap4"><h3>Chapter 4: Ideas on Zion</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap5"><h3>Chapter 5: The Zion Builders</h3></Link>
                    </div>
                </div>
            </div>

            <div className='program'>
                <h1 className='feature-header'>Part II: Joseph's End of Day Scenario</h1>
                <img src={gallery_2} alt='' />
                <div className='caption'>
                    <div className="margin-part">
                    <Link to="Chap6"><h3>Chapter 6: Reveals Events</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap7"><h3>Chapter 7: First Domino to Fall</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap8"><h3>Chapter 8: Zion Will Be Sanctified</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap9"><h3>Chapter 9: The Lost 10 Tribes</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap10"><h3>Chapter 10: Zion in Jerusalem </h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap11"><h3>Chapter 11: The Book of Revelation</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap12"><h3>Chapter 12: Plagues of Seven Angels</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap13"><h3>Chapter 13: Second Coming to the World</h3></Link>
                    </div>
                </div>
            </div>

            <div className='program'>
            <h1 className='feature-header'>Part III: The Family of God</h1>
                <img src={gallery_2} alt='' />
                <div className='caption'>
                    <div className="margin-part">
                    <Link to="Chap14"><h3>Chapter 14: Thy Kingdom Come</h3></Link>
                    </div>
                    <div className="margin-part">
                    <Link to="Chap15"><h3>Chapter 15: God’s Favored Sons</h3></Link>
                    </div>
                </div>
            </div>
    </div>


    <div className='programs'>

        <div className='program'>
            <h1 className='feature-header'>Part IV: Building the Kingdom of God</h1>
            <img src={gallery_2} alt='' />
            <div className='caption'>
                <div className="margin-part">
                    <Link to="Chap16"><h3>Chapter 16: Three Failed Concepts</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap17"><h3>Chapter 17: What of the Lamanites?</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap18"><h3>Chapter 18: Mission to the Lamanites</h3></Link>
                </div>
            </div>
        </div>

        <div className='program'>
        <h1 className='feature-header'>Part V: Historical Timeline</h1>
            <img src={gallery_2} alt='' />
            <div className='caption'>
                <div className="margin-part">
                <Link to="Chap19"><h3>Chapter 19: Historical Events Unfulfilled </h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap20"><h3>Chapter 20: Mormon War on the Horizon</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap21"><h3>Chapter 21: Joseph King Over All the Earth</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap22"><h3>Chapter 22: Power and Violence</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap23"><h3>Chapter 23: Death of the King</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap24"><h3>Chapter 24: A Hiatus in Winter Quarters</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap25"><h3>Chapter 25: Mormon Reformation</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap26"><h3>Chapter 26: Native Americans</h3></Link>
                </div>
                <div className="margin-part">
                    <Link to="Chap27"><h3>Chapter 27: Eternal Dynasties</h3></Link>
            </div>
            </div>
        </div>

        <div className='program'>
        <h1 className='feature-header'>Part VI: Change the Course</h1>
            <img src={gallery_2} alt='' />
            <div className='caption'>
                <div className="margin-part">
                <Link to="Chap28"><h3>Chapter 28: The Second Coming by 1891</h3></Link>
                </div>
                <div className="margin-part">
                <Link to="Chap29"><h3>Chapter 29: Reinvent for Survival</h3></Link>
                </div>
                <div className="margin-part">
                <Link to="Chap30"><h3>Chapter 30: Denying Past Teachings</h3></Link>
                </div>
                <div className="margin-part">
                <Link to="Chap31"><h3>Chapter 31: Daniel's Prophecy Unfulfilled</h3></Link>
                </div>
            </div>
        </div>

    </div>

    </div>

    
  )
}

