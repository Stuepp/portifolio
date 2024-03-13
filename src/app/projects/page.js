import NavBar from "../components/NavBar"
import Card from '../components/Card'

export default function Home(){
    return(
        <main>
            <NavBar />
            <div className="sm:px-8 py-16">
                <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-100 sm:text-5x">Projects I have  develop for now</h1>
                <div className="my-4 flex flex-row justify-center gap-5 py-4 overflow-hidden sm:gap-8">
                    <Card />
                </div>
            </div>
        </main>
    )
}