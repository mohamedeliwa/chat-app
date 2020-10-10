import React from "react";
import styles from "../styles/MsgInput.module.scss";
import { Form } from "react-bootstrap";
const MsgInput: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Form>
        <Form.Group className={styles.formgrp}>
          <Form.Control className={styles.msgInput} type="text" placeholder="Enter your message.." />
        </Form.Group>
      </Form>
    </div>
  );
};

export default MsgInput;
