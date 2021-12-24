import styles from '../../styles/Dappstore.module.css';
import Link from 'next/link'


export default function ProjectCard(props) {

    function setID(props) {
        localStorage.clear()
        localStorage.setItem("projectID", JSON.stringify(props));
        console.log(localStorage.getItem("projectID"))
    }

    return (

        <Link href="/projectpage" className={styles['projectcard']}>
            <div className={styles['card-body']}>
                <img src={props.dapp.Logo} alt='ProxyIQ' className={styles['project-logo']}/>
                <div className={styles['project-title']}>{props.dapp.Project}</div>
                <div className={styles['meta-title']}>Category</div>
                <div className={styles['project-detail']}>{props.dapp.Category}</div>
                <div className={styles['meta-title']}>Focus</div>
                <div className={styles['project-detail']}>{props.dapp.Focus}</div>
            </div>
        </Link>
    )
};