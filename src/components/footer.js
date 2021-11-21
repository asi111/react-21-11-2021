import React from "react";
import "./footer.css"
export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render(){
      return(
          <div> 
        <form>
           <h1>contact</h1> 

          <input type="text" placeholder="first name"></input><br/>
          <input type="text" placeholder="age"></input>   <br/>    
          <input type="text" placeholder="email"></input>   
           
          
            
            </form>  
          </div>
      )
  }
}
