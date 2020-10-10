import styles from "../styles/MsgBoard.module.scss";

const MsgBoard: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.messages}>
        <li>hello</li>
        <li>hey</li>
        <li>how are you ?</li>
        <li>fine , what about you?</li>
      </ul>
    </div>
  );
};

export default MsgBoard;
