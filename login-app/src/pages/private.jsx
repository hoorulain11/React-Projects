
import { signOut } from "firebase/auth"
import { auth } from "../firebase"


function Private() {
  const handleSignout=()=>{
    signOut(auth)
    .then(()=>alert("Signed Out Succefully"))
    .catch(error=>{
      console.log(error)
      alert(error.message)
    })

  }
  return (
  <div style={{display:'flex',justifyContent:'center',flexDirection:'colum'}}>
    <h1>private page</h1>
    <button onClick={handleSignout}>SignOut</button>
    </div>
  )
}

export default Private;