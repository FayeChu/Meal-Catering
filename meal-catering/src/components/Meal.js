import React, { Component } from 'react';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

class Meal extends Component {
    constructor(props) {
        super(props);

        this.handleSwitchMealType = this.handleSwitchMealType.bind(this);

        this.state = {
            mealType: [
                {
                    name: "breakfast",
                    type: Breakfast,
                    isSelected: true
                },
                {
                    name: "lunch",
                    type: Lunch,
                    isSelected: false
                },
                {
                    name: "dinner",
                    type: Dinner,
                    isSelected: false
                }
            ],
            currentMealType: Breakfast
        }
    }

    handleSwitchMealType(e) {
        let mealTypeList = this.state.mealType;
        mealTypeList = mealTypeList.forEach((mealType) => { 
          if((e.target.className).includes(mealType.name)) {
            return mealType.isSelected = true;    
          }
          return mealType.isSelected = false;
        })
    
        let mealTypeClicked = this.state.mealType.filter((mealType) => {
          return ((e.target.className).includes(mealType.name));
        });
    
        this.setState({
          currentMealType: mealTypeClicked[0].type
        })
    }

    render() {
        let mealTypes = this.state.mealType;
        let mealTypeList = mealTypes.map(mealType => {
            return (
                <li className={mealType.name + " " + (mealType.isSelected ? 'selected' : null)} onClick={this.handleSwitchMealType}>{mealType.name}</li>
            )
        })

        return (
            <div className="meal-container">
                <h2>
                    Meal Plan
                </h2>
                <ul className="type-bar">
                    {mealTypeList}
                </ul>
                <this.state.currentMealType breakfastList = {this.props.breakfastList}
                                            lunchList = {this.props.lunchList}
                                            dinnerList = {this.props.dinnerList}/>
            </div>
        );
    }
};

export default Meal;