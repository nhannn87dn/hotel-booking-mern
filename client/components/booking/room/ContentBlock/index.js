import React from 'react'
import styles from "./ContentBlock.module.css"

const ContentBlock = ({content}) => {
  return (
    <div className={styles.content}>
        <h3 className={styles.heading}>Description</h3>
        {content}
    </div>
  )
}

export default ContentBlock