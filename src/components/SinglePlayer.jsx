import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllPlayers } from "../API/index";

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      const players = await fetchAllPlayers();
      const singlePlayer = players.find((p) => p.id === parseInt(id));
      setPlayer(singlePlayer);
    };
    getPlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>{player.breed}</p>
    </div>
  );
};

export default SinglePlayer;
