'use client'

import Image from 'next/image'
import { useState } from "react"
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"


export default function Login() {
  const [username, setUsername] = useState("")

  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
  const dispatch = useDispatch<AppDispatch>()

  const onClickLogIn = () => {
  	dispatch(logIn(username))
  };

  const onClickToggle = () => {
  	dispatch(toggleModerator())
  };

  const onClickLogOut = () => {
  	dispatch(logOut())
  };

  return (
    <div>
      <input 
      type="text" 
      className="text-gray-900 px-3 py-1 mb-2"
      onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button onClick={onClickLogIn}>Log In</button>
      <br />
      <button onClick={onClickLogOut}>Log Out</button>
      <br />

      {isAuth && 
      	<button onClick={onClickToggle}>Toogle moderator Status</button>      
  		}
    </div>
  )
}
