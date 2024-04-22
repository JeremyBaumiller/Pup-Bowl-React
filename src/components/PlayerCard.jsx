import { useNavigate } from "react-router-dom"

function PlayerCard({ player }) {
    const navigate = useNavigate();

    const HandleDetailClick = () => {
        navigate(`/player-details/${player.id}`);
    };
    
    //TODO 
    //the user can click a details button (or something similar on each puppy 
    //that will lead them to another page view with specific details on that puppy, 
    //such as owner and team name.)
    
    
    
    
    return (
        <div className="single-player-card">
            <div className="header-info">
                <p className="player-title">{player.name}</p>
                <p className="player-number">{`#${player.id}`}</p>
        </div>
        <img src={player.imageUrl} alt={`Photo of ${player.name} the puppy`} />
        <button className="detail-button" onClick={HandleDetailClick}>See details</button>
        <button className="delete-button" data-id={player.id}>Remove from roster</button>
    </div>
    )
}

export default PlayerCard