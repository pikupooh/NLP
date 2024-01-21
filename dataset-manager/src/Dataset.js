import React from "react";
import {Button, Form, Row, Col} from 'react-bootstrap';

class Dataset extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedIntent: "",
            selectedIsValid: "",
            words: [],
            selectedEntities: []
        }
    }

    componentDidMount(){
        console.log(this.props.dataset)
        this.setState({
            selectedIntent: this.props.dataset.intent,
            selectedIsValid: this.props.dataset.isValid,
            words: this.props.dataset.text.split(' '),
            selectedEntities: this.props.dataset.entities
        })
    }

    handleOnIntentChange = (event) => {
        this.setState({
            selectedIntent: event.target.value
        })
    }

    handleOnResetClicked = () => {
        this.setState({
            selectedIntent: this.props.dataset.intent,
            selectedIsValid: this.props.dataset.isValid,
            selectedEntities: this.props.dataset.entities
        })
    }

    handleOnSaveClicked = () => {
        console.log(this.state)
        
    }

    handleOnIsValidChange = (event) => {
        this.setState({
            selectedIsValid: event.target.checked
        })
    }

    handleOnEntitityChange = (event) => {
        let index = event.target.name.replace("selectEntity","");
        index = parseInt(index, 10)
        const updatedEntityList = [...this.state.selectedEntities]
        updatedEntityList[index] = event.target.value
        this.setState({
            selectedEntities: updatedEntityList
        })
    }

    render(){
        return(
            <div className="dataset_container">
                <div>
                    Text: {this.props.dataset.text}
                </div>
                <div>
                    <form>
                        <label for="intent">Intent</label>
                        <select name="intent" id="intent" className="intent_select_option" value={this.state.selectedIntent} onChange={this.handleOnIntentChange}>
                            {this.props.intents.map((intent, index) => <option key={index} value={intent}>{intent}</option>)}
                        </select>
                    </form>
                </div>
                <div>
                    <Form.Check label="Is Valid" type="checkbox" checked={this.state.selectedIsValid} onChange={this.handleOnIsValidChange}/>
                </div>
                <div>
                    <Form.Check label="Added to Training Dataset" type="checkbox" disabled="{true}" checked={this.props.dataset.addedToTraining} />
                </div>
                <div>
                    <Row>
                        <Col xs={1}>
                            Entities
                        </Col>
                        <Col>
                            <Row>
                                {this.state.words.map((word, word_index) => 
                                    <Col xs={1} key={word_index}>
                                        <form>
                                            <label for={"selectEntity" + word_index}>{word}</label>
                                            <select name={"selectEntity" + word_index} className="entity_select_option" value={this.state.selectedEntities[word_index]} onChange={this.handleOnEntitityChange}>
                                                {this.props.entities.map((entity, entity_index) => <option key={entity_index} value={entity}>{entity}</option>)}
                                            </select>
                                        </form>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                    
                </div>
                <div className="dataset_buttons_panel">
                    <Button variant="secondary" className="dataset_button" onClick={this.handleOnResetClicked}>Reset</Button> 
                    <Button variant="danger" className="dataset_button" onClick={this.handleOnSaveClicked}>Save</Button> 
                </div>
            </div>
        )
    }
}

export default Dataset; 