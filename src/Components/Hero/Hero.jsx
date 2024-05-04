import Card from '../Card/Card';
import './style.css'
import { IoMdSend } from "react-icons/io";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="upper">
          <Card width="64%" cardType="bigText" border='none'/>
          <Card width="35%" />
        </div>
        <div className="btm">
          <Card width="35%" />
          <Card width="64%" />
        </div>

      </div>
      <div className="search-bar">
        <input type="text" placeholder="Type Something................" />
        <button><IoMdSend size={'1.5rem'} color='#FEEFDD'/></button>
      </div>
    </div>
  )
}

export default Hero
