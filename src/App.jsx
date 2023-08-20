import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from 'react'
import Observer from 'gsap/Observer';
import SplitType from 'split-type'
import img1 from './assets/1.jpg';
import img2 from './assets/1.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';

import './App.css'
import jsonData from './data.json';
import Word from './components/Word';
import BottomNavBar from './components/BottomNavbar';
import LoadingScreen from './components/LoadingScreen';


console.log(jsonData[0])
gsap.registerPlugin(ScrollTrigger);

function animateSections() {
    let sections = document.querySelectorAll('.word-container'); // Adjust the selector
    let images = document.querySelectorAll('.bg');
    let headings = gsap.utils.toArray('.section-heading');
    let outerWrappers = gsap.utils.toArray('.outer');
    let innerWrappers = gsap.utils.toArray('.inner');
    let splitHeadings = headings.map(
      (heading) =>
        SplitType.create(heading, {
          type: 'chars,words,lines',
          linesClass: 'clip-text'
        })
    );
    let currentIndex = -1;
    let wrap = gsap.utils.wrap(0, sections.length - 1);
    let animating;
  
    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });
  
    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => (animating = false)
      });
  
      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { xPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }
  
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { xPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { xPercent: 0 },
        0
      )
        .fromTo(images[index], { xPercent: 15 * dFactor }, { xPercent: 0 }, 0)
        .fromTo(
          splitHeadings[index].chars,
          { autoAlpha: 0, xPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            xPercent: 0,
            duration: 1,
            ease: 'power2',
            stagger: {
              each: 0.02,
              from: 'random'
            }
          },
          0.2
        );
  
      currentIndex = index;
    }
  
    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => {
        !animating && gotoSection(currentIndex - 1, -1);
      },
      onUp: () => {
        !animating && gotoSection(currentIndex + 1, 1);
      },
      tolerance: 10,
      preventDefault: true
    });
  
    gotoSection(0, 1);
  }

function App() {
    useEffect(() => {
        animateSections();
      }, []);
    const parsedData = jsonData; 
    
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    const getRandomWords = (data, count) => {
        const shuffledData = data.slice().sort(() => Math.random() - 0.5);
        return shuffledData.slice(0, count);
    };

    const randomWords = getRandomWords(parsedData, 5);
    const images = [img1, img2, img3, img4, img5];
    randomWords.forEach((word, index) => {
        word.image = images[index];
    });
    
    console.log(randomWords)
    
    return (
        <div className="App">
            <LoadingScreen />
            <div className="words">
            {randomWords.map((word, index) => (
                <Word
                    key={index}
                    word={word.word}
                    meaning={word.meaning}
                    image={word.image}
                />
            ))}
            </div>
            <div className="bottom-nav-wrapper">
                <BottomNavBar  />
            </div>
        </div>
    );
}

export default App
