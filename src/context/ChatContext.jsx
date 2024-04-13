import { useContext, createContext, useReducer } from "react"
import {AuthContext} from "./AuthContext"

export const ChatContext = createContext()

export const ChatContextProvider = ({children})=>{
    const {currentUser} = useContext(AuthContext)
    const INITIAL_STATE = {
        chatId:"null",
        user:{}
    }

    const chatReducer = (state, action)=>{
        switch (action.type) {
            case "SET_ACTIVE_USER":
                return {
                    user:action.payload,
                    chatId:currentUser.uid > action.payload.uid ? currentUser.uid + action.payload.uid : action.payload.uid + currentUser.uid 
                }
            default:
                return state
        }
    }
    // create the reducer
    const [state, dispatch] = useReducer(chatReducer,INITIAL_STATE)

    return (
        <ChatContext.Provider value={{ data:state, dispatch }}>
            {children}
        </ChatContext.Provider>
    )
}