import ProductView from "./ProductView"
import dysk from '../media/dysk.svg'
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Dyski dla psa | pandog
        </title>
      </Helmet>
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
    </>
  )
}

export default Home