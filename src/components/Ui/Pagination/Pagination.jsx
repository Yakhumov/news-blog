import React from 'react'
import { getPages } from '../../../Utils/Pages';

export const Pagination = ({page,  changePage, totalPages, }) => {
    let pagesArray = getPages(totalPages);
  return (
    <div className="pages-wrapper">
    {pagesArray.map((p) => {
       return <span  onClick={()=> changePage(p)} key={p} className={page === p ?  'pages page-current'  : 'pages'}>{p}</span>    
    })}
    </div>
  )
}
