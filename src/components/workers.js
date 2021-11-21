import React from "react";

import Worker from "./worker";


export default class Workers extends React.Component{
    constructor(){
        super()
    }

    render(){
        const employee = {
            name : "asras",
            age : 27
        }
        return(
            <div>
          <Worker employee = {employee} />

            </div>
        )
    }
}