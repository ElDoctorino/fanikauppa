import React, {useState} from 'react';
import '../App.css';

const UserInfo =({showCart,setshowcart,newUser, submitHandler,updateField}) => {

    
        return(

                <div>
                    <form onSubmit={e =>submitHandler(e)}>
                        Nimi
                        <input type="text" value={newUser.name} onChange={e => updateField(e, "name")}  placeholder="name"/><br></br>
                        email
                        <input type="text" value={newUser.email} onChange={e => updateField(e, "email")}  placeholder="email"/><br></br>
                        osoite
                        <input type="text" value={newUser.osoite} onChange={e => updateField(e, "osoite")} placeholder="osoite"/><br></br>
                        Postiosoite
                        <input type="text" value={newUser.postiosoite} onChange={e => updateField(e, "postiosoite")} placeholder="Postiosoite"/><br></br> 
                        Postitoimipaikka
                        <input type="text" value={newUser.toimipaikka} onChange={e => updateField(e, "toimipaikka")} placeholder="Postitoimipaikka"/><br></br>
                        <input type="submit" />
                        </form>
                        
                </div>
                // <input type="text" value={newUser.name} onChange={e => updateField(e, "nimi")} placeholder="nimi"/><br></br>
        )
        }
export default UserInfo;