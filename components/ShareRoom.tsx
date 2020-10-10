import { useState } from "react";
import Link from "next/link";
import { Alert } from "react-bootstrap";
import { MdShare } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import styles from "../styles/ShareRoom.module.scss";

const ShareRoom: React.FunctionComponent = () => {
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
        <MdShare className={styles.sharebtn} onClick={handleState} />
      ) : (
        <AiOutlineClose className={styles.sharebtn} onClick={handleState} />
      )}
      <Alert className={styles.shareLink} variant="light">
        http://localhost:3000/rooms?id=asshjsflhskjhfsjfnsjcnsjhfskjhfa
        <FiCopy className={styles.copyIcon} />
      </Alert>
    </div>
  );
};

export default ShareRoom;
