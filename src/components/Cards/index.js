import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css"



const Cards = () => {
  let locations = [
    {
      id: 0,
      name: "Bora Bora",
      image:
        "https://travel.usnews.com/dims4/USNEWS/472cf27/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/borabora_445x280_dtTOVY1.jpg",
    },
    {
      id: 1,
      name: "Maui",
      image:
        "https://travel.usnews.com/dims4/USNEWS/070489a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/GettyImages-117211856_TeGITRy.jpg",
    },
    {
      id: 2,
      name: "London",
      image:
        "https://travel.usnews.com/dims4/USNEWS/0e6734a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/482151882_HjS9rWb.jpg",
    },
  ];

  const history = useHistory()

  function clickCard(id)   {
    console.log(id);
    history.push(`/Card/${id}`)

  }

  return <div className="cards">{locations.map((location, i) => (
    <div className="card" key={i}>
      <img  src={location.image}  alt="" onClick={() => clickCard(location.id)}/>
      <h3>{location.name}</h3>
    </div>
  ))}</div>;
};

export default Cards;
