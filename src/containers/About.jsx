
import React from "react";

import {Link} from 'react-router-dom'

class About extends React.Component{
    goto = (pageAddress)=>{
        console.log('running')
        console.log()
    }
    render(){
        
        return(
            <>
            <h1>
                About
                
            </h1>
            <button onClick={()=>this.goto('fgd')} >Go to Home</button>
            </>
        )
        
    }
}

export default About