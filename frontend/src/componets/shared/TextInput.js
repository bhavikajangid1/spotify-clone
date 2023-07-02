import React from 'react'
export const TextInput = ({label,placeholder,className,value,setValue,labelClassName,inputClassName}) => {
  return (
    <div className = {`text-input-container flex flex-col p-1  w-full ${className}`}>
        <label htmlFor={label}  className={`font-semibold p-2  ${labelClassName} `}>{label}
        </label>
        <input type="text" 
        placeholder={placeholder} 
        className={`p-2 border border-gray-600 rounded border-solid ${inputClassName}` }
        id={label}
        value = {value}
        onChange={(e)=>{
          setValue(e.target.value);
        }}/>
    </div>
  )
}
