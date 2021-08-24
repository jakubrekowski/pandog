import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="flex items-center" style={{ color: "#646464", fill: "#646464", }}>
        <ArrowBackIcon style={{
          width: '20px',
          height: '20px',
        }} /> 
        <div>Powrót</div>
        </Link>
      <h1 className="text-3xl">{props.title}</h1>
    </header>
  )
}

export default Header