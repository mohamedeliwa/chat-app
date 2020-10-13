import styles from "../styles/MsgBoard.module.scss";

const MsgBoard: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ul id="messages" className={styles.messages}>
        <li><span>username: </span>hello</li>
        <li><span>username: </span>hey</li>
        <li><span>username: </span>how are you ?</li>
        <li><span>username: </span>fine , what about you?</li>
      </ul>
    </div>
  );
};

export default MsgBoard;
