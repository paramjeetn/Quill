"use client";
import { useRouter, useSearchParams } from "next/navigation";
import {trpc} from "../_trpc/client"
const Page = ()=>{
const router = useRouter()
const searchParams = useSearchParams();
const origin=searchParams.get('origin');


const {data}=trpc.data.useQuery();
return(
    <div>
       <div>{typeof(data)}</div> 
    </div>
)
}
export default Page; 