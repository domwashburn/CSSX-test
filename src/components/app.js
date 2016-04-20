import React from 'react';
import { Component } from 'react';
import CSSX from 'react-cssx';

export default class App extends Component {
  render() {
    return (
		<CSSX styles={ this.css() }>
			<h1 className="cssx-header">I was styled with CSSX ... WOAH!</h1>
			<p>In a real world application, this is probably best suited for styles that will be dynamic/interactive(IE, sliders, toggles, etc.). </p>
			<p>the reason for this is because of the blip of unstyled content/text ... with great power comes great responsibility eh?</p>
		</CSSX>
    );
  }
  css() {
  	return (
  		<style>
	  		.cssx-header {
	  			color: #DC4156;
	  		}
	  	</style>
  	);
  }
}
