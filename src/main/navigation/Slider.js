import React from "react";
import InputRange from "react-input-range";

import 'react-input-range/lib/css/index.css';
import "./Slider.css"

class Slider extends React.Component {
  //The Slider component defines the onChange method. Every time when the slider range changes, the onChannge method will be called. It will receive a range object with minimum and maximum values.
  //Then, the onChange method will call the onChange method received in props from the Navigation component and it will pass it a new object.
  onChange = range => {
    this.props.onChange({
      type: this.props.data.label,
      value: range
    });
  }

  render() {
    const { min, max, step, value, label } = this.props.data;
    return (
      <div className="slider">
        <label>{label}</label>
        <InputRange
          minValue={min}
          maxValue={max}
          step={step}
          onChange={this.onChange} // Calling onChange up tops
          value={value}
        />
      </div>
    )
  }
} 

export default Slider;