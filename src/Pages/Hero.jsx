import { FaBabyCarriage, FaGithubAlt ,FaBootstrap, FaBriefcase, FaCss3, FaCss3Alt, FaFacebook, FaFigma, FaFire, FaGit, FaGithub, FaGraduationCap, FaInbox, FaInfoCircle, FaJsSquare, FaLinkedinIn, FaMailBulk, FaNode, FaNodeJs, FaNpm, FaPersonBooth, FaPhone, FaPhoneAlt, FaProjectDiagram, FaReact, FaSchool, FaSuitcaseRolling, FaToolbox, FaTwitter, FaUser, FaWhatsapp, FaArrowCircleRight, FaArrowCircleUp, FaArrowUp, FaEnvelope, FaTimes, FaHamburger } from 'react-icons/fa'
import { FaDownload, FaFilePdf } from 'react-icons/fa'
import { icons, navArray } from '../assets/utils/Array'
import './CSS/Hero.css'
import { useContext, useEffect, useState } from 'react'
import { storeConetext } from '../context/store'
// import doc from '../assets/utils/Lucky-Elliot-cv.docx'
import { HiArrowDown } from 'react-icons/hi2'



const Hero = () => {
    const [menuIsDisplayed, setMenuIsDisplayed] = useState(false)
    const ctx = useContext(storeConetext)
    const textLoader = [
        'Remote',
        'Freelance'
    ]

    useEffect(() => {
        function updateText(){
        setTimeout(() => {
            document.querySelector('#typing').textContent = textLoader[0]
        }, 0)
            setTimeout(() => {
                document.querySelector('#typing').textContent = textLoader[1]
            }, 4000)
    
        }
        updateText()
        
        setInterval(updateText, 8000)
        return () => clearInterval(updateText)
    }, [])

    // Handle menu toggle event
   const handleMenu = (e) => {
    e.preventDefault()
    setMenuIsDisplayed(!menuIsDisplayed)
   }

    return(
        <div className="hero-container">
            <div className="content">
                <nav className={`${ctx.mediaWidth > 900 && ctx.scrollHeight > 900 ? 'fix' : ''}`}>
                    <div className={`nav_brand ${ctx.scrollHeight >= 650 ? 'black' : ''}`}>
                        <h3>Lucky Elliot</h3>
                    </div>
                    {
                        menuIsDisplayed === true && ctx.mediaWidth <= 900 ?
                        <ul className="nav_links">
                        {
                            navArray.map(linkItem => (
                            <button onClick={() => {
                                const elementToScrollTo = document.querySelector(linkItem.id)
                                elementToScrollTo.scrollIntoView({
                                    behavior: 'smooth'
                                })
                                setMenuIsDisplayed(false)
                                }} className="navLink">
                                {linkItem.link}
                            </button>
                            ))
                        }
                        
                        </ul> : null
                    }
                    { menuIsDisplayed && <div className="overlay" onClick={() => setMenuIsDisplayed(false)}></div>}
                    {
                        ctx.mediaWidth >= 900 && <ul className="nav_links">
                        {
                            navArray.map(linkItem => (
                                <button onClick={() => {
                                    const elementToScrollTo = document.querySelector(linkItem.id)
                                    elementToScrollTo.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                    setMenuIsDisplayed(false)
                                    }} className="navLink">
                                    {linkItem.link}
                                </button>
                            ))
                        }
                        </ul> 
                    }
                    {
                        ctx.mediaWidth <= 900 ? 
                         <button onClick={handleMenu} className={`toggler ${ctx.scrollHeight >= 650 ? 'black' : ''}`}>
                            { menuIsDisplayed ? <FaTimes /> : <FaHamburger /> }
                        </button>: <div className="nav_controls">
                            <a href={`/`} download className="dwnLoad">
                                <FaDownload />
                                <span>Download CV</span>
                            </a>
                        </div>
                    }
                </nav>
                <main>
                    <div className="intro-cont">
                                <p className='intro'>Hi, i'm Elliot</p>
                                <div className="typing_text">
                                    <span>A <span id='typing'></span></span>
                                    <span className="lobed_text">  Frontend Developer</span>
                                </div>
                                <p className='small-text'>
                                    With 3+ Years of Personal experience & 7year of Collective Team Experience <br />Let's Build Your Next Big project together
                                </p>
                                <div className="socials">
                                    <ul className="social_icons">
                                        {
                                            icons.map(icons => (
                                                <a href={icons.href} target='_blank' className="social_links">
                                                    {icons.icon}
                                                </a>
                                            ))
                                        }
                                    </ul>
                                </div>
                            <div className='controls'>
                                <button onClick={() => {
                                    const elementToScrollTo = document.querySelector('#Contact')
                                    elementToScrollTo.scrollIntoView({
                                        behavior: 'smooth'
                                    })}}
                                     className="connect">
                                    <span>Let's Start Talking</span>
                                    <span className='arrow'><FaArrowUp /></span>
                                </button>
                                <button onClick={() => {
                                    const elementToScrollTo = document.querySelector('#Portfolio')
                                    elementToScrollTo.scrollIntoView({
                                        behavior: 'smooth'
                                    })}} className="connect">
                                    <span>Go To Projects</span>
                                    <span className='arrow'><FaArrowUp /></span>
                                </button>
                            </div>
                    </div>
                    <button onClick={() => {
                        const elementToScrollTo = document.getElementById('About')
                        elementToScrollTo.scrollIntoView({
                            behavior: 'smooth'
                        })
                            }}  className='btn-dwn'>
                            <HiArrowDown />
                    </button>
                </main>
            </div>
        </div>
    )
}
export default Hero