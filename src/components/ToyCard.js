import React from "react";

function ToyCard({toy, onDeleteToy, onUpdatedToy}) {
  const { id, name, image, likes } = toy;

  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => onDeleteToy(id))
  }

  const handleLikeClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //This handles the updated like count
        likes: likes + 1,
      })
    })
      .then(res => res.json())
      .then(updatedToy => onUpdatedToy(updatedToy))
      
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"🤍"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
