import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";
import {useEffect} from 'react';

function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(4);

  let [isLoading, setLoading] = React.useState(true);
  let [content, setContent] = React.useState([]);

  let {cPage, setcPage} = props;

  useEffect(() => {
    (async function(){
      let response = await fetch("https://react-backend101.herokuapp.com/movies");
      response = await response.json();
  
      setLoading(false);
      setContent(response);
    })()
  }, [])

  const setGlobalSearchText = (searchText) => {
    setSearchText(searchText);
    setcPage(1);
  }
  const setGlobalCount = (moviesCount) => {
    setCount(moviesCount);
    setcPage(1);
  }

  let filteredContent = [];

  if(content.movies){
      filteredContent = content.movies;
      
      if (searchText != "") {
        filteredContent = content.movies.filter((movie) => {
          let lowerCaseTitle = movie.title.toLowerCase();
          let lowercaseSearchText = searchText.toLowerCase();
          return lowerCaseTitle.includes(lowercaseSearchText);
        });
      }
  }
  
  if(props.cGenre != ""){
      filteredContent = filteredContent.filter(function(movies){
          return movies.genre.name.trim() === props.cGenre.trim();
      });
  }

  let moviesBeforePagination = filteredContent;

  let sidx = (cPage - 1) * moviesCount;
  let eidx = sidx + moviesCount;
  filteredContent = filteredContent.slice(sidx, eidx);

  return (<div>
    <InputBox setGlobalSearchText
      ={setGlobalSearchText}
      setGlobalCount
      ={setGlobalCount}
    ></InputBox>

    <MoviesTable 
      cGenre={props.cGenre} 
      searchText={searchText}
      moviesCount={moviesCount}
      filteredContent={filteredContent}
      setContent={setContent}
      setLoading={setLoading}
      isLoading={isLoading}
    ></MoviesTable>

    <Pagination
      moviesCount={moviesCount}
      moviesBeforePagination={moviesBeforePagination}
      cPage={cPage}
      setcPage={setcPage}
    ></Pagination>
  </div>
  )
}
export default Movies;