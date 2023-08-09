import { chatReducer } from "@/reducers/chatReducer";
import { Message } from "@/types/Message";
import { createContext, useReducer, useContext } from "react";

type ChatContext = {
    chat: Message[];
    setChats: (user: string, text: string) => void;
}

export const ChatContext = createContext<ChatContext | null>(null)

export const ChatProvider = ({children}: {children: React.ReactNode}) =>{
    const [chat, dispatch] = useReducer(chatReducer, [])

    const setChats = (user: string, text: string) => {
        dispatch({
            type: "add",
            payload: {user, text}
        })
    }

    return(
        <ChatContext.Provider value={{chat, setChats}}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext)