import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import { SocketContext } from "../context/SocketContext";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const socketContextState = useContext(SocketContext);
  const [state, setState] = useState({
    username: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setState({
      ...state,
      username: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    /**Update Context here */
    socketContextState.setUsername(state.username);
    router.push("/rooms");
  };
  useEffect(() => {
    console.log(socketContextState.username);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Welcome to Chat App</h1>

      <main className={styles.main}>
        <Form className={styles.startingForm} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter nickname.."
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Button className={styles.roombtn} variant="primary" type="submit">
              Join Rooms..
            </Button>
            <Button className={styles.roombtn} variant="primary" onClick={() => socketContextState.setPrivateState(false)}>
              Create Room..
            </Button>
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
