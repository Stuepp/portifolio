import Link from 'next/link'
//<Link href={'/about'} className="text-lg font-semibold leading-6 text-gray-900">About</Link>
export default function NavBar() {
    return (
        <header className="bg-white inset-x-0 top-0 z-50 flex items-center justify-center px-4 sticky">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label='Global'>
                <div className="flex gap-x-12">
                    <Link href={'/'} className="text-lg font-semibold leading-6 text-gray-900">Home</Link>
                    
                    <Link href={'/projects'} className="text-lg font-semibold leading-6 text-gray-900">Projects</Link>
                    <Link href={'https://github.com/Stuepp/portifolio'} className="text-lg font-semibold leading-6 text-gray-900">Check me on Github</Link>
                </div>
            </nav>
        </header>
    )
}