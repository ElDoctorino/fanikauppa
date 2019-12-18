import React, {useState} from 'react';
import './App.css';
import images from './components/ImageData.js';
import Imagesuser from './components/ImagesInfo.js';
import Cart from './components/Cart.js';
import UserInfo from './components/UserInfo.js';


const App = () => {
  const amounts = images.map(myImages => myImages.amount * myImages.price);
  const ordered = amounts.reduce((a,b) => a + b, 0);
  const [myImages,setMyImages] = useState(images);
  const [showCart,setShowCart] = useState(true);
  const [newUser, setNewUser] = useState({name: "", email:"", osoite:"",postiosoite:"",toimipaikka:""});

  const updateField = (event, fieldname) => {
    const tempUser  = {...newUser};
    tempUser[fieldname] = event.target.value;
    setNewUser(tempUser);
    console.log(newUser.name,newUser.email,newUser.osoite,newUser.postiosoite,newUser.toimipaikka);
  }
  const userSubmitHandler = event => {
    event.preventDefault();
    console.log('SubmitHandler');
    setShowCart(true)
    //tarkista että kaikki tiedot ok
   // console.log("nimi: ", newUser.name, "address:", newUser.address);
    // jos ok niin nollaa:
    setNewUser({name: "", email:"", osoite:"",postiosoite:"",toimipaikka:""});
  }

  if (!showCart) {
  return  (
    <div className="Form">
        <UserInfo newUser={newUser} updateField={updateField}setshowcart={setShowCart} submitHandler={userSubmitHandler}> </UserInfo>
      </div>
    )
  } else {
return(

<div className="App">
  <header className="App-header">
      <h1>Tervetuloa kirjakauppaan!</h1>
  </header>
      
      <div className="container">
		    <Imagesuser images={myImages} updateImages={setMyImages} />
      </div>

      <div className="Cart"> 
      <h1> Ostoskori</h1>
       <Cart showcart={showCart} setshowcart={setShowCart}images={myImages} updateImages={setMyImages} amount={ordered}/>
      </div>
      
    </div>
  )
}
}
export default App;