import { createContext, useContext, useState } from 'react'

export const ContextApiComp = createContext()


const ContextApi = ({ children }) => {
    const [user, setuser] = useState(null)
    function setUserProfile(e) {
        setuser(e)
    }
    return (
        <ContextApiComp.Provider value={{ setUserProfile, user }}>
            {children}
        </ContextApiComp.Provider>

    )
}

export default ContextApi


export const useContextData = () => {
    const data = useContext(ContextApiComp)
    return data
}