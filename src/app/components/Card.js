import Image from 'next/image'
import Link from 'next/link'

export default function Card(){

  let gravadora = '/gravadora.png'
  let gaintracker = '/academia.drawio.png'

  let gravadoraLink = '/projects/gravadora'
  let gainTrackerLink = '/projects/gainTracker'

  return (
    <div>
      <div className="w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
          <Link href={gravadoraLink}>
            <Image src={gravadora} width={700} height={500} alt='Grabadora diagram' className='rounded-t-lg w-full' />
          </Link>
          <div className="p-5">
            <Link href={gravadoraLink} className="text-sm font-semibold leading-6 text-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Gravadora</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Link href={gravadoraLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read More
            </Link>
          </div>
      </div>

      <div className="w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
          <Link href={gainTrackerLink}>
            <Image src={gaintracker} width={700} height={500} alt='Gain Tracker diagram' className='rounded-t-lg w-full' />
          </Link>
          <div className="p-5">
            <Link href={gainTrackerLink} className="text-sm font-semibold leading-6 text-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Gain Tracker</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Link href={gainTrackerLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <button className='bg-blue-700'>Read More</button>
            </Link>
          </div>
      </div>
    </div>
  )
}
