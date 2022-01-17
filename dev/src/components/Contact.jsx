import React from "react";
import {Link} from "react-router-dom"
import MemberData from "./MemberData";

const Contact = ()=> {
    return (
        <div>
        <p>contact page</p>
        <div>
            <MemberData/>
        </div>
        <nav>
        <Link to="/">
        <button>home</button>
        </Link>
        </nav>
        </div>
    )
    
    
}

export default Contact;