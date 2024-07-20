import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Private from './pages/private'; 
import './App.css';
import ProtectedRout from './components/ProtectedRout';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
        setIsFetching(false)
        return
      }
      setUser(null)
      setIsFetching(false)
    })
    return ()=>unsubscribe()
  },[])

  if(isFetching){
    return <h2>Loading.....</h2>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Private" element={<ProtectedRout user={user}>
          <Private/>
          </ProtectedRout>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;