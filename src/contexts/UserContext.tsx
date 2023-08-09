import { createContext, useState, useContext } from "react";

type UserContext = {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<UserContext | null>(null)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState('');
    
    return(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)