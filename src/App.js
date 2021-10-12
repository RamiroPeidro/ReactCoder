import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar/NavBar';
import { CarouselBs } from './components/CarouselBs/CarouselBs';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">

      <NavBar logo="https://t3.ftcdn.net/jpg/01/29/14/26/360_F_129142615_hM0CqIHqSOJP2eMCZJU3GhB6lmqS5gHc.webp" link1 = "Catálogo" link2 = "About Us" link3="SS22'"/>

      <CarouselBs/>

      <ItemListContainer greeting="PRODUCTOS"/>

    </div>
  );
}

export default App;
