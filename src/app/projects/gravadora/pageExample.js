import ProjectDescription from "@/app/components/ProjectDescription"
import ProjectPoint from "@/app/components/ProojectPoint"
import Image from 'next/image'

export default function Home({
    searchParams,}= {
    searchParams:{
        name
    }
}){
    let gravadoradesign = '/gravadora-design.jpg'
    let gravadoraDiagram = '/gravadora.png'

    let gitlink = 'https://github.com/Stuepp/Gravadora'

    let git = (
        <a class="group my-auto items-center justify-center flex text-xl font-medium text-zinc-200 transition hover:text-teal-500" href={gitlink}>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8 flex-none fill-zinc-400 transition group-hover:fill-teal-500">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
            </svg>
            <span class="my-auto">Check on GitHub</span>
        </a>
    )

    return(
        <main>
            <div className="flex items-center justify-center">
                <ul className="text-center p-2">
                    <li className="px-16">
                        <ProjectDescription 
                        description={`"A record company has decided to create a database with the information about it's musician as well as other company information. The information given to the designer were:"`}
                        col1={[`Each artist has an id, name, address and a cell phone number. The musician at the beginning of their career they often
                        share an address and, furthermore, it is assumed that each address only has one telephone number.`, `Each musician can belong to one or more bands.`,
                            `Each instrument used in the studios has a name (e.g. guitar, drums, etc.) and an internal code.`,
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
                        <ProjectPoint question={'What was the most difficult?'} answear={`I believe the most difficult part that I passed was passing information between pages, "How can I inform the user is going for item X",
                            "How can I pass this ID for that page?", "How can I pass this object for that page?"`} />
                    </li>
                    <li>
                    <ProjectPoint question={'How would I improve the project'} answear={`I would search for part were I can make them abstract, show in the Front-End more of the DB that was made, for example
                            the connections of each musician and bands to each instruments, who shared numbers and address and who not.
                            Would ask for more help for the UX too.`} />
                    </li>
                    <li>
                    <ProjectPoint question={'What do I want to learn next?'} answear={`As I started looking for jobs I noticed a demand for React, Angular, Typescript, MongoDB. So I aim to learn them, but I also aim to improve
                            my coding skills, and if there is a way to code faster and with quality I would like to learn how too. So basically I aim to learn what is asked
                            in the market but also to improve my base.`} />
                    </li>
                    <li>
                        <ProjectPoint question={git} />
                    </li>

                </ul>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-4">
                    <Image src={gravadoradesign} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                    <Image src={gravadoraDiagram} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
            </div>
        </main>
    )
}