import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Quantity(props) {
  function increment() {
    const value = props.getValues()['quantity' + props.name]
    props.setValue('quantity' + props.name, parseInt(value) + 1)
  }

  function decrement() {
    const value = props.getValues()['quantity' + props.name]
    if (value > 1) {
      props.setValue('quantity' + props.name, parseInt(value) - 1)
    } else {
      props.setValue('quantity' + props.name, 1)
    }
  }

  return (
    <div className="flex p-1" style={{
      width: "125px",
      border: "1px solid #646464"
    }}>
      <div className="button-quantity" onClick={decrement}><RemoveIcon /></div>
      <input className="text-center" {...props.register('quantity' + props.name)} style={{
        width: `${125-2*24-8}px`,
      }} id="count" type="number" min={1} />
      <div className="button-quantity" onClick={increment}><AddIcon /></div>
      {props.setValue('quantity' + props.name, 1)}
    </div>
  )
}

// class Quantity extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {quantity: 1};
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.textChanged = this.textChanged.bind(this);
//   }

//   increment() {
//     this.setState((state, props) => ({
//       quantity: state.quantity + 1
//     }))
//   }
  
//   decrement() {
//     this.setState((state, props) => ({
//       quantity: state.quantity - 1
//     }))
//   }
  
//   textChanged(e) {
//     this.setState({quantity: parseInt(e.target.value)})
//   }

//   render() {
//     return (
//       <div className="flex p-1" style={{
//         width: "125px",
//         border: "1px solid #646464"
//       }}>
//         <button onClick={this.decrement}><RemoveIcon /></button>
//         <input className="text-center" {...this.props.register('quantity')} value={this.state.quantity} onChange={this.textChanged} style={{
//           width: `${125-2*24-8}px`,
//         }} id="count" type="number" />
//         <button onClick={this.increment}><AddIcon /></button>
//       </div>
//     )
//   }
// }

export default Quantity
