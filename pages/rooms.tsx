import ActiveUsers from "../components/ActiveUsers";
import MsgBoard from "../components/MsgBoard";
import MsgInput from "../components/MsgInput";
import  Navbar  from "../components/Navbar"
import styles from '../styles/rooms.module.scss';

const Rooms: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <MsgBoard />
      <MsgInput />
      <ActiveUsers />
      <Navbar />
    </div>
  );
};

export default Rooms;
