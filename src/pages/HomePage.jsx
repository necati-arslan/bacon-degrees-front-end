import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useActors } from "../hooks/useActors";
import ConnectionCards from '../components/ConnectionCards';




function HomePage() {
    
    const [inputValue1, setInputValue1] = useState(""); 
    const [inputValue2, setInputValue2] = useState(""); 

    const [dropdownMenu1, setDropdownMenu1] = useState(false);
    const [dropdownMenu2, setDropdownMenu2] = useState(false);

    const { actors: actors1, loading: loading1, error: error1 } = useActors(inputValue1);
    const { actors: actors2, loading: loading2, error: error2 } = useActors(inputValue2);

    const [actor1, setActor1] = useState(null); // Actor 1
    const [actor2, setActor2] = useState(null); // Actor 2

    const [queryActors, setQueryActors] = useState({ actor1: null, actor2: null });
    const [showConnectionCards, setShowConnectionCards] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");





    const selectActFromAutoComplete = (name) => {
    setSuggestions([]);
    setInputValue1(name);
    setDropdownMenu1(false);
  };


  const handleSelect1 = (actor) => {
    setInputValue1(actor.primaryName);
    setActor1(actor)
    setDropdownMenu1(false);
  };

   const handleSelect2 = (actor) => {
    setInputValue2(actor.primaryName);
    setActor2(actor)
    setDropdownMenu2(false);
  };


    const handleFindClick = () => {
    if (!actor1?.primaryName || !actor2?.primaryName) {
      setErrorMessage(" Vul beide velden in, alstublieft.");
      setShowConnectionCards(false);
    } else {
      setErrorMessage("");
      setQueryActors({ actor1, actor2 });
      setShowConnectionCards(true);
    }
  };




  return (
    <section className="welcomePage">
      

     <div className="container flex">
      <div className='content'>
            <h1>Laten we de connectie tussen twee acteurs vinden</h1>
           <div className='flex-notcenter  divAutocomplete'>
                  <div className='autocomplete'>
                            
                                <input
                                type="text"
                                autoComplete="off"
                                name="Acteur1"
                                placeholder="Eerste Acteur of actrice"
                                value={inputValue1}
                                onChange={(e) => setInputValue1(e.target.value)}
                                onKeyDown={() => setDropdownMenu1(true)}

                              />
                                 <div className='autocomplete-items'>
                                    {dropdownMenu1 && (
                                      <>
                                        {loading1 && (
                                          <div className="loading" style={{ padding: "8px" }}>
                                            Loading...
                                          </div>
                                        )}

                                        {!loading1 && !error1 && actors1.length > 0 &&
                                          actors1.map((actor1, index) => (
                                            <div
                                              key={actor1.nconst}
                                              onClick={() => handleSelect1(actor1)}
                                              style={{ padding: "8px", cursor: "pointer" }}
                                            >
                                              <span>
                                                <strong>{actor1.primaryName}</strong>
                                              </span>
                                            </div>
                                          ))
                                        }
                                      </>
                                    )}
                              </div>

                     </div>
                    <div className="actor-connector">⇄</div>
                     <div className='autocomplete'>
                                     <input
                                        type="text"
                                        autoComplete="off"
                                        name="Acteur2"
                                        placeholder="Tweede Acteur of actrice"
                                        value={inputValue2}
                                        onChange={(e) => setInputValue2(e.target.value)}
                                        onKeyDown={() => setDropdownMenu2(true)}

                                      />

                                      <div className='autocomplete-items'>
                                         {dropdownMenu2 && (
                                      <>
                                        {loading2 && (
                                          <div className="loading" style={{ padding: "8px" }}>
                                            Loading...
                                          </div>
                                        )}

                                        {!loading2 && !error2 && actors2.length > 0 &&
                                          actors2.map((actor2, index) => (
                                            <div
                                              key={actor2.nconst}
                                              onClick={() => handleSelect2(actor2)}
                                              style={{ padding: "8px", cursor: "pointer" }}
                                            >
                                              <span>
                                                <strong>{actor2.primaryName}</strong>
                                              </span>
                                            </div>
                                          ))
                                        }
                                      </>
                                    )}
                              </div>


                      </div>                  
            </div>
            <div className="container flex">
                    <button className="btn-red"
                      onClick={handleFindClick}
                    >
                      Zoeken
                    </button>

            </div>
             <div>   {errorMessage && (
                    <div className="error-message" style={{ color: "#e9c112", marginTop: "10px" }}>
                      {errorMessage}
                    </div>
                  )}</div>  

        </div>

      </div>
      <div>
               {showConnectionCards && queryActors.actor1 && queryActors.actor2 && (
                 <ConnectionCards actor1={queryActors.actor1} actor2={queryActors.actor2} />
                   )}

      </div>

    </section>
  )
}

export default HomePage