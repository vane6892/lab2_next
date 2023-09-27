import Link from 'next/link';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.columnas} >
                <ul>
                    <li>
                        <Link href="/">Sitemap</Link>
                    </li>
                    <li>
                        <Link href="">Home</Link>
                    </li>
                    <li>
                        <Link href="">Post</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.columnas}>
                <ul>
                    <li>
                        <Link href="/">Conectate con nosotros</Link>
                    </li>
                    <li>
                        <Link href="">Facebook</Link>
                    </li>
                    <li>
                        <Link href="">Twitter</Link>
                    </li>
                    <li>
                        <Link href="/about">Tik Tok</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.logonext}>
                <img src="../images/nextjs-logo.png" alt="alt" height={10}/>
            </div>
            <div className={styles.logovercel}>
                <img src="../images/vercel.jpg" alt="alt" />
            </div>
            <div className={styles.seminario}>
                <img src="../images/seminario.jpeg" alt="alt" />
            </div>
            
            
        </footer>
        
    );
};
export default Footer;