"use client"

import {  useSession } from "next-auth/react";
`import { useState, useEffect} from 'react'`

import { getDealer } from "@/utils";

const page =  () => {

    const session =  useSession();

    const userId = session.data?.user.id
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [dealer, setDealer] = useState("");

    useEffect(() => {
      
      if(userId) {
        setLoading(false)
        getDealer(userId)
        .then(result => {
          if (result.error) {
            console.log('Error:', result.error);
            // Handle the case where the dealer is not found
          } else {
            const dealerData = result.dealer;
            console.log(dealerData);
            // Handle the dealer data as needed
          }
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch or processing
          console.log(error.json());
        });
        // setDealer(rrr)
        // setError(rrr)
        // console.log('lllll', rrr)
      } 
    }, [userId])
    
  return (
    <div className='my-12 padding-x padding-y max-width' id='discover'>
      page
    </div>
  )
}

export default page