import React, { Component } from 'react';
import './Dinner.css';

class Dinner extends Component {
    constructor(props, context) {
        super(props, context);

        this.displayDinner = this.displayDinner.bind(this);
    }

    displayDinner(e) {
        return <div className="dinner-item">
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
                        <button onClick={() => this.props.handleDeleteDinner(e)}>Delete From Plan</button>
                    </div>
                </div> 
    }

    render() {
        let dinnerList = this.props.dinnerList;
        let dinnerListItem = dinnerList.map(this.displayDinner);

        return (
            <div className="dinner-container">
                <div className="dinner-list">
                    {
                        (dinnerListItem.length > 0) 
                        ? dinnerListItem
                        : "Nothing Added Yet"
                    }
                </div>
            </div>
        );
    }
}

export default Dinner;