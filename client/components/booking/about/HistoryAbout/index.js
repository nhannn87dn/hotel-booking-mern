import React from 'react';
import styles from './HistoryAbout.module.css';

function HistoryAbout() {
  return (
    <section className={styles.section_wrapper}>
      <div className="flex_columns column_gap_2">
        <div className="flex_column">
          <p className="flex_heading__content">A RICH HERITAGE IN THE HEART OF Sochi</p>
          <h2 className="flex_heading">History of the Sochi</h2>
           <p>Sochi’s hitory begins in 1809 when a rich man named John Douglas bought a huge piece of land to fulfilled his father’s will…</p>
        </div>
        <div className="flex_column">
          <div className="flex_desc">
            <p>Sochi has a rich history with many interesting facts and occasions that had an impact on its establishment. But through the whole period of its formation Sochi was always liked by visitors.</p>
            <p>Sochi’s hitory begins in 1809 when a rich man named John Douglas bought a huge piece of land to fulfilled his father’s will – to build the place where people can relax and forget about their problems. From 1852 the active works on this area took place and till 1863 the building was finished. Name of the hotel originated from John’s mother’s name.</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default HistoryAbout