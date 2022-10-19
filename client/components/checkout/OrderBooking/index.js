import React, {useMemo} from 'react'
import styles from "./OrderBooking.module.css";
import {daysBetween} from "../../../utils/daysBetween";

const OrderBooking = ({room=null, selected=null}) => {
  
  const calAmount = useMemo(() => {
    const numOfRooms = selected.numOfRooms;
    const daysOfStay = daysBetween(selected.checkInDate,selected.checkOutDate);
    let discount = room.pricePromote > 0 ? room.pricePerNight - room.pricePromote : 0;
    let subAmount = (room.pricePerNight - discount) * parseInt(daysOfStay) * numOfRooms;
    let taxFee = subAmount * 0.08; //8%
    const serviceCharge = 0;
    
    const totalAmount = subAmount + serviceCharge + taxFee;
    return {
      daysOfStay,
      numOfRooms,
      discount,
      subAmount,
      serviceCharge,
      taxFee,
      totalAmount
    }
}, [room,selected]);

  return (
    <> 
    <div className={styles.orderBookingWapper}>
        <h3>{room.name}</h3>
          <strong>${room.pricePerNight}/night</strong>
          <ul>
            <li>Max Capacity: <strong>{room.guestCapacity}, {room.numOfAdults} Adults {room.numOfChildren > 0 ? `and ${room.numOfChildren} Children`: null }</strong></li>
            <li>Area: <strong>{room.area}</strong></li>
            <li>Beds: <strong>{room.numOfBeds}, {room.typeOfBeds}</strong></li>
          </ul>
          <div
                    className="info_box"
                    style={{ lineHeight: "1.75", margin: "1em 0" }}
                  >
                    <ul>
                      <li>
                        Persons: <strong>{selected.adults}</strong> Adults{" "}
                        {selected.children > 0
                          ? `and <strong>${selected.children}</strong> children`
                          : null}
                      </li>
                      <li>
                        From Date: <strong>{selected.checkInDate}</strong>
                      </li>
                      <li>
                        To Date: <strong>{selected.checkOutDate}</strong>
                      </li>
                      <li>
                        Number of rooms: <strong>{selected.numOfRooms}</strong>
                      </li>
                    </ul>
                  </div>
          <ul className={styles.total}>
            <li><span className={styles.label}>Amount:</span> {calAmount.daysOfStay} x ${room.pricePerNight} x {calAmount.numOfRooms} = <strong>${calAmount.subAmount}</strong></li>
            <li><span className={styles.label}>Discount:</span> <strong>${calAmount.discount}</strong></li>
            <li><span className={styles.label}>Service Charge:</span> <strong>${calAmount.serviceCharge}</strong></li>
            <li><span className={styles.label}>Tax Fee:</span> <strong>${calAmount.taxFee}</strong></li>
            <li><span className={styles.label}>Total Amount:</span> <strong>${calAmount.totalAmount}</strong></li>
          </ul>
    </div>
    
    </>
  )
}

export default OrderBooking