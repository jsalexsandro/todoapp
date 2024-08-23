import { resolve } from "path"
import { Checkbox } from "../ui/checkbox"

export async function View(){

  await new Promise(resolve => setTimeout(resolve, 3000))

  const request = await fetch("http://localhost:3003/post", 
    {
      method:"get",
      next: {
        tags: ["get-taks"]
      }
    }
  )
  const posts  = await request.json()

  function Post({ name, id, open }: { name:string, id:string, open:string }){
    return (
      <div className="flex justify-between">
        <p>{ name }</p>
        <Checkbox className="p-3" value={ open } />
      </div>
    )
  }
  
  return (
    <div className="max-sm:h-full max-sm:overflow-auto">
      <ul className="flex flex-col gap-2">
        { posts.map((e: any) => (
          <li>
            <Post key={ e.id } name={ e.name } id={ e.id } open={ e.open } />
          </li>
        )) }
      </ul>
    </div>
  )
}