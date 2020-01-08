import React from "react";
import Attributes from "./Attributes";

interface ICardProps {
    character: {name: string; image: string; status: string;species: string;gender: string};
    key: string;
}

export default class Card extends React.Component<ICardProps, {}> {
    public constructor(props: ICardProps) {
        super(props);
    }

    public render() {
        const {character} = this.props;
        return (
            <div className="card">
                <Attributes character = {character} />
            </div>
        );
    }
}