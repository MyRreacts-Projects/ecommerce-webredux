
import './App.css'
import Header from './components/header'
import {Routes,Route} from 'react-router-dom'
import CardDetails from './components/cardsDetails'
import Cards from './components/cards'

function App() {
  
  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<Cards/>} />
  <Route path='cart' element={<CardDetails/>}/>
</Routes>
    </>
  )
}
import { formGroupClasses } from '@mui/material'

export default App
