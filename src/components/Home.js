import ProductView from "./ProductView"
import dysk from '../media/dysk.svg'

function Home() {
  return (
    <div className="home flex justify-center">
      <ProductView product={{ 
        name: "dysk",
        picture: dysk,
        price: "15",
       }} />
       <ProductView product={{ 
        name: "dysk II",
        picture: dysk,
        price: "25",
       }} />
    </div>
  )
}

export default Home