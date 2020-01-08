import React from "react";

export default function Attributes(props: any) {
    const {character} = props;

    return (
        <div className ="attributes-container">
            <img src={character.image} alt='name'/>
            <h3 style={{width: "100%"}}>{character.name}</h3>
            <br/>
            <div>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            </div>
        </div>
    );
}