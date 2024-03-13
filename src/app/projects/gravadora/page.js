import NavBar from "../../components/NavBar"
import ProjectDescription from "@/app/components/ProjectDescription"
import ProjectPoint from "@/app/components/ProojectPoint"
import Image from 'next/image'

export default function Home(){
    let gravadoradesign = '/gravadora-design.jpg'
    let gravadoraDiagram = '/gravadora.png'

    return(
        <main>
            <NavBar />
            <div className="flex items-center justify-center">
                <ul className="text-center p-2">
                    <li>
                        <ProjectDescription description={`"A record company has decided to create a database with the information about it's musician as well as other company information. The information given to the designer were:"`} />
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