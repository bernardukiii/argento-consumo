import api from "./api/api"

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
      <section>
        <h1>Bienvenidos a ARGENTO-CONSUMO</h1>
        <p>La idea es comparar empresas argentinas con estadounidenses para ver cuanto nos falta para competirles en nuestro mercado local</p>
      
        <div>
          <ul>
            {
              fizzyDrinks.map((drink) => (
                <li className="flex flex-col">
                  <span>{ drink.brand }</span>
                  <span>{ drink.crp }</span>
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
