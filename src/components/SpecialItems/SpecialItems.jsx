import Link from 'next/link';
import React from 'react'

const SpecialItems = ({ getData, className = null }) => {
    return (
        <ul className={className + ' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <li key={index} className='w-full h-full'>
                        <article className="w-full h-full border border-green-200 bg-green-100 rounded-lg p-5 flex flex-col items-start">
                            <span className="text-neutral-500 text-sm">Форма обучения: очная/заочная</span>
                            <h3 className="text-lg text-neutral-900 font-semibold pt-2 pb-7">09.02.07 Информационные системы и программирование</h3>
                            <Link href={''} className='px-4 py-2 border border-green-600 rounded-lg text-green-600 font-medium hover:bg-green-600 hover:text-white transition-colors'>Подробнее</Link>
                        </article>
                    </li>
                );
            })}
        </ul>
    )
}

export default SpecialItems
