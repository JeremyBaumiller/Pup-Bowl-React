import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlayerCard from './PlayerCard'
import { fetchSinglePlayer } from '../API'


function SinglePlayer() {
    const [player, setPlayer] = useState(null)
    const { playerId } = useParams();
  
    useEffect(() => {
      const getPlayerById = async () => {
        const fetchedPlayer = await fetchSinglePlayer(playerId)
        setPlayer(fetchedPlayer);
      }
      getPlayerById()
    }, [playerId]);

      if (!player) {
        return <h3>404: Player not found</h3>

      }
        
        return ( 
        <PlayerCard key={player.id} player={player} />
      
      )
    }


export default SinglePlayer