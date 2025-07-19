import { House } from 'lucide-react';
import { Link } from 'react-router'

function BreadCrumb({path}) {
    
    let paths = path.split("/");
    let segments = [];
    let currSegment = "";

    for(let i=1; i<paths.length; i++) {
        currSegment += "/" + paths[i];
        segments.push({path : currSegment, label : paths[i]});
    }

    return (
    <div className='bg-yellow-50 flex items-center gap-1 text-[#777485]'>
        {/* {console.log(segments)} */}
        <Link to={"/"}><House size={16} /></Link>
        {segments.map((val,idx)=>( idx !== segments.length-1 ?
            <Link to={val.path}>{"/ " + val.label}</Link> : "/ " + val.label))}
        
    </div>
   
  )
}

export default BreadCrumb