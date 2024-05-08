import React from 'react';
import './intro.css';
import bg from '../../assets/logo.jpg'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'> I'm <span className='introName'>Shallon Said</span> <br />Software Engineer</span>
            <p className='introPara'>I am a skilled software engineer with experience in <br />creating web applications and mobile applications.</p>

        </div>
        <img src={bg} alt='profile' className='bg' />
        

    </section>
  )
}

export default Intro;