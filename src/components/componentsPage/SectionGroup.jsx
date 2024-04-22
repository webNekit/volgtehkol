"use client";
import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import H2 from '../UI/Heading/H2';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const SectionGroup = () => {
    return (
        <section className='w-full'>
            <div className="container mx-auto">
                <Breadcrumbs className='mb-5'>
                    <BreadcrumbItem>Главная</BreadcrumbItem>
                    <BreadcrumbItem>Сведения об образовательной организации</BreadcrumbItem>
                </Breadcrumbs>
                <div className="w-full flex flex-col gap-5">
                    <H2 title={'Сведения об образовательной организации'} />
                    <ul className="w-full flex flex-col gap-2">
                        {[1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <li className="w-full inline-flex">
                                    <Link href={''} className='w-full px-5 py-5 rounded-lg bg-green-100 flex items-center justify-between group'>
                                        <span className='text-lg font-medium text-neutral-800'>Сведения об образовательной организации</span>
                                        <span className='p-3 rounded-lg bg-neutral-900 text-white group-hover:bg-green-500 transition-colors'>
                                         <ExternalLink size={16} />
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SectionGroup
