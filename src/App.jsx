import React from "react";
import AppRouter from "./config/Router";

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            count: 0
        }

        console.log('constructor is Runnig',this.state)
    }

    //console.log(this.state)
    static getDerivedStateFromProps(){
        //console.log("getDeviedStateFromProps")
        return{
            check: 'yes'
        }
     ///console.log(this.state)
    }

    //4th Life Cycle Methods
    componentDidMount(){
        console.log('Component Did Mount',this.state)
    }

    render(){
        return(
            // <h1>
            //     App
            // </h1>
            // <AppRouter />
            <div>
                <h1>React Life Cycle</h1>

            </div>
        )
    }
}

export default App