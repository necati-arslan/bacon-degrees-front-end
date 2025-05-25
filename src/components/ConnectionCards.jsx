import React from 'react'
import { useConnections } from '../hooks/useConnections'
import { FaUser, FaFilm, FaArrowRight } from 'react-icons/fa';

function ConnectionCards({ actor1, actor2 }) {

      const { data, loading, error } = useConnections(actor1?.nconst, actor2?.nconst);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
        if (!data) return null;


                const renderPath = () => {
                        const elements = [];

                        data.path.forEach((step, index) => {
                            const match = step.match(/(nm\d+)\s+\((tt\d+)\)\s+->\s+(nm\d+)/);
                            if (match) {
                            const [, fromActor, movie, toActor] = match;

                            elements.push(
                                <React.Fragment key={`actor-${index}`}>
                                <div className="icon-with-label">
                                    <FaUser className="icon" />
                                    <span className="label">{fromActor}</span>
                                </div>
                                <FaArrowRight className="arrow" />
                                <div className="icon-with-label">
                                    <FaFilm className="icon" />
                                    <span className="label">{movie}</span>
                                </div>
                                <FaArrowRight className="arrow" />
                                </React.Fragment>
                            );
                            }
                        });

                        // Son aktör
                        const lastMatch = data.path.at(-1)?.match(/->\s+(nm\d+)/);
                        const lastActor = lastMatch?.[1];

                        if (lastActor) {
                            elements.push(
                            <div key="last-actor" className="icon-with-label">
                                <FaUser className="icon" />
                                <span className="label">{lastActor}</span>
                            </div>
                            );
                        }

                        return elements;
                    };




  return (
    <div className=" container flex">
        <div className='connectionCardsContent'>
                <h1>ConnectionCards</h1>
                <hr></hr>
                 <p><strong>Actor 1:</strong> {actor1.primaryName}</p>
      <p><strong>Actor 2:</strong> {actor2.primaryName}</p>

                <h2>Connection Path</h2>
        {data.found ? (
          <ul>
            {data.path.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        ) : (
          <p>{data.message || "No connection found."}</p>
        )}


         <div className='flex' >
          {renderPath()}
        </div>

        </div>
    </div>
  )
}

export default ConnectionCards