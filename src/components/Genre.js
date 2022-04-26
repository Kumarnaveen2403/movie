import React, { useEffect } from 'react'

function Genre(props) {
  let [isLoading, setLoading] = React.useState(true);
  let [content, setContent] = React.useState([]);

  let sendGenre = (e) => {
    props.setGlobalGenre(e.target.textContent);
  }

  useEffect(function(){
    async function fn(){
      let response = await fetch("https://react-backend101.herokuapp.com/genres");
 
       response = await response.json();
 
       setLoading(false);
       setContent(response.genres);
    }

    fn()
  }, []);

  return (
    <div className="Genre">
      <div className="mr-6 border-2 w-40 text-center h-10 font-bold" onClick={sendGenre}>All Genre</div>
      {isLoading === true ? <div>Loading...</div> : 
          content.map(function(genre, idx){
            return (
              <div 
              key={idx} 
              className="mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold"
              onClick={sendGenre}
              >
                {genre.name}
              </div>
            )
          })
      }
    </div>
  )
}

export default Genre