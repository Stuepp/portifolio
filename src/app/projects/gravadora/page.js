import NavBar from "../../components/NavBar"
import ProjectDescription from "@/app/components/ProjectDescription"
import ProjectPoint from "@/app/components/ProojectPoint"
import Image from 'next/image'

export default function Home(){
    let gravadoradesign = '/gravadora-design.jpg'
    let gravadoraDiagram = '/gravadora.png'

    return(
        <main>
            <div className="flex items-center justify-center">
                <ul className="text-center p-2">
                    <li className="px-16">
                        <ProjectDescription 
                        description={`"A record company has decided to create a database with the information about it's musician as well as other company information. The information given to the designer were:"`}
                        col1={[`Each artist has an id, name, address and a cell phone number. The musician at the beginning of their career they often
                        share an address and, furthermore, it is assumed that each address only has one telephone number.`, `Each musician can belong to one or more bands.`,
                            `Each musician can belong to one or more bands.`, `Each instrument used in the studios has a name (e.g. guitar, drums, etc.) and an internal code.`,
                            `Each disc recorded at the company has a title, a date, a format (e.g. CD, MC, K7), and a disc identifier.`]}
                        col2={[`Each song recorded by the company has a title and authors.`,
                                `Each musician can play multiple instruments, and each instrument can be played by multiple musicians.`,
                                `Each record belongs to a musician or a band and has a certain number of songs, but each song can appear on one or more records.`,
                                `Each song can feature several musicians or bands, and each musician or panel can participate in several songs.`,
                                `Each record has a producer. Producers can produce multiple records.`]}   
                        />
                    </li>
                    <li>
                        <ProjectPoint question={'What did I learn?'} answear={`In this project I learned the frameworj Django, how to use it for the Front-End and how to connect it with a DB like postgress and MongoDB,
                            using the framework I tried to make ma pages and components more abstract, making the form of the html the same but the content inside different.`} />
                    </li>
                    <li>
                        <ProjectPoint question={'What was the most difficult?'} answear={`I beleive the most difficult part that I passed was passing information between pages, "How can I inform the user is going for item X",
                            "How can I pass this ID for that page?", "How can I pass this object for that page?"`} />
                    </li>
                    <li>
                    <ProjectPoint question={'How would I improve the project'} answear={`I woudl search for part were I can make them abstract, show in the Front-End more of the DB that was made, for example
                            the connections of each musician and bands to each instruments, who shared numbers and address and who not.
                            Would ask for more help for the UX too.`} />
                    </li>
                    <li>
                    <ProjectPoint question={'What do I want to learn next?'} answear={`As I started looking for jobs I noticed a demmand for React, Angular, Typescript, MongoDB. So I aim to learn them, but I also aim to improve
                            my coding skills, and if there is a way to code faster and with quality I would like to learn how too. So basically I aim to learn what is asked
                            in the market but also to improve my base.`} />
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