
import './App.css'
import Customerssaying from './Components/Customerssaying/Customerssaying'
import Framer from './Components/Framers/Framer'
import Framersprints from './Components/Framersprints/Framersprints'
import IdeasInspiration from './Components/IdeasInspiration/IdeasInspiration'
import Navbar from './Components/Navbar/Navbar'
import Ourpromiseyou from './Components/Ourpromiseyou/Ourpromiseyou'
import Slider from './Components/Sliders/Slider'
import palette from './Components/palette'
import Footer from './Components/Footer/Footer'

function App() {
 
  return (
    <>
  <Navbar/>
   <Slider/>
  <Framer/>
  <Framersprints/>
  <IdeasInspiration/>
  <Ourpromiseyou/>
  <Customerssaying/>
  <Footer/>
 


    </>
  )
}

export default App
