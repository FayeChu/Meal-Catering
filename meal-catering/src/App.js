import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import Meal from './components/Meal';

class App extends Component {
  constructor(props) {
    super(props);

    this.getRecipe = this.getRecipe.bind(this);
    this.handleAddMealList = this.handleAddMealList.bind(this);
    this.handleDeleteBreakfast = this.handleDeleteBreakfast.bind(this);
    this.handleDeleteLunch = this.handleDeleteLunch.bind(this);
    this.handleDeleteDinner = this.handleDeleteDinner.bind(this);

    this.state = {
      searchResult: [
        {
          "title": "Ginger Champagne",
          "href": "http://allrecipes.com/Recipe/Ginger-Champagne/Detail.aspx",
          "ingredients": "champagne, ginger, ice, vodka",
          "thumbnail": "http://img.recipepuppy.com/1.jpg"
        },
        {
          "title": "Potato and Cheese Frittata",
          "href": "http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx",
          "ingredients": "cheddar cheese, eggs, olive oil, onions, potato, salt",
          "thumbnail": "http://img.recipepuppy.com/2.jpg"
        },
        {
          "title": "Eggnog Thumbprints",
          "href": "http://allrecipes.com/Recipe/Eggnog-Thumbprints/Detail.aspx",
          "ingredients": "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
          "thumbnail": "http://img.recipepuppy.com/3.jpg"
        },
        {
          "title": "Succulent Pork Roast",
          "href": "http://allrecipes.com/Recipe/Succulent-Pork-Roast/Detail.aspx",
          "ingredients": "brown sugar, garlic, pork chops, water",
          "thumbnail": "http://img.recipepuppy.com/4.jpg"
        },
        {
          "title": "Irish Champ",
          "href": "http://allrecipes.com/Recipe/Irish-Champ/Detail.aspx",
          "ingredients": "black pepper, butter, green onion, milk, potato, salt",
          "thumbnail": "http://img.recipepuppy.com/5.jpg"
        },
        {
          "title": "Chocolate-Cherry Thumbprints",
          "href": "http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx",
          "ingredients": "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
          "thumbnail": "http://img.recipepuppy.com/6.jpg"
        }
      ],
      breakfastList: [],
      lunchList: [],
      dinnerList: []
    }
  }

  getRecipe = (e) => {
    const ingredient = e.target.elements.ingredients.value;
    const dish = e.target.elements.dishes.value;

    fetch(`http://www.recipepuppy.com/api/?i=${ingredient}&q=${dish}`)
      .then(data => data.json())
      // .then(data => data.results.length === 0 ?
      //   console.log("No Results") : console.log(data.results))
      .then(data => {
        this.setState({
          searchResult: data.results
        })
      });
  
      // console.log(this.state.searchResult);
      e.preventDefault();
  }

  handleAddMealList(e, value) {
    //console.log(value);
    if (value === "breakfast") {
      let breakfastList = this.state.breakfastList;
      breakfastList.push(e);
      this.setState({
        breakfastList: breakfastList
      })
    } else if (value === "lunch") {
      let lunchList = this.state.lunchList;
      lunchList.push(e);
      this.setState({
        lunchList: lunchList
      })
    } else {
      let dinnerList = this.state.dinnerList;
      dinnerList.push(e);
      this.setState({
        dinnerList: dinnerList
      })
    }
    
    //console.log(this.state.breakfastList);
  }

  handleDeleteBreakfast(e) {
    // console.log(e);
    let breakfastList = this.state.breakfastList;
    breakfastList = breakfastList.filter((element) => {
      return element.title != e.title;
    })
    this.setState({
      breakfastList: breakfastList
    })

    //console.log(this.state.breakfastList);
  }

  handleDeleteLunch(e) {
    let lunchList = this.state.lunchList;
    lunchList = lunchList.filter((element) => {
      return element.title != e.title;
    })
    this.setState({
      lunchList: lunchList
    })
  }

  handleDeleteDinner(e) {
    let dinnerList = this.state.dinnerList;
    dinnerList = dinnerList.filter((element) => {
      return element.title != e.title;
    })
    this.setState({
      dinnerList: dinnerList
    })
  }

  render() {
    return (
      <div className="main">
        <Titles />
        <SearchBar getRecipe={this.getRecipe}/>
        <Result results={this.state.searchResult}
                addMealList={this.handleAddMealList}/>
        <Meal breakfastList={this.state.breakfastList}
              lunchList={this.state.lunchList}
              dinnerList={this.state.dinnerList}
              handleDeleteBreakfast={this.handleDeleteBreakfast}
              handleDeleteLunch={this.handleDeleteLunch}
              handleDeleteDinner={this.handleDeleteDinner}/>
        <footer></footer>
      </div>
    );
  }
}

export default App;