import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingSection.module.css";

function BookingSection() {
  
  const [startDate, setStartDate] = useState(new Date());
  let date = new Date();
  const [endDate, setEndDate] = useState(date.setDate(date.getDate() + 2));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [numberRoom, setNumberRoom] = useState(1);

  const handleClickSearch = (e) => {
    e.preventDefault();
    
    let startDateStr = new Date(startDate);
    let dayOfStartDate = startDateStr.getFullYear()+"-"+startDateStr.getMonth()+"-"+startDateStr.getDate();

    let endDateStr = new Date(endDate);
    let dayOfEndDate = endDateStr.getFullYear()+"-"+endDateStr.getMonth()+"-"+endDateStr.getDate();

    console.log(dayOfStartDate,dayOfEndDate);
  }

  

  return (
    <section className={styles.section_booking_form}>
      <form name="booking_form" className={styles.booking_form_flex}>
        <div className={styles.booking_form}>
          <div className={styles.input_date}>
            <label htmlFor="">Checkin</label>
            <DatePicker
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              monthsShown={2}
            />
          </div>
          <div className={styles.input_date}>
            <label htmlFor="">Checkout</label>
            <DatePicker
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            monthsShown={2}
            />
          </div>
          <div className={styles.input_person}>
            <label htmlFor="">Adults</label>
            <select name="adults" value={adults} onChange={ e => setAdults(parseInt(e.target.value))}>
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
            <select name="children" value={children} onChange={ e => setChildren(parseInt(e.target.value))}>
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
            <select name="rooms" value={numberRoom} onChange={ e => setNumberRoom(parseInt(e.target.value))}>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
              {" "}
            </select>
          </div>
        </div>
        <div className={styles.booking_search}>
          <button type="button" onClick={handleClickSearch} className={styles.booking_submit}>
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookingSection;
