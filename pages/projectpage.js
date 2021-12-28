import styles from '../styles/Projectpage.module.css';
import MenuBar from '../components/menubar';
import dapps from '../public/dapps.json';
import Image from 'next/image';


function DappPage() {

let dappid = []

if (typeof window !== 'undefined') {
    dappid = JSON.parse(localStorage.getItem("projectID"))
} else {dappid = dapps[Math.floor(Math.random() * dapps.length)].ProjectID}


let dapp = dapps.filter(dapp => dapp.ProjectID===dappid)[0]

if (dapp === 'undefined') {dapp = dapps.filter(dapp => dapp.ProjectID===1)}

console.log(dapp)

    return (
        <div className={styles['dapp-project-wrap']}>
            <MenuBar/>

            <div className={styles['project-wrap']}>

                <div className={styles['project-top']} style={{borderBottom:'1px solid forestgreen',display:'flex'}}>
                    <div className={styles['project-top-left']} style={{width: '500px', display:'flex',flexDirection:'column', borderRight:'1px solid forestgreen', padding:'0 1.5% 1% 1.5%'}}>
                        <div className={styles['project-header']}>
                            <Image src={dapp.Logo} alt='logo' width='220px' height='140px' style={{maxWidth:'220px', margin:'0 auto', width:'30%'}}/>
                            <p style={{fontSize:"40px",lineHeight:"70px", fontWeight:"bold",overflow:"wrap",color:"white", width:'100%', textAlign:'left', paddingLeft:'2.5%', margin:"0", webkitTextStrokeWidth:"2.5px",WebkitTextStrokeColor:"black", letterSpacing:"4px", wordWrap:"break-word"}}>{dapp.Project}</p>
                        </div>
                        <div style={{display:'flex',borderBottom:'1px solid forestgreen',borderTop:'1px solid forestgreen', padding:'2.5% 0', justifyContent:'space-around'}}>
                           <Image src="/Github.png" alt='Github' width='30px' height='30px'/>
                           <Image src="/Medium.png" alt='Medium' width='30px' height='30px'/>
                           <Image src="/Twitter.png" alt='twitter' width='30px' height='30px'/>
                            <Image src="/Telegram.png" alt='telegram' width='30px' height='30px' />
                            <Image src="/Discord.png" alt='discord' width='30px' height='30px' />
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between', margin:'2.5% 0 1% 0'}}>
                            <div style={{margin:'auto', marginLeft:'0'}}>Primary Audience:</div>
                            <div style={{fontWeight:'bold', width:'40%',padding:'1% 0%',border:'1px solid forestgreen', margin:'0',backgroundColor:'forestgreen', color:'white'}}>Businesses</div>
                        </div>
                        <div style={{width:'100%',fontWeight:'bold', padding:'1% 0',border:'1px solid forestgreen', margin:'1% auto',backgroundColor:'forestgreen', color:'white'}}>+ ACTIONS</div>
                    </div>

                    <div className={styles['project-top-right']} style={{width: '750px',padding:'0 1.5%'}}>
                        <p style={{fontWeight:'bold',textAlign:'left'}}>{dapp.Project}</p>
                        <p style={{textAlign:'left'}}>{`Imagine an audio service like spotify where the music was uploaded and always attributed to the author.  So creators get more than 12% of their industry's profits, the current estimate for musical artists.`}</p>
                    </div>
                </div>

                <div style={{display:'flex',borderBottom:'1px solid forestgreen', height:'200px'}}>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'space-around', textAlign:'left',padding:'0 2.5%',borderRight:'1px solid forestgreen', maxWidth:'250px'}}>
                        <p style={{margin:'0'}}><strong>Market Cap:</strong> $8,954,022,767</p>
                        <p style={{margin:'0'}}><strong>Cap Rank:</strong> 20 ^</p>
                        <p style={{margin:'0'}}><strong>Current Price:</strong> $8.95</p>
                        <p style={{margin:'0'}}><strong>Trading Volume:</strong> 22,767</p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'space-around', textAlign:'left',padding:'0 2.5% 2.5% 2.5%',borderRight:'1px solid forestgreen', maxWidth:'250px'}}>
                        <p style={{margin:'0'}}><strong>APY: 45%</strong> AVG: 42.4%</p>
                        <p style={{margin:'0'}}><strong>MIN. TO STAKE: 10 TOKENS</strong></p>
                        <p style={{margin:'0'}}><strong>TOTAL STAKED: $94M</strong></p>
                        <div style={{fontWeight:'bold', width:'100%',padding:'1% 0%',border:'1px solid forestgreen', margin:'0',backgroundColor:'forestgreen', color:'white', textAlign:'center'}}>STAKE</div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'space-around', textAlign:'left',padding:'0 2.5% 2.5% 2.5%',borderRight:'1px solid forestgreen', maxWidth:'375px'}}>
                        <p style={{margin:'0'}}><strong>USAGE TRANSACTIONS (24H): 24,332</strong></p>
                        <p style={{margin:'0'}}><strong>ACTIVE USERS (24H): 1,422</strong></p>
                        <p style={{margin:'0'}}><strong>ACTIVE MONTHLY USERS: 8,492</strong></p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column', justifyContent:'space-around', textAlign:'left',padding:'0 1.5% 2.5% 1.5%', margin:'0 auto', width:'25%', maxWidth:'375px'}}>
                        <p style={{margin:'0'}}><strong>FOUNDERS:</strong> {dapp.Founders}</p>
                        <p style={{margin:'0'}}><strong>INVESTORS:</strong> {dapp.Investors}</p>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                            <strong style={{marginRight:'2.5%'}}>TAGS:</strong>
                            <div style={{fontWeight:'bold', width:'auto',padding:'1% 2.5%',border:'1px solid forestgreen', margin:'0 2.5% 2.5% 0',backgroundColor:'forestgreen', color:'white', textAlign:'center'}}>REMITTANCES</div>
                            <div style={{fontWeight:'bold', width:'auto',padding:'1% 2.5%',border:'1px solid forestgreen', margin:'0 2.5% 2.5% 0',backgroundColor:'forestgreen', color:'white', textAlign:'center'}}>PAYMENTS</div>
                        </div>
                    </div>
                </div>

                <div className={styles['project-bottom']} style={{display:'flex', borderBottom:'1px solid forestgreen'}}>
                    <div className={styles['screen-shots']} style={{width:'55%', borderRight:'1px solid forestgreen'}}>
                        <div style={{margin:'2.5% auto' , maxWidth:'40vw', minWidth:'80%'}}>
                          <Image src="/ScreenShot.png" alt='app-screenshots' width={'315px'} height={'350spx'} layout='responsive'/>
                        </div>
                    </div>
                    <div className={styles['project-reviews']} style={{width:'45%', display:'flex'}}>
                        <div style={{padding:'1.5% 0', width:'100%'}}>
                            <Image src="/Reviews.png" alt="reviews" width='625' height='700px' layout='responsive'/>
                        </div>
                    </div>
                </div>

                <div className={styles['project-analysis']} style={{textAlign:'left', padding:'1.5%'}}>
                    <strong style={{textAlign:'left'}}>APP ANALYSIS</strong>
                    <div style={{marginTop:'1.5%'}}>CHART</div>
                </div>

            </div>

        </div>
    )}

export default DappPage;