'use client'

import Image from 'next/image'
import LogIn from "@/components/LogIn"
import { useAppSelector } from "@/redux/store"

export default function Home() {
  // to access the values in the state, we chose which reducer we want to access
  // from there we can access the value
  const username = useAppSelector((state) => state.authReducer.value.username)
  const isModerator = useAppSelector((state) => state.authReducer.value.isModerator)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn />

      <h1> Username: { username } </h1>
      {isModerator && <h1>user {username} is a moderator</h1>}
    </main>
  )
}
