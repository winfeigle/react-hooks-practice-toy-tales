import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(setToys)
  }, [])

  const onAddToy = (newToy) => {
    setToys([...toys, newToy])
  }

  const onDeleteToy = (id) => {
    setToys(toys => {
      const updatedToys = toys.filter(toy => {
         return toy.id !== id ;
        })
        return updatedToys;
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={onAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={onDeleteToy}/>
    </>
  );
}

export default App;
