import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.getRecipe}>
                <input type="text" name="ingredients" placeholder="Search for ingredients.."/>
                <input type="text" name="dishes" placeholder="Search for dishes.."/>
                <button>Search Dishes</button>
            </form>
        );
    }
};

export default SearchBar;