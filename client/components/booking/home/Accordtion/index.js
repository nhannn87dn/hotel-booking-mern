import React from 'react'
import styles from "./styles.module.css";

function MultiAccordtion ({id,title, content, defState=false}){
    const [currentTab, setCurrentTab] = React.useState(defState); 
    const handleTabClick = () => {
        setCurrentTab(!currentTab);
    }

    return(
        <div className={currentTab ? styles.tabs__item + (" ") + styles.current_tab : styles.tabs__item}>
            <div  className={styles.tabs__title} >
                    <h5 data-id={id} onClick={handleTabClick} className={styles.tabs_name}>{title}</h5>
                    <span data-id={id} onClick={handleTabClick} className={styles.tabs_toogle}></span>
            </div>
            <div className={styles.tabs__content}>
                <p>{content}</p>
            </div>
        </div>  
    )
}


function SingleAccordtion ({id,title, content, active=1, handle=null}){
    return(
        <div className={active ? styles.tabs__item + (" ") + styles.current_tab : styles.tabs__item}>
            <div className={styles.tabs__title}>
                <h5 data-id={id} onClick={handle} className={styles.tabs_name}>{title}</h5>
                <span data-id={id} onClick={handle}  className={styles.tabs_toogle}></span>
            </div>
            <div className={styles.tabs__content}>
                <p>{content}</p>
            </div>
        </div>  
    )
}

function Accordtions({tabs=[], type='multi'}) {
    
   
    let def = type ==='multi' ? false: 1;

    const [currentSingle, setCurrentSingle] = React.useState(def); 
    const handleSingle = e => {
        let dataID = e.target.getAttribute('data-id');
        let index = Number(dataID);
        setCurrentSingle(v => v = index);
        console.log(e);

    }
   
  return (
    <div className={styles.tabs__wrapper}>
            {tabs.map((tab, i) => {
                if(type === 'single'){
                    return <SingleAccordtion key={tab.id} active={(currentSingle === tab.id)} handle={handleSingle} id={tab.id} title={tab.tabTitle} content={ tab.content} />
                }else{
                    return <MultiAccordtion key={tab.id} defState={def} id={tab.id} title={tab.tabTitle} content={ tab.content} />
                }
                
            })}
    </div>
  )
}


export default Accordtions