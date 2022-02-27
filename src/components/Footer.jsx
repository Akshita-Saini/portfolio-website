import Image from "next/image";
import styles from "../../styles/Footer.module.css";

const Footer =  () => (
    <footer className={styles.footer}>
        Made with love <Image className='heart' src="/icons/heart.svg" alt="heart" height={18} width={18}/> by Akshita 
    </footer>
);

export {Footer};