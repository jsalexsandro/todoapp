export async function View(){
  const request = await fetch("http://localhost:3003/post", { method:"get" })
  const posts  = await request.json()

  function Post({ name, id, open }: { name:string, id:string, open:string }){
    return (
      <div>
        <p></p>
      </div>
    )
  }
  
  return (
    <div>
      { posts.map((e: any) => <p>{e.name}</p>) }
    </div>
  )
}