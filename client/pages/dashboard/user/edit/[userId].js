import Head from "next/head";
import Layout from "../../../../components/dashboard/layout/Layout";
import EditUserForm from "../../../../components/dashboard/user/EditUserForm";
import {IoPeople } from "react-icons/io5";
import Link from "next/link";

function Edit({userId}) {
  return (
    <Layout>
        <Head>
        <title>Edit Administrator | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
      </Head>
      <div className="box box_noborder">
        <div className="hd hd_module">
          <h2 className="box_title">Edit Administrator</h2>
          <div className="extra extra_right">
            <Link href='/dashboard/user' >
            <a className="button btn_default btn_small">
              <IoPeople /> Administrator List
            </a>
            </Link>
          </div>
        </div>
        <div className="bd">
            <EditUserForm />
            userId {userId}
        </div>
    </div>
    </Layout>
  )
}

export default Edit



export async function getStaticProps({ params = {} } = {}) {
    return {
      props: {
        userId: params.userId,
        title: `User ${params.userId}`
      }
    }
  }
  
  export async function getStaticPaths() {
    const paths = [...new Array(5)].map((i, index) => {
      return {
        params: {
            userId: `${index + 1}`,
        }
      };
    });
    return {
      paths,
      fallback: false,
    };
  }