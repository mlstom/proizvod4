import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import slika from '../slike/Slika.png'
import Router from 'next/router'

export default function Home() {
  const [email, setemail] = useState(false)
  const [mail, setmail] = useState('')
  const [nema, setnema] = useState(false)


  useEffect(() => {
    setemail(true)
  }, [])
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
    Router.push('https://www.digistore24.com/redir/424534/mlstomic/')
  }
  const keyUp = (e) => {
    if (e.keyCode == 13) {
      emailSaving()
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>The Two-Week Keto Challenge</title>
        <meta name="description" content="The Two-Week Keto Challenge" />
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
        <p style={{ fontSize: '20px' }}>The Two-Week Keto Challenge</p>
        <p>Home</p>
      </header>
      <main className={styles.main}>
        <h1 style={{ color: '#6c63ff' }} >Keto won't work unless you do THIS</h1>
        <div onClick={(e) => handle()}>
          <Image src={slika} alt='lulu' />
        </div>
        <h2 style={{ color: '#6c63ff', margin: 0, marginTop: '20px' }}>Do not miss out on this incredible solution</h2>
        <p>
          I'd like to send you this video about how I lost 100 lbs using Targeted Keto…
          <br/>
          <br/>
          The special version of keto that allows you to ease into the keto diet.
          Unlike a regular keto diet which can make you feel like you're sick with the flu while having food poisoning…
          Targeted Keto allows you to STILL indulge in all your favorite foods…
          And it's the main reason why the women who use Targeted Keto are getting such great results.
          Take Charlene for example...
          “I originally lost 50 pounds without exercise (from May 2018-February 2019) then lost another 17 lbs after that. Thank you, Dr. Ashley!” - Charlene B.
           And Emily P. …
          <br/>
          <br/>
          "I lost 15 pounds ... I think this may have been the easiest weight loss I have ever had!" - Emily P.
          Or Christy R., who also watched this video and said:
          "I have lost 50 pounds in 5 months and I'm off all medications!”
          So if you're truly serious about losing as much weight as you can, as safely and enjoyably as you can, while reclaiming your health…
        </p>
        <p>If you want more about this item just <span style={{ color: '#6c63ff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handle()}>click here to watch video about it</span></p>
      </main>
    </div>
  )
}
