import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import ActiveUsers from "../components/ActiveUsers";
import MsgBoard from "../components/MsgBoard";
import MsgInput from "../components/MsgInput";
import Navbar from "../components/Navbar";
import ShareRoom from "../components/ShareRoom";
import styles from "../styles/rooms.module.scss";
import { SocketContext } from "../context/SocketContext";
// import io from 'socket.io-client';

const Rooms: React.FunctionComponent = () => {
  const router = useRouter();
  const socketContextState = useContext(SocketContext);
  useEffect(() => {
    console.log(router.query);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Rooms Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MsgBoard />
      <MsgInput />
      <ActiveUsers />
      {router.query.id ? <ShareRoom /> : <Navbar />}
    </div>
  );
};

export default Rooms;
