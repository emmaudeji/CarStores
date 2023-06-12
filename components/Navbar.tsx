import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='font-bold text-2xl flex justify-center items-center'>
        CarStores
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;
