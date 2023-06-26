import { PageHeaderProps } from "@/types"

const PageHero = ({heading, link} : PageHeaderProps) => {
  return (
    <div className='bg-indigo-600 h-60 w-full flex justify-center text-white items-center'>
        <div className="grid gap-2 text-center">
            <h2 className="font-semibold text-2xl">{heading}</h2>
            <p>{link}</p>
        </div>
        
    </div>
  )
}

export default PageHero