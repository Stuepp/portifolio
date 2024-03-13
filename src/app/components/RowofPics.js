import Image from 'next/image'

export default function RowOfPics(){
  let myDog = '/me2.jpg'
  let scout = '/escoteiro.jpg'
  let basket = '/me1.jpg'
  let karate = '/karate.jpg'

  let width = 306, height = 306

  return(
    <div className='-my-4 grid grid-cols-2 lg:flex justify-center gap-5 py-4 overflow-hidden sm:gap-8 text-white'>
      <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2'>
        <Image src={myDog} width={width} height={height} alt='Arthurs dog' className='absolute inset-0 h-full w-full object-cover' />
      </div>
      <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2'>
        <Image src={scout} width={width} height={height} alt='Arthur as a scoout' className='absolute inset-0 h-full w-full object-cover' />
      </div>
      <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-3'>
        <Image src={karate} width={width} height={height} alt='Arthur in a karate uniform' className='absolute inset-0 h-full w-full object-cover' />
      </div>
      <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2'>
        <Image src={basket} width={width} height={height} alt='Arthur doing a dunk' className='absolute inset-0 h-full w-full object-cover' />
      </div>
    </div>
  )
}

// a fan of animals! A basketball player! A fighter! A Scout!