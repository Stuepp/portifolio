export default function ProjectPoint({question, answear}){
  return(
    <div>
      <h1 className="text-2xl">{question}</h1>
      <p className="mx-auto my-2 max-w-2xl space-y-1 text-gray-300">{answear}</p>
    </div>
  )
}