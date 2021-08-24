import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <footer className="mt-8 text-xs">
      <div className="grid grid-cols-5">
        <div></div>
        <div className="col-span-3 hr"></div>
      </div>
      <nav className="nav-footer grid grid-cols-5 mt-3">
        <div></div>
        <div className="col-span-2 flex items-center">
          <Link to="/about">O nas</Link>
          <div className="mx-4">·</div>
          <Link to="/privacy">Polityka prywatności</Link>
          <div className="mx-4">·</div>
          <Link to="/terms">Regulamin</Link>
          <div className="mx-4">·</div>
          <Link to="/contact">Kontakt</Link>
          <div className="ml-4 mr-2">·</div>
          <a href="https://facebook.com/pandog" rel="noreferrer"><FacebookIcon style={{
            width: '16px',
            height: '16px',
          }} /></a>
          <div className="mx-2">·</div>
          <a href="https://instagram.com/pandog" rel="noreferrer"><InstagramIcon style={{
            width: '16px',
            height: '16px',
          }} /></a>
        </div>
        <a href="https://unoff.pl" rel="noreferrer" className="block flex justify-end items-center col-span-1" style={{ color: "#bfbfbf", }} target="_blank">
          <div>&copy; {new Date().getUTCFullYear()} <span className="font-medium">unoff</span> cloud</div>
        </a>
      </nav>
      {/* <div className="credits grid grid-cols-5" style={{ color: "#bfbfbf", }}>
        
      </div> */}
    </footer>
  )
}

export default Footer