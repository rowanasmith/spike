import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {



  render() {
      if (this.props.reduxState.searchResults.Search){
    return (
      <div className="App">
        <header>
        <h1>Search Results</h1>
        </header>
        <table>
          <thead>
            <tr><th>Title</th><th>Year</th></tr>
          </thead>
          <tbody>

            {this.props.reduxState.searchResults.Search.map(item => 
              <tr key={item.id}>
              <td>{item.Title}</td><td>{item.Year}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  else return [];
}

}
const mapReduxStateToProps = reduxState => ({
  reduxState
})
export default connect(mapReduxStateToProps)(MovieList);
