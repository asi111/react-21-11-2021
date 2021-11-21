import React from "react";

export default  class Employee extends React.Component{
    constructor(){
        super();
    }

    render (){
    return(
        <div>
            <h1>
                this is media Component
            </h1>
            <video
          controls
          src="https://player.vimeo.com/external/586228759.sd.mp4?s=d35b9b32851db86dde64302bd696390232105dd2&profile_id=165"
        ></video>
            <img></img>

        </div>
    ) 
   
}}

