import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import './components/elements/Chat.css'
import{Route, Routes} from 'react-router-dom'
import Second from './components/elements/Second';
import Third from './components/elements/Third'

function App() {
  return(
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' Component={MainPage}/>
      <Route path='/Second' Component={Second}/>
      <Route path='/Third' Component={Third}/>
    </Routes>
    </>
  )
}

export default App
