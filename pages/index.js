import Head from "next/head";
import { Button } from "react-bootstrap";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Welcome to Chat App</h1>

      <main className={styles.main}>
        <Button className={styles.roombtn} variant="primary">Join Rooms</Button>
        <Button className={styles.roombtn} variant="primary">Create Room</Button>
      </main>
    </div>
  );
}
