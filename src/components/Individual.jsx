import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Individual() {
  const { userId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getCharacter = async () => {
      const url = `https://rickandmortyapi.com/api/character/${userId}`;
      const response = await axios.get(url);
      console.log(response);
      setCharacter(response.data);
    };
    getCharacter();
  }, []);
  console.log(userId);
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.image} height={150} />
      <p>{character.status}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => navigate("/display")}
      >
        Return to Name
      </button>
    </div>
  );
}

export default Individual;
