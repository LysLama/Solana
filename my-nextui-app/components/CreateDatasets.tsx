"use client"

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import UseCSV from "@usecsv/react";
import React, { useState } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import "@/styles/globals.css"

export default function CreateDatasets() {
    const [title, setTitle] = useState("")
    const [Import, setImport] = useState(true)

    const { connection } = useConnection();
    const { publicKey } = useWallet();
    
    const getAirdropOnClick = async () => {
      try {
        if (!publicKey) {
          throw new Error("Wallet is not Connected");
        }
        const [latestBlockhash, signature] = await Promise.all([
          connection.getLatestBlockhash(),
          connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL),
        ]);
        const sigResult = await connection.confirmTransaction(
          { signature, ...latestBlockhash },
          "confirmed",
        );
        if (sigResult) {
          alert("Uploaded was confirmed!");
        }
      } catch (err) {
        alert("Uploaded was not confirmed!");
      }
    };
    return (
        <div className='div-create'>
            <form>
                <Input type="text" variant={'bordered'} label="Title" radius='sm' size='lg' className='input' onValueChange={setTitle}/>
                { Import ? 
                <UseCSV importerKey="1d6fd080-13ee-436a-94a9-99795979b421" onClose={() => {setImport(false)}}>
                  Import Data
                </UseCSV> :
                <WalletMultiButton style={{}} />
                }
                <br></br>
                <br></br>
                <br></br>
                <Button onClick={() => {getAirdropOnClick()}}>SUBMIT</Button>
            </form>
        </div>
    )
}