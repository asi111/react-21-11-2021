import React from "react";
import "./employee.css"
class Image extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img className = "image" src={this.props.img}/>
      </div>
    );
  }
}

export default Image;
