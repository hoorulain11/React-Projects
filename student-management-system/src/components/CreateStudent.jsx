
function CreateStudent() {
   const handleSubmit = async()=> {
       alert("user created")
   }



  return (
    <>
<form onSubmit={handleSubmit()}>
    <input type="text" placeholder="enter student name" required/>
    <input type="number" placeholder="enter student age"/>
    <button type="submit">create student</button>
</form>
    </>
  )
}

export default CreateStudent