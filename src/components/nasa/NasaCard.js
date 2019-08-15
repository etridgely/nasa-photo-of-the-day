import React from "react";

const NasaCard = (props) => {
    return (
        <div className="nasa-card">
            {/* This is where the image will go */}
        <img className="nasa-image" alt="space image" src={props.url} />
        <h1>{props.title}</h1>
        <h3>{props.date}</h3>
        <p>{props.explanation}</p>
        </div>
    );
};

export default NasaCard;