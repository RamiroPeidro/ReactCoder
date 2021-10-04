import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar brandName="B.O" link1 = "Catalogo" link2 = "About Us" link3="SS22'"/>
      <ItemListContainer greeting="Bienvenidos"/>
    </div>
  );
}

export default App;
