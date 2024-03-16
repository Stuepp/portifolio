import gravadora from './gravadora.json';
import gainTracker from './gainTracker.json';

import ProjectDescription from "@/app/components/ProjectDescription"
import ProjectPoint from "@/app/components/ProojectPoint"
import { useProjectContext } from '@/app/components/ProjectContext';

export default function CommonPage(){
  
  const { selectedFile } = useProjectContext();

  let jsonData
  if(selectedFile == 'gravadora.json'){
    jsonData = gravadora;
  }else if(selectedFile == 'gainTracker.json'){
    jsonData = gainTracker;
  }else{
    jsonData = {}
  }

  const tags = [], images = []
  let correct_project_description

  if(jsonData.col2 != {}){
    correct_project_description = <ProjectDescription description={jsonData.project_description} col1={jsonData.col1} col2={jsonData.col2} />
  }else{
    correct_project_description = <ProjectDescription description={jsonData.project_description} col1={jsonData.col1} />
  }

  for(let i = 0; i < jsonData.points.length; i++){
    tags.push(
      <li key={i}>
        <ProjectPoint question={jsonData.points[i].question} answear={jsonData.points[i].answear} />
      </li>
    )
  }

  return(
    <div>
      <div className="flex items-center justify-center">
        <ul className="text-center p-2">
          <li className="px-16">
            {correct_project_description}
          </li>
          {tags}
        </ul>
      </div>
      <div className="grid lg:grid-cols-2">
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
    
  )
}