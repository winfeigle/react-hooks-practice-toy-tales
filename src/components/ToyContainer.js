import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdatedToy }) {

  const toyCards = toys.map(toy => {
      return <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onUpdatedToy={onUpdatedToy}/>;
    });


  return (
    <div id="toy-collection">{ toyCards }</div>
  );
}

export default ToyContainer;
