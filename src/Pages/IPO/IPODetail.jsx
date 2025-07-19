
import {useLocation, useParams } from 'react-router'
import CompanyInfo from '../../components/IPODetails/CompanyInfo';
import { IPO_DATA } from '../../utils/constant';

function IPODetail() {
  const companyInfo= IPO_DATA.Closed[0];

  return (
    <div className=' relative flex w-[100%] h-[40vh]'>
      <CompanyInfo companyInfo={companyInfo}/>
      
      
      
      
    </div>
  )
}

export default IPODetail