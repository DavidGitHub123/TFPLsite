import React from 'react'
import './Programs.css'
import feature_1 from '../../Assets/Img/feature_1.jpg'
import feature_3 from '../../Assets/Img/feature_3.jpg'
import feature_4 from '../../Assets/Img/feature_4.jpg'
import gallery_1 from '../../Assets/Img/gallery_1.png'
import program_icon_1 from '../../Assets/Img/program-icon-1.png'
import program_icon_2 from '../../Assets/Img/program-icon-2.png'
import program_icon_3 from '../../Assets/Img/program-icon-3.png'


export default function Programs () {
  return (
    <div className='programs'>
        <div className='program'>
            <p className='feature-header'>Rule of 50</p>
            <img src={feature_1} alt='' />
            <div className='caption'>
                {/* <img src={program_icon_1} alt='' /> */}
                <p>Rule of 50</p>
                <p>We each have a unique vocabulary. Most successful people have mastered 50 to 100 “big” vocabulary words. The Words to Impress App helps you build a list unique to you. Once your list is complete, study those words, making them your own. If you’re an overachiever, add more words.</p>
            </div>
        </div>
        <div className='program'>
            <p className='feature-header'>Targeted Learning</p>
            <img src={feature_3} alt='' />
            <div className='caption'>
                {/* <img src={program_icon_2} alt='' /> */}
                <p>Targeted Learning</p>
                <p>Unlike other vocabulary-building systems that present you with hundreds of words to learn, this App helps you build the right list for you. The Build My List tool analyzes your writing for common words unique to you. Then provides you with a list of upgraded words based on familiar concepts and ideas. </p>
            </div>
        </div>
        <div className='program'>
            <p className='feature-header'>Fun Reinforcement</p>
            <img src={gallery_1} alt='' />
            <div className='caption'>
                {/* <img src={program_icon_3} alt='' /> */}
                <p>Fun Reinforcement</p>
                <p>Here you can learn to make words part of your everyday vocabulary. The Vocabulary Mastery section provides games and quizzes to help you learn your list of words. Then reinforce your list of words to make them part of your everyday speech and writing. Games and quizzes include Rapid Fire, Word Match, Quick Quiz, Fill-in-the-Blank, Fast Match, and Anagram Fun.</p>
            </div>
        </div>
        <div className='program'>
            <p className='feature-header'>Word Situations</p>
            <img src={feature_4} alt='' />
            <div className='caption'>
                {/* <img src={program_icon_3} alt='' /> */}
                <p>Word Situations</p>
                <p>Imagine yourself in an important situation. What do you say? Word Situations identifies words unique to politics, business, job interviews, etc. from 10 different categories. Look up words quickly for particular situations and be ready to impress.</p>
            </div>
        </div>
    </div>
  )
}

