import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null); 
  const [selected, setSelected] = useState("numbers");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bajaj-test-cu5v.onrender.com/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });
      const xyz = await res.json();
      console.log("xyz",xyz);

      const { numbers, alphabets, highest_lowercase_alphabet } = xyz;

      setResponse({ numbers, alphabets, highest_lowercase_alphabet });
    } catch (err) {
      setError("Invalid JSON or Network Error");
    }
  };

  const handleSelectOption = (e) =>{
    setSelected(e.target.value);
    
  }
  console.log(selected);
  
  console.log(response["numbers"]);
  

  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter JSON data here"
          rows="5"
          cols="50"
        />
        <button type="submit">Submit</button>
        <select onChange={handleSelectOption}>
          {/* <option value="" disabled>Select an option</option> */}
          <option value = "numbers">Numbers</option>
          <option value = "alphabets">Alphabets</option>
          <option value = "highest_lowercase_alphabet">Highest Lowercase Alphabets</option>
        </select>
      </form>
      <p>Filtered Response</p>
      
      
      {error && <p>{error}</p>}
      <p>{selected} : {JSON.stringify(response[selected])}</p>
      {/* {response[selected]  && <p>{JSON.stringify(response)}</p>} */}
      
    </div>
  );
}
