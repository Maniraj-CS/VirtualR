import React from 'react'
import Nave from './Component/Nave'
import Main from './Component/Main'
import Feature from './Component/Feature'
import Pic from './Component/Pic'
import Pricing from './Component/Pricing'
import Review from './Component/Review'
import About from './Component/About'

function App() {
  return (
    <div >
     <Nave ></Nave>
     <Main  ></Main>
     <Feature className="hidden-sectio"></Feature>
     <Pic className="hidden-sectio"></Pic>
     <Pricing className="hidden-sectio"></Pricing>
     <Review className="hidden-sectio"></Review>
     <About className="hidden-sectio"></About>
    </div>
  )
}

export default App
