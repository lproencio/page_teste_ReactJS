import React, { useState, useEffect } from 'react';

import './Header.css';

export default function Heder() {
  
  const [dateTime, setDateTime] = useState(date());

  useEffect(() => {
      const id = setInterval(() => setDateTime(date()), 1000);
      return () => {
          clearInterval(id);
      }
  }, []);

  function date() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let dataHora = `${day}/${month}/${year} ${hour}:${min}:${sec}`;

    return [dataHora]
  }


  return(
  <div className="header-main">
     <div className="data">{dateTime}</div>     
  </div>
  )
}