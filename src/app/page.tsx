import api from "./api/api"
import BdkiBarChart from "./components/BdkiBarChart"
import Image from "next/image"

export default async function HomePage() {
  const drinks = await api.drink.list()
  const foods = await api.food.list()
  let fizzyDrinks: any [] = [] 
  const filterDrinksBrands = ['cunnington', 'manaos', 'coca-cola', 'pepsi']

  drinks.forEach((drink) => {
    let loweredBrand = drink.brand.toLocaleLowerCase()

    filterDrinksBrands.forEach((brand) => {
      if (loweredBrand == brand) {
        fizzyDrinks.push(drink)
      } else {
        return
      }
    })

    return fizzyDrinks
  })

  const setHeight = () => {
    let americanDrinks: number[] = []
    let argentineDrinks: number[] = []
    
    // Filter Argentine and American brands based on the brand name
    drinks.forEach((drink) => {
      if (drink.brand.toLowerCase() === 'manaos' || drink.brand.toLowerCase() === 'cunnington') {
        argentineDrinks.push(drink.crp)
      } else if (drink.brand.toLowerCase() === 'coca-cola' || drink.brand.toLowerCase() === 'pepsi') {
        americanDrinks.push(drink.crp)
      }
    })
  
    // Sum up total CRP for Argentine and American brands
    const totalArgDrinks = argentineDrinks.reduce((accumulator, crp) => accumulator + crp, 0)
    const totalUsDrinks = americanDrinks.reduce((accumulator, crp) => accumulator + crp, 0)
  
    console.log('Total Argentine drinks:', totalArgDrinks)
    console.log('Total US drinks:', totalUsDrinks)
  
    // Determine the max height based on the larger total
    const maxHeight = 100 // Represents 100% height
  
    // Calculate heights relative to the max height
    let argentineHeight, americanHeight
  
    if (totalArgDrinks >= totalUsDrinks) {
      argentineHeight = maxHeight
      americanHeight = (totalUsDrinks / totalArgDrinks) * maxHeight
    } else {
      americanHeight = maxHeight
      argentineHeight = (totalArgDrinks / totalUsDrinks) * maxHeight
    }
  
    console.log('Argentine height:', argentineHeight + '%')
    console.log('American height:', americanHeight + '%')

    return { argentineHeight, americanHeight }
  }

  const { argentineHeight, americanHeight } = setHeight()

  return ( 
    <>
      <section className="w-full h-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <h1>Bienvenidos a ARGENTO-CONSUMO</h1>
          <p>La idea es comparar las empresas argentinas contra las estadounidenses para ver cuanto nos falta para competirles en nuestro mercado local</p>
        </div>

          <div className="h-full w-full flex justify-around items-center">
            {/* TRUMPOMETER LEFT */}
            <div className="h-full w-1/6 flex items-end">
              <div style={{ height: `${americanHeight}%` }}>
                <Image src={'/trump.jpg'} width={200} height={200} alt="trump" className="rounded-full border-4 border-red-600" />
              </div>
            </div>
            {/* MAIN CHART */}
            <div className="h-full w-full flex flex-col justify-between items-center">
                <h1 className="p-2 m-4 font-bold text-2xl">Gaseosas Cola</h1>
                <BdkiBarChart data={fizzyDrinks} />
            </div>
            {/* MESSIOMETER RIGHT */}
            <div className="h-full w-1/6 flex items-end">
              <div style={{ height: `${argentineHeight}%` }} >
                <Image src={'/messi.jpg'} width={200} height={200} alt="messi" className="rounded-full border-4 border-blue-600" />
              </div>
            </div>
          </div>

        {/* <div>
          {JSON.stringify(foods, null, 2)}
        </div> */}
      </section>
    </>
  )
}
