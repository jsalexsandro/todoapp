import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Add(){
  return (
    <div className="flex gap-2">
      <Input />
      <Button>
        Adicionar tag
      </Button>
    </div>
  )
}