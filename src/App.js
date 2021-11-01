//import logo from './logo.svg';
import './App.css';
import UserProfile from './Components/UserProfile';
{/*import Mail from './Components/Mail';
import Counter from './Components/Counter';
import Chrono from './Components/Chrono';
import UserProfilCard from './Components/UserProfilCard';
import Shop from './Components/Shop';
import Button1 from './Components/Button1';
import BookDetails from './Components/BookDetails';
import SnackBar from './Components/SnackBar';
import Tabs from './Components/Tabs';*/}



function App() {
//***** Déclarationde variable */
//Exo tabs  
{/*}  const tabsLabel = [
    {id: 1, label: 'The Pacific Crest Trail (US)'},
    {id: 2, label: 'The Great Divide Trail (Canada)'},
    {id: 3, label: 'Camino de Santiago (Spain)'}
  ];*/}
//Exo ProfilType
const user = {
  firstname: 'John',
  //lastname: 'Kunkel',
  location: {
 //   country: 'United States',
  //city:'Atlanta'
  },
  age: 49,
  picture: 'HarveyPicture',
  interests: [
    'Cinematic FPV drone',
    'Hiking',
    'Music'
  ]
};
//**** Code JSX */
  return (
    <div className="App">
      {/*<Mail/>
      <p><Counter/></p>
      <p><Chrono/></p>
      <p><UserProfilCard
      age = "28"
      name = "Hannah"
      city = "San Diego"
      imageSrc= "https://cdn.pixabay.com/photo/2020/04/26/09/07/bird-5094334__340.jpg"
      /></p>
      <p><Shop shopP="produit"/></p>
      <p><Button1 label='Click on me' disabled = {true} 
      backgroundColor = 'yellow' color = 'white' isRounded = {true}/></p>
       <p><BookDetails title="Autant en emporte le vent"
         description="guerre de secession" genre="roman" author="brian O'Neil"
         releasedAt={new Intl.DateTimeFormat('fr-FR').format()}/>
       </p>
       <SnackBar top={10} right={10} color='blue'>
          <strong>Hello world</strong>
          <p>How are you ?</p>
       </SnackBar>
       <div classeName="wrapper">
         <Tabs tabsLabel={tabsLabel}>
           <div id="1">
             <p> paragraphe 1er onglet</p>
           </div>
           <div id="2">
             <p> paragraphe 2ème onglet</p>
           </div>
           <div id="3">
             <p> paragraphe 3ème onglet</p>
           </div>
         </Tabs>
       </div>*/} 
       <UserProfile user={user} />
    </div>
  );
}

export default App;

