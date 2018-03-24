import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from './Slider.js';

class Navigation extends React.Component {

  componentDidMount() {
	  fetch(this.props.url)
	    .then(response => response.json())
	    .then(data => this.props.setGenres( data.genres ))
	    .catch(error => console.log(error));
  }

  render() {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime } = this.props; //Came from spread operator from Main
    return (
      <section className="navigation">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />

        <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} />
      </section>
    )
  }
  
}

export default Navigation;