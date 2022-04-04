import React from "react";
import Foot from "../components/Foot";
import Nav from "../components/Nav";


const LandingPage = (props) => {
    return(
        <>
        
        <Nav/>
            <div className="row">
                <div className="section">
                    {props.content}
                </div>
            </div>
        <Foot/>
        </>


    )
}

export default LandingPage