import React from 'react'

function Pagination(props) {
  let {moviesCount, moviesBeforePagination, cPage, setcPage} = props;

  let noOfPages = 0;

  if(moviesBeforePagination){
    noOfPages = Math.ceil(moviesBeforePagination.length / moviesCount) ;
  }

  let pagesArr = [];
  for(let i = 1; i <= noOfPages; i++){
    pagesArr.push(i);
  }

  return (
    <>
      {
        pagesArr.map(function(pageNumber){
          let css = pageNumber == cPage ? 
              "bg-blue-500  text-white py-2 px-3 rounded" :
              "hover:bg-blue-500  border-2 py-2 px-3 rounded";
            return(
              <button 
                key={pageNumber} 
                className={css}
                onClick={() => {setcPage(pageNumber)}}  
              >
                {pageNumber}
              </button>
            )
        })
      }
    </>
  )
}

export default Pagination