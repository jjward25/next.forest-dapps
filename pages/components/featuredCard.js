import styles from '../../styles/Dappstore.module.css';

export default function FeaturedCards() {
return (
    <div className={styles['projectcard']}>
        <div className={styles['project-category']}>[CATEGORY]</div>
        <div className={styles['card-body']}>
            <div className={styles['project-logo']}>
                <img src='https://lp.astfinancial.com/rs/573-SHZ-365/images/ProxyIQ-LandingPage-logo.svg' alt='ProxyIQ'/>
            </div>
            <div className={styles['category-title']}>Category</div>
            <div className={styles['project-category']}>Custom Solutions</div>
            <div className={styles['category-title']}>Focus</div>
            <div className={styles['project-category']}>Proxy Voting</div>
        </div>
    </div>
)};