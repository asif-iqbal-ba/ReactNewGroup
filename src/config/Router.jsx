import React from "react";
import {
    
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from '../containers/Home'
import About from '../containers/About'
import Contact from "../Components/Conatact";
import Shop from "../Components/Shop";

class AppRouter extends React.Component{
    goto = (pageAddress)=>{
        console.log('running')
        console.log(this.props)
    }
    render(){
        return(
            <>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="About">About</Link>
                    </li>
                    <li>
                        <button onClick={()=>this.goto("/contact")}>
                            Contact
                        </button>
                    </li>
                    <li>
                        <button onClick={()=>this.goto("/shop")}>
                            Shop
                        </button>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />               
                <Route path="/contact" element={<Contact />}/>
                <Route path="/shop" element={<Shop />}/>
            </Routes>
            </>
        )
    }
}

export default AppRouter