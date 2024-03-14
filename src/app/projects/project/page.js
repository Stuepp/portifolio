import ProjectDescription from "@/app/components/ProjectDescription"
import ProjectPoint from "@/app/components/ProojectPoint"

export default function CommonPage({PD , PP}){
  const tags = []
  let CorrectPD

  if(PD.length == 3){
    CorrectPD = <ProjectDescription description={PD[0]} col1={PD[1]} col2={PD[2]} />
  }else{
    CorrectPD = <ProjectDescription description={PD[0]} col1={PD[1]} />
  }

  for(let i = 0; i < text.length; i++){
    if(PP[i].length == 3){
      tags.push(
        <li key={i}>
          <ProjectPoint description={PP[i][0]} col1={PP[i][1]} col2={PP[i][2]} />
        </li>
      )
    }else{
      tags.push(
        <li key={i}>
          <ProjectPoint description={PP[i][0]} col1={PP[i][1]} />
        </li>
      )
    }
  }

  return(
    <div className="flex items-center justify-center">
      <ul className="text-center p-2">
        <li className="px-16">
          {CorrectPD}
        </li>
        {tags}
      </ul>
    </div>
  )
}