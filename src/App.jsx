import React, { Component } from 'react';
import Profile from './Profile';
import Trailers from './Trailers';
import './App.css';
import {API_KEY} from './config';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			query: '',
			movie: null,
			trailers:null
		}
	}
	search(){
		const BASE_URL = 'https://api.themoviedb.org/3/';
		let FETCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.query}&include_adult=false`;
		fetch(FETCH_URL, {method:'GET'})
		.then(response=>response.json())
		.then(json=>{
			const movie = json.results[0];
			//console.log(movie)
			this.setState({movie})
		})
		.then(()=>{
			FETCH_URL = `${BASE_URL}movie/${this.state.movie.id}/videos?api_key=${API_KEY}&language=en-US`;
			fetch(FETCH_URL)
			.then(res=>res.json())
			.then(json=>{
				this.setState({trailers:json.results});

			})
		})
	}
	
	render(){
		return(
			<div className="App">
				<div className="App-title">Movie Master</div>
				<FormGroup>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="Search for a movie"
							value={this.state.query}
							onChange={event => this.setState({query:event.target.value})}
							onKeyPress={event=> {
								if(event.key === 'Enter'){
									this.search();
								}
							}}
						/>
						<InputGroup.Addon onClick={()=>this.search()}>
							<Glyphicon glyph="search"/>							
						</InputGroup.Addon>
					</InputGroup>					
				</FormGroup>
				{
					this.state.movie
					? 
						<div>
							<Profile
								movie={this.state.movie}
								trailers={this.state.trailers}
							/>
							<Trailers
								className="trailers"
								trailers={this.state.trailers}
							/>
						</div>
					:
						<div></div>
				}
			</div>
		);
	}
}

export default App;