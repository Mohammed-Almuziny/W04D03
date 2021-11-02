import React from "react";
import { useParams } from "react-router-dom";
import "./style.css"

const Card = () => {
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
  let cardId = useParams().id;

  let card = locations.find((location) => String(location.id) === cardId);

  return (
    <div className="cardInfo">
      <img  src={card.image}  alt=""/>
      <h2>{card.name}</h2>
    </div>
  );
};

export default Card;
