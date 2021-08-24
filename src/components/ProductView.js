import { Link } from "react-router-dom"

function ProductView(props) {
  return(
    <Link to="/product" className="product-view text-center p-4 mx-2 mt-6">
      <img style={{
        width: "220px",
        height: "220px",
        marginLeft: "auto",
        marginRight: "auto",
      }} src={props.product.picture} alt="pandog dysk" />
      <h2 className="mt-4" style={{ fontSize: "24px" }}>{props.product.name}</h2>
      <p className="mt-2">
        <span style={{ fontSize: "24px" }} className="font-bold">{props.product.price} zł</span> <span className="text-gray-600 text-sm">/szt.</span>
      </p>
    </Link>
  )
}

export default ProductView