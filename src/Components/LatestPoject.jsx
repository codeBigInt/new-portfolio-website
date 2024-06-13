import React from 'react'
import './CSS/LatestProject.css'
import project1 from '../assets/images/project1.jpg'
import project3 from '../assets/images/mobile.png'
import project2 from '../assets/images/main2.jpg'
import project4 from '../assets/images/project2.png'
import { FaArrowUp, FaArrowUp19, FaCircleChevronDown, FaCircleH, FaCircleRadiation, FaCircleUser } from 'react-icons/fa6'
import { FaGgCircle } from 'react-icons/fa'
import SmallerText from '../assets/utils/UI/SmallerText'


const LatestPoject = () => {
    const imgArray = [
        project1, project2, project3, project4, project1
    ]
  return (
    <div className='latest'>
        <SmallerText p={'What prrojects we recently concluded'} h1={'Latest Project'}/>
        <div className="caruosel-container">
            <div className="image-grid">
                {
                    imgArray.map(img => (
                        <div className='latest-project'>
                            <img  src={img} alt="latest project" />
                        </div>
                    ))
                }
            </div>
        </div>
        <button onClick={() => {
                        const element = document.getElementById('Portfolio')
                        element.scrollIntoView({
                            behavior: 'smooth'
                        })
                }}  className='nav-portfolio'>
            <span>See Portfolio</span>
            <FaArrowUp className='portfolio-arrowup' />
        </button>
    </div>
  )
}

export default LatestPoject