import { useContext, useState } from "react";
import styles from "../styles/MsgInput.module.scss";
import { Form } from "react-bootstrap";
import { SocketContext } from "../context/SocketContext";

const MsgInput: React.FunctionComponent = () => {
  const [state, setState] = useState("");
  const { socket, private: privateRoom, username } = useContext(SocketContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (socket) {
      if (privateRoom) {
        socket.emit("chat message", state, username);
      } else {
        socket.emit("chat message", state);
      }
    }
    setState("");
  };
  return (
    <div className={styles.container}>
      <Form id="msgInputForm" onSubmit={handleSubmit}>
        <Form.Group className={styles.formgrp}>
          <Form.Control
            id="msgInputElement"
            className={styles.msgInput}
            type="text"
            placeholder="Enter your message.."
            onChange={handleChange}
            value={state}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default MsgInput;
