"use client"
import React from 'react'
import "@/styles/globals.css";
import NavBarMembers from "@/components/NavBarMembers";
import SideBar from "@/components/SideBar";
import AppWalletProvider from './AppWalletsProvider';

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <main className="background-members">
        <div className="container">
          <AppWalletProvider>
            <NavBarMembers/>
              <SideBar/>
              {children}
          </AppWalletProvider>
        </div>
    </main>
  );
}
