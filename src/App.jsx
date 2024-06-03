import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import PlayerDetails from "./components/PlayerDetails";
import { Link } from "react-router-dom";
import NewPlayerForm from "./components/NewPlayerForm";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h1>Puppy Bowl</h1>
      <NewPlayerForm />

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new-player-form" element={<NewPlayerForm />} />
        <Route path="/player-details/:playerId" element={<PlayerDetails />} />
      </Routes>
    </>
  );
}

export default App;
