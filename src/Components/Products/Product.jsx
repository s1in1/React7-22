import React from 'react'
import styles from '../Products/Product.module.css'

export const Product = ({props}) => {

  return (
    <>
    
    <div className={styles.item}>
        <h1 className={styles.item_title}>{props.name}</h1>
        <p className={styles.item_description}>{props.description}</p>
        <p className={styles.item_description2}>{props.description2}</p>
        <p className={styles.item_no}>{props.id}</p>
    </div>
        
    </>
  )
}
