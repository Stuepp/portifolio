import NavBar from "../../components/NavBar"
import Image from 'next/image'

export default function Home(){
    let gainTrackerEvaluation = '/evaluation.jpg'
    let gainTrackerHome = '/home.jpg'
    let gainTrackerTrainging = '/training.jpg'
    let gainTrackerDiagram = '/academia.drawio.png'

    return(
        <main>
            <NavBar />
            <div className="flex items-center justify-center">
                <ul className="text-center">
                    <li>
                        <h1 className="text-2xl">Summary of the Project</h1>
                        <div>
                            <p>With the idea that a lot of people now days hit the gym, and would like to keep a progress of their personal development, we came with Gain Tracker,
                                a simple web app where the user stores the training, exercise and body information, and with it the app would plot a graph of the user progress and
                                also serves to keep the training stored so it don't have to be in a paper or saved as pdf.
                            </p>
                            <ul className="mx-auto my-2 max-w-md space-y-1 text-gray-300 list-disc list-inside text-center">
                                <li>Each training has one or more exercises</li>
                                <li>Each exercise has a history</li>
                                <li>The user has its avaliation/evaluation of body</li>
                                <li>Each exercise, training and evaluation has its own graph
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h1 className="text-2xl">What did I learn?</h1>
                        <p className="mx-auto my-2 max-w-2xl space-y-1 text-gray-300">
                            In this project I didn't learn much in terms of new technologies, frameworks, but in I learned how to communicate better with my team,
                            as the team was used to Django but each one was used to say different names for the same thing, or to say the same thing in a different way
                            a lot of missunderstands happend but all fixed in no time, it was quite fun doing this project.
                            I cannot left out, one of the most important things I learned, is to not set a too big of objective for the given X time.
                        </p>
                    </li>
                    <li>
                        <h1 className="text-2xl">What was the most difficult?</h1>
                        <p className="mx-auto my-2 max-w-2xl space-y-1 text-gray-300">
                            The most difficult part was to decide who would do what, when to work alone and when to work together, and the time problem that each one of us have.
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
                            In this project I noticed I should learn "how to code for others", and when going in a project to search how that technologie is commonly written,
                            for example like_this_for_variables, LikeThisForConstants, Components, and the terms too. With that I beleive team work is bound to be more fluid.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <Image src={gainTrackerHome} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                    <Image src={gainTrackerTrainging} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                </div>
                <div>
                    <Image src={gainTrackerEvaluation} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                    <Image src={gainTrackerDiagram} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full' />
                </div>
            </div>
        </main>
    )
}