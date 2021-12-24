import styles from '../styles/Dappstore.module.css';
import MenuBar from './components/menubar';
import ProjectCard from './components/projectcard';
import dapps from '../public/dapps.json';
import Link from 'next/link'
import Image from 'next/image';

function DappCategories() {

    function setID(props) {
        if (typeof window !== 'undefined') {
            localStorage.clear()
            console.log("Clear Console: ", localStorage.getItem("projectID"))
            localStorage.setItem("projectID", JSON.stringify(props));
            console.log("LocalStorage: ",localStorage.getItem("projectID"))
        }
    }

    return (
        <div className={styles['dapp-categories-wrap']}>
            <MenuBar/>
            <div className={styles['dapp-store-wrap']}>
                
                <div className={styles['disclaimer-full']}>DISCLAIMER: SOME OF THESE SERVICES ARE NOT LIVE YET, AND ANY MARKET OPINIONS POSTED ON THIS SITE DO NOT CONSTITUTE ADVICE.</div>
                
                <div className={styles['carousel-header']}>Featured Apps</div>
                <div className={styles['carousel-wrap']}>    
                    {dapps.filter(app => app.Featured==='TRUE').map(dapp => {
                        return (
                            <div className={styles['projectcard']} key={dapp.ProjectID} onClick={()=>setID(dapp.ProjectID)}> <Link href="/projectpage" passHref>
                                <div className={styles['card-body']}>
                                    <img src={dapp.Logo} alt='ProxyIQ' className={styles['project-logo']} style={{margin:"2% 0",width:"245px", overflow:"hidden"}}/>
                                    <div className={styles['project-title']}>{dapp.Project}</div>
                                    <div className={styles['meta-title']}>Category</div>
                                    <div className={styles['project-detail']}>{dapp.Category}</div>
                                    <div className={styles['meta-title']}>Focus</div>
                                    <div className={styles['project-detail']}>{dapp.Focus}</div>
                                </div>
                            </Link></div>
                        )        
                    })}
                </div>

                <div className={styles['carousel-header']}>{`Cloud Computing & Storage`}</div>                
                <div className={styles['carousel-wrap']}>
                    {dapps.filter(app => app.Category==="Cloud Computing & Storage").map(dapp=>{
                        return (<div className={styles['projectcard']} key={dapp.ProjectID} onClick={()=>setID(dapp.ProjectID)}> <ProjectCard dapp={dapp}/></div>)
                    })}        
                </div>
                
                <div className={styles['carousel-header']}>{`Private Chains / Custom Solutions`}</div>                
                <div className={styles['carousel-wrap']}>
                    {dapps.filter(app => app.Category==="Private Chains / Custom Solutions").map(dapp=>{
                        return (<div className={styles['projectcard']} key={dapp.ProjectID} onClick={()=>setID(dapp.ProjectID)}> <ProjectCard dapp={dapp}/></div>)
                    })}        
                </div>

                <div className={styles['carousel-header']}>{`Content Management / Media`}</div>                
                <div className={styles['carousel-wrap']}>
                    {dapps.filter(app => app.Category==="Content Management / Media").map(dapp=>{
                        return (<div className={styles['projectcard']} key={dapp.ProjectID} onClick={()=>setID(dapp.ProjectID)}> <ProjectCard dapp={dapp}/></div>)
                    })}            
                </div>

                <div className={styles['carousel-header']}>{`Banking, Custody & Investments`}</div>                
                <div className={styles['carousel-wrap']}>
                    {dapps.filter(app => app.Category==="Banking, Custody & Investments").map(dapp=>{
                        return (<div className={styles['projectcard']} key={dapp.ProjectID} onClick={()=>setID(dapp.ProjectID)}> <ProjectCard dapp={dapp}/></div>)
                    })}
                </div>

            </div>
            
        </div>
)};

export default DappCategories;