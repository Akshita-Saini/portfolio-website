import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  const [projectHoverState, setProjectHoverState] = useState({
    clearUI:false,
    noteshub:false,
    ezHabit:false
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Akshita Saini</title>
        <meta name="description" content="Akshita Saini's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}>
        <span className={styles.logo}>
          <Image src="/brand-icon.svg" alt="Brand Logo" width={60} height={60} />
        </span>
        <span className={styles.brandname}>
          Akshita Saini
        </span>
      </div>
      
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <div>Hi,</div>
            <div>I&#39;m <span className={styles.highlight}>Akshita Saini</span>.</div>
            <div>I&#39;m a <span className={styles.darkHighlight}>developer</span>!</div>
          </div>
          <div className={styles.headerImage}>
            <Image src="/profile.jpg" alt="Akshita's Profile Pic" width={500} height={500}/>
          </div>
        </header>

        <section className={styles.sectionOne}>
          <h2 className={styles.sectionHeading}>Check out my projects here <span><Image className={styles.pointer} src="/pointer.svg" alt="pointer down" width={64} height={64}/></span></h2>

          <div className={styles.card}>
            <Image className={styles.cardImage} height={455} width={935} alt="project preview" src="/clearUI.png"/>
            <div className={styles.cardBody} >
              <h4 className={styles.cardHeading}>Clear Ui 
              <a href="https://clear-ui.netlify.app/"><Image className={styles.arrowTopRight} alt="arrow top right" src="/arrow-top-right.svg" height={72} width={72} /></a>
              </h4>
              <div className={styles.cardText}>A CSS component library with components that can be composed to build any design, directly in your markup. It&#39;s easy to customize and use.</div>
              <div className={styles.btnGroup}>
                <a href="https://github.com/Akshita-Saini/Clear-UI" className={styles.btnLight}>View Code</a>  
                <a href="https://clear-ui.netlify.app/" className={styles.btn}>View Project</a>
              </div>
            </div>
          </div>

          <div className={styles.cardReverse}>
            <div className={styles.imageContainer}>
              <Image className={styles.cardImage} width={935} height={455} alt="project preview" src="/noteshub.png"/>
            </div>
            <div className={styles.cardBody} >
              <h4 className={styles.cardHeading}>Noteshub
                <a href="https://noteshub.netlify.app/"><Image className={styles.arrowTopRight} alt="arrow top right" src="/arrow-top-right.svg" height={72} width={72} /></a>
              </h4>
              <div className={styles.cardText}>A front-end only note-taking app made using React. Supports create, edit and delete note. The user may also tag notes.</div>
              <div className={styles.btnGroup}>
                <a href="https://github.com/Akshita-Saini/noteshub" className={styles.btnLight}>View Code</a>  
                <a href="https://noteshub.netlify.app/" className={styles.btn}>View Project</a>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image className={styles.cardImage} width={935} height={455} alt="project preview" src="/ezHabit.png"/>
            </div>
            <div className={styles.cardBody} >
              <h4 className={styles.cardHeading}>ezHabit
              <a href="https://ezhabit.netlify.app/"><Image className={styles.arrowTopRight} alt="arrow top right" src="/arrow-top-right.svg" height={72} width={72} /></a>
              </h4>
              <div className={styles.cardText}>A gamified Habit tracking app created using ReactJS, TypeScript, Node.js, Express and MongoDB. Work on this is ongoing!</div>
              <div className={styles.btnGroup}>
                <a href="https://github.com/Akshita-Saini/ezhabit" className={styles.btnLight}>View Code</a>  
                <a href="https://ezhabit.netlify.app/" className={styles.btn}>View Project</a>
              </div>
            </div>
          </div>

        </section>

        <section className={styles.sectionTwo}>
          <h2 className={styles.sectionHeading}>Connect with me <span><Image className={styles.pointer} src="/pointer.svg" alt="pointer down" width={25} height={25}/></span></h2>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/code_with_akshita/"><Image alt="instagram" src="/instagram.png" height={64} width={64} /></a>
            <a href="https://twitter.com/AkshitaSaini15"><Image alt="twitter" src="/twitter.png" height={64} width={64} /></a>
            <a href="https://www.linkedin.com/in/akshita-saini15/"><Image alt="linkedin" src="/linkedin.png" height={64} width={64} /></a>
            <a href="https://github.com/Akshita-Saini/"><Image alt="github" src="/github.png" height={64} width={64} /></a>
          </div>
        </section>

        <footer className={styles.footer}>
          Made with love <Image className='heart' src="/heart.svg" alt="heart" height={18} width={18}/> by Akshita 
        </footer>
      </main>
    </div>
  )
}
