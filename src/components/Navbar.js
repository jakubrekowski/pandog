import { Link } from 'react-router-dom'
import icon from '../media/icon.svg'
import logo from '../media/logo.svg'
import recycling from '../media/recycling.svg'
import cart from '../media/cart.svg'

function Navbar() {
  return (
    <nav className="navbar grid grid-cols-5 shadow-md">
      <div></div>
      <div className="flex items-center">
        <Link to="/"><img src={icon} alt="pandog icon" /></Link>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/"><img src={logo} alt="pandog logo" /></Link>
      </div>
      <div className="flex items-center justify-end">
        <Link to="/recycling" className="mr-2"><img src={recycling} alt="recycling" /></Link>
        <Link to="/cart"><img src={cart} alt="cart" /></Link>
      </div>
    </nav>
  )
}

export default Navbar