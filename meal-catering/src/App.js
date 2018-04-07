import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import SearchBar from './components/SearchBar';
import Result from './components/Result'

class App extends Component {
  constructor(props) {
    super(props);

    this.getRecipe = this.getRecipe.bind(this);

    this.state = {
      searchResult: []
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
    
      console.log(this.state.searchResult);
      e.preventDefault();
  }

  render() {
    return (
      <div>
        <Titles />
        <SearchBar getRecipe={this.getRecipe}/>
        <Result results={this.state.searchResult}
                addMealList={this.handleAddMealList}/>
      </div>
    );
  }
}

export default App;
