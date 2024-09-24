import api from "./api/api"
import BdkiProgress from "./components/BdkiProgress"

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

  return ( 
    <>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1>Bienvenidos a ARGENTO-CONSUMO</h1>
          <p>La idea es comparar empresas argentinas con estadounidenses para ver cuanto nos falta para competirles en nuestro mercado local</p>
        </div>

        <div className="h-3/4 w-full flex flex-col justify-center items-center">
          <ul className="flex justify-center items-center w-3/4 h-full">
            {
              fizzyDrinks.map((drink) => (
                <li key={(drink.crp * 2)} className="h-full w-full flex flex-col justify-center items-center border-2 border-red-300">
                  <div className="h-full">
                    <BdkiProgress progress={drink.crp} />
                  </div>
                  <span className="border-2 border-green-600">{ drink.brand }</span>
                </li>
              ))
            }
          </ul>
        </div>

        {/* <div>
          {JSON.stringify(foods, null, 2)}
        </div> */}
      </section>
    </>
  )
}
