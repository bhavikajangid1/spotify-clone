import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { TextInput } from '../componets/shared/TextInput';
import { PasswordInput } from '../componets/shared/PasswordInput';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie'
import { makeUnauthenticatePOSTRequest } from '../utils/ServerHelper';
export const Signup = () => {
  const [email,setEmail] = useState("")
  const [confirmEmail,setConfirmEmail] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [firstName,setFistName] = useState("")
  const [lastName,setLastName] = useState("")
  const [cookie,setCookie] = useCookies(["token"])
  const navigate = useNavigate();
  const signUp =async () =>{
    console.log(email)
    if(email!==confirmEmail){
      alert("Email and Confirm Email must match");
      return;
    }
    const data = {email,username,password,firstName,lastName}
    const response = await makeUnauthenticatePOSTRequest("auth/register",(data));
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
            <div className=' font-semibold  mb-4 text-lg'>Sign up for free to start listening</div>
            {/* email*/}
            <TextInput label="What's your email" placeholder="Enter your email" className="my-2"
            value = {email}
            setValue = {setEmail}
            />
            {/*confirm email*/}
            <TextInput Input label="Confirm your email" placeholder="Enter your email again"
            className="my-1"
            value={confirmEmail}
            setValue={setConfirmEmail}/>
            <TextInput Input label=" What should we call you?" placeholder="Enter your username"
            className="my-1"
            value={username}
            setValue={setUsername}/>
            <PasswordInput Input label="Create a Password" placeholder="Create a password"
            className="my-1"
            value = {password}
            setValue = {setPassword}/>
          <div className='w-full flex justify-between items-center space-x-4'>
            <TextInput label="First Name" placeholder="Enter your first name"
            className="my-1"
            value = {firstName}
            setValue = {setFistName}/>
            <TextInput label="Last Name" placeholder="Enter your last name"
            className="my-1"
            value = {lastName}
            setValue = {setLastName}/>
          </div>
            <div className='w-full flex items-center justify-center p-5 border-b border-solid border-gray-300 '>
                <button className='bg-app-green font-semibold text-lg p-3 px-10 rounded-full text-white' onClick={(e)=>{
                  e.preventDefault();
                  signUp();
                }}>SIGN UP</button>
            </div>
            <div className=' font-semibold  my-6 text-lg'>Already have an account? </div>
            < Link to="/login" className='border border-gray-400 w-full flex items-center justify-center py-5 rounded-full text-gray-500 text-bold hover:text-white hover:bg-gray-500'>
                    LOG IN FOR SPOTIFY
            </Link>            
        </div>
    </div>
  )
}
