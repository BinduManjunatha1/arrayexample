import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";


function App({slides}) {
    const [slide,setSlide]=useState('')
    const [id,setId]= useState(0)
    
    useEffect(()=>{
        setSlide(slides[0])
    },[])


    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={slides} id={slides.id} />
            </div>
        </div>
    );
}

export default App;
