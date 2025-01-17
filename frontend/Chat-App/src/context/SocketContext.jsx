import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser } = useContext(AuthContext);

    useEffect(() => {
        if (authUser) {
            const newSocket = io('http://localhost:5000', {
                query: {
                    userId: authUser.data.id
                }
            });

            setSocket(newSocket);

            newSocket.on('getOnlineUsers', (user) => {
                setOnlineUser(user);
            });

            // Clean up function
            return () => newSocket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); 

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </SocketContext.Provider>
    );
};
