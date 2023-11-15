import { BrowserRouter } from "react-router-dom";
import {Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer } from "./components";
import { useEffect, useState } from "react";
import { THEME_COLORS } from "./utils/const";
const App = () => {
  
  const [selColor, setSelColor] = useState("black")
  const [selTheme, setSelTheme] = useState(THEME_COLORS['black'])
  
  useEffect(() => {
    setSelTheme(THEME_COLORS[selColor])
  }, [selColor])
  
  return (
    <div>
    <BrowserRouter>
      <div className={`relative z-0 bg-primary`} style={{background: selTheme.bg}}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar theme={selTheme}/>
          <Hero theme={selTheme} selColor={selColor}/>
        </div>
        <Content 
          setSelColor={setSelColor}
        />
        <Education theme={selTheme} />
        <Project theme={selTheme} selColor={selColor}/>
        <Experience theme={selTheme}/>
        <Achievement theme={selTheme}/>
        <Profile theme={selTheme}/>
        <Tech theme={selTheme}/>
        <div className='relative z-0'>
          <Contact theme={selTheme} selColor={selColor}/>
          <StarsCanvas theme={selTheme}/>
        </div>
        <Footer theme={selTheme}/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
