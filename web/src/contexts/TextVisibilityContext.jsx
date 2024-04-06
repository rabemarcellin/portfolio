import { createContext, useState } from "react";

const TextVisibilityContext = createContext(null)
export default TextVisibilityContext

export const TextVisibilityProvider = ({ children }) => {
    const [isInvisible, setIsInvisible] = useState(false)
    return (
        <TextVisibilityContext.Provider  value={{isInvisible, setIsInvisible }}>
            {children}
        </TextVisibilityContext.Provider>
    )
}