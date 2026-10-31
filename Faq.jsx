import React, { useState } from 'react'

import styles from './faqs.module.css'

export default function Faq({id, question, answer}) {
    const[toggle, setToggle] = useState(false)
    const handleChange = () =>{
        setToggle(!toggle)
    }
  return (
    <artical className={styles.faq}>
        <div className={styles.question}>
            <h3>{question}</h3>
            <button className={styles.btn} onClick={handleChange}>{toggle ? "-" : "+"}</button>
        </div>
      
        <div className={styles.answer}>
            {toggle && <p>{answer}</p>}
        </div>
      
    </artical>
  )
}

