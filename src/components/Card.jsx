import Image from 'next/image'
import styles from "../../styles/Card.module.css";

const Card = ({imageURL, projectName, projectURL, projectDesc, githubURL, className}) => (
    <div className={className}>  
        <div className={styles.cardImageContainer}>
            <Image className={styles.cardImage} height={275} width={450} placeholder="blur" quality={100} alt="project preview" src={imageURL}/>
        </div>
        <div className={styles.cardBody} >
            <div className={styles.cardHeading}>{projectName}</div>
            <div className={styles.cardText}>
                {projectDesc}
            </div>
            <div className={styles.btnGroup}>
                <a href={githubURL} className={styles.btnLight}>View Code</a>  
                <a href={projectURL} className={styles.btn}>View Project</a>
            </div>
        </div>
   </div>
);

export {Card};