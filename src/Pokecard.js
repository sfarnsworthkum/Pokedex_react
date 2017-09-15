import React, { Component } from 'react';


class Pokecard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="card">
      		<h1> {this.props.name}</h1>
      		<img src={this.props.image} />
      		<p> Type: {this.props.type} </p>
      	</div>
    );
  }
}
export default Pokecard; 