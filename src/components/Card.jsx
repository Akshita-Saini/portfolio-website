import Image from 'next/image'
import styles from "../../styles/Card.module.css";

const Card = ({imageURL, projectName, projectURL, projectDesc, githubURL, cardClass}) => (
    <div className={cardClass}>  
        <div className={styles.cardImageContainer}>
            <Image className={styles.cardImage} height={300} width={500} placeholder="blur" quality={100} alt="project preview" src={imageURL}/>
            <div className={styles.cardImageDesign}>
            </div>
        </div>
        <div className={styles.cardBody} >
            <div className={styles.cardHeading}>{projectName}</div>
            <div className={styles.cardText}>
                {projectDesc}
            </div>
            <div className={styles.btnGroup}>
                <a href={githubURL}><Image src="/icons/github.svg" className={styles.githubBtnIcon} height={36} width={36} alt="Github Icon" /></a>  
                <a href={projectURL} className={styles.btn}>View Project</a>
            </div>
        </div>
   </div>
);

export {Card};