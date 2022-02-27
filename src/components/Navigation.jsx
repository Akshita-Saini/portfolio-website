import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => (
    <div className={styles.nav}>
        <div className={styles.navBrand}>
            <Image src="/icons/brand-icon.svg" alt="Brand Logo" width={60} height={60} />
            <span className={styles.brandname}>
                Akshita Saini
            </span>
        </div>
        {/* <ul className={styles.navList}>
            <li className={styles.navListItem}>
                <Link href="/about">
                    about
                </Link>
            </li>
            <li className={styles.navListItem}>
                <Link href="/blogs">
                    blogs
                </Link>
            </li>
            <li className={styles.navListItem}>
                <Link href="/contact">
                    contact
                </Link>
            </li>
        </ul> */}
    </div>
);


export { Navigation };