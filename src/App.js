import Header from "./Header";
//Primer componente

/**COMPONENTES:
 Reglas:
1 - Son funciones
2 - Inician en mayúscula
3 - Todos tienen return
4 - Siempre deben retornar un solo elemento (etiquetas html o otro componente)
<></> Fragmentos: etiquetas que no salen en el código pero sirven para contener 
                  varios elementos para devolverlos como 1
 */

function App() {
  let nombre = "Eric";
  //Vista
  return (
    <>
      {/*Los comentarios en JSX se hacen así*/}
      {/**      <header id="header" className="header">
        <h1>My Page</h1>
      </header> */}
      <Header />
      <main>
        <h2>Home</h2>
        <p>Bienvenido {nombre}</p>
      </main>
      <footer>
        <p>Copyright &copy;</p>
      </footer>
    </>
  );
}

export default App;
