import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bajaj-test-cu5v.onrender.com/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });
      const xyz = await res.json();
      console.log(xyz);

      setResponse(data);
    } catch (err) {
      setError("Invalid JSON or Network Error");
    }
  };

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
      </form>
      <p>Filtered Response</p>
      {error && <p>{error}</p>}
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
}
