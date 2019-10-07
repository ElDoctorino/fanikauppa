import React, {useState} from 'react';
import './App.css';
import images from './components/ImageData.js';
import ImagesInfo from './components/ImagesInfo.js';
import Cart from './components/Cart.js';
import UserInfo from './components/UserInfo.js';


const App = () => {
  const amounts = images.map(myImages => myImages.amount * myImages.price);
  const ordered = amounts.reduce((a,b) => a + b, 0);
  const [myImages,setMyImages] = useState(images);
  const [showCart,setShowCart] = useState(true);
  const [newInfo, setNewInfo] = useState({name: "", address:""});

  const infoChangeHandler = (event, field) => {
    const tempInfo = {...newInfo};
    tempInfo[field] = event.target.value;
    setNewInfo(tempInfo);
  }
  const infoSubmitHandler = event => {
    event.preventDefault();
    //tarkista että kaikki tiedot ok
    console.log("nimi: ", newInfo.name, "address:", newInfo.address);
    // jos ok niin nollaa:
    setNewInfo({name: "", address:""});
  }
  if (!showCart) {
  return  (
    <div className="Form">
        <UserInfo newInfo={newInfo} ChangeHandler={infoChangeHandler} submitHandler={infoSubmitHandler}> </UserInfo>
      </div>
    )
  } else {
return(

<div className="App">
  <header className="App-header">
      <h1>Tervetuloa kirjakauppaan!</h1>
  </header>
      
      <div className="container">
		    <ImagesInfo images={myImages} updateImages={setMyImages} />
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