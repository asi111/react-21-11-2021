import React from "react";
import "./header.css"

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render(){
      return(
          <div className="header">
         <img className="img" className="logo" src ="https://cdn.pixabay.com/photo/2021/03/23/11/20/crow-6117223__340.jpg"></img>
            <h1>itachi</h1>
          </div>
      )
  }

}
