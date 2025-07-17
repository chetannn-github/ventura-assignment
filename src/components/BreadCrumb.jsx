import React from 'react'
import { Link } from 'react-router'

function BreadCrumb({path}) {
    
    let paths = path.split("/");
    let segments = [];
    segments.push({path : "/" , label : "Home"});
    let currSegment = "";

    for(let i=1; i<paths.length; i++) {
        currSegment += "/" + paths[i];
        segments.push({path : currSegment, label : paths[i]});
    }

    if(segments.length == 1) return;
    return (
    <div>
        {/* {console.log(segments)} */}
        {segments.map((val,idx)=>( idx !== segments.length-1 ?
            <Link to={val.path}>{"/" + val.label}</Link> : "/" + val.label))}
        
    </div>
  )
}

export default BreadCrumb