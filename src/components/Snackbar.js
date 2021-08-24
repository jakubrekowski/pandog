

function Snackbar (props) {
  const {
    display,
    message,
    color
  } = props;

  const className = `snackbar px-6 py-3 ${display}`
  
  return (
    <div className={className} style={{
      position: 'absolute',
      left: '15px',
      bottom: '15px',
      border: `1px solid ${color}`,
      color,
    }}>
      {message}
    </div>
  )
}

export default Snackbar
