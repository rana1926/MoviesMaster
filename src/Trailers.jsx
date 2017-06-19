import React, { Component } from 'react';
import './App.css';

class Trailers extends Component{
	render(){
		return (
			<div>
				{
					this.props.trailers
					?
						this.props.trailers.map((trailer, k)=>{
							const trailer_key = this.props.trailers[k].key;
							if(trailer.site === 'YouTube'){
								let autoplay = 0;
								if(k===0){
									autoplay = 1;
								}

								return <iframe className="trailer" key={k} title="trailer" width="420" height="315" src={`https://www.youtube.com/embed/${trailer_key}?autoplay=${autoplay}`}></iframe>	
							}
							else{
								return <div>No Available Trailers</div>
							}
						})
					:
						<div>No Available Trailers</div>
				}
			</div>
		)
	}
}

export default Trailers;