import React, {useState} from 'react';
import '../App.css';

const CartInfo =({imageData,amount, removeStuff, setToZero}) => {


    if(!(imageData.amount === 0)){
        
 
        return(
            <div>
            <h1> {imageData.title}</h1>
            <button onClick={e => removeStuff(imageData.id)}>Poista ostoskorista </button>
            <button onClick={e => setToZero(imageData.id)}>Poista kaikki </button>
             <h3> Ostoskorissa:  {imageData.amount} </h3>
             
            </div>
        ) } else {
            return (
                <div>
                
                </div>
            )
            }
    }
const Cart = ({images, updateImages, amount, setshowcart, showcart}) => {
    const removeStuff = id => {
        const tempImages = [...images];
        tempImages.find(img => img.id === id).amount--;
        updateImages(tempImages);
}


    const setToZero = id => {
        const tempImages = [...images];
        tempImages.find(img => img.id === id).amount = 0;
        updateImages(tempImages);
        
}


    if(showcart){
    return (
        <div class="Cart">
            {images.map(img => (
                
                <CartInfo imageData={img} key={img.id} removeStuff={removeStuff} setToZero={setToZero}/>
                
            ))}
            
            <br></br>
            <h1> Yhteensä: {amount} €</h1>
            <button onClick={e =>setshowcart(false)}>Confirm order </button>
        </div>
    )}
}
export default Cart;