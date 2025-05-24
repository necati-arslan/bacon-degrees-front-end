import React from 'react'
import companyLogo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useActors } from "../hooks/useActors";




function HomePage() {
    
    const [inputValue1, setInputValue1] = useState(""); // Actor 1
    const [inputValue2, setInputValue2] = useState(""); // Actor 2

    const [dropdownMenu1, setDropdownMenu1] = useState(false);
    const [dropdownMenu2, setDropdownMenu2] = useState(false);

    const { actors: actors1, loading: loading1, error: error1 } = useActors(inputValue1);
    const { actors: actors2, loading: loading2, error: error2 } = useActors(inputValue2);



    const selectActFromAutoComplete = (name) => {
    setSuggestions([]);
    setInputValue1(name);
    setDropdownMenu1(false);
  };


  const handleSelect1 = (actor) => {
    console.log(actor);
    setInputValue1(actor.primaryName);
    setDropdownMenu1(false);
  };

   const handleSelect2 = (actor) => {
    console.log(actor);
    setInputValue2(actor.primaryName);
    setDropdownMenu2(false);
  };





  return (
    <section className="welcomePage">
      <div className="logo">
        <div className="flex">
          <img src={companyLogo} alt="" />
          <div className="logo_text">
            <span> Find</span>Recipe<span>By</span>Ingredients
          </div>
        </div>
      </div>

     <div className="container flex">
      <div className='content'>
            <h1>Let's Find Recipe by Ingredients</h1>
           <div className='flex-notcenter  divAutocomplete'>
                  <div className='autocomplete'>
                            
                                <input
                                type="text"
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
            <div>
                   <Link to={"/"}>
                    <button className="btn-red" >
                      Find
                    </button>
                  </Link> 
            </div>
              


        </div>


      </div>



    </section>
  )
}

export default HomePage