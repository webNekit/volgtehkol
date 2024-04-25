import H2 from '@/components/UI/Heading/H2'
import React from 'react'

const Events = () => {
    return (
        <section className='w-full p-4'>
            <div className="w-full py-10 bg-green-100 rounded-xl">
                <div className="container mx-auto flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <H2 title={'Объявления'} />
                        <p className="text-neutral-500">Анонсы мероприятий, конкурсов и полезная информация</p>
                    </div>
                    <div className="w-full">
                        <ul className="flex gap-2">
                            <li className="inline-flex">
                                <button className='px-5 py-2 bg-white/70 border border-green-300 text-neutral-700 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all'>Все</button>
                            </li>
                            {[1, 2, 3, 4, 5, 6].map((item, index) => {
                                return (
                                    <li className="inline-flex">
                                        <button className='px-5 py-2 bg-white/70 border border-green-300 text-neutral-700 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all'>Научные</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events
