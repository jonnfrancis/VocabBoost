import Lottie from 'lottie-react'
import { useEffect, useRef } from 'react'
import animationData from '../assets/animation_ll6dr5ru.json'
import SplitType from 'split-type'
import { gsap } from 'gsap'

export default function LoadingScreen() {
  const loadingRef = useRef(null)
  useEffect(() => {
    /// Create the SplitType instance after the component mounts and the DOM is ready
    const text = SplitType.create('.loading-text', { types: 'chars' });

    // Animate the characters
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.2,
    });

    // Remove the loading screen after a delay
    const timeout = setTimeout(() => {
      const loadingScreen = document.querySelector('.loading-screen');
      if (loadingScreen) {
        gsap.to(loadingScreen, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            // Schedule the removal of the loading screen from the DOM in the next animation frame
            requestAnimationFrame(() => {
              loadingScreen.remove();
            });
          },
        });
      }
    }, 5000);
    
  }, []);
    return (
      <div className="loading-screen" ref={loadingRef}>
        <Lottie animationData={animationData}/>
        <h1 className='loading-text'>ViteVocab</h1>
      </div>
    )
}
