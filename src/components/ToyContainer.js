import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toyCollection, setToyCollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(collection => renderToys(collection))
  }, [])

  const renderToys = (collection) => {
    setToyCollection(collection.map(toy => {
      return <ToyCard key={toy.id} toy={toy}/>;
    }));
  }


  return (
    <div id="toy-collection">{ toyCollection }</div>
  );
}

export default ToyContainer;
