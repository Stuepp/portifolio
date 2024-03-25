import gravadora from './gravadora.json'
import gainTracker from './gainTracker.json';

import Image from 'next/image'

import ProjectDescription from "@/app/components/ProjectDescription"
import ProjectPoint from "@/app/components/ProojectPoint"

export default function CommonProjectPage({
  searchParams,}= {
    searchParams:{
      jsonfile,
      gitlink
    }
  }){

  let jsonData, selectedFile = searchParams.jsonfile
  if(selectedFile == 'gravadora.json'){
    jsonData = gravadora;
  }else if(selectedFile == 'gainTracker.json'){
    jsonData = gainTracker;
  }else{
    jsonData = {}
  }

  const tags = [], images = []
  let correct_project_description

  const description = jsonData.project_description[0].description
  const col1Array = jsonData.project_description[1].col1.map(obj => Object.values(obj)[0])
  const col2Array = jsonData.project_description[2].col2.map(obj => Object.values(obj)[0])
  
  if(jsonData.project_description[2].col2.length > 0){
    correct_project_description = <ProjectDescription description={description} col1={col1Array} col2={col2Array} />
  }else{
    correct_project_description = <ProjectDescription description={description} col1={col1Array} />
  }

  for(let i = 0; i < jsonData.points.length; i++){
    const propertyName = `point${i + 1}`
    const question = jsonData.points[i][propertyName]?.question
    const answear = jsonData.points[i][propertyName]?.answear
    tags.push(
      <li key={i}>
        <ProjectPoint question={question} answear={answear} />
      </li>
    )
  }

  let git = (
    <a class="group my-auto items-center justify-center flex text-xl font-medium text-zinc-200 transition hover:text-teal-500" href={searchParams.gitlink}>
        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8 flex-none fill-zinc-400 transition group-hover:fill-teal-500">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
        </svg>
        <span class="my-auto">Check on GitHub</span>
    </a>
  )

  for(let i = 1; i < jsonData.images.length; i++){
    const propertyName = `img${i}`
    let imgSrc = jsonData.images[i][propertyName], lastimg = jsonData.images.length -1
    
    if(i == lastimg){ // check if is last img
      console.log(i)
      console.log(jsonData.images.length)
      images.push(
        <img src={imgSrc} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full col-span-2' />
      )
      break
    }
    images.push(
      <img src={imgSrc} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg w-full col-span-2 lg:col-span-1' />
    )
  }
  let Diagram = jsonData.images[0].UML

  return(
    <div>
      <div className="flex items-center justify-center">
        <ul className="text-center p-2">
          <li className="px-16">
            {correct_project_description}
          </li>
          {tags}
          <li>
            <ProjectPoint question={git} />
          </li>
        </ul>
      </div>
      <div className='text-center my-4'>
        <ProjectPoint question={'Diagram(s)'} />
        <div>
          <Image src={Diagram} width={700} height={500} alt='Gravadora Design' className='rounded-t-lg mx-auto' />
          <p>UML</p>
        </div>
        <ProjectPoint question={'Apparence'} />
        <div className="grid p-4 gap-4 lg:grid-cols-2">
            {images}
        </div>
      </div>
    </div>
    
  )
}