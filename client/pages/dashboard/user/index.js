import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/dashboard/layout/Layout";
import { IoPencil, IoTrashOutline, IoPersonAdd } from "react-icons/io5";

function UserList() {
  return (
    <Layout pageId="user">
      <Head>
        <title>Administrator List | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
      </Head>

      <div className="box box_noborder">
        <div className="hd hd_module">
          <h2 className="box_title">Administrator List</h2>
          <div className="extra extra_right">
            <Link href='/dashboard/user/add' >
            <a className="button btn_default btn_small">
              <IoPersonAdd /> Create a new Administrator
            </a>
            </Link>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Created at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Smith</td>
              <td>John</td>
              <td>jsmith@gmail.com</td>
              <td>$50.00</td>
              <td>
                <div className="stack">
                  <button className="btn_default btn_small">
                    <IoPencil /> Edit
                  </button>
                  <button className="btn_default btn_small btn_danger">
                    <IoTrashOutline /> Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Bach</td>
              <td>Frank</td>
              <td>fbach@yahoo.com</td>
              <td>$50.00</td>
              <td>
                <div className="stack">
                  <button className="btn_default btn_small">
                    <IoPencil /> Edit
                  </button>
                  <button className="btn_default btn_small btn_danger">
                    <IoTrashOutline /> Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Doe</td>
              <td>Jason</td>
              <td>jdoe@hotmail.com</td>
              <td>$100.00</td>
              <td>
                <div className="stack">
                  <button className="btn_default btn_small">
                    <IoPencil /> Edit
                  </button>
                  <button className="btn_default btn_small btn_danger">
                    <IoTrashOutline /> Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Conway</td>
              <td>Tim</td>
              <td>tconway@earthlink.net</td>
              <td>$50.00</td>
              <td>
                <div className="stack">
                  <button className="btn_default btn_small">
                    <IoPencil /> Edit
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

export default UserList;
