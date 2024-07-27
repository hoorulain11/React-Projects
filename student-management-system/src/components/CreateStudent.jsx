import { useState } from "react"

function CreateStudent() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

     
   const handleSubmit = async()=> {
       alert("user created")
   }



  return (
    <>
<form onSubmit={handleSubmit()}>
    <input type="text" placeholder="enter student name" value={name} required/>
    <input type="number" placeholder="enter student age" value={age}/>
    <button type="submit">create student</button>
</form>
    </>
  )
}

export default CreateStudent