import React from "react";
import {Link} from "react-router-dom"

const Members = ()=> {
return (
    <div>
    <p>members page</p>
    <iframe width="635" height="600" title="Member List" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSXs3aIjeCTKP1TqtJkBqVN4W3JY1eD9a14ri3CG6SUWEsjRxdGFRV6xceLLAB4h18azlompucYeYt2/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        <nav>
        <Link to="/">
        <button>home</button>
        </Link>
        </nav>
    </div>
    );
}

export default Members;