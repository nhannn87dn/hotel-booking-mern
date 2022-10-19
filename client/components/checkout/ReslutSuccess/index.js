import React from 'react'
import styles from "./ResultSuccess.module.css"
import moment from "moment";
import Link from 'next/link';

const ReslutSuccess = ({booking=null}) => {
    booking.checkInDate = moment(booking.checkInDate).format("YYYY-MM-DD")
    booking.checkOutDate = moment(booking.checkOutDate).format("YYYY-MM-DD")
  return (
    <div className={styles.layout_wrapper}>
        <div className="success_box">
            Booking Successfully !
        </div>
        <ul>
        <li>Booking Code: <strong>{booking.code}</strong></li>
        <li>CheckIn Date: {booking.checkInDate}</li>
        <li>CheckOut Date: {booking.checkOutDate}</li>
        <li>Total Amout: ${booking.totalAmount}</li>
        </ul>
        <div className="notice">
        If you have any questions, please contact us for a timely response
        </div>
        <div className="stack" id={styles.actions}>
            <Link href="/">
                <a className='button'>Home Page</a>
            </Link>
            <Link href="/me">
                <a className='button'>My Booking</a>
            </Link>
        </div>
    </div>
  )
}

export default ReslutSuccess