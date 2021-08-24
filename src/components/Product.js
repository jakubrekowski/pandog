import Header from './Header'
import dysk from '../media/dysk.svg'
import { useForm } from 'react-hook-form'
import Quantity from './Quantity'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Snackbar from './Snackbar'
import { useState } from 'react'

const product = {
  name: 'Bardziej dyskowy dysk',
  picture: dysk,
  price: 17,
  diameter: 25,
  weight: 113,
  colors: [
    {
      name: 'Patriarcha',
      hex: '#761987',
    },{
      name: 'Płomyczny pomarańcz',
      hex: '#ff6600',
    }
  ]
}

function Product() {
  const [displaySnackbar, setDisplaySnackbar] = useState('hidden')

  const { register, handleSubmit, setValue, getValues } = useForm()
  const onSubmit = async (data) => {
    if (data.colorSelector === null) {
      setDisplaySnackbar('visible')
      setTimeout(() => {
        setDisplaySnackbar('')
      }, 3000)
    }
    console.log(data)
  }



  return (
    <div className="grid grid-cols-5 gap-4 mt-8">
      <div></div>
      <div>
        <img src={product.picture} alt="" />
      </div>
      <div className="col-span-2 pl-8">
        <Header title={product.name} />
        <h3 className="text-xl font-bold mt-6">{product.price} zł</h3>
        <div className="flex mt-4">
          <div className="w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Quantity name="Product" register={register} setValue={setValue} getValues={getValues} />
              <div className="text-sm mt-4 mb-2">Kolor:</div>
              <div className="flex">
                {product.colors.map((color) => (
                  <div key={color.name} className="mr-2">
                    <input type="radio" name="color-group" id={'color-radio-' + color.name.split(' ')[0]} className="color-selector hidden" {...register(`colorSelector`)} value={color.name.split(' ')[0]} />
                    <label className="block" style={{
                      background: color.hex,
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                    }} htmlFor={'color-radio-' + color.name.split(' ')[0]}></label>
                  </div>
                ))}
              </div>
              <button className="px-8 py-2 mt-6" style={{
                border: "1px solid #646464"
              }}><AddShoppingCartIcon /> Dodaj do koszyka</button>
            </form>
          </div>
          <div className="w-1/2">
            <div className="font-medium">Specyfikacja:</div>
            <p>
              Średnica: {product.diameter} cm <br />
              Waga: ~{product.weight} g
            </p>
          </div>
        </div>
      </div>
      <Snackbar message="Przedmiot wymaga wybrania koloru!" color="#E13D3D" display={displaySnackbar} />
    </div>
  )
}

export default Product