import Card from '../components/Card'

export default function Home(){
    return(
        <div>
            <div className="sm:px-8 py-16">
                <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-100 sm:text-5x">Projects I have  develop for now</h1>
                <div className='my-4 flex flex-col lg:flex-row justify-center gap-5 py-4 overflow-hidden sm:gap-8'>
                    <Card title={'Gravadora - Record Company'} subtitle={'This is a project that used the follow technologies:'}
                        img={'/gravadora.png'} link={'/projects/gravadora'} gitlink={'https://github.com/Stuepp/Gravadora'} techs = {['Django', 'HTML', 'CSS', 'Bootstrap', 'Postgres SQL', 'Mongo DB']} />
                    <Card title={'Gain Tracker'} subtitle={'This is a project that used the follow technologies:'}
                        img={'/academia.drawio.png'} link={'/projects/gainTracker'} gitlink={'https://github.com/Stuepp/Final-work'} techs = {['Django', 'HTML', 'CSS', 'Bootstrap', 'Postgres SQL']} />
                </div>
                
            </div>
        </div>
    )
}