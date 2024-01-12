import logo from '../assets/logo.png'


export default function Word({ word, meaning, image, index }) {
  return (
    <section id={index} className="word-container">
      <div className="outer">
        <div className="inner">
          <div className="bg" style={{ backgroundImage: `url(${image})` }}>
            <h2 className="section-heading">{word}</h2>
            { (window.innerWidth >= 768) ? <p className="section-meaning">{meaning}</p> : <p className="section-meaning"></p> }
            { (window.innerWidth >= 768) ? <div className="overlay"></div> : <div className="Overlay"></div> }
          </div>
        </div>
      </div>
      <div className="info-container">
        {/* <img className="logo" src={logo} alt="VocabBoost Logo" /> */}
        <h1>{word}</h1>
        <p>{meaning}</p>
      </div>
    </section>
  );
}
