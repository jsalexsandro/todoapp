'use client'

import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"

export function NButton(){
  
  const { pending } = useFormStatus()

  return (
    <Button type="submit"  disabled={pending} >
      {!pending && "Task"}
      {pending  && "Carregando"}
    </Button>
  )
}