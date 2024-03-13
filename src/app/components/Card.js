import Image from 'next/image'
import Link from 'next/link'

export default function Card(){

  let gravadora = '/gravadora.png'
  let gaintracker = '/academia.drawio.png'

  let gravadoraLink = '/projects/gravadora'
  let gainTrackerLink = '/projects/gainTracker'

  let subtitle = 'This is a project that used the follow technologies:'

  return (
    <div className='my-4 flex flex-col lg:flex-row justify-center gap-5 py-4 overflow-hidden sm:gap-8'>
      <div className="w-sm border rounded-lg shadow bg-gray-800 border-gray-700 m-4">
          <Link href={gravadoraLink}>
            <Image src={gravadora} width={700} height={500} alt='Grabadora diagram' className='rounded-t-lg w-full' />
          </Link>
          <div className="p-5">
            <Link href={gravadoraLink} className="text-sm font-semibold leading-6 text-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Gravadora - Record Company</h5>
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
            <Link href={gravadoraLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read More
            </Link>
          </div>
      </div>

      <div className="w-sm border rounded-lg shadow bg-gray-800 border-gray-700 m-4">
          <Link href={gainTrackerLink}>
            <Image src={gaintracker} width={700} height={500} alt='Gain Tracker diagram' className='rounded-t-lg w-full' />
          </Link>
          <div className="p-5">
            <Link href={gainTrackerLink} className="text-sm font-semibold leading-6 text-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Gain Tracker</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-400">{subtitle}</p>
            <ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside text-left m-4">
              <li>Django</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Postgres SQL</li>
            </ul>
            <Link href={gainTrackerLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <button className='bg-blue-700'>Read More</button>
            </Link>
          </div>
      </div>
    </div>
  )
}
