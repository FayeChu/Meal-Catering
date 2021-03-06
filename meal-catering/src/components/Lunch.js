import React, { Component } from 'react';
import './Lunch.css';

class Lunch extends Component {
    constructor(props, context) {
        super(props, context) 

        this.displayLunch = this.displayLunch.bind(this);
    }

    displayLunch(e) {
        return <div className="lunch-item">
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
                        <button onClick={() => this.props.handleDeleteLunch(e)}>Delete From Plan</button>
                    </div>
                </div> 
    }

    render() {
        let lunchList = this.props.lunchList;
        let lunchListItem = lunchList.map(this.displayLunch);

        return (
            <div className="lunch-container">
                <div className="lunch-list">
                    {
                        (lunchListItem.length > 0) 
                        ? lunchListItem
                        : "Nothing Added Yet"
                    }
                </div>
            </div>
        );
    }
}

export default Lunch;