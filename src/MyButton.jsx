import "./button.css"
import { useState } from "react"

// {buttonText} = props

export default function MyButton({buttonText, color}) {
  const buttonStyle = { backgroundColor: color}
  const [count, setCount] = useState(0)

  const handleClick = () => setCount(count + 1)

// function handleClick(){
//   alert('you clicked')
// }

  return(
      <button onClick={handleClick} className="button" style={buttonStyle}>
        {buttonText} ({count})
      </button>
  )
}