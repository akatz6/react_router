import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DisplayNames() {
  const [rickAndMorty, setRickAndMorty] = useState([]);

  useEffect(() => {
    const getRickAndMorty = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      setRickAndMorty(response.data.results);
    };
    getRickAndMorty();
  }, []);
  return (
    <div>
      {rickAndMorty.map((element) => {
        return (
          <div key={element.id}>
            <p>
              <Link to={`/individual/${element.id}`}>{element.name}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayNames;
