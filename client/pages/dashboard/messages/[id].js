import Head from "next/head";
import Layout from "../../../components/dashboard/layout/Layout";
import { IoMailUnread } from "react-icons/io5";
import Link from "next/link";
import SingleMessage from "../../../components/dashboard/messages/SingleMessage";

function Messages({id}) {
  return (
    <Layout pageId="messages">
      <Head>
        <title>Reply Message | Hotel Booking</title>
        <meta content="noindex,noffolow" name="robots" />
      </Head>
      <div className="box">
        <div className="hd hd_module">
          <h2 className="box_title">Reply Message</h2>
          <div className="extra extra_right">
            <Link href='/dashboard/user' >
            <a className="button btn_default btn_small">
              <IoMailUnread /> Messages List
            </a>
            </Link>
          </div>
        </div>
    </div>
    <SingleMessage />
    <div className="reply_contact__wrapper">
        <h5>Reply Content</h5>
        <textarea name="reply_content" style={{width: '100%'}}  cols="30" rows="5"></textarea>
        <label class="input_checkbox"><input type="checkbox" value="1" /> Send to email this reply content</label>
        <div className="stack">
            <input type="hidden" name="userId" value='' />
            <button>Submit</button>
        </div>
       
    </div>
    </Layout>
  )
}

export default Messages



export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      id: params.id,
      title: `Message ${params.id}`,
      protected: true,
      userTypes: "admin",
    },
    
  }
}



export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        id: `${index + 1}`,
      }
    };
  });
  return {
    paths,
    fallback: false,
  };
}