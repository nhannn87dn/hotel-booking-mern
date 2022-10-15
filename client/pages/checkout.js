import Head from "next/head";
import {Layout } from "../components/checkout/layout";
import styles from "../styles/Checkout.module.css";

export default function Checkout() {
  return (
    <Layout pageId="_checkout">
      <Head>
        <title>Checkout | Hotel Booking</title>

        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/checkout`}
        />

        <meta property="og:title" content="Checkout | Hotel Booking" />
        <meta property="og:description" content="Checkout Hotel Booking" />
        <meta property="og:site_name" content="Checkout Hotel Booking" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:url" itemprop="url" content="/contact" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta
          property="og:image:secure_url"
          itemprop="thumbnailUrl"
          content="/images/logo.png"
        />
      </Head>

      
        <div className={styles.layout_wrapper}>
          <div className={styles.main_content}>
            <h3 className={styles.title_section}>Thông tin đặt phòng</h3>
            <form action="">
              <div className="input_form">
                <label htmlFor="">Tên khách hàng</label>
                <input type="text" name="name" />
              </div>
              <div className="group_inline">
                <div className="input_form">
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" />
                </div>
                <div className="input_form">
                  <label htmlFor="">Số ĐT</label>
                  <input type="tel" name="tel" />
                </div>
              </div>
              <div className="input_form">
                <label htmlFor="">Địa chỉ</label>
                <input type="text" name="address" />
              </div>
              <h3 className={styles.title_section}>Phương thức thanh toán</h3>
              <div className="input_form">
                <label><input type="radio" name="payment" /> Thanh toán khi nhận phòng</label>
                <label><input type="radio" name="payment" /> Thanh toán trực tuyến VISA, MASTER, DEBIT</label>
              </div>
            </form>
          </div>
          <div className={styles.sidebar_content}>
            <h3>Room Double Twins - View Beach</h3>
            <strong>$199/night</strong>
            <p>Adults: 2</p>
            <p>View: beach</p>
            <p>Size: 20m²</p>
            <p>Bed Type: queen bed</p>
            <p>Categories: single</p>
            <p>Amenities: air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone    </p>
            <hr />
            <p>Checkin Date: 22/12/2022</p>
            <p>Checkout Date: 22/12/2022</p>
            <p>Adults: 2</p>
            <p>Rooms: 1</p>
            <hr />
            <p>Sub Total: 199$</p>
            <p>Tax: 19.9$</p>
            <p>Services:5$</p>
            <p>Total Payment: 199$</p>
          </div>
        </div>
      
    </Layout>
  );
}
