import React from 'react'
import Genre from "./Genre";
import Movies from "./Movies";
function Main() {
    let [cGenre, setGenre] = React.useState("");
    let [cPage, setcPage] = React.useState(1);

    let setGlobalGenre = (nGenre) => {
        setcPage(1);

        if(nGenre == "All Genre"){
            setGenre("");
        } else {
            setGenre(nGenre);
        }
    } 

    return (<>
        <div className="flex">
        <Genre setGlobalGenre={setGlobalGenre}></Genre>
        <Movies 
            cGenre={cGenre}
            cPage={cPage}
            setcPage={setcPage}
        ></Movies>
        </div>

    </>

    )
}

export default Main