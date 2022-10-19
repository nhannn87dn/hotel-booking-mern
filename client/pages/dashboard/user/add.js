import Head from "next/head";
import Layout from "../../../components/dashboard/layout/Layout";
import AddUserForm from "../../../components/dashboard/user/AddUserForm";
import {IoPeople } from "react-icons/io5";
import Link from "next/link";

function Add() {
  return (
    <Layout>
        <Head>
        <title>Add new a Administrator | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
      </Head>
      <div className="box box_noborder">
        <div className="hd hd_module">
          <h2 className="box_title">Add new a Administrator</h2>
          <div className="extra extra_right">
            <Link href='/dashboard/user' >
            <a className="button btn_default btn_small">
              <IoPeople /> Administrator List
            </a>
            </Link>
          </div>
        </div>
        <div className="bd">
            <AddUserForm />
        </div>
    </div>
    </Layout>
  )
}

export default Add