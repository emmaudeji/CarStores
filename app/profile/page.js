"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { getDealer } from "@/utils";

import { useState, useEffect} from 'react'

const page = async () => {
  const router = useRouter()
  const session =  useSession();

  if(!session)router.push("/auth")

  const userId = session.data?.user.id
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [dealer, setDealer] = useState("");

  useEffect(() => {
    
    if(userId) {
     
      getDealer(userId)
      .then(result => {
        if (result.error) {
          // Handle the case where the dealer is not found
          setError(result.error)
          console.log('Error:', result.error);
        } else {
          const dealerData = result.dealer;
          // Handle the dealer data as needed
          setDealer(dealerData)
          console.log(dealerData);
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch or processing
        console.log(error.json());
      });
      setLoading(false)
    } 
    
  }, [userId])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div>Profile: {session.data}</div>
    <div>Page: {dealer}</div>
    </>
    
  )
}

export default page
