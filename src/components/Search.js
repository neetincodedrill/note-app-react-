// function Search({handleSearch}){
//   return(
//       <div className="search">
//           <input type="text" placeholder="search your notes...." onChange={(event)=>handleSearch(event.target.value)}/>
//       </div>
//   )
// }

import "./search.css"

const Search = ({handleSearch}) => {
    return(
        <div className="search">
            <input type="text" placeholder="search you notes..." onChange = {(event) => handleSearch(event.target.value)}/>
        </div>
    )
}

export default Search;