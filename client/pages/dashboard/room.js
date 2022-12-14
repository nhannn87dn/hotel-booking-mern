import React from 'react'
import Layout from '../../components/dashboard/layout/Layout'

function Room() {
  return (
    <Layout>Room</Layout>
  )
}

export default Room

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      userTypes: "admin",
      allowRoles: ["admin", "booking"]
    }
  };
}