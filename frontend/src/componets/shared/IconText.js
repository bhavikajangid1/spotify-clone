import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const IconText = ({iconName,displayText,active,targetLink,onClick}) => {
  return (
    <Link to={targetLink}>
    <div onClick={onClick} 
    className='flex items-center cursor-pointer'>
        <div className='py-2 px-4'>
            <Icon icon={iconName} color = {active?'white':'gray'} fontSize={30}/>
        </div>
        <div className={`${active ?"text-white":"text-gray-400 hover:text-white"} font-semibold text-base`}>
            {displayText}
        </div>
    </div>
    </Link>
  )
}

export default IconText