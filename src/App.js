import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Welcome Eric" />
      <Footer />
    </>
  );
}

export default App;
