import {React, useState} from 'react'
import './App.css'

const App = () => {
  // 
  const abbreviations = {
    afk: 'away from keyboard',
    asap: 'as soon as possible',
    atm: 'at the moment',
    bff: 'best friends forever',
    btw: 'by the way',
    brb: 'be right back',
    diy: 'do it yourself',
    fomo: 'fear of missing out',
    ftw: 'for the win',
    g2g: 'got to go',
    gr8: 'great',
    idk: "I don't know",
    ily: 'I love you',
    imo: 'in my opinion',
    jk: 'just kidding',
    lmk: 'let me know',
    lol: 'laugh out loud',
    np: 'no problem',
    omg: 'oh my god',
    btw: 'by the way',
    rofl: 'rolling on the floor laughing',
    tbh: 'to be honest',
    tgif: 'thank goodness it’s Friday',
    tmi: 'too much information',
    ttyl: 'talk to you later',
    wfh: 'work from home',
    yolo: 'you only live once',
    irl: 'in real life',
    nvm: 'never mind',
    otp: 'on the phone',
    smh: 'shaking my head',
    hmu: 'hit me up',
    tbt: 'throwback Thursday',
    fyi: 'for your information',
    tbh: 'to be honest',
    ig: 'Instagram',
    fb: 'Facebook',
    bae: 'before anyone else',
    dm: 'direct message',
    srsly: 'seriously',
    rn: 'right now',
    wtf: 'what the f**k',
    thx: 'thanks',
    btw: 'by the way',
    gtg: 'got to go',
    bffl: 'best friends for life',
    ngl: 'not gonna lie',
    lmao: 'laughing my ass off',
    sos: 'save our souls',
    grwm: 'get ready with me',
    gn: 'good night',

  };
  
  
  
const [input, setInput] = useState('')
const [result, setresult]= useState('')
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const search =(e)=>{
  e.preventDefault();
  if(abbreviations.hasOwnProperty(input)){
    setresult(abbreviations[input])
  }else{
    setresult('Does not have input')
  }
}
const handleChange = (event) => {
  setInput(event.target.value);
  
};


  return (
    <div className='container'>
      <h1>ABBREVATION FINDER</h1>
      <article className='form'>
        <input type='text' placeholder='Find...'className='search' onChange={handleChange}/>
        <button type='submit'onClick={search}>Search</button>
      </article>
      <article>
        <h1 className='display'>{capitalizeFirstLetter(result)}</h1>
      </article>
      <h3>More abbrevations coming soon....</h3>
      <p>dev: Abayomi Aremo</p>
    </div>
  )
}

export default App