"use client";
import {trpc} from './client'
import React, {ReactNode, useState } from "react"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {httpBatchLink} from '@trpc/client'

export default function Provider({children}:{children:ReactNode}){
    const[queryClient]=useState(()=> new QueryClient({}))
    const [trpcClient]=useState(()=>trpc.createClient({
        links:[
            httpBatchLink({
                url:'http://localhost:3000/api/trpc'
            }),
        ],
    }))
    return(
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider> 
        </trpc.Provider>
    )
}
