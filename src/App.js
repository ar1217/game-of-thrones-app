import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CharactersList from "./components/CharactersList";





function App() {
  const [characters, setCharacters] = useState([])

  const apiURL = "https://thronesapi.com/api/v2/Characters"


  const getAllCharacters = (url) => {
    axios
    .get(apiURL)
    .then((data) => {
      
      setCharacters(data.data)

    })
    .catch((error)=>{
      console.log(error)
    })
  }


  useEffect(() => {
    getAllCharacters(apiURL);
  }, []);


  return (
    <>
      <Navbar titulo="Consuming Game Of Thrones API" />
      <div className="container">
          <CharactersList personajes = {characters}/>
      </div>
    </>
  );
}

export default App;
