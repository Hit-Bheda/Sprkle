import './style.css'
// import { assets } from '../../assets/assets'
import { RiMenu3Fill } from "react-icons/ri";
function NavBar() {
  return (
    <div className='navBar'>
      <div className="logo">Sparkle</div>
      <div className="menu">
        {/* <img src={assets.menu_icon} alt="Menu" /> */}
        <RiMenu3Fill className='menu-icon' size={'1.5rem'} color='black'/>
      </div>

    </div>
  )
}

export default NavBar
