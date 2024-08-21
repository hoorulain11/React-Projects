import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import SideBar from './Components/SideBar.jsx';

const App = () => {
  return (
    <>
    
    <Navbar/>
    <SideBar/>
    </>
    

  );
};

export default App;