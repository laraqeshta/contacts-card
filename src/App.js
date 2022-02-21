import React, { useState, useEffect } from "react";
import ContactsCard from "./components/ContactsCard/ContactsCard";
import "./App.css";

function App() {
  //state
  const [results, setResults] = useState([]);

  //useEffect
  useEffect(() => {
    return fetch("https://randomuser.me/api/?results=25")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div className="flex">
      {results.map((result, index) => {
        return (
          <ContactsCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
}

export default App;
