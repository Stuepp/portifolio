export default function ProjectDescription({description, col1, col2}){

  const tags1 = [], tags2 = []
  let state = 'hidden'

  if(col1 != undefined){
    for(let i = 0; i < col1.length; i++){
      tags1.push(<li key={i}>{col1[i]}</li>)
    }
  }
  if(col2 != undefined){
    for(let i = 0; i < col2.length; i++){
      tags2.push(<li key={i}>{col2[i]}</li>)
    }
    state = 'mx-auto max-w-md space-y-1 text-gray-300 list-disc list-inside text-center'
  }

  return(
    <div>
      <h1 className="text-2xl text-zinc-100">Summary of the Proejct</h1>
      <div>
        <p>{description}</p>
        <div className="lg:flex my-2">
          <ul className="mx-auto max-w-md space-y-1 text-zinc-200 list-disc list-inside text-center">
              {tags1}
          </ul>
          <ul className={state}>
              {tags2}
          </ul>
        </div>
      </div>
    </div>
  )
}