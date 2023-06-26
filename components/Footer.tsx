import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-300 '>
    
    <div className='grid sm:grid-cols-4 justify-between gap-5 sm:px-16 px-6 py-10'>
     
      <div className='col-span-1  '>
        <Link href={'/'} className="font-bold text-2xl pb-4">CarStore</Link>
        <p className='text-base text-gray-700'>
          We aim to create a trusted environment where you can confidently explore various car options, receive professional advice, and make an informed decision.
        </p>
      </div>

      <div className="sm:col-span-3 footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarStore. All Rights Reserved &copy;</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
