import React from 'react'
import "./Advice.css";
import iconDice from '../assets/icon-dice.svg';
import patternImg from '../assets/pattern.svg';
import patternMobi from '../assets/pattern-divider-mobile.svg';


export default function Advice() {
    const api="https://api.adviceslip.com/advice"
    const [advice, setAdvice] = React.useState({id: 117, advice: "Just because you are the loudest, doesn't make you right."})
    const [animate, setAnimate] = React.useState(false)
    
    const fetchData = () => {
        fetch(api)
        .then(res => res.json())
        .then(data => setAdvice(data.slip))
        setAnimate(prevAnimate => !prevAnimate)
    }
    // React.useEffect(
    //     fetchData
    // ,[])
    return (
        <div className="card">
            <h4 className="card--id">ADVICE #{advice.id}</h4>
            <blockquote>
                <h1 className="card--title"> <span className='advice-span'> &quot; <br /></span>{advice.advice}</h1>
            </blockquote>
            <div className="card--img">
                <picture>
                    <source
                        srcSet={patternImg}
                        media="(min-width: 1000px)"
                    />
                    <img
                        src={patternMobi}
                        alt="a line to divide the card"
                    />
                </picture>
            </div>
            <small className="small-txt">Roll the Dice for more advice</small>
            <div onClick={fetchData} className="card--new">
                <img className={animate ? "animate" : ""} src={iconDice} />
            </div>
        </div>
    )
}