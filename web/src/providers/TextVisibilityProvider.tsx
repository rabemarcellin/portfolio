import { useState } from "react";
import TextVisibilityContext from "../store/contexts/TextVisibiltyContext";

// isVisible: boolean;
// setIsInvisible: (isInvisible: boolean) => void;


const TextVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
    const [isInvisible, setIsInvisible] = useState(false)
    return (
        <TextVisibilityContext.Provider  value={{isInvisible, setIsInvisible }}>
            {children}
        </TextVisibilityContext.Provider>
    )
}
export default TextVisibilityProvider