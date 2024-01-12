import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'
import Observer from 'gsap/Observer';
import SplitType from 'split-type'
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.jpg';
import img4 from './assets/4.png';
import img5 from './assets/5.png';

import './App.css'
import jsonData from './data.json';
import Word from './components/Word';
import BottomNavBar from './components/BottomNavbar';
import LoadingScreen from './components/LoadingScreen';


gsap.registerPlugin(ScrollTrigger);

/**
 * Animates the sections of the webpage using GSAP library.
 */
function animateSections() {
  const sections = document.querySelectorAll('.word-container');
  const images = document.querySelectorAll('.bg');
  const headings = gsap.utils.toArray('.section-heading');
  const outerWrappers = gsap.utils.toArray('.outer');
  const innerWrappers = gsap.utils.toArray('.inner');
  const splitHeadings = headings.map((heading) =>
    SplitType.create(heading, {
      type: 'chars,words,lines',
      linesClass: 'clip-text',
    })
  );
  let currentIndex = -1;
  const wrap = gsap.utils.wrap(0, sections.length - 1);
  let animating = false;

  gsap.set(outerWrappers, { xPercent: 100 });
  gsap.set(innerWrappers, { xPercent: -100 });

  /**
   * Animates the transition between sections.
   * @param {number} index - The index of the section to animate.
   * @param {number} direction - The direction of the animation (-1 for up, 1 for down).
   */
  function gotoSection(index, direction) {
    index = wrap(index);
    animating = true;
    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;
    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: 'power1.inOut' },
      onComplete: () => (animating = false),
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
            from: 'random',
          },
        },
        0.2
      );

    currentIndex = index;
  }

  Observer.create({
    type: 'wheel,touch,pointer',
    wheelSpeed: -1,
    onDown: () => {
      if (!animating) {
        gotoSection(currentIndex - 1, -1);
      }
    },
    onUp: () => {
      if (!animating) {
        gotoSection(currentIndex + 1, 1);
      }
    },
    tolerance: 10,
    preventDefault: true,
  });

  gotoSection(0, 1);
}

/**
 * The main component of the application.
 * It fetches data from a JSON file, selects random words from the data, and displays them along with their meanings and images.
 * It also includes a loading screen and a bottom navigation bar.
 */
function App() {
  useEffect(() => {
    animateSections();
  }, []);

  const parsedData = jsonData;

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  /**
   * Returns a subset of shuffled data.
   * @param {Array} data - The input data array.
   * @param {number} count - The number of random words to select.
   * @returns {Array} - The subset of shuffled data.
   */
  const getRandomWords = (data, count) => {
    const shuffledData = data.slice().sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, count);
  };

  const randomWords = getRandomWords(parsedData, 5);
  const images = [img1, img2, img3, img4, img5];
  randomWords.forEach((word, index) => {
    word.image = images[index];
  });

  console.log(randomWords);

  return (
    <div className="App">
      <LoadingScreen />
      <div className="words">
        {randomWords.map((word, index) => (
          <Word
            key={index}
            index={index}
            word={word.word}
            meaning={word.meaning}
            image={word.image}
          />
        ))}
      </div>
      <div className="bottom-nav-wrapper">
        <BottomNavBar />
      </div>
    </div>
  );
}

export default App
