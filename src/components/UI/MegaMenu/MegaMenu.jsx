import React from 'react';
import { X } from 'lucide-react';
import { abiturientList, aboutList, studentsList } from '@/collections/MegaMenu';
import Link from 'next/link';

const MegaMenu = ({ containerStyle, onClose }) => {
    return (
        <div className={containerStyle + 'fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-white py-7'} id='megaMenu'>
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <button onClick={onClose} className='ml-auto text-green-600 font-semibold p-2 cursor-pointer border border-green-200'>
                        <X />
                    </button>
                    <div className="w-full grid grid-cols-3">
                        <div className="flex flex-col gap-4">
                            <h3 className='font-semibold text-neutral-950 text-xl'>{aboutList.title}</h3>
                            <ul className="flex flex-col gap-2">
                                {aboutList.data.map((item, index) => {
                                    return (
                                        <li key={index} className="inline-flex">
                                            <Link href={item.url} className='text-neutral-800 hover:text-neutral-500 border-b border-black/10'>{item.label}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className='font-semibold text-neutral-950 text-xl'>{studentsList.title}</h3>
                            <ul className="flex flex-col gap-2">
                                {studentsList.data.map((item, index) => {
                                    return (
                                        <li key={index} className="inline-flex">
                                            <Link href={item.url} className='text-neutral-800 hover:text-neutral-500 border-b border-black/10'>{item.label}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className='font-semibold text-neutral-950 text-xl'>{abiturientList.title}</h3>
                            <ul className="flex flex-col gap-2">
                                {abiturientList.data.map((item, index) => {
                                    return (
                                        <li key={index} className="inline-flex">
                                            <Link href={item.url} className='text-neutral-800 hover:text-neutral-500 border-b border-black/10'>{item.label}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="col-span-3 pt-5 border-t border-black/10 mt-12">
                            <div className="w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaMenu
