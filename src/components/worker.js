import React from "react";




export default class Worker extends React.Component{
    constructor(){
        super()
    }

    render(){
       
        return(
            <div>
           {this.props.employee.name}
            {this.props.employee.age}
           

            </div>
        )
    }
}