import React from 'react';
import Head from 'next/head';
import {Layout} from '../../components/dashboard/layout';
import styles from  '../../styles/dashboard/Dashboard.module.css';
import { IoCartOutline, IoArrowDownCircle, IoArrowUpCircle } from "react-icons/io5";


function Index() {
  return (
    <Layout pageId='dashboard'>
      <Head>
          <title>Dashboard | Hotel Booking</title>
          <meta content="noindex,noffolow" name="robots"/>
          <link rel="canonical" href="/dashboard" />
          
        </Head>
        <div className={styles.overview_boxes}>
        
        <div className={styles.box}>
          <div className={styles.right_side}>
            <div className={styles.box_topic}>Total Order</div>
            <div className={styles.number}>40,876</div>
            <div className={styles.indicator}>
              <i><IoArrowUpCircle /></i>
              <span className={styles.text}>Up from yesterday</span>
            </div>
          </div>
          <i className={styles.cart}><IoCartOutline /></i>
        </div>
        <div className={styles.box}>
          <div className={styles.right_side}>
            <div className={styles.box_topic}>Total Sales</div>
            <div className={styles.number}>38,876</div>
            <div className={styles.indicator}>
            <i><IoArrowUpCircle /></i>
              <span className={styles.text}>Up from yesterday</span>
            </div>
          </div>
          <i className={styles.cart + " " + styles.two}><IoCartOutline /></i>
        </div>
        <div className={styles.box}>
          <div className={styles.right_side}>
            <div className={styles.box_topic}>Total Profit</div>
            <div className={styles.number}>$12,876</div>
            <div className={styles.indicator}>
            <i><IoArrowUpCircle /></i>
              <span className={styles.text}>Up from yesterday</span>
            </div>
          </div>
          <i className={styles.cart + " " + styles.three}><IoCartOutline /></i>
        </div>
        <div className={styles.box}>
          <div className={styles.right_side}>
            <div className={styles.box_topic}>Total Return</div>
            <div className={styles.number}>11,086</div>
            <div className={styles.indicator}>
            <i className={styles.down}><IoArrowDownCircle /></i>
              <span className={styles.text}>Down From Today</span>
            </div>
          </div>
          <i className={styles.cart + " " + styles.four}><IoCartOutline /></i>
        </div>
      </div>
      <div>
      <div className="notice_box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusantium dignissimos</div>
      <div className="success_box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusantium dignissimos</div>
      <div className="error_box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusantium dignissimos</div>
      <div className="info_box">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate accusantium dignissimos</div>
      <div className='flex_columns'>
          <div className='flex_column'>
          
            <form action="" style={{'max-width': '50%'}}>
                <div className="input_form">
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' />
                    <p className='input_note'>Max length 255 character</p>
                </div>
                <div className="input_form">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' />
                    <p className='input_note error'>Password is required</p>
                </div>
                <div className="input_form">
                   <label htmlFor="role">Role</label>
                   <select name="role">
                    <option value="">Select box</option>
                  </select>
                </div>
               
                <div className='stack'>
                  <button>Primary</button>
                  <button className='btn_dark'>Dark btn_dark</button>
                  <button className='btn_default'>Cancle btn_default</button>
                </div>
            </form>
                
          </div>
          <div className='flex_column'>
              <div className="box box_border">
                <div className="box_title">Box Title</div>
                <div className="bd">Body</div>
              </div>
              <label className='input_checkbox'>
                <input type="checkbox" value="1" /> Check if you agree conditions
              </label>
              <div className="input_radio stack">
                  <label>
                    <input type="radio" name='display' value="1" /> Display
                  </label>
                  <label>
                    <input type="radio" name='display' value="0" /> No
                  </label>
              </div>
          </div>
      </div>
      
      </div>
      
        <div className='flex_columns'>
            <div className='flex_column'>
            Flex 1
            </div>
            <div className='flex_column'>
            Flex 1
            </div>
            <div className='flex_column'>
            Flex 1
            </div>
            <div className='flex_column'>
            Flex 1
            </div>
        </div>
      
      <table className="zebra"> 
<thead> 
<tr> 
    <th>Last Name</th> 
    <th>First Name</th> 
    <th>Email</th> 
    <th>Due</th> 
    <th>Web Site</th> 
</tr> 
</thead> 
<tbody> 
<tr> 
    <td>Smith</td> 
    <td>John</td> 
    <td>jsmith@gmail.com</td> 
    <td>$50.00</td> 
    <td>http://www.jsmith.com</td> 
</tr> 
<tr> 
    <td>Bach</td> 
    <td>Frank</td> 
    <td>fbach@yahoo.com</td> 
    <td>$50.00</td> 
    <td>http://www.frank.com</td> 
</tr> 
<tr> 
    <td>Doe</td> 
    <td>Jason</td> 
    <td>jdoe@hotmail.com</td> 
    <td>$100.00</td> 
    <td>http://www.jdoe.com</td> 
</tr> 
<tr> 
    <td>Conway</td> 
    <td>Tim</td> 
    <td>tconway@earthlink.net</td> 
    <td>$50.00</td> 
    <td>http://www.timconway.com</td> 
</tr> 
</tbody> 
</table> 
  <div className="pagination">
      <a href="#" >&laquo;</a>
      <a href="#" className="active">1</a>
      <a href="#" >2</a>
      <a href="#" >3</a>
      <a href="#" >4</a>
      <a href="#" >5</a>
      <a href="#" >6</a>
      <a href="#" >7</a>
      <a href="#" >8</a>
      <a href="#" >9</a>
      <a href="#" >&raquo;</a>
    </div>
    </Layout>
  )
}

export default Index