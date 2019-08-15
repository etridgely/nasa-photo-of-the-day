import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import { Container } from 'semantic-ui-react'

export default function NasaFrame() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=gc89VrA1LGglb6skf82gAvA3e6iOaimhjCypIBKR/`)
            .then(response => {
                const spaceImage = response.data;
                console.log(spaceImage);
                setImage(spaceImage);
            });
    }, [])

    return (
        <Container className="container">
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
        </Container>
    );
}