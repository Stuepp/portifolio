import ProjectDescription from "@/app/components/ProjectDescription"
import ProjectPoint from "@/app/components/ProojectPoint"
import Image from 'next/image'

export default function Home(){
    let gainTrackerEvaluation = '/evaluation.jpg'
    let gainTrackerHome = '/home.jpg'
    let gainTrackerTrainging = '/training.jpg'
    let gainTrackerDiagram = '/academia.drawio.png'

    let gitlink = 'https://github.com/Stuepp/Final-work'

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
                        <ProjectDescription description={`With the idea that a lot of people now days hit the gym, and would like to keep a progress of their personal development, we came with Gain Tracker,
                                a simple web app where the user stores the training, exercise and body information, and with it the app would plot a graph of the user progress and
                                also serves to keep the training stored so it don't have to be in a paper or saved as pdf.`}
                            col1={[`Each training has one or more exercises`, `Each exercise has a history`,
                                `The user has its avaliation/evaluation of body`, `Each exercise, training and evaluation has its own graph`]}    
                        />
                    </li>
                    <li>
                        <ProjectPoint question={'What did I learn?'} answear={`In this project I didn't learn much in terms of new technologies, frameworks, but in I learned how to communicate better with my team,
                            as the team was used to Django but each one was used to say different names for the same thing, or to say the same thing in a different way
                            a lot of missunderstands happend but all fixed in no time, it was quite fun doing this project.
                            I cannot left out, one of the most important things I learned, is to not set a too big of objective for the given X time.`}/>
                    </li>
                    <li>
                        <ProjectPoint question={'What was the most difficult?'} answear={`The most difficult part was to decide who would do what, when to work alone and when to work together, and the time problem that each one of us have.`}/>
                    </li>
                    <li>
                        <ProjectPoint question={'How would I improve the project'} answear={`I would search for part were I can make them abstract, show in the Front-End more of the DB that was made, for example
                            the connections of each musician and bands to each instruments, who shared numbers and address and who not.
                            Would ask for more help for the UX too.`}/>
                    </li>
                    <li>
                        <ProjectPoint question={'What do I want to learn next?'} answear={`In this project I noticed I should learn "how to code for others", and when going in a project to search how that technologie is commonly written,
                            for example like_this_for_variables, LikeThisForConstants, Components, and the terms too. With that I believe team work is bound to be more fluid.`}/>
                    </li>
                    <li>
                        <ProjectPoint question={git} />
                    </li>
                </ul>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-4">
                <div className="flex flex-col gap-4">
                    <Image src={gainTrackerHome} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                    <Image src={gainTrackerTrainging} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                </div>
                <div className="flex flex-col gap-4">
                    <Image src={gainTrackerEvaluation} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                    <Image src={gainTrackerDiagram} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                </div>
            </div>
        </main>
    )
}