import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function InputContent() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: ""
  });

  function handle(e) {
    const newdata = {...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e, url){
    e.preventDefault();
    Axios({
      method: "POST",
      url: url, 
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        email: data.email
      }
    })
    .then(res => {
      console.log("Success!");
      document.getElementById('first_name').value = "";
      document.getElementById('last_name').value = "";
      document.getElementById('phone').value = "";
      document.getElementById('email').value = "";
    })
    .catch(err => {
      console.log("Could not add record :( :", err);
    });
  }

    return (
        <div className="content input">
          <h2 className="header-input">Add, Edit or Delete</h2>
          <h3>Ensure the email is either new, or the same as the record you wish to edit/delete.</h3>
          <input onChange={(e) => handle(e)} id="email" placeholder="Email Address" value={data.email} type="text" />
          <input onChange={(e) => handle(e)} id="first_name" placeholder="Forename" value={data.first_name} type="text" />
          <input onChange={(e) => handle(e)} id="last_name" placeholder="Surname" value={data.last_name} type="text" />
          <input onChange={(e) => handle(e)} id="phone" placeholder="Telephone Number" value={data.phone} type="text" />
          <button onClick={(e) => submit(e, "/api/add")} className="button-input" >Add</button>
          <button onClick={(e) => submit(e, "/api/edit")} className="button-input" >Edit</button>
          <button onClick={(e) => submit(e, "/api/delete")} className="button-input" >Delete</button>
        </div>
    );
};
export default InputContent;