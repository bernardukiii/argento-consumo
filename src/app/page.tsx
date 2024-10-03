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

  return ( 
    <>
      <section className="w-full h-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <h1>Bienvenidos a ARGENTO-CONSUMO</h1>
          <p>La idea es comparar las empresas argentinas contra las estadounidenses para ver cuanto nos falta para competirles en nuestro mercado local</p>
        </div>

          <div className="h-full w-full flex justify-around items-center">
            {/* TRUMPOMETER LEFT */}
            <div className="h-full w-1/6 bg-blue-200">
              <Image src={'/trump.jpg'} width={200} height={200} alt="trump" className="rounded-full" />
            </div>
            {/* MAIN CHART */}
            <div className="h-full w-full flex flex-col justify-between items-center">
                <h1 className="p-2 m-4 font-bold text-2xl">Gaseosas Cola</h1>
                <BdkiBarChart data={fizzyDrinks} />
            </div>
            {/* MESSIOMETER RIGHT */}
            <div className="h-full w-1/6 bg-blue-200">
              <Image src={'/messi.jpg'} width={200} height={200} alt="messi" className="rounded-full" />
            </div>
          </div>

        {/* <div>
          {JSON.stringify(foods, null, 2)}
        </div> */}
      </section>
    </>
  )
}
