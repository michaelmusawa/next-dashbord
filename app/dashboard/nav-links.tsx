'use client';
 
import { HiUserGroup } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
const links = [
  {name: 'Customer', href:'/dashboard/customers', icon: <HiUserGroup />},
  {name: 'Home', href:'/dashboard', icon: <FaHome />},
  {name: 'Invoices', href:'/dashboard/invoices', icon: <GrDocumentText />},
]

 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'link',
              {
                'active': pathname === link.href,
              },
            )}
          >
            {link.icon}
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}