import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate Full-stack Software Engineer with experience in creating visually appealing and user friendly web and mobile applications. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS,Javascript, ReactJs, Node, Python, Flask, React Native, Firebase, Expo, Figma and SQl.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src='' alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>lorem</h2>
              <p></p>
            </div>
          </div>
          <div className='skillBar'>
            <img src='' alt='webDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>lorem</h2>
              <p></p>
            </div>
          </div>
          <div className='skillBar'>
            <img src='' alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>lorem</h2>
              <p></p>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Skills