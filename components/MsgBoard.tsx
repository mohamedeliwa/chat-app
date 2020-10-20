import styles from "../styles/MsgBoard.module.scss";
import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";

const MsgBoard: React.FunctionComponent = () => {
  const { username, socket } = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      // listening for "chat message event, to append the newly coming message to the board"
      socket.on("chat message", function (msg: string, name: string) {
        const empytChatMsg = document.querySelector(
          "#empty-chat"
        ) as HTMLLIElement;
        empytChatMsg.style.display = "none";
        const messages = document.querySelector(
          "#messages"
        ) as HTMLUListElement;
        const message = document.createElement("li");
        message.innerHTML = `<span>${name}: </span>${msg}`;
        messages.append(message);
      });
    }
  }, []);
  return (
    <div className={styles.container}>
      <ul id="messages" className={styles.messages}>
        <li id="empty-chat">Chat is Empty..!</li>
      </ul>
    </div>
  );
};

export default MsgBoard;
