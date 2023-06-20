import Home from './pages/home/Home';
import {Routes, Route} from "react-router-dom"
import View from './pages/view/View';

function App() {
  return (
  
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view/:type' element={<View/>} />
     </Routes>
  )
}

export default App;
