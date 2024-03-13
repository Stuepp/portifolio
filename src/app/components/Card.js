import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function Card({title, subtitle, img, link}){

  return (
    <div>
      <div className="w-sm border rounded-lg shadow bg-gray-800 border-gray-700 m-4">
          <Link href={link}>
            <Image src={img} width={700} height={500} alt='Grabadora diagram' className='rounded-t-lg w-full' />
          </Link>
          <div className="p-5">
            <Link href={link} className="text-sm font-semibold leading-6 text-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-400">{subtitle}</p>
            <ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside text-left m-4">
              <li>Django</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Postgres SQL</li>
              <li>Mongo DB</li>
            </ul>
            <Link href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read More
            </Link>
          </div>
      </div>
    </div>
  )
}
