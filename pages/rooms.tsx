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
    if (router.query.id && !socketContextState.socket) {
      let username = prompt("what's your name?", "anonymous");
      let roomID: string;
      if (!username) username = "anonymous";
      if (Array.isArray(router.query.id)) {
        roomID = router.query.id[0];
      } else {
        roomID = router.query.id;
      }
      socketContextState.joinPrivateRoom(username, roomID);
    } else if (!router.query.id && !socketContextState.socket) {
      // router.push("/");
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Rooms Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MsgBoard />
      <MsgInput />
      {socketContextState.private ? null : <ActiveUsers />}
      {/* {router.query.id ? <ShareRoom /> : <Navbar />} */}
      {router.query.id ? <ShareRoom /> : null}
    </div>
  );
};

export default Rooms;
