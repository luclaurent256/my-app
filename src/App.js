import logo from './logo.svg';
import './App.css';
import Mail from './Components/Mail';
import Counter from './Components/Counter';
import Chrono from './Components/Chrono';
import UserProfilCard from './Components/UserProfilCard';
import Shop from './Components/Shop'

function App() {
  return (
    <div className="App">
      <Mail/>
      <p><Counter/></p>
      <p><Chrono/></p>
      <p><UserProfilCard
      age = "28"
      name = "Hannah"
      city = "San Diego"
      imageSrc= "https://cdn.pixabay.com/photo/2020/04/26/09/07/bird-5094334__340.jpg"
      /></p>
      <p><Shop shopP="produit"/></p>
    </div>
  );
}

export default App;
