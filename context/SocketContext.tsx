import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

/**TYPES */
interface InitialState {
  username: string | null;
  private: boolean | null;
  socket: SocketIOClient.Socket | null;
}

let setUsername: (username: string) => void;
let setPrivateState: (bool: boolean) => void;
let setSocket: (socket: SocketIOClient.Socket) => void;
/**END OF TYPES */

const initialState: InitialState = {
  username: null,
  private: null,
  socket: null,
};

export const SocketContext = createContext({
  ...initialState,
  setUsername: (x: string) => {},
  setPrivateState: (bool: boolean) => {},
  setSocket: (socket: SocketIOClient.Socket) => {},
});

const SocketContextProvider: React.FunctionComponent = (props) => {
  const router = useRouter();
  const [state, setState] = useState(initialState);
  useEffect(() => {
    console.log("context: ", state);
  }, [state]);
  setUsername = (username) => {
    setState({
      ...state,
      username,
    });
  };
  setPrivateState = (bool: boolean) => {
    setState({
      ...state,
      private: bool,
    });
  };
  setSocket = (socket: SocketIOClient.Socket) => {
    setState({
      ...state,
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
