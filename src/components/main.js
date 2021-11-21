import React from "react";
import "./main.css"

export default class Main extends React.Component{
    constructor(){
        super()
    }
    render(){


        return(
            <div>
            
            <img className="itchiImg" src="https://cdn.pixabay.com/photo/2020/11/27/22/07/naruto-5783103__340.png"></img>
             <br/>
            <video className="video" src="https://player.vimeo.com/external/581386222.sd.mp4?s=45a2df91a25f7d8f5a5a1a7623d0c4c8808f5b31&profile_id=165" width="200px" controls></video> 
           <h2> description </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore
             sed do eiusmod tempor incididunt ut labore et dolore
             sed do eiusmod tempor incididunt ut labore et dolore
             sed do eiusmod tempor incididunt ut labore et dolore
             sed do eiusmod tempor incididunt ut labore et dolore
             </p>
            </div>
        )
    }
}