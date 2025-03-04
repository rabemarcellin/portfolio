import { createContext } from "react"
import { TextVisibilityContextType } from "../../typescript/text-visibility.context"

const TextVisibilityContext = createContext<TextVisibilityContextType | null>(null)
export default TextVisibilityContext
