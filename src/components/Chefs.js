import React from "react";
import "./chefs.css"
export default class Chefs extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>

<div className="chefCard">
        <article >
        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/33/asian-cuisine-1850233__340.jpg"></img>
            <h4> executive chef </h4>
            <p>
            Lorem ipsum dolor sit amet,
            </p>
        </article>
         
        <article >
        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/33/asian-cuisine-1850233__340.jpg"></img>
            <h4>restaurant manager</h4>
            <p>
            Lorem ipsum dolor sit amet,
            </p>
        </article>
        <article >
        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/33/asian-cuisine-1850233__340.jpg"></img>
            <h4>co-chef</h4>
            <p>
            Lorem ipsum dolor sit amet,
            </p>
        </article>
        <article >
        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/33/asian-cuisine-1850233__340.jpg"></img>
            <h4>co-chef</h4>
            <p>
            Lorem ipsum dolor sit amet,
            </p>
        </article>
         </div>



            </div>
        )
    }
}