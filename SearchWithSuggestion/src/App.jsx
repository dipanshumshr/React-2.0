import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MOCK_SUGGESTIONS } from "./data.js";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [arrayResult, setArrayResult] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = MOCK_SUGGESTIONS.filter((value) =>
        value.toLowerCase().includes(searchInput.toLowerCase())
      );
      setArrayResult(result);
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  function handleChange(event) {
    setIsLoading(true);
    const { value } = event.target;
    setSearchInput(value);
    setEmpty(value === "");
  }
  return (
    <>
      <input type="text" value={searchInput} onChange={handleChange} />
      {isloading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {!empty &&
            arrayResult.length > 0 &&
            arrayResult.map((value, index) => (
              <li key={index} onClick={() => setSearchInput(value)}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: value.replace(
                      new RegExp(`(${searchInput})`, "i"),
                      "<strong>$1</strong>"
                    ),
                  }}
                />
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default App;
