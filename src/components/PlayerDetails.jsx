import { useParams } from 'react-router-dom';

function PlayerDetails() {
    const { playerId } = useParams();
    console.log("Player ID:", playerId);
   

    return (
        <div>
            <h1>Player Details</h1>
            {/* Display player details here */}
        </div>
    );
}

export default PlayerDetails;
