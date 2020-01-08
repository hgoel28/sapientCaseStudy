import React from "react";
import CardContainer from "./CardContainer";

interface IMainContainerProps {
    characters: [];
}

interface IMainContainerState {
    character: {}
}

export default class MainContainer extends React.Component<IMainContainerProps, IMainContainerState> {
    public constructor(props: IMainContainerProps) {
        super(props); 
        this.state = {
            character: {}
        }
    }

    public render() {
        return (
            <div className = "main-container">
                <CardContainer characters = {this.props.characters} />
            </div>
        );
    }

    private readonly changeActiveCard =(character: {}) => {
        this.setState({character: character});   
    }
}