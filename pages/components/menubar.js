import styles from '../../styles/Menubar.module.css';
import Link from 'next/link'

export default function Menubar() {
return (

        <div className={styles['menubar']}>

            <div className={styles['menubar-overlay']}>
                <img src="forest-header.png" className={styles['menubar-img-bg']} alt=''/>
            </div>

            <Link href="/" className={styles['logo-wrap']}>
                <img src="logo-nobg.png" alt='the-forest' title={`the-forest`} className={styles['logo']}/>
            </Link>

            <div className={styles['menu-button-wrap']}>
                <Link href="/dappstore" className={styles['menu-button']}><div className={styles['menu-button']}> Apps</div></Link>
            </div>
        </div>
)};




