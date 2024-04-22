"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TopMenu from '@/collections/TopMenu';
import Menu from '@/collections/Menu';
import { Menu as MenuBar }  from 'lucide-react';
import MegaMenu from '../UI/MegaMenu/MegaMenu';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  const [ isOpen, setIsOpen ] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  }
  return (
    <header className={pathName === '/' ? 'absolute top-0 left-0 right-0 p-4 w-full' : 'relative top-0 left-0 right-0 p-4 w-full'} id='header'>
      <div className={pathName === '/' ? "w-full border-b border-white/10" : "w-full border-b border-black/10"}>
        <div className="container mx-auto">
          <div className="w-full py-5 flex items-center justify-between">
          <Link href={'/'} className={ pathName === '/' ? 'block md:hidden uppercase text-sm font-semibold text-white' : 'block md:hidden uppercase text-sm font-semibold text-neutral-950'}>Волгоградский<br />технический<br />колледж</Link>
            <ul className="hidden md:flex items-center gap-5">
              {TopMenu.map((item, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link href={item.href} className={pathName === "/" ? "text-white font-medium text-sm pb-1 border-b border-white/30 transition-colors hover:text-white/60" : "text-neutral-900 font-medium text-sm pb-1 border-b border-black/20 transition-colors hover:text-neutral-900/60"}>{item.label}</Link>
                  </li>
                );
              })}
              <li className="inline-flex">
                <Link href={'tel:89692881531'} className="font-medium text-white text-sm pb-1 border-b border-white/20 transition-colors hover:text-white/60">89692881531</Link>
              </li>
            </ul>
            <button onClick={openMenu} className={pathName === '/' ? "text-white p-2 cursor-pointer hover:text-white/60 transition-all" : "text-neutral-900 p-2 cursor-pointer hover:text-neutral-900/60 transition-all"}>
              <MenuBar />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex container mx-auto">
        <div className="w-full py-4 flex items-center justify-between">
          <Link href={'/'} className={pathName === '/' ? 'hidden md:block uppercase text-sm font-semibold text-white' : 'hidden md:block uppercase text-sm font-semibold text-neutral-950'}>Волгоградский<br />технический<br />колледж</Link>
          <nav className='hidden md:flex'>
            <menu className="flex items-center gap-5">
              {Menu.map(( item, index ) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link href={item.href} className={pathName === "/" ? "text-white font-medium pb-1 border-b border-white/20 transition-colors hover:text-white/60" : "text-neutral-900 font-medium pb-1 border-b border-black/20 transition-colors hover:neutral-900/60"}>{item.label}</Link>
                  </li>
                );
              })}
            </menu>
          </nav>
        </div>
      </div>
      <MegaMenu containerStyle={isOpen ? 'block ' : 'hidden '} onClose={() => setIsOpen(false)} />
    </header>
  )
}

export default Header
