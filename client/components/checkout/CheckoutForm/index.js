import React from 'react';
import styles from "./CheckoutForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import OrderBooking from '../OrderBooking';
import { localStorageHelper } from "../../../utils/localStorageHelper";
import { useRouter } from "next/router";
import axios from "axios";

const BookingSchema = Yup.object().shape({
    room: Yup.string().required("Room Id is required"),
    customer: Yup.string().required("Customer Id is required"),
    paymentId: Yup.string().required("Please choose a payment method"),
    checkInDate: Yup.string().required("checkIn Date is required"),
    checkOutDate: Yup.string().required("checkOut Date is required"),
    numOfRooms: Yup.number().required("Number of Rooms is required"),
    pricePerNight: Yup.number().required("pricePerNightis required"),
    numOfAdults: Yup.number().required("numOfAdults  is required"),
    numOfChildren: Yup.number().required("numOfChildren is required"),
    discount: Yup.number().required("discount is required"),
    note: Yup.string().max(255)
  });


const CheckoutForm = ({token=null,room=null,payments=[], me=null, selected=null}) => {
    const router = useRouter();
    
  
    const handleSubmitBooking = async (values) => {
        console.log(values)
       
        /**
         * submit booking lên
         * trả lại booking Info
         * Lưu local roo
         * Xóa local roomFilters
         */
        try {
            const data = await axios
              .post(process.env.apiEndPoint + "/v1/bookings/create", 
              values,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              })
              .then((response) => response.data);

            if (data && data.status === 200) {
                localStorageHelper.set("booked",{
                    bookingId: data.data._id,
                    roomId: data.data.room,
                    me: data.data.customer,
                    payments: data.data.paymentInfo
                })

                localStorageHelper.delete("roomFilters");
                router.push("/checkout/result");
            }
          } catch (error) {
            console.log(error.response.data)
          }
       
      };
    
    return (
    <div className={styles.layout_wrapper}>
        <div className={styles.main_content}>
        <Formik
          initialValues={{
                paymentId: "",
                room: room._id,
                customer: me._id,
                note: "",
                numOfRooms: selected.numOfRooms,
                numOfAdults: selected.adults,
                numOfChildren: selected.children,
                discount: room.pricePromote > 0 ? room.pricePerNight - room.pricePromote : 0,
                checkInDate: selected.checkInDate,
                checkOutDate: selected.checkOutDate,
                pricePerNight: room.pricePerNight,
                priceChildren: room.priceChildren
            }}
          validationSchema={BookingSchema}
          onSubmit={(values) => {
            handleSubmitBooking(values);
          }}
        >
        {({ errors, touched, isValid, isSubmitting }) => (
            <Form>
                <h3 className={styles.title_section}>Infomations Booking</h3>
                {me ? (
                  <ul>
                    <li>
                      Reservation name: <strong>{me.name}</strong>
                    </li>
                    <li>
                      Email: <strong>{me.email}</strong>
                    </li>
                    <li>
                      Birthday: <strong>{me.birthday}</strong>
                    </li>
                    <li>
                      Mobile: <strong>{me.mobile}</strong>
                    </li>
                    <li>
                      Address: <strong>{me.address}</strong>
                    </li>
                    <Field type="hidden" name="customer" value={me._id} />
                  </ul>
                ) : (
                  <div>Loading...</div>
                )}
                <div className="input_form">
                  <label htmlFor="">Note</label>
                  <Field
                  as="textarea"
                    placeholder="Other requirements"
                    name="note"
                    id="note"
                    cols="30"
                    rows="3"
                  ></Field>
                </div>
                <h3 className={styles.title_section}>Payment Methods</h3>
               <div className="input_form">
                    {payments ? payments.map((payment) => (
                    <label key={payment._id}>
                      <Field type="radio" name="paymentId" value={payment._id} /> {payment.name}
                    </label>
                    ))
                  :
                  ( <div>Loading...</div>)
                  }
                
               </div>
             
              
                {errors.customer ?  <div className="error_box">{errors.customer}</div> : null}
                {errors.paymentId && touched.paymentId ? <div className="error_box">{errors.paymentId}</div> : null}
                {errors.room ? <div className="error_box">{errors.room}</div> : null}
                {errors.checkInDate ? <div className="error_box">{errors.checkInDate}</div> : null}
                {errors.checkOutDate ? <div className="error_box">{errors.checkOutDate}</div> : null}
                {errors.numOfAdults ? <div className="error_box">{errors.numOfAdults}</div> : null}
                {errors.numOfChildren ? <div className="error_box">{errors.numOfChildren}</div> : null}
                {errors.discount ? <div className="error_box">{errors.discount}</div> : null}
                {errors.pricePerNight ? <div className="error_box">{errors.pricePerNight}</div> : null}
                {errors.priceChildren ? <div className="error_box">{errors.priceChildren}</div> : null}
                {errors.note && touched.note ? <div className="error_box">{errors.note}</div> : null}
            
            
               
                <div className={styles.actions}>
                    <Field type="hidden" name="roomId" />
                    <Field type="hidden" name="checkInDate" />
                    <Field type="hidden" name="checkOutDate" />
                    <Field type="hidden" name="numOfRooms" />
                    <Field type="hidden" name="numOfAdults" />
                    <Field type="hidden" name="numOfChildren" />
                    <Field type="hidden" name="discount" />
                    <Field type="hidden" name="pricePerNight" />
                    <Field type="hidden" name="priceChildren" />
                    
                    {!isSubmitting && <button type="submit">Booking Confirm</button>}
                    {isSubmitting && isValid && <button type="button" disabled>Processing Booking ...</button>}
                    <p className={styles.note}>
                    Important note. By booking, you agree to our terms
                    </p>
              </div>
            </Form>
         )}
         </Formik>
        </div>
        <div className={styles.sidebar_content}>
            {selected && room ? (
            <OrderBooking selected={selected} room={room} /> 
            )
            :
            ( <div>Loading...</div>)
            }
        </div>
    </div>
  )
}

export default CheckoutForm