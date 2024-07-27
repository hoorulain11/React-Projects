import { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";


function CreateStudent() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [isCreatingStudent, setIsCreatingStudent] = useState(false)
  

     
   const handleSubmit = async(e)=> {
      e.preventDefault()
      try {
        setIsCreatingStudent(true)
        await addDoc(collection(db,'students'),{
            name: name,
            age:Number(age)
        })

        setName('')
        setAge('')
        setIsCreatingStudent(false)
      } catch (error) {
        console.log("error creating user:" , error)
        setIsCreatingStudent(false)
      }
   }



  return (
    <>
<form onSubmit={handleSubmit}>
    <input type="text" placeholder="enter student name" value={name} onChange={(e)=>setName(e.target.value)} required/>
    <input type="number" placeholder="enter student age" value={age} onChange={(e)=>setAge(e.target.value)} /> 
    <button type="submit">{isCreatingStudent ? 'creating...' : 'create student'}</button>
</form>
    </>
  )
}

export default CreateStudent