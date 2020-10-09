import Head from "next/head";
import { Form, Button } from "react-bootstrap";
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
        <Form className={styles.startingForm}>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter nickname.." />
          </Form.Group>
          <Form.Group>
            <Button className={styles.roombtn} variant="primary">
              Join Rooms >
            </Button>
            <Button className={styles.roombtn} variant="primary">
              Create Room >
            </Button>
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
