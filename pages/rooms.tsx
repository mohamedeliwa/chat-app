import  Navbar  from "../components/Navbar"
import styles from '../styles/rooms.module.scss';

const Rooms: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h1> Hello Roooms</h1>
      <Navbar />
    </div>
  );
};

export default Rooms;
