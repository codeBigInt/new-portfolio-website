import { FaEnvelopeCircleCheck, FaLocationDot, FaMapLocation, FaPhone } from 'react-icons/fa6'
import './CSS/Contact.css'
import { FaArrowUp, FaDownload, FaTelegram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import SmallerText from '../assets/utils/UI/SmallerText'
import { useContext, useState } from 'react'
import { storeConetext } from '../context/store'

const Contact = () => {
    const reach = [
        {
            icon: <FaEnvelopeCircleCheck />,
            reachHeader: 'Email Address',
            reachInfo: 'elliotlucky509@gmail.com'
        },
        {
            icon: <FaPhone />,
            reachHeader: 'Phone No.',
            reachInfo: '+2347-011-305-106'
        },
        {
            icon: <FaWhatsapp />,
            reachHeader: 'WhatsApp No.',
            reachInfo: '+2347-011-305-106'
        },
        {
            icon: <FaLocationDot />,
            reachHeader: 'Location',
            reachInfo: 'Abuja, Nigeria'
        },
    ]
    const [isFocused, setIsFocused] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        text: ''
    })
    const [hintIsDisplayed, setHintIsDisplayed] = useState(false)
    const [scrollHint, setScrollHint] = useState(false)
    const { scrollHeight, setScrollHeight } = useContext(storeConetext)
    console.log(scrollHeight);

    function handleFocus(){
        setIsFocused(true)
    }
    function handleBlur(){
        setIsFocused(false)
    }
    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevData => {
            return {
                ...prevData, [name]: value
            }
        })
    }
    const handleSendEmail = () => {
        e.preventDefault()
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "elliotlucky509@gmail.com",
            Password : "0F72A888D0FC33CE5C402D9ABEC9D1864195",
            To : 'elliotlucky509@gmail.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
    }
    
    return(
        <div className="contact-container">
            <SmallerText p={`Get in touch, let's connect`} h1={'Leave Me A Messsage'}/>
            <div className="cont">
            <div className="quick-reach">
                {
                    reach.map(reach => (
                        <div className="info-holder">
                            <span className="icon-holder">{reach.icon}</span>
                            <div className='info-cont'>
                                <p className='reach'>{reach.reachHeader}</p>
                                <p>{reach.reachInfo}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <form onSubmit={(e) => handleSendEmail(e)}>
                <div className={`field ${isFocused || formData.email ? 'focused' : ''}`}>
                    <label className='label' htmlFor="email">Preffered Email</label>
                    <input className='input' type="email" name='email' value={formData.email}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={`field ${isFocused || formData.name ? 'focused' : ''}`}>
                    <label className='label' htmlFor="name">Name</label>
                    <input className='input' type="text" name='name' value={formData.name}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={`field ${isFocused || formData.text ? 'focused' : ''}`}>
                    <label className='label' htmlFor="text-area">Type in message</label>
                    <textarea className='input area' name="text" value={formData.text}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                <button type='submit'>
                    <span>Send Message</span>
                    <span className='kite'><FaTelegram /></span>
                </button>
            </form>
            </div>
            {
                scrollHeight >= 685 ? <div className="scroll-user">
                <div className="hint">
                    { hintIsDisplayed &&  <p>Download CV</p>}
                    <a href='/' download onMouseDown = {() => setHintIsDisplayed(false)} onMouseOver={() => setHintIsDisplayed(true)} onMouseOut={() => setHintIsDisplayed(false)} >
                        <FaDownload />
                    </a>
                </div>
                <div className="hint">
                    { scrollHint &&  <p>Back to Top</p>}
                    <button onClick={() => {
                        const elementToScrollTo = document.getElementById('hero')
                        elementToScrollTo.scrollIntoView({
                            behavior: 'smooth'
                        })
                        }} 
                        onMouseOver={() => setScrollHint(true)} 
                        onMouseDown = {() => setScrollHint(false)} 
                        onMouseOut={() => setScrollHint(false)} >
                        <FaArrowUp />
                    </button>
                </div>
            </div> : null
            }
            
        </div>
    )
}
export default Contact