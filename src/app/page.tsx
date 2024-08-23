import { Add } from "@/components/interface/add";
import { View } from "@/components/interface/view";
import { Suspense } from "react";

export default function Main(){
  return (
    <main className="w-full h-screen flex justify-center items-center"> 
      <div className="p-4 sm:w-[600px] max-sm:w-full max-sm:h-full flex flex-col gap-2 border rounded">
        <Suspense fallback={ <p>Carregando...</p> }>
          <View />
        </Suspense>
        <Add />
      </div>
    </main>
  )
}