import { useState } from "react";
import styles from "../styles/ActiveUsers.module.scss";
import { FiUsers } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ListGroup } from "react-bootstrap";

const ActiveUsers: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("collapse");

  const handleState = (e: React.MouseEvent) => {
    e.preventDefault();
    setState(state === "open" ? "collapse" : "open");
  };
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
        <ListGroup.Item className={styles.user}>Cras justo odio</ListGroup.Item>
        <ListGroup.Item className={styles.user}>
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item className={styles.user}>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item className={styles.user}>
          Porta ac consectetur ac
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ActiveUsers;
