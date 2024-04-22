import { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard'
import { fetchAllPlayers } from '../API'

function AllPlayers() {
    const [players, setPlayers] = useState([])
    const [filteredPlayers, setFilteredPlayers] = useState([])
  
    useEffect(() => {
      const getPlayers = async () => {
        const playersFromAPI = await fetchAllPlayers()
        setPlayers(playersFromAPI)
        setFilteredPlayers(players)
    }
      getPlayers()
    }, [])

const onInputChange = (event) => {
    //console.log(event.target.value);
    const searchTerm = event.target.value.toLowerCase()
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchTerm))

    setFilteredPlayers(filteredPlayers);
}

    return (
        <>
        <input onChange={onInputChange} />
        {filteredPlayers.map(player => <PlayerCard key={player.id} player={player} />)}
        </>
      )
    }


export default AllPlayers