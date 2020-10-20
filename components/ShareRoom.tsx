import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Alert } from "react-bootstrap";
import { MdShare } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import styles from "../styles/ShareRoom.module.scss";

const ShareRoom: React.FunctionComponent = () => {
  const router = useRouter();
  const [state, setState] = useState<string>("collapse");

  const handleState = (e: React.MouseEvent) => {
    e.preventDefault();
    setState(state === "open" ? "collapse" : "open");
  };

  const copyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = document.querySelector("#roomURL") as HTMLSpanElement;
    const urlTextArea = document.createElement("textarea");
    urlTextArea.value = url.innerText;
    urlTextArea.style.position = "absolute";
    urlTextArea.style.left = "-9999px";
    document.body.appendChild(urlTextArea);
    urlTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(urlTextArea);
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
      <Alert className={styles.shareLink} variant="light" onClick={copyLink}>
        <span id="roomURL">{`http://localhost:3000${router.asPath}`}</span>
        <FiCopy className={styles.copyIcon} />
      </Alert>
    </div>
  );
};

export default ShareRoom;
