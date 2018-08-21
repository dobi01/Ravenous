import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li 
                className={this.getSortByClass(sortByOptionValue)} 
                key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                >{sortByOption}
            </li>
    });
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;