import Link from "next/link";
import NavDestop from "./NavDestop"
import NavMobile from "./NavMobile"

import { CustomButton } from ".";

const NavBar = () => (
  <header className='w-full  border-b border-gray-300 '>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='font-bold text-2xl flex justify-center items-center'>
        CarStores
      </Link>

      <div className="hidden sm:flex">
        <NavDestop />
      </div>

      <div className="sm:hidden">
        <NavMobile />
      </div>

      {/* <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      /> */}
    </nav>
  </header>
);

export default NavBar;
