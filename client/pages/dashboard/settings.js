import Head from "next/head";
import Layout from "../../components/dashboard/layout/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "../../styles/dashboard/Setting.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const settings = [
  {
    id: 1,
    parent_id: 0,
    code: "shop_info",
    type: "group",
    store_range: "",
    store_dir: "",
    value: "",
    sort_order: 1,
  },
];

function Settings() {
  return (
    <Layout>
      <Head>
        <title>Settings | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
      </Head>
      <Formik>
      <Form className="horizontal_form">
      <Tabs>
        <TabList className={styles.tabs_list}>
          <Tab selectedClassName={styles.tab_selected} className={styles.tab}>
            Hotel Information
          </Tab>
          <Tab selectedClassName={styles.tab_selected} className={styles.tab}>
            Systems
          </Tab>
          <Tab selectedClassName={styles.tab_selected} className={styles.tab}>
            Display
          </Tab>
        </TabList>
        
        <TabPanel selectedClassName={styles.tab_panel_selected} className={styles.tab_panel}>
        
            <div className="group_inline">
               <label htmlFor="name">App Name</label>
              <div className="input_form">
                <Field type="text" name="app_name" />
              </div>
            </div>
            <div className="group_inline">
               <label htmlFor="name">Meta Title</label>
              <div className="input_form">
                <Field type="text" name="meta_title" />
                <p className='input_note'>SEO optimizer width length max 60 character</p>
              </div>
            </div>
            <div className="group_inline">
               <label htmlFor="name">Meta Description</label>
              <div className="input_form">
                <Field as="textarea" row={5} name="meta_description" />
                <p className='input_note'>SEO optimizer width length max 158 character</p>
              </div>
            </div>
            <div className="group_inline">
               <label htmlFor="name">Hotel Name</label>
              <div className="input_form">
                <Field type="text" name="name" />
              </div>
            </div>
            <div className="group_inline">
               <label htmlFor="name">Hotel Address</label>
              <div className="input_form">
                <Field type="text" name="address" />
              </div>
            </div>
            <div className="group_inline">
               <label htmlFor="name">Hotline</label>
              <div className="input_form">
                <Field type="text" name="hotline" />
              </div>
            </div>
            <div className="group_inline">
               <label htmlFor="name">Email</label>
              <div className="input_form">
                <Field type="text" name="email" />
              </div>
            </div>
         
        </TabPanel>
        <TabPanel selectedClassName={styles.tab_panel_selected} className={styles.tab_panel}>
          <h2>Any content Systems</h2>
        </TabPanel>
        <TabPanel selectedClassName={styles.tab_panel_selected} className={styles.tab_panel}>
          <h2>Any content Display</h2>
        </TabPanel>
       
      </Tabs>
      <div className="form_action">
        <div className="stack">
            <button type="submit" name="submit">
              Submit
            </button>
            <button className="btn_default" type="reset" name="reset">
              Reset
            </button>
        </div>
      </div>
      </Form>
      </Formik>
    </Layout>
  );
}

export default Settings;
