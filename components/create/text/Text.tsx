import { TextComponentProps } from "@/types/types"
import { getTextClassFromTheme } from "@/utils/theme"
import { useContext } from "react"
import { ThemeContext } from "@/contexts"
const Text = ({text, setText}: TextComponentProps) => {
  const {theme} = useContext(ThemeContext)
  const textClass = getTextClassFromTheme(theme);
  return (
    <div>
      <input className={`bg-transparent outline-none ${textClass}`} type="text" value={text} onChange={()=> {}}/>
    </div>
  )
}

export default Text