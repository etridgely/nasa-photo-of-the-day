import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaFrame() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=D7UALoHVNBUcJ1Fmmm3Onf2WRRHIWr65B1pnDTi3')
            .then(response => {
                const spaceImage = response.data;
                console.log(spaceImage);
                setImage(spaceImage);
            });
    })

    return (
        <div className="container">
            <div className="NasaCard">
            <NasaCard 
            key="ss" 
            url={image.url}
            title={image.title}
            date={image.date}
            explanation={image.explanation}
            />
            </div>
            <button onClick={() => setImage("Nasa Image")}>New Image, Please!</button>
        </div>
    );
}