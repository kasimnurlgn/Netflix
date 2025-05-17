import React from "react";
import RowList from "../../components/Rows/RowList/RowList";
import Banner from "../../components/Banner/Banner";
import Layout from "../Layout/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <RowList/>
      </Layout>
    </>
  );
};

export default Home;
