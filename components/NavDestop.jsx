"use client";

import Link from "next/link";
import Image from "next/image";

import { signOut, useSession,  } from "next-auth/react";
import ProfileImage from "./ProfileImage";

const NavDestop = ( ) => {
  const { data: session } = useSession();

  console.log('userrrr', useSession())

  return (
    // <div>
    //     {session?.user ? (
    //       <div className='flex gap-3 md:gap-5'>
            
    //         <Link href='/dealer/register' className='black_btn'>
    //           Register as Dealer
    //         </Link>

    //         <button type='button' onClick={signOut} className='outline_btn'>
    //           Sign Out
    //         </button>

    //         <Link href='/profile'>
    //           {session?.user.image ? <Image
    //             src={session?.user.image}
    //             width={37}
    //             height={37}
    //             className='rounded-full'
    //             alt='profile'
    //           /> : <ProfileImage username={session?.user.username}/>}
    //         </Link>
    //       </div>
    //     ) :    
    //             <Link href={'/auth'}
    //               className='black_btn'
    //             >
    //               Sign in
    //             </Link >
    //     }
    //   </div>

      <div>
        <Link href={'#discover'}
                  className='black_btn'
                >
                  Explore Cars
        </Link >
      </div>
  )
}

export default NavDestop