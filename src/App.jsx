import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer';
import './App.css';
import PlayerDetails from './components/PlayerDetails'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/players">All Players</Link>
    </nav>
  );
}

function App() {

  return (
  <>
    <Navbar />
    <h1>Puppy Bowl</h1>
  
    <Routes> 
      <Route path="/" element={<AllPlayers/>} />
      <Route path="/players" element={<AllPlayers />} />
      <Route path="/players/:playerId" element={<SinglePlayer />} />
      <Route path="/player-details/:playerId" element={<PlayerDetails />} />
    </Routes>
    
  </>
  )
}

export default App
 

