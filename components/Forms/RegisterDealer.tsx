// "use client"
// import {  useSession,  } from "next-auth/react";
// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// const RegisterDealer = () => {
//     const router = useRouter()
//     const { data: session } = useSession();

//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const [input, setInput] = useState(
//         {
//             bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam fugiat quaerat. Voluptas est ipsum voluptatem nam modi magnam quis nihil commodi illum facilis dolores iste itaque asperiores, vitae quo!",
//             firstName: "Emanuel",
//             lastName: "Udeji",
//             address: "Lorem ipsum dolor sit amet consectetur adipisicing",
//             whatsAppNumber: 8032787601,
//             // userId: session?.user.id
//           }
//     )

//     const handleChange = (e) => {
//         setError('')
//         const {name, value} = e.target
//         setInput(prev => {
//           return {
//             ...prev,
//             [name]: value
//           }
//         })
//       }

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
//         e.preventDefault()
    
//         try {
//             setLoading(true);
//             await fetch('/api/dealers/new', {
//                 method: "POST",
//                 body: JSON.stringify(input),
//                 headers: {
//                   'Content-Type': 'application/json',
//                 },
//               })
//               .then(res => res.json())
//               .then(data => {
//                 setLoading(false);
//               if (data.error) {
//                 setError(data.error);
//                 console.log('eror--', data.error)
//                 return;
//               } else {
//                 console.log(data)
//                 router.push("/dealer") 
//               }  
//               } 
//             )
//           console.log('1---', input)
//         } catch (error) {
//           console.log(error)
//         } finally {
//             setLoading(false);
//               setInput({
//                   bio: "",
//                   firstName: "",
//                   lastName: "",
//                   address: "",
//                   whatsAppNumber: "",
//                   userId: ""
//                 })
//         }
//       }
    
    

//   return (
   
//         <form onSubmit={handleSubmit}>

//             <button type="submit" className='black_btn'>Submit</button>
//       </form>

//   )
// }

// export default RegisterDealer