import React from 'react'
import './CSS/SmallerText.css'
import SectionIcon from './SectionIcon'

const SmallerText = ({p, h1}) => {
  return (
    <header className='sec-header'>
      <SectionIcon />
      <p className='small'>{p}</p>
      <h1 className='large'>{h1}</h1>
    </header>
  )
}

export default SmallerText