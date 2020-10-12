import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ActiveUsers from "../components/ActiveUsers";
import MsgBoard from "../components/MsgBoard";
import MsgInput from "../components/MsgInput";
import Navbar from "../components/Navbar";
import ShareRoom from "../components/ShareRoom";
import styles from "../styles/rooms.module.scss";

const Rooms: React.FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
  });
  useEffect(() => {
    window.addEventListener("load", function () {
      const socket = io("http://localhost:5000/");
      const form = document.querySelector("#msgInputForm") as HTMLFormElement;
      const input = document.querySelector(
        "#msgInputElement"
      ) as HTMLInputElement;
      const messages = document.querySelector("#messages") as HTMLUListElement;
      form.onsubmit = function (e) {
        e.preventDefault();
        socket.emit("chat message", input.value);
        input.value = "";
        return false;
      };
      socket.on("chat message", function (msg: string) {
        const message = document.createElement("li");
        message.innerText = msg;
        messages.append(message);
      });
    });
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Rooms Page</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="http://localhost:5000/socket.io/socket.io.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
      </Head>
      <MsgBoard />
      <MsgInput />
      <ActiveUsers />
      {router.query.id ? <ShareRoom /> : <Navbar />}
    </div>
  );
};

export default Rooms;
