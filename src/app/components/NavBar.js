import Link from 'next/link'

export default function NavBar() {
    return (
        <header className="bg-white inset-x-0 top-0 z-50 flex items-center justify-center px-4 sticky">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label='Global'>
                <div className="flex gap-x-12">
                    <Link href={'/'} className="text-sm font-semibold leading-6 text-gray-900">About Me</Link>
                    <Link href={'/projects'} className="text-sm font-semibold leading-6 text-gray-900">My Projects</Link>
                </div>
            </nav>
        </header>
    )
}