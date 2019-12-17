import React, {useState} from 'react';
import '../App.css';

const UserInfo =({showCart,setShowCart,newInfo, submitHandler}) => {

    
        return(

                <div>
                    <form onSubmit={submitHandler}>
                        Nimi
                        <input type="text" value={newInfo.nimi}  placeholder="nimi"/><br></br>
                        email
                        <input type="text" value={newInfo.email}  placeholder="email"/><br></br>
                        osoite
                        <input type="text" value={newInfo.osoite} placeholder="osoite"/><br></br>
                        Postiosoite
                        <input type="text" value={newInfo.Postiosoite}  placeholder="Postiosoite"/><br></br> 
                        Postitoimipaikka
                        <input type="text" value={newInfo.toimipaikka}  placeholder="Postitoimipaikka"/><br></br>
                        <button type="submit">save</button>
                        </form>
                </div>
        )
        }
export default UserInfo;