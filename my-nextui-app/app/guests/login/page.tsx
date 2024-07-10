"use client"

import React, { FormEvent, useState } from 'react';
import '@/styles/globals.css'
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import Auth from '@/Utils/Auth/Auth';
import { useRouter } from 'next/navigation';

export default function App () {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const result = await Auth(username, password)
        try {
            if ("accessToken" in result) {
                router.replace("/members")
                setToken(result)
            }
        } catch (err) {
            console.log(err)
        }
      }

    return (
        <div>
            <h1 className='h1-login'>WELCOME</h1>
            <div className='login-bg backdrop-blur-3xl cursor-default pointer-events-none'>
            </div>
            <div className='login-div'>
                <form onSubmit={onSubmit}>
                    <Input type="text" variant={'bordered'} label="Username" radius='sm' size='lg' className='input' onValueChange={setUsername}/>
                    <Input type="password" variant={'bordered'} label="Password" radius='sm' size='lg' className='input' onValueChange={setPassword}/>
                    <Button size='lg' className='login-btn' type='submit'>Login</Button>
                </form>
            </div>
        </div>
    )
}