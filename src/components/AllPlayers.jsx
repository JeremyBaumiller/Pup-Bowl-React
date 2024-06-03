import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";
const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players);
    };
    getPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h4>{player.name}</h4>
          <img src={player.imageUrl}></img>
          <button onClick={() => navigate(`/players/${player.id}`)}>
            View Player
          </button>
        </div>
      ))}
    </div>
  );
};
export default AllPlayers;
