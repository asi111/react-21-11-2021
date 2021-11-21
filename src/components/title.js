import React from "react";

export default class Title extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <h1 style = {{color : "red"}}>
         title    
            </h1>

            <p style = {{fontWeight : "bold" , background :"red"}}>
            hello
            </p>
            </div>
        )
    }
}