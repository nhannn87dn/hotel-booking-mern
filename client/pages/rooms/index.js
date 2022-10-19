import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/booking/layout/Layout";
import RoomItem from "../../components/booking/room/RoomItem";
import SearchRooms from "../../components/booking/SearchRooms";
import PagesHeader from "../../components/booking/PagesHeader";

import { useSelector, useDispatch } from "react-redux";
import {
  roomsSelector,
  filterRooms,
  getAllRooms,
} from "../../redux/reducer/roomSlice";
import {settingSelector, getSettings} from "../../redux/reducer/settingsSlice";
import { wrapper } from "../../redux/store";

import { localStorageHelper } from "../../utils/localStorageHelper";

export const getStaticProps = wrapper.getStaticProps(store => async() => {
  console.log('2. Page.getStaticProps uses the store to dispatch things');
  await store.dispatch(getSettings());
  await store.dispatch(getAllRooms());
});


export default function Rooms() {
  const { loading, success, error, rooms } = useSelector(roomsSelector);
  const {settings: {data}} = useSelector(settingSelector);
  const [clicked, setClicked] = React.useState(false);
  const dispatch = useDispatch();
  

  /* when clicked Search room width filter conditions */
  const handleClicked = (v) => {

    const localroomFilters = localStorageHelper.get("roomFilters");
  
    let filters = {};
    if (localroomFilters !== undefined) {
      filters = {
        checkInDate: localroomFilters.checkInDate,
        checkOutDate: localroomFilters.checkOutDate,
        guestCapacity: localroomFilters.guestCapacity,
        numOfRooms: localroomFilters.numOfRooms,
      };
    }

    dispatch(filterRooms(filters));
    setClicked(true);
  };

  const handleClickRemoveFilters = ()=> {
    dispatch(getAllRooms());
    setClicked(false)
  }

  return (
    <Layout pageId="_rooms" settings={data}> 
      <Head>
        <title>Rooms & Suites | Sochi Hotel </title>

        <link rel="canonical" href="/rooms" />

        <meta property="og:title" content="Rooms & Suites | Sochi Hotel" />
        <meta property="og:description" content={`Rooms & Suites ${data.metaDescription}`} />
        <meta property="og:site_name" content={data.name} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:url" itemprop="url" content="/rooms" />
        <meta itemprop="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <meta
          property="og:image:secure_url"
          itemprop="thumbnailUrl"
          content="/images/logo.png"
        />
      </Head>

      <PagesHeader heading="Rooms & Suites">
        The hotel is arranged on three floors, without a lift. On the ground
        floor, apart from the reception, there is a comfortable lounge where you
        can sit and drink tea.
      </PagesHeader>

      <SearchRooms handleClicked={handleClicked} />
      {clicked && !loading && success && !error && rooms.data.filteredCount ? (
        <div>
          Found <strong>{rooms.data.filteredCount}</strong> results matching
          your search terms. <span onClick={handleClickRemoveFilters} className="badges_remove">Remove Filters</span>
        </div>
      ) : (
        <h2>All of Rooms & Suites</h2>
      )}
      {loading && <div className="empty">Loading...</div>}

      {!loading && success && !error && rooms.data.allRooms.length ? (
        rooms.data.allRooms.map((room) => (
          <RoomItem key={room._id} room={room} />
        ))
      ) : (
        <div className="empty">No record was found !</div>
      )}

      <style jsx>{`
        .empty {
          padding: 30px;
          text-align: center;
        }
        .badges_remove {
          background: #f2dede;
          color:#b94a48;
          border:1px solid #eed3d7;
          padding: 5px 10px;
          font-size: 12px;
          border-radius:20px;
          cursor:pointer
        }
        
      `}</style>
    </Layout>
  );
}
