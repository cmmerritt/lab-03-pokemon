import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: '',
    sort: '',
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSortChange = ({ target }) => {
    this.setState({ sort: target.value });
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    const { search, sort } = this.state;
    
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        
        <input 
          name="search" 
          value={search}
          onChange={this.handleSearchChange}
        />

        <select
          name="sort"
          value={sort}
          onChange={this.handleSortChange}
        >
          <option value="">Sort Alphabetically</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>

        <button>🔎</button>
      
      </form>
    );
  }
}