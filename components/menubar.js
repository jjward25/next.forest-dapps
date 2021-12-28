import styles from '../styles/Menubar.module.css';
import Link from 'next/link'
import Image from 'next/image';

export default function Menubar() {
return (

        <div className={styles['menubar']}>

            <div className={styles['menubar-overlay']}>
            </div>

            <Link href="/" className={styles['logo-wrap']} passHref>
                <Image src="/logo-nobg.png" alt='the-forest' title={`the-forest`} className={styles['logo']} width="95px" height="20px"/>
            </Link>

            <div className={styles['menu-button-wrap']}>
                <Link href="/dappstore" passHref className={styles['menu-button']}><div className={styles['menu-button']}> Apps</div></Link>
            </div>
        </div>
)};




