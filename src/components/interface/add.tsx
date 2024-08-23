import { revalidateTag } from "next/cache";
import { Input } from "../ui/input";
import { NButton } from "./nbutton";

export function Add(){
  async function handleAdd(event: FormData){
    "use server"
    const task = event.get("task")
    
    if (!task){
      return

    }

    const request = fetch("http://localhost:3003/post", {
      method: "POST",
      body: JSON.stringify(
        { name: task, open:false }
      )
    })

    revalidateTag("get-task")

  }

  

  return (
    <form  action={ handleAdd } className="flex max-sm:fixed max-sm:left-0 max-sm:bottom-0 max-sm:bg-secondary max-sm:p-2 max-sm:w-full gap-2">
      <Input name="task" />
      <NButton />
    </form>
  )
}