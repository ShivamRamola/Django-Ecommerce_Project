import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log("Error fetching messaging:", error));
  }, []);
  return (
    <div>
      <h1>Message From backend</h1>
      <p>{message ? message : "Loading..."}</p>
    </div>
  );
}
export default App;
