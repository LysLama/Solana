"use client"

import NavBarGuests from '@/components/NavBarGuests';
import React from 'react';
import '@/styles/globals.css'

export default function App () {
  return (
    <main className='background'>
      <div className='container'>
        <NavBarGuests/>
        <h1 className='greet'>OPEN COMMUNITY FOR AI USERS</h1>
      </div>
    </main>
  )
}
