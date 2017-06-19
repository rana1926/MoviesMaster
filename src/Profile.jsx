import React, { Component } from 'react';
import {Genres} from './config';
import './App.css';

class Profile extends Component{
	constructor(props) {
		super(props);
		this.state = {
			title:'',
			img_url:'',
			genre_ids:[]
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevProps !== this.props){
			if(this.props.movie){
			this.setState({title: this.props.movie.title, img_url: `https://image.tmdb.org/t/p/w640/${this.props.movie.poster_path}`, genre_ids: this.props.movie.genre_ids});
			//console.log('trailer', `https://www.youtube.com/embed/${this.state.trailer_key}?autoplay=1`)
			}			
		}
	}

	render(){
		
			
		return(
			<div className="profile">
				<img className="profile-image" src={this.state.img_url} alt={this.state.title+ '\'s poster'}/>
				<div className="profile-info">
					<div className="profile-title">{this.state.title}</div>
					<div>
						{
							this.state.genre_ids.map((id, k)=>{
								let genre;
								genre = k !== this.state.genre_ids.length-1 ? genre = `${Genres[id]}, ` : genre = `& ${Genres[id]}`
								return <span key={k}>{genre}</span>
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Profile;