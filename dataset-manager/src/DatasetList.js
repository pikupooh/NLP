import React from "react";

import Dataset from "./Dataset";

class DatasetList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usersDataset:[],
            trainingDataset:[],
            intents: [],
            entities: []
        }
    }

    componentDidMount(){
        this.setState({
            intents: ["call", "chat", "mail", "open"],
            entities: ["O", "B-PER", "I-PER"],
            usersDataset:[
                {
                    id: 1,
                    text: "users data 1",
                    intent: "call",
                    entities: ["O", "B-PER", "I-PER"],
                    isValid: false,
                    addedToTraining: false
                },
                {
                    id: 2,
                    text: "users data 2",
                    intent: "chat",
                    entities: "",
                    isValid: false,
                    addedToTraining: false
                },
                {
                    id: 3,
                    text: "users data 3 test test test test test test test test test test test test test test",
                    intent: "",
                    entities: "",
                    isValid: false,
                    addedToTraining: false
                },
            ],
            trainingDataset:[
                {
                    id: 1,
                    text: "training data 1",
                    intent: "",
                    entities: "",
                    isValid: true,
                    addedToTraining: true
                },
                {
                    id: 2,
                    text: "training data 2",
                    intent: "",
                    entities: "",
                    isValid: true,
                    addedToTraining: true
                },
                {
                    id: 3,
                    text: "training data 3",
                    intent: "",
                    entities: "",
                    isValid: true,
                    addedToTraining: true
                },
            ]
        });
    }

    render(){
        if(this.props.usersDataset){
            return(
                <div>
                    {this.state.usersDataset.map((userDataset, index) => 
                        <Dataset key={index} dataset={userDataset} intents={this.state.intents} entities={this.state.entities}/>
                    )}
                </div>
            )
        }
        else{
            return(
                <div>
                    {this.state.trainingDataset.map((dataset, index) => 
                        <Dataset key={index} dataset={dataset} intents={this.state.intents} entities={this.state.entities}/>
                    )}
                </div>
            )
        }
        
    }
}

export default DatasetList;