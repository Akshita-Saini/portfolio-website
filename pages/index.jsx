import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Card } from "../src/components/Card";
import { Navigation } from "../src/components/Navigation";
import { Footer } from "../src/components/Footer";
import clearUIPreview from "../public/images/clearUI.png";
import noteshubPreview from "../public/images/noteshub.png";
import ezHabitPreview from "../public/images/ezHabit.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Akshita Saini</title>
        <meta name="description" content="Akshita Saini's Portfolio Home Page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Navigation />
      
      <main>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <div>Hi,</div>
            <div>{`I'm`}<span className={styles.highlight}>Akshita Saini</span>.</div>
            <div>{`I'm`} a <span className={styles.darkHighlight}>developer</span>!</div>
          </div>
          <div>
            <Image src="/images/profile.jpg" alt="Akshita's Profile Pic" priority="true" width={500} height={500}/>
          </div>
        </header>

        <section className={styles.sectionOne}>
          <div className={styles.sectionOneHeading}>
            <Image  src="/icons/projects.svg" alt="projects" width={64} height={64}/><span>projects.</span>
          </div>
          <Card 
            imageURL={clearUIPreview} 
            projectName="Clear UI"  
            projectURL="https://clear-ui.netlify.app/"
            githubURL="https://github.com/Akshita-Saini/Clear-UI"
            projectDesc={`A CSS component library with components that can be composed to build any design, directly in your markup. It's easy to customize and use.`}
            className={styles.card}
          />
          <Card 
            imageURL={noteshubPreview} 
            projectName="Noteshub"  
            projectURL="https://noteshub.netlify.app/"
            githubURL="https://github.com/Akshita-Saini/noteshub"
            projectDesc={`A front-end only note-taking app made using React. Supports create, edit and delete note. The user may also tag notes.`}
            className={styles.cardReverse}
          />
          <Card 
            imageURL={ezHabitPreview} 
            projectName="ezHabit"  
            projectURL="https://ezhabit.netlify.app/"
            githubURL="https://github.com/Akshita-Saini/ezhabit"
            projectDesc={`A gamified Habit tracking app created using ReactJS, TypeScript, Node.js, Express and MongoDB. Work on this is ongoing!`}
            className={styles.card}
          />
        </section>

        <section className={styles.sectionTwo}>
          <h2 className={styles.sectionTwoHeading}>
            <Image  src="/icons/connect.svg" alt="connect" width={64} height={64}/><span>  {`let's connect.`}</span>
          </h2>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/code_with_akshita/"><Image alt="instagram" src="/images/instagram.png" height={64} width={64} /> Instagram </a>
            <a href="https://twitter.com/AkshitaSaini15"><Image alt="twitter" src="/images/twitter.png" height={64} width={64} /> Twitter </a>
            <a href="https://www.linkedin.com/in/akshita-saini15/"><Image alt="linkedin" src="/images/linkedin.png" height={64} width={64} /> LinkedIn</a>
            <a href="https://github.com/Akshita-Saini/"><Image alt="github" src="/images/github.png" height={64} width={64} /> Github </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
