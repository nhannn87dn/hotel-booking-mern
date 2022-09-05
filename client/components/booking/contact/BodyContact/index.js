import React from 'react';
import FormContact from '../FormContact';
import LocationContact from '../LocationContact';
import styles from './BodyContact.module.css';

function BodyContact() {
  return (
    <section className={styles.section_wrapper}>
        <div className="flex_columns column_gap_3">
            <div className="flex_column">
                <FormContact />
            </div>
            <div className="flex_column">
                <LocationContact />
            </div>
        </div>
    </section>
  )
}

export default BodyContact