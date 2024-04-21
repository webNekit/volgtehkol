"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TopMenu from '@/collections/TopMenu';
import Menu from '@/collections/Menu';
import { Menu as MenuBar }  from 'lucide-react';
import MegaMenu from '../UI/MegaMenu/MegaMenu';

const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  }
  return (
    <header className='absolute top-0 left-0 right-0 p-4 w-full' id='header'>
      <div className="w-full border-b border-white/10">
        <div className="container mx-auto">
          <div className="w-full py-5 flex items-center justify-between">
            <ul className="hidden md:flex items-center gap-5">
              {TopMenu.map((item, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link href={item.href} className="font-medium text-white text-sm pb-1 border-b border-white/30 transition-colors hover:text-white/60">{item.label}</Link>
                  </li>
                );
              })}
              <li className="inline-flex">
                <Link href={'tel:89692881531'} className="font-medium text-white text-sm pb-1 border-b border-white/20 transition-colors hover:text-white/60">89692881531</Link>
              </li>
            </ul>
            <button onClick={openMenu} className="text-white p-2 cursor-pointer hover:text-white/60 transition-all">
              <MenuBar />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-full py-4 flex items-center justify-between">
          <Link href={'/'} className='uppercase text-sm font-semibold text-white'>Волгоградский<br />технический<br />колледж</Link>
          <nav>
            <menu className="flex items-center gap-5">
              {Menu.map(( item, index ) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link href={item.href} className='text-white font-medium pb-1 border-b border-white/20 transition-colors hover:text-white/60'>{item.label}</Link>
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
