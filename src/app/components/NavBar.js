
export default function NavBar() {
    return (
        <header className="bg-white absolute inset-x-0 top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label='Global'>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="/" className="text-sm font-semibold leading-6 text-gray-900">About Me</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">My Projects</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
                </div>
            </nav>
        </header>
    )
}