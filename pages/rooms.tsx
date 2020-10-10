import { useRouter } from "next/router";
import { useEffect } from "react";
import ActiveUsers from "../components/ActiveUsers";
import MsgBoard from "../components/MsgBoard";
import MsgInput from "../components/MsgInput";
import Navbar from "../components/Navbar";
import ShareRoom from "../components/ShareRoom";
import styles from "../styles/rooms.module.scss";

const Rooms: React.FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {console.log(router.query)})
  return (
    <div className={styles.container}>
      <MsgBoard />
      <MsgInput />
      <ActiveUsers />
      {router.query.id ? (<ShareRoom />) : (<Navbar />)}
    </div>
  );
};

export default Rooms;
