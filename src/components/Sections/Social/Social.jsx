import Link from 'next/link'
import React from 'react'

const Social = () => {
  return (
    <section className='w-full p-4'>
      <div className="w-full bg-green-950 rounded-xl">
        <div className="container mx-auto py-8 flex flex-col gap-3 sm:flex-row items-center justify-between">
            <div className="flex flex-col gap-1">
                <h2 className="text-white text-3xl font-semibold">Будь в курсе новостей</h2>
                <h3 className="text-white/70 text-base">Читайте нас в социальных сетях</h3>
            </div>
            <Link href={''} target='_blank' className='bg-white px-5 py-3 rounded-lg font-semibold'>Группа ВКонтакте</Link>
        </div>
      </div>
    </section>
  )
}

export default Social
