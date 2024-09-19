import api from "./api/api"

export default async function HomePage() {
  const drinks = await api.drink.list()
  const foods = await api.food.list()

  return ( 
    <>
      <section>
        <h1>Bienvenidos a ARGENTO-CONSUMO</h1>
        <p>La idea es comparar empresas argentinas con estadounidenses para ver cuanto nos falta para competirles en nuestro mercado local</p>
      
        <div>
          {JSON.stringify(drinks, null, 2)}
        </div>

        <div>
          {JSON.stringify(foods, null, 2)}
        </div>
      </section>
    </>
  )
}
