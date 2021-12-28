import styles from '../styles/Dappstore.module.css';
import Link from 'next/link'
import Image from 'next/image';

export default function ProjectCard(props) {

    function setID(props) {
        if (typeof window !== 'undefined') {
            localStorage.clear()
            localStorage.setItem("projectID", JSON.stringify(props));
            console.log(localStorage.getItem("projectID"))
        }
    }

    return (

        <Link href="/projectpage" passHref className={styles['projectcard']}>
            <div className={styles['card-body']}>
                <Image src={props.dapp.Logo} alt='Logo' className={styles['project-logo']} width='45px' height='90px'/>
                <div className={styles['project-title']}>{props.dapp.Project}</div>
                <div className={styles['meta-title']}>Category</div>
                <div className={styles['project-detail']}>{props.dapp.Category}</div>
                <div className={styles['meta-title']}>Focus</div>
                <div className={styles['project-detail']}>{props.dapp.Focus}</div>
            </div>
        </Link>
    )
};