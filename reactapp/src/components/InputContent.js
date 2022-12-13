import React, {useEffect, useState} from 'react';
import Axios from 'axios';

function InputContent() {
  const url = ""

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const jsonResult = result.json();
      setData(jsonResult);
    }

    fetchData();
  }, []);

  function handle(e) {
    const newdata = {...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      email: data.email
    })
    .then(res => {
      console.log(res.data)
    })
  }

    return (
        <div className="content input">
          <h2 className="header-input">Add</h2>
          <input className="forename-input" placeholder="Forename" value={data.first_name} onChange={(e) => handle(e)} />
          <input className="surname-input" placeholder="Surname" value={data.last_name} onChange={(e) => handle(e)} />
          <input className="phone-input" placeholder="Telephone Number" value={data.phone} onChange={(e) => handle(e)} />
          <input className="email-input" placeholder="Email Address" value={data.email} onChange={(e) => handle(e)} />
          <button className="button-input" onSubmit={(e) => submit(e)}>Add</button>
        </div>
    );
};
export default InputContent;