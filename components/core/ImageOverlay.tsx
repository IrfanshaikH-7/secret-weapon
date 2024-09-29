'use client'  
import React, { useState, useEffect } from 'react';  
import { motion } from 'framer-motion';  

const ImageOverlay = () => {  
  const [currentImage, setCurrentImage] = useState(0);  
  const images = [  
    '/secret-1.jpg',  
    '/secret-2.jpg',  
    '/secret-3.png',  
  ];  

 
  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);  
    }, 5000); 

    return () => clearInterval(intervalId);  
  }, [images.length]);  

  return (  
    <div style={ {  
      width: '100%',  
      height: '100%',  
      display: 'flex',  
      alignItems: 'center',  
      justifyContent: 'center',  
      position: 'absolute', 
      overflow: 'hidden', 
    }}>  
      {images.map((image, index) => (  
        <motion.img  
          key={index}  
          src={image}  
          style={{  
            position: 'absolute',  
            width: '100%',  
            height: '100%',  
            objectFit: 'cover', 
          }}  
          initial={{ opacity: 0 }}
          animate={{  
            opacity: index === currentImage ? 1 : 0,
            transition: { duration: 3.5 }, 
          }}  
        />  
      ))}  
    </div>  
  );  
};  

export default ImageOverlay;