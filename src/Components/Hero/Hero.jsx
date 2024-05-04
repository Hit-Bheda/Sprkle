import './style.css'
import { IoMdSend } from "react-icons/io";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-container"></div>
      <div className="search-bar">
        <input type="text" placeholder="Type Something................" />
        <button><IoMdSend size={'1.5rem'} color='#FEEFDD'/></button>
      </div>
    </div>
  )
}

export default Hero
