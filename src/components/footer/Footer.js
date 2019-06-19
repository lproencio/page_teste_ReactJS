import React, {useState, useEffect} from 'react';

import './Footer.css';

export default function Footer() {

  const [language, setLanguage] = useState('Languages');
  const [initialized, init] = useState(false);

  function addtext(){
    const text = ['React Native','JavaScript','Node JS','React Js','Css', 'languages']
    let i=0
    setInterval((b)=>{
      b = text[i]
      i++
      if (b === undefined) return i=0
      setLanguage(b);
    }, 1000)
  
  }

  useEffect(() => {
    if(!initialized) {
      addtext();
      init(true);
    }
  })
  
  return (
    <div className="footer"><p>{language}</p></div>
  )
}