import React, { useState } from "react";
import { useRouter } from 'next/router'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";


import { buildStrDate } from "../../../../utils/buildStrDate";
import { localStorageHelper } from "../../../../utils/localStorageHelper";

import axios from "axios";

const BookingForm = ({ roomId }) => {
  const router = useRouter()

  const localroomFilters = localStorageHelper.get("roomFilters");
  let initcheckInDate =
    localroomFilters !== undefined && localroomFilters.checkInDate
      ? new Date(localroomFilters.checkInDate)
      : new Date();
  const [checkInDate, setSCheckInDate] = useState(initcheckInDate);
  const date = new Date();
  let initcheckOutDate =
    localroomFilters !== undefined && localroomFilters.checkOutDate
      ? new Date(localroomFilters.checkOutDate)
      : date.setDate(date.getDate() + 2);
  const [checkOutDate, setCheckOutDate] = useState(initcheckOutDate);

  const [adults, setAdults] = useState(
    localroomFilters !== undefined && localroomFilters.adults
      ? localroomFilters.adults
      : 1
  );
  const [children, setChildren] = useState(
    localroomFilters !== undefined && localroomFilters.children
      ? localroomFilters.children
      : 0
  );
  const [numOfRooms, setNumberRoom] = useState(
    localroomFilters !== undefined && localroomFilters.numOfRooms
      ? localroomFilters.numOfRooms
      : 1
  );

  const [available, setAvailable] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleStartDateChange = (date) => {
    setSCheckInDate(date);
  };

  const handleEndDateChange = (date) => {
    setCheckOutDate(date);
  };
  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setChildren(parseInt(e.target.value));
  };

  const handleRoomsChange = (e) => {
    setNumberRoom(parseInt(e.target.value));
  };

  const handleClickCheck = async (e) => {
    e.preventDefault();
    
    const strCheckInDate = buildStrDate(checkInDate);
    const strCheckOutDate = buildStrDate(checkOutDate);

    const payload = {
      checkInDate: strCheckInDate,
      checkOutDate: strCheckOutDate,
      guestCapacity: adults + children,
      numOfRooms,
      roomId
    };

    try {
      const {data} = await axios.post(
        process.env.apiEndPoint + "/v1/rooms/search",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.data);
      console.log(data);

      let roomFilters;
      if(data && data.roomAvailable){
        setAvailable(true);
        roomFilters = {...payload,adults,children}
      }else{
        roomFilters = {...payload,adults,children,roomId: null}
      }

      localStorageHelper.set("roomFilters", roomFilters);

    } catch (error) {
      console.log("handleClickCheck",error.response.data);
    }
    setChecked(true)
  };

  const handleBooking = (e)=> {
      e.preventDefault();
     
      router.push("/checkout");
      console.log('booking now');
  }

  return (
    <>
      <form name="booking_form" className={styles.booking_form}>
        <div className={styles.input_block}>
          <label htmlFor="">Checkin</label>
          <DatePicker
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate}
            selected={checkInDate}
            dateFormat="yyyy/MM/dd"
            onChange={(date) => handleStartDateChange(date)}
            monthsShown={2}
          />
        </div>
        <div className={styles.input_block}>
          <label htmlFor="">Checkout</label>
          <DatePicker
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate}
            selected={checkOutDate}
            dateFormat="yyyy/MM/dd"
            onChange={(date) => handleEndDateChange(date)}
            monthsShown={2}
          />
        </div>
        <div className={styles.input_block}>
          <label htmlFor="">Adults</label>
          <select
            name="adults"
            value={adults}
            onChange={(e) => handleAdultsChange(e)}
          >
            <option value="1">1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
            <option value="6"> 6</option>
            <option value="7"> 7</option>
            <option value="8"> 8</option>
            <option value="9"> 9</option>
            <option value="10"> 10</option>
            <option value="11"> 11</option>
            <option value="12"> 12</option>
            <option value="13"> 13</option>
            <option value="14"> 14</option>
            <option value="15"> 15</option>
          </select>
        </div>
        <div className={styles.input_block}>
          <label htmlFor="">Children</label>
          <select
            name="children"
            value={children}
            onChange={(e) => handleChildrenChange(e)}
          >
            <option value="0">0</option>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
            <option value="6"> 6</option>
            <option value="7"> 7</option>
            <option value="8"> 8</option>
            <option value="9"> 9</option>
            <option value="10"> 10</option>{" "}
          </select>
        </div>
        <div className={styles.input_block}>
          <label htmlFor="">Rooms</label>
          <select
            name="rooms"
            value={numOfRooms}
            onChange={(e) => handleRoomsChange(e)}
          >
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>{" "}
          </select>
        </div>

        <div className={styles.form_action}>
          
          {available && checked ? (
          <div>
              <div className="success_box">This Room is availability</div>
              <button
                type="button"
                onClick={handleBooking}
                className={styles.booking_submit}
              >
                Booking Now
              </button>
          </div>
          )
          : (
            <button
            type="button"
            onClick={handleClickCheck}
            className={styles.booking_submit}
          >
            Check Availability
          </button>
          )
        }
          {!available && checked && (<div className="error_box">This Room is unavailability</div>)}

        </div>
      </form>
    </>
  );
};

export default BookingForm;
