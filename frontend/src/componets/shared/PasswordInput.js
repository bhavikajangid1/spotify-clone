import React from 'react'

export const PasswordInput = ({label,placeholder,className,value,setValue}) => {
  return (
    <div className={`text-password-container flex flex-col p-1 w-full  ${className}`}>
        <label for={label} className='font-semibold p-2'>{label}</label>
        <input type="password" 
        placeholder={placeholder} 
        className='p-2 border border-gray-600 rounded border-solid placeholder-gray-500'
        id={label}
        value = {value}
        onChange={(e)=>{
          setValue(e.target.value);
        }}
        />
    </div>
  )
}