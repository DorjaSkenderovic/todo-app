import styles from './Card.module.scss';

import React from 'react'

const Card = (props) => {
  return (
    <div className={styles.card}>{props.children}</div>
  )
}

export default Card