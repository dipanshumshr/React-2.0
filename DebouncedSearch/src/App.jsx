import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setLoading(true);
      async function getFetch() {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const respdata = await response.json();
          setResult(respdata);
          setLoading(false);
        } catch (err) {
          console.log("failed to fetch API", err);
        }
      }

      getFetch();
    }, 500);

    return () => {
      clearTimeout(timerID);
    };
  }, [searchText]);

  const filteredResult = result.filter(
    (value) =>
      value.title.toLowerCase().includes(searchText.toLowerCase()) ||
      value.body.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {loading ? (
          <li> Loading ... </li>
        ) : filteredResult.length > 0 ? (
          filteredResult.map((value) => (
            <li key={value.id}>
              {" "}
              <strong> {value.title} </strong> {value.body}{" "}
            </li>
          ))
        ) : (
          <li> No results lmao </li>
        )}
      </ul>
    </>
  );
}

export default App;
