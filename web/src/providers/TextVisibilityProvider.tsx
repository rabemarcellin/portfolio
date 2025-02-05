import { useState } from "react";
import TextVisibilityContext from "../store/contexts/TextVisibiltyContext";



const TextVisibilityProvider = ({ children }) => {
    const [isInvisible, setIsInvisible] = useState(false)
    return (
        <TextVisibilityContext.Provider  value={{isInvisible, setIsInvisible }}>
            {children}
        </TextVisibilityContext.Provider>
    )
}
export default TextVisibilityProvider