import React from 'react';
import styles from './FormContact.module.css';

function FormContact() {
  const handleonClick = (e) => {
    e.preventDefault();
    console.log('onClick');
  }
  return (
    <div className={styles.form_wrapper}>
      <h2 className="flex_heading">Send a Message</h2>
      <p> Providing you have any questions don’t hesitate to contact our team. We are always here to answer your questions.</p>
      <form method='POST'>
        <div className={styles.form_field}>
          <label htmlFor="name">Full Name</label>
          <input placeholder='Please enter your name' type='text' id='name' name='name' className={styles.input_form}  />  
        </div>
        <div className={styles.form_field}>
          <label htmlFor="email">Email</label>
          <input placeholder='Please enter your email' type='email' id='email' name='email' className={styles.input_form}  />  
        </div>
        <div className={styles.form_field}>
          <label htmlFor="massage">Message</label>
          <textarea placeholder='Contents' name="massage" id="massage" cols="30" rows="5"></textarea>
        </div>
        <div className={styles.form_action}>
          <button onClick={handleonClick} className={styles.custom_button + " button"} type='submit'>Submit</button>
        </div>
     </form>
    </div>
  )
}

export default FormContact