import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.displayResult = this.displayResult.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            value: "breakfast"
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    displayResult(e) {
        return <div className="dish-item">
            <img src={(e.thumbnail == "" ? require("../not-found.png") : e.thumbnail)} alt=""></img>
            <div>
                <p>Title: {e.title} </p> 
            </div>
            <div>
                <p>Ingredients: {e.ingredients} </p>
            </div>
            <div>
                <a target="_blank" href={e.href}>Source Link</a>
            </div>
            <div>
                <button onClick={() => this.props.addMealList(e, this.state.value)}>Add To Meal Plan</button>
            </div>
        </div> 
    }

    render() {
        let resultItems = this.props.results;
        // console.log(resultItems);
        // console.log(this.props.results.length);
        let resultItem = resultItems.map(this.displayResult);

        return (
            <div className="result-container">
                <div className="meal-type">
                    <div className="content">Choose Meal Plan Type: </div>
                    <div className="select">
                        <select value={this.state.value} onChange={this.handleChange} name="type">
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                    </div>
                </div>
                <div className="result-list">
                    {
                        (resultItems.length > 0) 
                        ? resultItem
                        : "No Results"
                    }
                </div>   
            </div>
        );
    }
}

export default Result;