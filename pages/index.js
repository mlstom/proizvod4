import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import slika from '../slike/Slika3.png'
import Router from 'next/router'

export default function Home() {
  const [email, setemail] = useState(false)
  const [mail, setmail] = useState('')
  const [nema, setnema] = useState(false)


 
  const emailSaving = async () => {
    if (mail) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({ mail })
      })
      setemail(false)
    } else {
      setnema(true)
      setTimeout(() => {
        setnema(false)
      }, 2000)
    }
  }
  const handle = async () => {
    Router.push('https://www.digistore24.com/redir/447323/mlstomic/')
  }
  const keyUp = (e) => {
    if (e.keyCode == 13) {
      emailSaving()
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Fit In 15</title>
        <meta name="description" content="Fit In 15" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {email &&
        <div className={styles.absolute}>
          <div className={styles.contmail}>
            <p>Just to be sure that you are human, enter your mail below</p>
            {nema && <p style={{ color: 'red' }}>Youe have to enter an email to visit this page</p>}
            <input style={{ padding: '5px 10px' }} type='email' placeholder='exaple@inkrist.net' value={mail} onChange={(e) => setmail(e.target.value)} onKeyUp={(e) => keyUp(e)} />
            <a onClick={() => emailSaving()} style={{ color: '#fff', backgroundColor: '#6c63ff', padding: '5px 10px', borderRadius: '10px', marginTop: '20px', cursor: 'pointer' }}>Start watching now!!! </a>
          </div>
        </div>
      }
      <header className={styles.header}>
        <p style={{ fontSize: '20px' }}>Fit In 15</p>
        <p>Home</p>
      </header>
      <main className={styles.main}>
        <h1 style={{ color: '#6c63ff' }} >Learn a simple way to track calories</h1>
        <div onClick={(e) => handle()} style={{ cursor: 'pointer' }}>
          <Image src={slika} alt='lulu' />
        </div>
        <h2 style={{ color: '#6c63ff', margin: 0, marginTop: '20px' }}>The last fat loss plan you will need</h2>
        <p>
          Have you ever spent money on a workout plan that just did not cut it?
          <br/> <br/>
          Maybe you even joined a gym with great intentions, but never quick knew where to start.
          If so, your not alone.
          <br/> <br/>
          Fitness is a multi-billion dollar industry.
          <br/> <br/>
          More new exercise devices are hitting the market every single day, and it seems like new gyms are
          popping up all over the place.
          <br/> <br/>
          The truth is you do not need a crazy amount of equipment to burn fat.
          Getting in the best shape of your life does not have to be expensive.
          <br/> <br/>
          In fact, you can get in great shape for no cost. But you need a plan that grows with you.
          All you need is my step-by-step guide, and its less than $10.
          <br/> <br/>
          Click the link below to take a look at what you will get...</p>
        <p>If you want to know more about this just <span style={{ color: '#6c63ff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handle()}>click here to watch video about it</span></p>
      </main>
    </div>
  )
}
