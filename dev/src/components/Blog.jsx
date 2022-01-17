import React from "react";
import {Link} from "react-router-dom"

const Blog = ()=> {
    return (
        <div>
        <p>blog page</p>
        <nav>
        <Link to="/">
        <button>home</button>
        </Link>
        </nav>
        </div>
    )
}

export default Blog;