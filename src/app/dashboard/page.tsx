
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const {getUser} = getKindeServerSession();
    const user=await getUser();
   if(!user || !user.id) redirect('/auth-callback?origin=dashboard')

    return(
        <div className='text-black'>
      {user.email}
        </div>
    )
}