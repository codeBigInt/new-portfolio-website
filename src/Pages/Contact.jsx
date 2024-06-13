import { FaEnvelopeCircleCheck, FaLocationDot, FaMapLocation, FaPhone } from 'react-icons/fa6'
import './CSS/Contact.css'
import { FaArrowUp, FaDownload, FaTelegram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import SmallerText from '../assets/utils/UI/SmallerText'
import { useContext, useRef, useState } from 'react'
import { storeConetext } from '../context/store'
import emailjs from '@emailjs/browser';
// import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

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
        user_email: '',
        user_name: '',
        message: ''
    })
    const [hintIsDisplayed, setHintIsDisplayed] = useState(false)
    const [scrollHint, setScrollHint] = useState(false)
    const { scrollHeight, setScrollHeight } = useContext(storeConetext)
    console.log(scrollHeight);
    const form = useRef();

    const templateId = 'template_23o9mgj'
    const serviceId = 'service_ie3rxz8'
    const publicKey = '2M5EesimAgXKUJ8eN'



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


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(serviceId, templateId, form.current, {
            publicKey: publicKey,
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

          e.target.reset()
      };
    
    
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
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <div className={`field ${isFocused || formData.email ? 'focused' : ''}`}>
                    <label className='label' htmlFor="email">Preffered Email</label>
                    <input className='input' type="email" name='user_email' value={formData.user_email}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={`field ${isFocused || formData.name ? 'focused' : ''}`}>
                    <label className='label' htmlFor="name">Name</label>
                    <input className='input' type="text" name='user_name' value={formData.user_name}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={`field ${isFocused || formData.text ? 'focused' : ''}`}>
                    <label className='label' htmlFor="text-area">Type in message</label>
                    <textarea className='input area' name="message" value={formData.message}
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