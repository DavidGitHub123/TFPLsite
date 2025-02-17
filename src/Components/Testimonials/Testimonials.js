import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/Img/next-icon.png'
import back_icon from '../../Assets/Img/back-icon.png'
import user_1 from '../../Assets/Img/user-1.png'
import user_2 from '../../Assets/Img/user-2.png'
import user_3 from '../../Assets/Img/user-3.png'
import user_4 from '../../Assets/Img/user-4.png'

export default function Testimonials () {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt='' />
                            <div>
                                <h3>Maria</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>I was always apprehensive about my vocabulary. I tried other apps, but the Words to Impress App made it easy. I could create my own lists and masters those one at a time. Now I use the app every day. I love the Word of the Day feature.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt='' />
                            <div>
                                <h3>Josh</h3>
                                {/* <span>Edusity, USA</span> */}
                            </div>
                        </div>
                        <p>I wanted to increase my vocabulary. My high school English teacher always said a strong vocabulary helps in two ways. It makes you a better communicator, and also helps you read faster, knowing the defitions of lots of words. The app is easy to use and has fun games and quizzes.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt='' />
                            <div>
                                <h3>Jennifer</h3>
                                {/* <span>Edusity, USA</span> */}
                            </div>
                        </div>
                        <p>I was interested in the Build My List tool. I pasted in text from my writing and it generated a list for me of words I already used, that make me sound smarter.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt='' />
                            <div>
                                <h3>Marcus</h3>
                                {/* <span>Edusity, USA</span> */}
                            </div>
                        </div>
                        <p>Love the games. Addicted to Anagram Fun and Fast Match. I didn't want to take the time to create my own lists, so I used the pre-built list of words. Easy peasy!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

