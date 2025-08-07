'use client'

import { useState } from 'react'
import LoginScreen from '@/components/LoginScreen'
import MainApp from '@/components/MainApp'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('User')

  const handleLogin = (name: string) => {
    setUserName(name)
    setIsLoggedIn(true)
  }

  return (
    <div className="min-h-screen bg-dark">
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <MainApp userName={userName} />
      )}
    </div>
  )
}
