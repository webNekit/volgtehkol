import React from 'react';
import Link from 'next/link';
import TopMenu from '@/collections/TopMenu';
import Menu from '@/collections/Menu';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 p-4 w-full' id='header'>
      <div className="w-full border-b border-black/10">
        <div className="container mx-auto">
          <div className="w-full py-5">
            <ul className="flex items-center gap-5">
              {TopMenu.map((item, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link href={item.href} className="font-medium text-stone-700 text-sm pb-1 border-b border-black/10 transition-colors hover:text-stone-700/60">{item.label}</Link>
                  </li>
                );
              })}
              <li className="inline-flex">
                <Link href={'tel:89692881531'} className="font-medium text-stone-700 text-sm pb-1 border-b border-black/10 transition-colors hover:text-stone-700/60">89692881531</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-full py-4">
          <Link href={'/'} className='uppercase text-sm font-medium'>Волгоградский<br />технический<br />колледж</Link>
          <nav>
            <menu className="flex items-center gap-5">
              {Menu.map(( item, index ) => {
                return (
                  <li className="inline-flex">
                    
                  </li>
                );
              })}
            </menu>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
