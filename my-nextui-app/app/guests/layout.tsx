"use client"

import "@/styles/globals.css";
import NavBarGuests from '@/components/NavBarGuests';

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <main className='background'>
    <div className='container'>
      <NavBarGuests/>
      {children}
    </div>
  </main>
  );
}
