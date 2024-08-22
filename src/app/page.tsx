import { Add } from "@/components/interface/add";
import { View } from "@/components/interface/view";

export default function Main(){
  return (
    <main className="w-full h-screen flex justify-center items-center"> 
      <div className="p-4 sm:w-[600px]">
        <View />
        <Add />
      </div>
    </main>
  )
}