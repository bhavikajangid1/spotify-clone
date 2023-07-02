import React from 'react'
import { Link } from 'react-router-dom'
const TextHoverButton = ({displayText,active,targetLink}) => {
  return (
    <Link to={targetLink}>
        <div className={`${active?"text-white":"text-gray-400"} text-lg font-semibold  text-gray-400 hover:text-white`}>{displayText}
        </div>
    </Link>
  )
}

export default TextHoverButton