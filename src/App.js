import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './MovieList/MovieList'
import {connect} from 'react-redux';


class App extends Component {


    state = {
      search: ''
    }

    handleChange =  event => {
      this.setState({
        search: event.target.value
        })
        console.log(this.state.search);
        
    };
  
    getMovie = () => {
      console.log (this.state.search)
    let urlVar = `http://www.omdbapi.com/?apikey=815b3236&s=${this.state.search}`;
    axios({
        method: 'GET',
        url: urlVar,
    })
    .then( (response) => {
      console.log(response.data);
      this.setState({
        search: response.data,
      })
      this.sendResults();
      })      
  }
  
  sendResults = () => {
    const action = {type: 'SET_SEARCH_RESULTS', payload: this.state.search}
    this.props.dispatch(action)
  }

  render() {
    return (
      <div className="App">
        <input value={this.search} onChange={this.handleChange} ></input>
        <button onClick={this.getMovie}>Submit</button>
        <MovieList />
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
})
export default connect(mapReduxStateToProps)(App);
