"use client"

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'; 
import "@/styles/globals.css"
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/react'

export default function SideBar() {
    const router = useRouter()
    const listpath = ["create", "explore", "marketplace", "competition", "history"]
    const [sidebar, setSidebar] = useState(-1)
    const [mainroute, setMainroute] = useState("/members")
    const pathname = usePathname()
    useEffect(() => {
        switch (pathname) {
            case "/members": {
                setSidebar(-1)
                setMainroute("/members")
                break
            }
            case "/members/datasets": {
                setSidebar(-2)
                setMainroute("/members/datasets")
                break
            }
            case "/members/competitions": {
                setSidebar(-2)
                setMainroute("/members/competitions")
                break
            }
            default: {
                listpath.map((path) => {
                    if (pathname.includes(path)) {
                        setSidebar(listpath.indexOf(path))
                    }
                })
                if (pathname.includes("datasets")) {
                    setMainroute("/members/datasets")
                } else {
                    setMainroute("/members/competitions")
                }
            }
        }

    })
    return (
        <div className='sidebar-container'>
            <div className='sidebar-background'/>
            <div className='btngroup'>
                <Button className='btn' radius='sm' variant='ghost' color='secondary' isDisabled={(sidebar === 0 || sidebar === -1)} onClick={() => router.replace(`${mainroute}/create`)}>
                    <Image src="/Create.png" width={30} height={30}/>
                    Create
                    </Button>
                <Button className='btn' radius='sm' variant='ghost' color='secondary' isDisabled={(sidebar === 1 || sidebar === -1)} onClick={() => router.replace(`${mainroute}/explore`)}>
                    <Image src='/Explore.png' width={30} height={30}/>
                    Explore
                    </Button>
                <Button className='btn' radius='sm' variant='ghost' color='secondary' isDisabled={(sidebar === 2 || sidebar === -1)} onClick={() => router.replace(`${mainroute}/marketplace`)}>
                    <Image src="/Marketplace.png" width={30} height={30}/>
                    Marketplace
                    </Button>
                <Button className='btn' radius='sm' variant='ghost' color='secondary' isDisabled={(sidebar === 3 || sidebar === -1)} onClick={() => router.replace(`${mainroute}/competition`)}>
                    <Image src="/Competition.png" width={30} height={30}/>
                    Competition
                    </Button>
                <Button className='btn ' radius='sm' variant='ghost' color='secondary' isDisabled={(sidebar === 4 || sidebar === -1)} onClick={() => router.replace(`${mainroute}/history`)}>
                    <Image src="/History.png" width={30} height={30}/>
                    History
                    </Button>
            </div>
        </div>
    )
}