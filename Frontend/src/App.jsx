import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend responded with an error");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data?.message ?? "No message received");
        setError("");
      })
      .catch((err) => {
        console.error("Failed to load backend message:", err);
        setError("Unable to reach backend");
      });
  }, []);

  return (
    <div>
      <h1>Message From backend</h1>
      {error ? <p>{error}</p> : <p>{message || "Loading..."}</p>}
    </div>
  );
}

export default App;
