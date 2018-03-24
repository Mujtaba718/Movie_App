import React from "react";
import "./Main.css"
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
  state = {
    genre: "comedy",
    genres: [],
    year: {
      label: "year",
      min: 1990,
      max: 2017,
      step: 1,
      value: { min: 2000, max: 2017 }
    },
    rating: {
      label: "rating",
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: "runtime",
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  }

  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  }

   setGenres = genres => {
	 this.setState({genres});
   }

  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type],
        value: data.value
      }
    });
  };

  render() {
    return (
      <main>
        <Navigation
		  onChange={this.onChange}
		  onGenreChange={this.onGenreChange}
		  setGenres={this.setGenres}
		  {...this.state} //ES6 spread operator. All properties of this.state will be accessible to  in the Navigation component via props.
		/>
        <Movies />
      </main>
    )
  }
}

export default Main;