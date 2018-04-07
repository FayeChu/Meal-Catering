import React, { Component } from 'react';
import './Breakfast.css'

class Breakfast extends Component {
    constructor(props, context) {
        super(props, context);

        this.displayBreakfast = this.displayBreakfast.bind(this);
    }

    displayBreakfast(e) {
        return <div className="breakfast-item">
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
                        <button onClick={() => this.props.handleDeleteBreakfast(e)}>Delete From Plan</button>
                    </div>
                </div> 
    }

    render() {
        let breakfastList = this.props.breakfastList;
        let breakfastListItem = breakfastList.map(this.displayBreakfast);

        //console.log(breakfastList.length);

        return (
            <div className="breakfast-container">
                <div className="breakfast-list">
                    {
                        (breakfastListItem.length > 0) 
                        ? breakfastListItem
                        : "Nothing Added Yet"
                    }
                </div>
            </div>
        );
    }
}

export default Breakfast;