import { TextComponentProps } from "@/types/types"
import { useContext, useState } from "react"
import { ThemeContext } from "@/contexts"
import { getTextClassFromTheme } from "@/utils/theme"

const Heading = ({text, setText}: TextComponentProps) => {
  
  const {theme} = useContext(ThemeContext);
  const textClass = getTextClassFromTheme(theme);
  const [userInput, setUserInput] = useState(text);
  return (
    <div className="px-[80px] pb-[40px]">
      <input
      className={`border-none outline-none text-4xl font-bold bg-transparent ${textClass} `}
       type="text" value={userInput} onChange={(event) => setUserInput(event.target.value) }/>
    </div>
  )
}

export default Heading
