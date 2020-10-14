import { createContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";

/**TYPES */
interface InitialState {
  username: string | null;
  private: boolean | null;
  socket: SocketIOClient.Socket | null;
}
let setUsername: (username: string) => void = (s) => {};
let setPrivateState: (bool: boolean) => void = (b) => {};
let setSocket: (socket: SocketIOClient.Socket) => void = (socket) => {};
/**END OF TYPES */

const initialState: InitialState = {
  username: null,
  private: null,
  socket: null,
};

export const SocketContext = createContext({
  ...initialState,
  setUsername,
  setPrivateState,
  setSocket,
});

const SocketContextProvider: React.FunctionComponent = (props) => {
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    console.log("context: ", state);
    // console.log("ref: ", stateRef.current);
  }, [state]);

  const connectSocket = () => {
    const socket = io("http://localhost:5000/");
    socket.on("connect", () => {
      setState({
        ...stateRef.current,
        socket,
      });
    });
  };

  setUsername = (username: string) => {
    setState({
      ...stateRef.current,
      username,
    });
    connectSocket();
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
      value={{ ...state, setUsername, setPrivateState, setSocket }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
