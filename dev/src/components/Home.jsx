import React from "react"
import {Link} from "react-router-dom"


const Home = ()=>{

return(
    <div>
    <div>glock home</div>
    <nav>
        <Link to="/members">members</Link>
        <div></div>
        <Link to="/blog">blog</Link>
        <div></div>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
)

};

export default Home;