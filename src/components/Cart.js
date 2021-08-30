import Header from './Header'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Quantity from './Quantity'
import dysk from '../media/dysk.svg'
import sha1 from 'sha1'

const products = [
  {
    name: 'Bardziej dyskowy dysk',
    picture: dysk,
    price: 17,
    color: 'Patriarcha'
  }, {
    name: 'Mniej dyskowy dysk',
    picture: dysk,
    price: 15,
    color: 'Panameta'
  }
]

function Cart() {
  
  const [prices, setPrices] = useState([])
  const { register, handleSubmit, setValue, getValues } = useForm()

  return (
    <>
      <Helmet>
        <title>Koszyk | pandog</title>
      </Helmet>
      <div className="grid grid-cols-5 gap-4">
        <div></div>
        <div className="col-span-3 mt-8">
          <Header title="Koszyk" />
          <form onSubmit={handleSubmit} className="table mt-6">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "60%", textAlign: "left" }}>Przedmioty</th>
                  <th style={{ width: "20%" }}>Ilość</th>
                  <th style={{ width: "20%", textAlign: "right" }}>Razem</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => {
                  const name = 'Product.' + product.name
                  return (                 
                    <tr key={sha1(product.name)}>
                      <td className="flex items-center">
                        <img src={product.picture} alt={product.name} className="block mr-4" />
                        <div className="text-2xl">
                          <h2 className="font-medium">{product.name}</h2>
                          <p>{product.price} zł <span className="text-base text-gray-600">/szt.</span></p>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <Quantity name={sha1(name)} register={register} setValue={setValue} getValues={getValues} />
                        </div>
                      </td>
                      <td>
                        <div className="text-right">
                          <h2 className="text-2xl text-gray-600">{product.price * getValues()[`quantityProduct.${sha1(product.name)}`]} zł</h2>
                          {console.log(`quantityProduct.${sha1(product.name)}`)}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            <button>handleSubmit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Cart