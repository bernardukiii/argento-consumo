export default async function HomePage() {
  const data = await fetch('/api')

  return ( 
    <>
      <section>
        <h1>Bienvenidos a ARGENTO-CONSUMO</h1>
        <p>La idea es comparar empresas argentinas con estadounidenses para ver cuanto nos falta para competirles en nuestro mercado local</p>
      </section>
    </>
  )
}
