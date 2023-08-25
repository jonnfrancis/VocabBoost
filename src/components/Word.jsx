import logo from '../assets/logo.png'


export default function Word({ word, meaning, image, index }) {
    return (
         <section id={index} className="word-container">
         <div className="outer">
           <div className="inner">
             <div className="bg" style={{ backgroundImage: `url(${image})` }}>
               <h2 className="section-heading">{word}</h2>
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
