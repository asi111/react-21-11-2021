import React from "react";

import "./Restaurant.css"
export default class Restaurant extends React.Component{
    constructor(){
        super()
    }
render(){
    return(
        <div className="foodCard">
 <article >
            <h4>pizza</h4>
            <p>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit
             Lorem ipsum dolor sit amet,
             consectetur adipiscing elitLorem ipsum dolor sit amet,
             consectetur adipiscing elit
            </p>
        <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"></img>
        </article>

        <article >
            <h4>salads</h4>
            <p>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit
             Lorem ipsum dolor sit amet,
             consectetur adipiscing elitLorem ipsum dolor sit amet,
             consectetur adipiscing elit
            </p>
        <img src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__480.jpg"></img>
        </article><article >
            <h4>dessert</h4>
            <p>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit
             Lorem ipsum dolor sit amet,
             consectetur adipiscing elitLorem ipsum dolor sit amet,
             consectetur adipiscing elit
            </p>
        <img src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg"></img>
        </article>



        </div>
    )
}
}