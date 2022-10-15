import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SearchRooms.module.css";
import { buildStrDate } from "../../../utils/buildStrDate";
import { localStorageHelper } from "../../../utils/localStorageHelper";

import { useDispatch } from "react-redux";
import { updateAll } from "../../../redux/reducer/searchRoomsSlice";

function SearchRooms({ page='',handleClicked }) {

  const dispatch = useDispatch();

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

  const handleStartDateChange = (date) => {
    setSCheckInDate(date);
    //update store
    //update localStorage
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

  const handleClickSearch = async (e) => {
    e.preventDefault();

    

    const strCheckInDate = buildStrDate(checkInDate);
    const strCheckOutDate = buildStrDate(checkOutDate);

    const roomFilters = {
      checkInDate: strCheckInDate,
      checkOutDate: strCheckOutDate,
      guestCapacity: adults + children,
      numOfRooms,
      adults,
      children,
    };
    // save to local to keep
    localStorageHelper.set("roomFilters", roomFilters);
    //Update Store
    dispatch(updateAll({
      startDate: strCheckInDate,
      endDate: strCheckOutDate,
      adults,
      children,
      rooms: numOfRooms
    }));
    
    handleClicked(true);

  };

  const sectionClass =
    page === "home"
      ? styles.section_booking_form + " " + styles.fix_home
      : styles.section_booking_form;

  return (
    <section className={sectionClass}>
      <form name="booking_form" className={styles.booking_form_flex}>
        <div className={styles.booking_form}>
          <div className={styles.input_date}>
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
          <div className={styles.input_date}>
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
          <div className={styles.input_person}>
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
          <div className={styles.input_person}>
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
          <div className={styles.input_person}>
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
        </div>
        <div className={styles.booking_search}>
          <button
            type="button"
            onClick={handleClickSearch}
            className={styles.booking_submit}
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchRooms;
