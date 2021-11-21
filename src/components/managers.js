import React from "react";
import "./managers.css"
export default class Managers extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="managers">
<article >
           
        <img src="https://cdn.pixabay.com/photo/2016/03/26/17/43/excited-1280963__340.jpg"></img>
            <h4>lora</h4>
            <p>
            financial director
            </p>
        </article>

        <article >
        <img src="https://cdn.pixabay.com/photo/2016/03/26/17/43/excited-1280963__340.jpg"></img>
            <h4>lisa</h4>
            <p>
            financial director
            </p>
        </article>

        <article >
        <img src="https://cdn.pixabay.com/photo/2016/03/26/17/43/excited-1280963__340.jpg"></img>
            <h4>dana</h4>
            <p>
            financial director
            </p>
        </article>




            </div>
        )
    }
}