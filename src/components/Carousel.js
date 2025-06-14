import React, { useState } from 'react'

const Carousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1639242585296-cbbeffd253bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhZmljJTIwbGlnaHRzfGVufDB8fDB8fHwy",
        "https://images.unsplash.com/photo-1668947982880-79966c107ac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZmljJTIwbGlnaHRzfGVufDB8fDB8fHwy",
        "https://images.unsplash.com/photo-1645632534246-862bd96a7471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhZmljJTIwbGlnaHRzfGVufDB8fDB8fHwy",
        "https://images.unsplash.com/photo-1621417696322-5286f471accc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmljJTIwbGlnaHRzfGVufDB8fDB8fHwy"
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    

    const handlePrev = () => {
        setCurrentSlide((prevIndex) => (
           prevIndex === 0 ? images.length - 1 : prevIndex - 1
        ))
    }

    const handleNext = () => {
        setCurrentSlide((prevIndex) => (
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ))
    }


  return (
    <div className='container'>
        <button onClick={handlePrev}>previous</button>
        <img style={{width: "400px", height: "400px"}} src={images[currentSlide]}  alt={currentSlide} />
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Carousel