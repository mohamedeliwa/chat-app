import styles from "../styles/MsgBoard.module.scss";
import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";

const MsgBoard: React.FunctionComponent = () => {
  const { username, socket } = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      socket.on("chat message", function (msg: string) {
        const messages = document.querySelector(
          "#messages"
        ) as HTMLUListElement;
        const message = document.createElement("li");
        message.innerHTML = `<span>${username}: </span>${msg}`
        messages.append(message);
      });
    }
  }, []);
  return (
    <div className={styles.container}>
      <ul id="messages" className={styles.messages}>
        <li>
          <span>username: </span>hello
        </li>
        <li>
          <span>username: </span>hey
        </li>
        <li>
          <span>username: </span>how are you ?
        </li>
        <li>
          <span>username: </span>fine , what about you?
        </li>
      </ul>
    </div>
  );
};

export default MsgBoard;
