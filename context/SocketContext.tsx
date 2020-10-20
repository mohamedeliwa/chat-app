import { createContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";

/**TYPES */
interface User {
  id: string;
  name: string;
}
interface InitialState {
  username: string | null;
  users: User[];
  private: boolean | null;
  socket: SocketIOClient.Socket | null;
}
let setUsername: (username: string, privateRoom: boolean) => void = (s) => {};
let setUsers: (users: User[]) => void = (a) => {};
let setPrivateState: (bool: boolean) => void = (b) => {};
let setSocket: (socket: SocketIOClient.Socket) => void = (socket) => {};
let joinPrivateRoom: (username: string, roomID: string) => void = (u, i) => {};
/**END OF TYPES */

const initialState: InitialState = {
  username: null,
  users: [],
  private: null,
  socket: null,
};

export const SocketContext = createContext({
  ...initialState,
  setUsername,
  setUsers,
  setPrivateState,
  setSocket,
  joinPrivateRoom,
});

const SocketContextProvider: React.FunctionComponent = (props) => {
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  // useEffect(() => {
  //   console.log("context: ", state);
  //   // console.log("ref: ", stateRef.current);
  // }, [state]);

  const connectSocket: (privateRoom: boolean) => void = (privateRoom) => {
    const socket = io("http://localhost:5000/");
    socket.on("connect", () => {
      setState({
        ...stateRef.current,
        socket,
      });
      if (privateRoom) {
        //sending username
        socket.emit("private room create", stateRef.current.username);
        // recieving confirmation on join the room successfully
        socket.on("success", (msg: string) => {
          router.push(`/rooms?id=${socket.id}`);
        });
        socket.on("update users", (users: User[]) => {
          // console.log(users);
          setState({
            ...stateRef.current,
            users,
          });
        });
      } else {
        //sending username
        socket.emit("chat join", stateRef.current.username);
        // recieving confirmation on join the room successfully
        socket.on("success", (msg: string) => {
          router.push("/rooms");
        });
        socket.on("update users", (users: User[]) => {
          // console.log(users);
          setState({
            ...stateRef.current,
            users,
          });
        });
      }
    });
  };

  joinPrivateRoom = (username: string, roomID: string) => {
    // console.log(username, roomID);
    const socket = io("http://localhost:5000/");
    socket.on("connect", () => {
      setState({
        ...stateRef.current,
        username,
        private: true,
        socket,
      });
      socket.emit("private room join", roomID, username);
      socket.on("success", (msg: string) => {
        console.log(msg);
      });
      socket.on("chat message", function (msg: string, name: string) {
        const empytChatMsg = document.querySelector("#empty-chat") as HTMLLIElement;
        empytChatMsg.style.display = "none";
        const messages = document.querySelector(
          "#messages"
        ) as HTMLUListElement;
        const message = document.createElement("li");
        message.innerHTML = `<span>${name}: </span>${msg}`;
        messages.append(message);
      });
    });
  };

  setUsername = (username: string, privateRoom: boolean) => {
    setState({
      ...stateRef.current,
      username,
      private: privateRoom,
    });
    connectSocket(privateRoom);
  };

  setUsers = (users: User[]) => {
    setState({
      ...stateRef.current,
      users,
    });
  };

  setPrivateState = (bool: boolean) => {
    setState({
      ...stateRef.current,
      private: bool,
    });
  };
  setSocket = (socket: SocketIOClient.Socket) => {
    setState({
      ...stateRef.current,
      socket,
    });
  };
  return (
    <SocketContext.Provider
      value={{
        ...state,
        setUsername,
        setUsers,
        setPrivateState,
        setSocket,
        joinPrivateRoom,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
