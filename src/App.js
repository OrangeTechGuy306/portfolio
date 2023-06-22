import Home from './pages/home/Home';
import {Routes, Route} from "react-router-dom"
import Dash from "./admin/dashboard/Dash"
import Login from "./admin/login/Login"

function App() {
  return (
  
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adminlogin' element={<Login/>} />
        <Route path='/admindash' element={<Dash/>} />
     </Routes>
  )
}

export default App;
