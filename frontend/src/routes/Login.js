import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { TextInput } from '../componets/shared/TextInput';
import { PasswordInput } from '../componets/shared/PasswordInput';
import { Link, useNavigate } from 'react-router-dom'
import { makeUnauthenticatePOSTRequest } from '../utils/ServerHelper';
import { useCookies } from 'react-cookie';


export const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [cookie,setCookie] = useCookies(["token"])
  const navigate = useNavigate("")
  
  const logIn = async () =>{
    const data = {email,password}
    const response = await makeUnauthenticatePOSTRequest("auth/login",(data));
    if(response && !response.error){
      const token = response.token
      const date = new Date()
      date.setDate(date.getDate()+30)
      setCookie("token",token,{path:"/",expires:date})
      alert("success")
      navigate("/home")
    }
    else{
      alert("faliure")
    }
  }
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <div className='logo p-5 border-b border-solid border-gray-300 w-full flex justify-center'>
        <Icon icon="logos:spotify" width="150" />
        </div>
        <div className='input-container w-1/3 py-10 flex  justify-center items-center flex-col'>
            <div className=' font-semibold  mb-4 text-lg'>To continue, Login to Spotify.</div>
            <TextInput label=" Email or username" placeholder="Email or username" className="my-4"
            value = {email}
            setValue = {setEmail}/>
            <PasswordInput Input label="Password" placeholder="Password"
            className="my-2"
            value = {password}
            setValue = {setPassword}/>

            <div className='w-full flex items-center justify-end p-5 border-b border-solid border-gray-300 '>
                <button className='bg-app-green font-semibold text-lg p-3 px-10 rounded-full text-white' onClick={
                  (e)=>{
                    e.preventDefault();
                    logIn();
                  }
                }>LOG IN</button>
            </div>
            <div className=' font-semibold  my-6 text-lg'>Don't have an account? </div>
            <Link to="/signup" className='border border-gray-400 w-full flex items-center justify-center py-5 rounded-full text-gray-500 text-bold hover:text-white hover:bg-gray-500'>                
                    SIGN UP FOR SPOTIFY
            </Link>
            
        </div>
    </div>
  )
}
