import React, {useState} from "react";
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos"
import './Dictionary.css'

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null)
    let [loaded, setLoaded] = useState(false)
    let [photos, setPhotos] = useState(null)

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos)
    }
    
    function search(){
      //Documentation: https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleDictionaryResponse); 
      
      let pexelsApiKey =
        "IGfzHsi2NfeZS0w19qKF1fPE8LU3ukpqUf0yFEZZOhB7r0nVV7JlhvSU";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
      let headers = { Authorization: pexelsApiKey};

      axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse); 
    }
    

    function handleSubmit(event){
      event.preventDefault();
        search();

    }



    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded){
        return( 
        <div className="Dictionary">
            
            <section>
                <h1>What word do you want to look up?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="seach" onChange={handleKeywordChange} autoFocus={true} defaultValue={props.defaultKeyword}/>  
                </form>  
                <div className="hint">
                    suggested words: sunset, wine, yoga, plant...
                </div>
            </section>
            <Results results={results}/> 
            <Photos photos={photos} />  
        </div>
    );        
    } else {
        load();
        return "Loading"
    }


}