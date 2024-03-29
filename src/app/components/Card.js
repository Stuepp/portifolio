import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function Card({title, subtitle, img, link, gitlink, techs}){

  const tags = []

  for(let i = 0; i < techs.length; i++){
    tags.push(<li key={i}>{techs[i]}</li>)
  }

  return (
    <div>
      <div className="w-sm border rounded-lg shadow bg-gray-800 border-gray-700 m-4">
          <Link href={link}>
            <Image src={img} width={600} height={500} alt='Gravadora diagram' className=' p-2 rounded-lg' />
          </Link>
          <div className="p-5">
            <Link href={link} className="text-sm font-semibold leading-6 text-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-400">{subtitle}</p>
            <ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside text-left m-4">
                {tags}
            </ul>
            <div className='flex gap-4'>
              <Link href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read More
              </Link>
              <a class="group my-auto flex text-sm font-medium text-zinc-200 transition hover:text-teal-500" href={gitlink}>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-400 transition group-hover:fill-teal-500">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                </svg>
                <span class="my-auto">Check on GitHub</span>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}
