import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './component/Signup'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
