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
import AnniversaryFramers from './Components/AnniversaryFramers/AnniversaryFramers'
import ValentineFramers from './Components/ValentineFramers/ValentineFramers'
import { Parallax } from 'react-parallax'
import Poster from '../public/images/Poster5.webp'




function App() {
  return (
    <>
      <Navbar />
     
        <Slider />
        <Framer />
       
        <Framersprints />
        <AnniversaryFramers />
        <ValentineFramers />
        <Parallax blur={5}  strength={-200}   bgImage={Poster} bgImageAlt="the cat">
        <IdeasInspiration />
        <Ourpromiseyou />
        </Parallax>
        <Customerssaying />

      <Footer />
    </>
  )
}

export default App
