import NavBar from "../../components/NavBar"
import Image from 'next/image'

export default function Home(){
    let gravadoradesign = '/gravadora-design.jpg'
    let gravadoraDiagram = '/gravadora.png'

    return(
        <main>
            <NavBar />
            <div className="flex items-center justify-center">
                <ul className="text-center">
                    <li>
                        <h1 className="text-2xl">Summary of the Project</h1>
                        <div>
                            <p>"A record company has decided to create a database with the information about it's musician as well as other company information.
                                The information given to the designer were:"</p>
                                <div className="flex my-2">
                                <ul className="mx-auto max-w-md space-y-1 text-gray-300 list-disc list-inside text-center">
                                    <li>Each artist has an id, name, address and a cell phone number. The musician at the beginning of their career they often
                                        share an address and, furthermore, it is assumed that each address only has one telephone number.
                                    </li>
                                    <li>Each musician can belong to one or more bands.</li>
                                    <li>Each instrument used in the studios has a name (e.g. guitar, drums, etc.) and an internal code.</li>
                                    <li>Each disc recorded at the company has a title, a date, a format (e.g. CD, MC, K7), and a disc identifier.</li>
                                </ul>
                                <ul className="mx-auto max-w-md space-y-1 text-gray-300 list-disc list-inside text-center">
                                    <li>Each song recorded by the company has a title and authors.</li>
                                    <li>Each musician can play multiple instruments, and each instrument can be played by multiple musicians.</li>
                                    <li>Each record belongs to a musician or a band and has a certain number of songs, but each song can appear on one or more records.</li>
                                    <li>Each song can feature several musicians or bands, and each musician or panel can participate in several songs.</li>
                                    <li>Each record has a producer. Producers can produce multiple records.</li>
                                </ul>
                                </div>
                        </div>
                    </li>
                    <li>
                        <h1 className="text-2xl">What did I learn?</h1>
                        <p className="mx-auto my-2 max-w-2xl space-y-1 text-gray-300">In this project I learned the frameworj Django, how to use it for the Front-End and how to connect it with a DB like postgress and MongoDB,
                            using the framework I tried to make ma pages and components more abstract, making the form of the html the same but the content inside different.
                        </p>
                    </li>
                    <li>
                        <h1 className="text-2xl">What was the most difficult?</h1>
                        <p className="mx-auto my-2 max-w-2xl space-y-1 text-gray-300">
                            I beleive the most difficult part that I passed was passing information between pages, "How can I inform the user is going for item X",
                            "How can I pass this ID for that page?", "How can I pass this object for that page?"
                        </p>
                    </li>
                    <li>
                        <h1 className="text-2xl">How would I improve the project</h1>
                        <p className="mx-auto my-2 max-w-2xl space-y-1 text-gray-300">
                            I woudl search for part were I can make them abstract, show in the Front-End more of the DB that was made, for example
                            the connections of each musician and bands to each instruments, who shared numbers and address and who not.
                            Would ask for more help for the UX too.
                        </p>
                    </li>
                    <li>
                        <h1 className="text-2xl">What do I want to learn next?</h1>
                        <p className="mx-auto my-2 max-w-2xl space-y-1 text-gray-300">
                            As I started looking for jobs I noticed a demmand for React, Angular, Typescript, MongoDB. So I aim to learn them, but I also aim to improve
                            my coding skills, and if there is a way to code faster and with quality I would like to learn how too. So basically I aim to learn what is asked
                            in the market but also to improve my base.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-2">
                    <Image src={gravadoradesign} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                    <Image src={gravadoraDiagram} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
            </div>
        </main>
    )
}