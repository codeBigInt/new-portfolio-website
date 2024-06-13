import { FaArrowUp, FaCalendarCheck, FaCalendarTimes, FaCaretUp, FaCheck, FaGgCircle, FaPlus, FaPlusCircle, FaRegCopy } from 'react-icons/fa'
import SmallerText from '../assets/utils/UI/SmallerText'
import './CSS/Portfolio.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaArrowUpFromBracket, FaCaretDown, FaGitAlt } from 'react-icons/fa6'
import { projectsArr } from '../assets/ProjectArray'
import { useContext, useState } from 'react';
import { storeConetext } from '../context/store';


const Portfolio = () => {
    const [isDisplayedId, setIsDisplayedId] = useState(null)
    const [copyId, setCopyId] = useState('')
    const [isCopied, setIsCopied] = useState(false)
    const [err, setErr] = useState('')
    const ctx = useContext(storeConetext)

    function handleLinkCopy(projectLink, id){
        if(copyId === id){
            if(navigator && navigator.clipboard && navigator.clipboard.writeText){
                navigator.clipboard.writeText(projectLink)
                .then(() => {
                    setIsCopied(true)
                    setTimeout(() => {
                        setIsCopied(false)
                    }, 1000)
                    setErr('copied')
                    console.log(err);
                })
                .catch(error => {
                    if(error){
                        setErr(`Didnt copy`)
                        console.log(err);
                    }
                })
            }}
    } 

    const handleDisplay = (id, e) => {
        e.preventDefault()
        setIsDisplayedId( isDisplayedId === id ? null : id )
    }
    return(
        <div className="portfolio-container">
            <SmallerText p = {'Successfully completed projects'} h1 = {'My Portfolio'}/>
            <main>
                {
                    projectsArr.map(projects => (
                      <div className="project_cont">
                        <div className="project_card">
                            <img src={projects.image} alt='project-image' />
                            <div className="details-cont">
                                <div className='expand'>
                                    <h3>{projects.projectTitle}</h3>
                                    {
                                        ctx.mediaWidth >= 900 && <button onClick={(e) => handleDisplay(projects.id, e)}>
                                        {
                                            isDisplayedId === projects.id ? <FaCaretUp /> : <FaCaretDown />                                        }
                                    </button>
                                    }
                                    
                                </div>
                                <p className='desc'>{projects.desc}</p>
                                <div className="controls">
                                    <div className="copy-area">
                                        <p>View Codes On Github</p>
                                        <div className='git_link_cont'>
                                            <span className="link_holder">{projects.gitLink}</span>
                                            {
                                                copyId === projects.id && isCopied ? <button  className="visit">
                                                    <FaCheck />
                                                </button> :
                                                <button onClick={() => {
                                                    setCopyId(projects.id)
                                                    handleLinkCopy(projects.gitLink, projects.id)
                                                    }} className="visit">
                                                    <FaRegCopy />
                                                </button>
                                            }
                                        </div>
                                    </div>
                                    <div className='project-go'>
                                        <a href={projects.visitLink} target='_blank'>
                                            <span>Visit Site</span>
                                            <span className='arrow-visit'><FaArrowUp /></span>
                                        </a>
                                        {
                                            ctx.mediaWidth <= 900 && 
                                            <button className='see' onClick={(e) => handleDisplay(projects.id, e)}>
                                                <span>See more</span>
                                                <span>{isDisplayedId ? <FaCaretUp /> : <FaCaretDown />}</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            isDisplayedId === projects.id &&
                            <div className="readme-area">
                                <div className="readme-header">
                                    <p className='readme'>
                                        <span>ReadMe.md</span>
                                    </p>
                                    <div className='load'>
                                        <span className="red"></span>
                                        <span className="yellow"></span>
                                        <span className="green"></span>
                                    </div>
                                </div>
                                <SyntaxHighlighter customStyle={{
                                    borderRadius: '25px',
                                    flexWrap: 'wrap'
                                }} language="readme" style={atomOneDark}>
                                        {projects.readme}
                                </SyntaxHighlighter>
                                    {isDisplayedId === projects.id && <button onClick={(e) => handleDisplay(projects.id, e)} className='showless'>
                                            <span>Show Less</span>
                                    </button>}
                            </div>
                        }
                    </div>
                    ))
                }
            </main>
        </div>
    )
}
export default Portfolio