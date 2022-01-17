import React from "react"
import {Link} from "react-router-dom"


const Home = ()=>{

return(
    <div>
    <div>welcome to glock</div>
    <nav>
        <Link to="/members">
          <button>members</button>
        </Link>
        <div></div>
        <Link to="/blog">
        <button>blog</button>
        </Link>
        <div></div>
        <Link to="/contact">
        <button>contact</button>
        </Link>
      </nav>
    </div>
)

};

export default Home;