import { House } from 'lucide-react';
import { Link } from 'react-router'

function BreadCrumb({path}) {
    
    let paths = path.split("/");
    let segments = [];
    let currSegment = "";

    for(let i=1; i<paths.length; i++) {
        
        currSegment += "/" + paths[i];
        segments.push({path : currSegment, label : paths[i] === "ipo" ? "IPO" : paths[i]});
    }


    return (
    <div className='flex items-center gap-2 text-[#777485] py-2 text-xs flex-wrap  lg:text-sm' >
        {/* {console.log(segments)} */}

        <Link to={"/"}><House size={18} /></Link>
        {segments.map((val,idx)=>( idx !== segments.length-1 ?
            <Link key={val.label} to={val.path}>{"/ " + val.label}</Link> :  <p key={val.label} className='cursor-text'> / {val.label}</p> ))}
        
    </div>
   
  )
}

export default BreadCrumb