import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import clearUIPreview from "../public/images/clearUI.png";
import noteshubPreview from "../public/images/noteshub.png";
import ezHabitPreview from "../public/images/ezHabit.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akshita Saini</title>
        <meta name="description" content="Akshita Saini's Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.nav}>
        <Image src="/icons/brand-icon.svg" alt="Brand Logo" width={60} height={60} />
        <span className={styles.brandname}>
          Akshita Saini
        </span>
      </div>
      
      <main>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <div>Hi,</div>
            <div>I&#39;m <span className={styles.highlight}>Akshita Saini</span>.</div>
            <div>I&#39;m a <span className={styles.darkHighlight}>developer</span>!</div>
          </div>
          <div>
            <Image src="/images/profile.jpg" alt="Akshita's Profile Pic" priority="true" width={500} height={500}/>
          </div>
        </header>

        <section className={styles.sectionOne}>
          <h2 className={styles.sectionOneHeading}>Check out my projects here <span><Image className={styles.pointer} src="/icons/pointer.svg" alt="pointer down" width={64} height={64}/></span></h2>

          <div className={styles.card}>
            <Image className={styles.cardImage} height={455} width={935} placeholder="blur" quality={100} alt="project preview" src={clearUIPreview}/>
            <div className={styles.cardBody} >
              <h4 className={styles.cardHeading}>Clear Ui 
              <a href="https://clear-ui.netlify.app/"><Image  alt="arrow top right" src="/icons/arrow-top-right.svg" height={72} width={72} /></a>
              </h4>
              <div className={styles.cardText}>A CSS component library with components that can be composed to build any design, directly in your markup. It&#39;s easy to customize and use.</div>
              <div className={styles.btnGroup}>
                <a href="https://github.com/Akshita-Saini/Clear-UI" className={styles.btnLight}>View Code</a>  
                <a href="https://clear-ui.netlify.app/" className={styles.btn}>View Project</a>
              </div>
            </div>
          </div>

          <div className={styles.cardReverse}>
            <Image className={styles.cardImage} width={935} height={455} placeholder="blur" quality={100} alt="project preview" src={noteshubPreview}/>
            <div className={styles.cardBody} >
              <h4 className={styles.cardHeading}>Noteshub
                <a href="https://noteshub.netlify.app/"><Image alt="arrow top right" src="/icons/arrow-top-right.svg" height={72} width={72} /></a>
              </h4>
              <div className={styles.cardText}>A front-end only note-taking app made using React. Supports create, edit and delete note. The user may also tag notes.</div>
              <div className={styles.btnGroup}>
                <a href="https://github.com/Akshita-Saini/noteshub" className={styles.btnLight}>View Code</a>  
                <a href="https://noteshub.netlify.app/" className={styles.btn}>View Project</a>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image className={styles.cardImage} width={935} height={455} placeholder="blur" quality={100} alt="project preview" src={ezHabitPreview} />
            <div className={styles.cardBody} >
              <h4 className={styles.cardHeading}>ezHabit
              <a href="https://ezhabit.netlify.app/"><Image alt="arrow top right" src="/icons/arrow-top-right.svg" height={72} width={72} /></a>
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
          <h2 className={styles.sectionTwoHeading}>Connect with me</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/code_with_akshita/"><Image alt="instagram" src="/images/instagram.png" height={64} width={64} /></a>
            <a href="https://twitter.com/AkshitaSaini15"><Image alt="twitter" src="/images/twitter.png" height={64} width={64} /></a>
            <a href="https://www.linkedin.com/in/akshita-saini15/"><Image alt="linkedin" src="/images/linkedin.png" height={64} width={64} /></a>
            <a href="https://github.com/Akshita-Saini/"><Image alt="github" src="/images/github.png" height={64} width={64} /></a>
          </div>
        </section>

        <footer className={styles.footer}>
          Made with love <Image className='heart' src="/icons/heart.svg" alt="heart" height={18} width={18}/> by Akshita 
        </footer>
      </main>
    </div>
  )
}
