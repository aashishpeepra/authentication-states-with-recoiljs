import styles from "./boxWrapper.module.css";

export default function BoxWrapper({children,source}){
    return (
        <div className={styles.box}>
             <div className={styles.box_bottom}>{source}</div>
            {children}
           
        </div>
    )
}