import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.props.getRecipe}>
                    <input type="text" name="ingredients" placeholder="Search for ingredients.."/>
                    <input type="text" name="dishes" placeholder="Search for dishes.."/>
                    <button>Search Dishes</button>
                </form>
            </div>
        );
    }
};

export default SearchBar;