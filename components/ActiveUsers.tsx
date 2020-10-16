import { useState, useContext } from "react";
import styles from "../styles/ActiveUsers.module.scss";
import { FiUsers } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ListGroup } from "react-bootstrap";
import { SocketContext } from "../context/SocketContext";

const ActiveUsers: React.FunctionComponent = () => {
  const {users} = useContext(SocketContext);
  const [state, setState] = useState<string>("collapse");
  
  const handleState = (e: React.MouseEvent) => {
    e.preventDefault();
    setState(state === "open" ? "collapse" : "open");
  };

  const usersList = !users ? null : users.map(user => {
    return (
      <ListGroup.Item id={user.id} key={user.id} className={styles.user}>{user.name}</ListGroup.Item>
    )
  })
  return (
    <div
      className={
        state === "open" ? styles.container_opened : styles.container_collapsed
      }
    >
      {state === "collapse" ? (
        <FiUsers className={styles.usersbtn} onClick={handleState} />
      ) : (
        <AiOutlineClose className={styles.usersbtn} onClick={handleState} />
      )}
      <ListGroup className={styles.usersList} variant="flush">
        {usersList}
      </ListGroup>
    </div>
  );
};

export default ActiveUsers;
