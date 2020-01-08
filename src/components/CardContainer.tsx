import React from "react";
import Card from "./Card";

export default function CardContainer(props: any) {
    const characters = props.characters.map((character: {name: string; image: string; status: string;species: string;gender: string, id: string;}) => {
        return <Card character = {character} key = {character.id} />
    })

    return (
        <div className ="card-container">
            {characters};
        </div>
    );
}