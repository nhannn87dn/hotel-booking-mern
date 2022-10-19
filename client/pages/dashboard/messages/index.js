import Head from "next/head";
import Layout from "../../../components/dashboard/layout/Layout";
import { IoEyeOutline, IoTrashOutline, IoPersonAdd } from "react-icons/io5";
import Link from "next/link";

function MessageList() {
  return (
    <Layout pageId="messages">
      <Head>
        <title>Message List | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
      </Head>

      <div className="box box_noborder">
        <div className="hd hd_module">
          <h2 className="box_title">Message List</h2>
        </div>

        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Create at</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Smith</td>
              
              <td>jsmith@gmail.com</td>
              <td>John</td>
              <td>$50.00</td>
              <td>
                <div className="stack">
                  <Link href='/dashboard/messages/1'>
                  <a className="button btn_default btn_small">
                    <IoEyeOutline /> View
                  </a>
                  </Link>
                  <button className="btn_default btn_small btn_danger">
                    <IoTrashOutline /> Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Bach</td>
              
              <td>fbach@yahoo.com</td>
              <td>Frank</td>
              <td>$50.00</td>
              <td>
                <div className="stack">
                  <button className="btn_default btn_small">
                    <IoEyeOutline /> View
                  </button>
                  <button className="btn_default btn_small btn_danger">
                    <IoTrashOutline /> Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Doe</td>
              
              <td>jdoe@hotmail.com</td>
              <td>Jason</td>
              <td>$100.00</td>
              <td>
                <div className="stack">
                  <button className="btn_default btn_small">
                    <IoEyeOutline /> View
                  </button>
                  <button className="btn_default btn_small btn_danger">
                    <IoTrashOutline /> Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Conway</td>
             
              <td>tconway@earthlink.net</td>
              <td>Tim</td>
              <td>$50.00</td>
              <td>
                <div className="stack">
                  <button className="btn_default btn_small">
                    <IoEyeOutline /> View
                  </button>
                  <button className="btn_default btn_small btn_danger">
                    <IoTrashOutline /> Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default MessageList;


export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: "admin",
      allowRoles: ["admin", "booking"]
    }
  };
}