import "./App.css";
import React from "react";
import Media from "./components/media.js";
import Employee from "./components/employee.js"
import Div from "./components/div.js";
import Title from "./components/title";
import Worker from "./components/worker.js";
import Workers from "./components/workers";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Store from "./components/store";
import Chefs from "./components/Chefs";
import Restaurant from "./components/restaurant";
import Managers from "./components/managers";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* <Employee name = "asras" img = "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg"/>
        <Employee name = "farada" img = "https://cdn.pixabay.com/photo/2021/09/15/12/52/animal-6626792__340.jpg"/>
        <Employee name = "ben" img = "https://cdn.pixabay.com/photo/2021/07/15/07/50/newborn-6467761__340.jpg"/>
        <Media  />
        <Div />
        <Title />
        <Workers/> */}
        {/* <h1> asras </h1>  */}
        
        {/* <Header/>
        <Main/>
        <Footer/> */}
        {/* <Store/> */}
        
        {/* <Chefs/> */}
        
        {/* <Restaurant/> */}
        
        <Managers/>
        
        
        
        
      </div>
    );
  }
}

export default App;
