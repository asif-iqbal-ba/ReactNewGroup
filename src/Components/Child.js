import React from "react";

class Child extends React.Component{
    
    render(){
        return(
            <div>
                This is Child
                <button onClick={()=>this.props.getData('This Data is from Child')} >Send Data to Parent</button>
            </div>
        )
    }
}

export default Child